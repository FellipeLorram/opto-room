import "../../config/firebaseClient";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { EmailVerifiedTokenProps } from "../Interfaces/signEmailProps";


const signupWithEmailAndPasswordEmailVerification = async (
  email: string,
  password: string,
): Promise<EmailVerifiedTokenProps> => {
  try {
    const { user } = await signInWithEmailAndPassword(getAuth(), email, password);

    signOut(getAuth());

    if (user.emailVerified) {
      const token = await user.getIdToken();
      return {
        emailVerified: user.emailVerified,
        token,
        id: user.uid,
        userName: user.displayName || ''
      }
    }
    return {
      emailVerified: user.emailVerified,
      token: '',
      id: '',
      userName: ''
    }

  } catch (error) {
    console.log(error);
    return {
      emailVerified: false,
      token: '',
      id: '',
      userName: ''
    }
  }
}

export default signupWithEmailAndPasswordEmailVerification;
