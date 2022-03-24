import '../config/firebaseClient';
import { collection, DocumentData, getDocs } from 'firebase/firestore';
import database from '../DataBase';

const getLocals = async (): Promise<DocumentData[]> => {
  const { docs } = await getDocs(collection(database, 'locals'));
  const locals = docs.map(doc => doc.data());
  return locals;
}

export default getLocals;
