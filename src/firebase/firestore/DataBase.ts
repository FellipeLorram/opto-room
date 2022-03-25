import app from '../config/firebaseClient'
import { getFirestore } from "firebase/firestore";

const database = getFirestore(app);

export default database;
