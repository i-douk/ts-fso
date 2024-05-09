/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import patientService from '../services/patientService';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatients());
});

patientRouter.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, occupation, gender } = req.body;
  const addedPatient = patientService.addPatient(
   { name, dateOfBirth, ssn, occupation, gender}
  );
  res.json(addedPatient);
});

export default patientRouter;