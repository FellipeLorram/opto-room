import "../config/firebaseClient";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import createUser from "../firestore/CreateNewUser";

const signupWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const auth = getAuth();
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
        
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
    }

    await createUser({
      name: user.displayName as string,
      email: user.email as string,
      date: new Date().toISOString(),
      id: user.uid,
    });
    return true;
  } catch (e) {
    return false;
  }
};

export default signupWithEmailAndPassword;
