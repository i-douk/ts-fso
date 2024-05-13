export interface Entry  {

}

export interface OccupationalHealthcareEntry {

}

export interface HospitalEntry {

}

export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;

export type Patient = {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string,
    gender: string;
    occupation: string;
    entries: Entry[]
};

export type Diagnosis = {
    code: string;
    name: string;
    latin?: string
};

export type AddedPatient = Omit<Patient, 'id'>;

export type PatientWithoutSnn = Omit<Patient, 'ssn' | 'entries'>;

export enum Gender {
    Female = 'female',
    Male = 'male',
    Other = 'other'
}


