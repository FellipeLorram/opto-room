import '../../config/firebaseClient'
import '../../Auth';
import { doc } from "firebase/firestore";
import { useDocumentDataOnce } from "react-firebase-hooks/firestore";
import database from "../DataBase";

import Patient from "../../../Entities/Patient";

const useGetPatient = (id: string): Patient[] => {
  const [patientDoc] = useDocumentDataOnce(
    doc(database, 'Patients', id)
  );
  return [patientDoc] as Patient[];
}

export default useGetPatient
