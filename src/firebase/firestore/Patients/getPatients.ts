import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';

import '../../config/firebaseClient'
import '../../Auth';
import database from '../DataBase';
import useUserRef from '../../userRef/useUserRef';

const useGetPatients = () => {  
  const [patientsDocs] = useCollectionData(
    query(collection(database, 'Patients'), where('user_ref', '==', useUserRef())),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  
  return [patientsDocs];
}

export default useGetPatients;
