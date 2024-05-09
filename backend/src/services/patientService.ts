import { PatientWithoutSnn } from './../types';
import patientsData from '../data/patients';

const getPatients = () => {
  return patientsData;
};

const getNonSensitivePatients = (): PatientWithoutSnn[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender ,occupation }) => 
    ({ id, name, dateOfBirth, occupation , gender }));
};

export default {
    getPatients,
    getNonSensitivePatients
};