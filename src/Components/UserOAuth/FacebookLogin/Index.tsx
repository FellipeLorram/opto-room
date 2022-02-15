import React from 'react';
import { Button } from '../../Button/Index';
import facebook_icon from '../../../Assets/png/icon_facebook.png';
import { OAuthButtonWrapper } from '../styled';


interface Props {
  classname?: string;
}

const UserFacebookLogin: React.FC<Props> = ({ classname }) => {
  return (
    <OAuthButtonWrapper>
      <Button className={classname ? classname : 'signin-button'}>
        <img src={facebook_icon} alt="" />
        Entrar com Facebook
      </Button>
    </OAuthButtonWrapper>
  );
};

export default UserFacebookLogin;
