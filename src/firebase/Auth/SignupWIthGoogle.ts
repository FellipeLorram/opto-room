import "../config/firebaseClient";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import createUser from "../firestore/CreateNewUser";

const signupWithGoogle = async (): Promise<string> => {
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

    return user.uid;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export default signupWithGoogle;