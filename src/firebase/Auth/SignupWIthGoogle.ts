import "../config/firebaseClient";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import createUser from "../firestore/CreateNewUser";

const signupWithGoogle = async (): Promise<boolean> => {
  try {
    const { user } = await signInWithPopup(
      getAuth(),
      new GoogleAuthProvider(),
    );

    await createUser({
      name: user.displayName as string,
      email: user.email as string,
      date: new Date().toISOString(),
      id: user.uid,
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default signupWithGoogle;