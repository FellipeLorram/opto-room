import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';

import '../../config/firebaseClient'
import '../../Auth';
import database from '../DataBase';

const useGetPatients = () => {
  const [patientsDocs] = useCollectionData(
    collection(database, 'Patients'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  
  return [patientsDocs];
}

export default useGetPatients;
