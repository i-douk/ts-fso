import { useParams } from "react-router-dom";
import {  Patient } from "../types";
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
        <div className='patient-title' >
            <div><h3>{currPatient.name}</h3></div>
            <div>
            { currPatient.gender === 'male' && <MaleIcon />}
            { currPatient.gender === 'female' && <FemaleIcon />}
            { currPatient.gender === 'other' && <QuestionMarkIcon />}
            </div>
        </div>
        <p>ssn : {currPatient.ssn}</p>
        <p>occupation : {currPatient.occupation}</p>
    
    </>
  );
};

export default PatientView;