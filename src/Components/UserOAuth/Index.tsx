import React from 'react';
import UserFacebookLogin from './FacebookLogin/Index';
import UserGoogleLogin from './GoogleLogin/Index';
import { LoginGoogleContainer } from './styled';


const UserOAuth: React.FC = () => {
  return (
    <LoginGoogleContainer>
      <div className="oauth-login">
        <span className="ou">OU</span>
        <UserGoogleLogin classname="OAuthButton" />
        <UserFacebookLogin classname="OAuthButton" />
      </div>
    </LoginGoogleContainer>
  );
};

export default UserOAuth;
