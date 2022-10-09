import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';

import '../../config/firebaseClient'
import '../../Auth';
import database from '../DataBase';

const useGetAppoitments = (patient_ref: string | undefined) => {
  const [patientsDocs] = useCollectionData(
    query(collection(database, 'Appointments'), where('patientRef', '==', patient_ref)),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  console.log(patientsDocs);


  return [patientsDocs];
}

export default useGetAppoitments;
