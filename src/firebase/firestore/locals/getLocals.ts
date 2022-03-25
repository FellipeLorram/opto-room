import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';

import '../../config/firebaseClient'
import '../../Auth';
import database from '../DataBase';

const useGetLocals = () => {
  const [localsDocs] = useCollectionData(
    collection(database, 'locals'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  
  return [localsDocs];
}

export default useGetLocals;
