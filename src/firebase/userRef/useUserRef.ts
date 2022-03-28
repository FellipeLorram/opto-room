import { useSelector } from "react-redux";

interface IAuthState {
  auth: {
    userRef: string;
  }
}

const useUserRef = () => {
  const userRef = useSelector((state: IAuthState) => state.auth.userRef)
  return userRef;
}

export default useUserRef;
