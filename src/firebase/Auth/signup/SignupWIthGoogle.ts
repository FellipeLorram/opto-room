import "../../config/firebaseClient";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import createUser from "../../firestore/CreateNewUser";
import UserTokenRequestProps from "../Interfaces/IUserTokenRequest";

const signupWithGoogle = async (): Promise<UserTokenRequestProps> => {
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

    const acessToken = await user.getIdToken();

    return {
      uid: user.uid, 
      email: user.email as string,
      token: acessToken,
      userName: user.displayName || ''
    };
  } catch (error) {
    console.log(error);
    return { uid: '', email: '', token: '', userName: '' };
  }
};

export default signupWithGoogle;