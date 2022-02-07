import React from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';

const LoginGoogleContainer = styled.div`
width: 100%;
 .login-google{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size:1rem;
  font-weight:700;
  gap: 2rem;
  .ou{
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .ou::after, .ou::before {
    content: ' ';
    position: absolute;
    height: 1px;
    bottom: 45%;
    width: 40%;
    z-index: 2;
    background: #00000010;
  }
  .ou::after {
    right: 5%;
  }
  .ou::before {
    left: 5%;
  }
}

  .register{
    font-size: .8rem;
  }
`;

const UserGoogleLogin: React.FC = () => {
  const testeOnsuccess = (response: any) => {
    console.log(response)
  };
  return (
    <LoginGoogleContainer>
      <div className="login-google">
      <span className="ou">OU</span>
        <GoogleLogin
          clientId="1097043449346-vuuekvqgov1l7hbsakr9r6i5e42iqr8b.apps.googleusercontent.com"
          buttonText="Faça login com o Google"
          onSuccess={testeOnsuccess}
          onFailure={testeOnsuccess}
        />
      </div>
    </LoginGoogleContainer>
  );
};

export default UserGoogleLogin;
