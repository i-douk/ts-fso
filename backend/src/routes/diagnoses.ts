import express from 'express';
import diagnosisService from '../services/diagnosisService';
diagnosisService
const diagnosisRouter = express.Router();

diagnosisRouter.get('/', (_req, res) => {
  res.send(diagnosisService.getDiagnoses());
});

diagnosisRouter.post('/', (_req, res) => {
  res.send('Saving a diagnosis!');
});

export default diagnosisRouter;