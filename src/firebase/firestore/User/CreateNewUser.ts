import '../../config/firebaseClient';
import { doc, setDoc } from 'firebase/firestore';
import IUser from '../../../Entities/User';
import database from '../DataBase';


const createUser = async (user: IUser) => {
  // await addDoc(collection(database, "users"), user);;
  await setDoc(doc(database, "users", user.id), user);
}

export default createUser;
