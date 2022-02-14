import "../config/firebaseClient";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import createUser from "../firestore/CreateNewUser";

const signupWithFacebook = async (): Promise<boolean> => {
  try {
    const { user } = await signInWithPopup(
      getAuth(),
      new FacebookAuthProvider(),
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
}

export default signupWithFacebook;