import "../config/firebaseClient";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import createUser from "../firestore/CreateNewUser";

const signupWithFacebook = async (): Promise<string> => {
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

    return user.uid;
  } catch (error) {
    console.log(error);
    return '';
  }
}

export default signupWithFacebook;