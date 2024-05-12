import { Diagnosis } from '../types';
import diagnosesData from '../data/diagnoses';

const getDiagnoses = () : Diagnosis[] => {
  return diagnosesData;
};

const addDiagnosis = () => {
  return null;
};

export default {
    getDiagnoses,
    addDiagnosis
};