/* eslint-disable @typescript-eslint/no-unsafe-call */
import toNewPatient from '../utils';

import express from 'express';
import patientService from '../services/patientService';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatients());
});

patientRouter.get('/:id' , (req,res) => {
  const id = req.params.id;
  res.send(patientService.getPatientById(id));
});

patientRouter.post('/', (req, res) => {

  const newPatient = toNewPatient(req.body);
  const addedPatient = patientService.addPatient(newPatient);
  res.json(addedPatient);
});

export default patientRouter;