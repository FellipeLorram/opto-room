import React, { useContext } from 'react'
import { EmailIcon } from '../../../Assets/svgs/EmailIcon';
import { Button } from '../../../Components/Button/Index';
import signupWithFacebook from '../../../firebase/Auth/SignupWithFacebook';
import signupWithGoogle from '../../../firebase/Auth/SignupWIthGoogle';
import { UserContextData } from '../Context/UserContext';
import { ChooseSignupFormContainer } from './styled';
import icon_facebook from '../../../Assets/png/icon_facebook.png'
import icon_google from '../../../Assets/png/icon_google.png'

interface Props {
  setSignupEmailForm(value: boolean): void;
}

const ChooseSignupForm: React.FC<Props> = ({ setSignupEmailForm }) => {
  const { setUid } = useContext(UserContextData)

  const handleSignupExternalFormClick = async (
    signupMethod: () => Promise<string>
  ) => {
    const uid = await signupMethod()
    if (uid) {
      setUid(uid);
    }
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