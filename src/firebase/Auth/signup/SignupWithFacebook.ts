import "../../config/firebaseClient";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import createUser from "../../firestore/User/CreateNewUser";
import UserTokenRequestProps from "../Interfaces/IUserTokenRequest";

const signupWithFacebook = async (): Promise<UserTokenRequestProps> => {
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

    const acessToken = await user.getIdToken();

    return {
      uid: user.uid,
      email: user.email as string,
      token: acessToken,
      userName: user.displayName || '',
    };
  } catch (error) {
    console.log(error);
    return { uid: '', email: '', token: '', userName: '' };
  }
}

export default signupWithFacebook;