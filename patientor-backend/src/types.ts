// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {
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
