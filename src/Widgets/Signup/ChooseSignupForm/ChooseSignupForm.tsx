import React, { useContext } from 'react'
import { EmailIcon } from '../../../Assets/svgs/EmailIcon';
import { Button } from '../../../Components/Button/Index';
import signupWithFacebook from '../../../firebase/Auth/SignupWithFacebook';
import signupWithGoogle from '../../../firebase/Auth/SignupWIthGoogle';
import { UserContextData } from '../Context/UserContext';
import { ChooseSignupFormContainer } from './styled';
import icon_facebook from '../../../Assets/png/icon_facebook.png'
import icon_google from '../../../Assets/png/icon_google.png'
import { useDispatch } from 'react-redux';
import * as actions from '../../../store/Modules/auth/actions';
import UserTokenRequestProps from '../../../firebase/Auth/Interfaces/IUserTokenRequest';

interface Props {
  setSignupEmailForm(value: boolean): void;
}

const ChooseSignupForm: React.FC<Props> = ({ setSignupEmailForm }) => {
  const { setEmail, setUid} = useContext(UserContextData)
  const dispatch = useDispatch();

  const handleSignupExternalFormClick = async (
    signupMethod: () => Promise<UserTokenRequestProps>
  ) => {
    const {uid, email, token} = await signupMethod()
    if (uid) {
      setUid(uid);
      setEmail(email)
    }
    dispatch(actions.loginRequest({ email: email, id: uid, token }));
  }

  return (
    <ChooseSignupFormContainer>
      <div className="typograph">Como você quer criar sua conta?</div>
      <div className="button-container">
        <Button onClick={() => handleSignupExternalFormClick(signupWithFacebook)} className="signin-button">
          <img src={icon_facebook} alt="" />
          Entrar com Facebook
        </Button>
        <Button onClick={() => handleSignupExternalFormClick(signupWithGoogle)} className="signin-button google">
          <img src={icon_google} alt="" />
          Entrar com Google
        </Button>
        <Button onClick={() => setSignupEmailForm(true)} className="signin-button">
          <EmailIcon />
          Entrar com Email
        </Button>
      </div>

    </ChooseSignupFormContainer>
  )
}

export { ChooseSignupForm };