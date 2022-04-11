import { doc, getDoc } from "firebase/firestore";
import database from "../DataBase";
import '../../config/firebaseClient';

export const PatientIdExists = async (id: string): Promise<boolean> => {
  const snap = await getDoc(doc(database, 'Patients', id));
  return snap.exists();
}

