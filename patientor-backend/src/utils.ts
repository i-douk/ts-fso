import { AddedPatient , Gender } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseFieldEntry = (fieldEntry: unknown): string => {
    if (!isString(fieldEntry)) {
        throw new Error('field entry is not a string');
    }
      return fieldEntry;
    };
    
const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
};

const parseGender = (gender: unknown): Gender => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect gender: ' + gender);
    }
    return gender;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };
  
  const parseDate = (date: unknown): string => {
    if (!isString(date) || !isDate(date)) {
        throw new Error('Incorrect date: ' + date);
    }
    return date;
  };
    
const toNewPatient = (object : unknown): AddedPatient => {

    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
        }

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'occupation' in object && 'gender' in object)  { 
    const newEntry: AddedPatient = {
        name: parseFieldEntry(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseFieldEntry(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseFieldEntry(object.occupation),
        entries: []
    };
     return newEntry;
    }
    throw new Error('Incorrect data: a field missing');

};

export default toNewPatient;