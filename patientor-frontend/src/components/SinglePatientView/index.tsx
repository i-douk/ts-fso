import { useParams } from "react-router-dom";
import {  Entry, Patient } from "../../types";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

interface Props {
    patients : Patient[]
  }

const PatientView = ({ patients } : Props ) => {
    const id = useParams().id;
    const indexOfPatient  = patients.findIndex(p => p.id === id);
    const currPatient  = patients[indexOfPatient];
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
                        {e.diagnosisCodes?.map(c=><li key={c}>{c}</li>)}
                    </ul>
                </>
        ))}
           
        </div>
    
    </>
  );
};

export default PatientView;
