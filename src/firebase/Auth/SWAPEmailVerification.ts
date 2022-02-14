import "../config/firebaseClient";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const signupWithEmailAndPasswordEmailVerification = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const { user } = await signInWithEmailAndPassword(getAuth(), email, password);

    signOut(getAuth());

    return user.emailVerified;

  } catch (error) {
    console.log(error);
    return false;
  }
}

export default signupWithEmailAndPasswordEmailVerification;
