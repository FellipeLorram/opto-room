import '../../config/firebaseClient';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { EmailVerifiedTokenProps } from '../Interfaces/signEmailProps';

const signInEmailAndPassord = async (email: string, password: string): Promise<EmailVerifiedTokenProps> => {
  try {
    const { user } = await signInWithEmailAndPassword(getAuth(), email, password);
    const token = await user.getIdToken();
    return {
      token,
      id: user.uid,
      userName: user.displayName || '',
    }
  } catch (error) {
    console.log(error);
    return {
      token: '',
      id: '',
      userName: '',
    }
  }

}

export default signInEmailAndPassord;
