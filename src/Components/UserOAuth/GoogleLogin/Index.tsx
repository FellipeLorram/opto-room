import React from 'react';
import { Button } from '../../Button/Index';
import icon_google from '../../../Assets/png/icon_google.png';
import { OAuthButtonWrapper } from '../styled';
// import siginWithGoogle from '../../../firebase/Auth/signin/siginWithGoogle';
import signupWithGoogle from '../../../firebase/Auth/signup/SignupWIthGoogle';
import * as actions from '../../../store/Modules/auth/actions';
import { useDispatch } from 'react-redux';

interface Props {
  classname?: string;
}

const UserGoogleLogin: React.FC<Props> = ({ classname }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const { email, token, uid } = await signupWithGoogle();
    dispatch(actions.loginRequest({ email: email, id: uid, token }));
  }

  return (
    <OAuthButtonWrapper>
      <Button className={classname ? classname : 'signin-button'} onClick={handleClick}>
        <img src={icon_google} alt="" />
        Entrar com Google
      </Button>
    </OAuthButtonWrapper>
  );
};

export default UserGoogleLogin;
