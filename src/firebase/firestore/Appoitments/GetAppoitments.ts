import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';

import '../../config/firebaseClient'
import '../../Auth';
import database from '../DataBase';

const useGetAppoitments = (patient_ref: string | undefined) => {
  const [patientsDocs] = useCollectionData(
    query(collection(database, 'Appoitments'), where('user_ref', '==', patient_ref)),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return [patientsDocs];
}

export default useGetAppoitments;
