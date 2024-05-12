import { AddedPatient, Patient, PatientWithoutSnn } from './../types';
import patientsData from '../data/patients';
import { v1 as uuid } from 'uuid';
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const id = uuid();
const getPatients = () => {
  return patientsData;
};

const getNonSensitivePatients = (): PatientWithoutSnn[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender ,occupation }) => 
    ({ id, name, dateOfBirth, occupation , gender }));
};

const getPatientById = ( id : string) : Patient[] => {
  return patientsData.filter(p => p.id === id);
};

const addPatient = ( entry: AddedPatient ): Patient => {  const newPatient = {
  id: String(id),
  ...entry };
patientsData.push(newPatient);
return newPatient;
};

export default {
    getPatients,
    getNonSensitivePatients,
    addPatient,
    getPatientById
};