import { useParams } from "react-router-dom";
import {  Diagnosis, Entry, Patient } from "../../types";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useEffect, useState } from "react";
import diagnosisService from "../../services/diagnoses";
interface Props {
    patients : Patient[]
  }

const PatientView = ({ patients } : Props ) => {
    const id = useParams().id;
    const indexOfPatient  = patients.findIndex(p => p.id === id);
    const currPatient  = patients[indexOfPatient];
    const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
    
useEffect(() => {
    const fetchDiagnosesList = async () => {
        const fetchedDiagnoses = await diagnosisService.getAllDiagnoses();
        setDiagnoses(fetchedDiagnoses);
    };
    void fetchDiagnosesList();
    }, [diagnoses]);

const findDiagnosis = (d: string) => {
    const locatedDiagnosis = diagnoses.find(diag => d===diag.code);
    if (locatedDiagnosis) {
        return locatedDiagnosis.name;
    } else {
        return 'no diagnosis found';
    }
};

  return (
    <>
        <div>
            <b>{currPatient.name}</b>
            <span>
            { currPatient.gender === 'male' && <MaleIcon />}
            { currPatient.gender === 'female' && <FemaleIcon />}
            { currPatient.gender === 'other' && <QuestionMarkIcon />}
            </span>
        <p>ssn : {currPatient.ssn}</p>
        <p>occupation : {currPatient.occupation}</p>
        <div><b>entries</b></div>   
                {currPatient.entries.map((e: Entry) => (
                <>
                    <div key={e.id}>{e.date} {e.description}</div>
                    <ul>
                        {e.diagnosisCodes?.map(c=><li key={c}>{c} {findDiagnosis(c)}</li>)}
                    </ul>
                </>
        ))}
           
        </div>
    
    </>
  );
};

export default PatientView;
