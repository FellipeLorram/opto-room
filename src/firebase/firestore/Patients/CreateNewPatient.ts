import '../../config/firebaseClient';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import Patient from '../../../Entities/Patient';

const database = getFirestore();

const createPatient = async (Patient: Patient) => {
  await setDoc(doc(database, "Patients", Patient.id as string), Patient);
}

export default createPatient;
