export type Diagnosis = {
    code: string;
    name: string;
    latin?: string
};

export type Patient = {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string,
    gender: string;
    occupation: string;
};

export type AddedPatient = Omit<Patient, 'id'>;

export type PatientWithoutSnn = Omit<Patient, 'ssn'>;