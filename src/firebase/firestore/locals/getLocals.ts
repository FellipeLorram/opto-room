import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';

import '../../config/firebaseClient'
import '../../Auth';
import database from '../DataBase';
import useUserRef from '../../userRef/useUserRef';


const useGetLocals = () => {
  const [localsDocs] = useCollectionData(
    query(collection(database, 'locals'), where('user_ref', '==', useUserRef())),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  
  return [localsDocs];
}

export default useGetLocals;
