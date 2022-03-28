import '../config/firebaseClient'
import { getAuth } from "firebase/auth";

const auth = getAuth()
export const userRef = auth.currentUser?.uid;
export const user = auth.currentUser?.uid;

export default auth;