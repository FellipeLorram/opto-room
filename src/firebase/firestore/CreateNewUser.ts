import '../config/firebaseClient';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import IUser from '../Entities/User';

const database = getFirestore();

const createUser = async (user: IUser) => {
  // await addDoc(collection(database, "users"), user);;
  await setDoc(doc(database, "users", user.id), user);
}

export default createUser;
