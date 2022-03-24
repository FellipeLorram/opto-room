import '../../config/firebaseClient';
import { doc, setDoc } from 'firebase/firestore';
import Patient from '../../../Entities/Patient';
import database from '../DataBase';


const createPatient = async (Patient: Patient) => {
  await setDoc(doc(database, "Patients", Patient.id as string), Patient);
}

export default createPatient;
