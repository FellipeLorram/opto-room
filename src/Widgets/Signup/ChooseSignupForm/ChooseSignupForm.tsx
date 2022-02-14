import React, { useContext } from 'react'
import { EmailIcon } from '../../../Assets/svgs/EmailIcon';
import { FacebookBrand } from '../../../Assets/svgs/FacebookBrand';
import { GoogleBrand } from '../../../Assets/svgs/GoogleBrand';
import { Button } from '../../../Components/Button/Index';
import signupWithFacebook from '../../../firebase/Auth/SignupWithFacebook';
import signupWithGoogle from '../../../firebase/Auth/SignupWIthGoogle';
import { FormProgressContext } from '../Context/Index';
import { UserContextData } from '../Context/UserContext';
import { ChooseSignupFormContainer } from './styled';


interface Props {
  setSignupEmailForm(value: boolean): void;
}

const ChooseSignupForm: React.FC<Props> = ({ setSignupEmailForm }) => {
  const { setPlanSubscriptionFormOnScreen } = useContext(FormProgressContext);
  const { setUid } = useContext(UserContextData)

  const handleSignupExternalFormClick = async (
    signupMethod: () => Promise<string>
  ) => {
    const uid = await signupMethod()
    if (uid) {
      setUid(uid);
      setPlanSubscriptionFormOnScreen(true);
    }
  }

  return (
    <ChooseSignupFormContainer>
      <div className="typograph">Como você quer criar sua conta?</div>
      <div className="button-container">
        <Button onClick={() => handleSignupExternalFormClick(signupWithFacebook)} className="sigin-button">
          <FacebookBrand />
          Entrar com Facebook
        </Button>
        <Button onClick={() => handleSignupExternalFormClick(signupWithGoogle)} className="sigin-button">
          <GoogleBrand />
          Entrar com Google
        </Button>
        <Button onClick={() => setSignupEmailForm(true)} className="sigin-button">
          <EmailIcon />
          Entrar com Email
        </Button>
      </div>

    </ChooseSignupFormContainer>
  )
}

export { ChooseSignupForm };