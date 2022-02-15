import React from 'react';
import { Button } from '../../Button/Index';
import icon_google from '../../../Assets/png/icon_google.png';
import { OAuthButtonWrapper } from '../styled';


interface Props {
  classname?: string;
}

const UserGoogleLogin: React.FC<Props> = ({ classname }) => {
  return (
    <OAuthButtonWrapper>
      <Button className={classname ? classname : 'signin-button'}>
        <img src={icon_google} alt="" />
        Entrar com Google
      </Button>
    </OAuthButtonWrapper>
  );
};

export default UserGoogleLogin;
