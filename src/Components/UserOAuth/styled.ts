import styled from 'styled-components';

export const LoginGoogleContainer = styled.div`
  width: 100%;
 .oauth-login{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size:1rem;
  font-weight:700;
  gap: 1rem;
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

  .OAuthButton {
    width: 260px;
    padding: 0.5rem 1rem;
    background: #fff;
    color: #a6a6a6;
    gap: 0.5rem;
    img{ 
      width: 25px;
    }
    :hover {
      background: #f2f2f260;
    }
  }
`;

export const OAuthButtonWrapper = styled.div`
   .signin-button{
    width: 300px;
    padding: 1rem 2rem;
    justify-content: space-around;
    gap: 0.5rem;
    background: #fff;
    color: #a6a6a6;
    border: 1px solid transparent;
    :hover {
      border-color: ${({theme}) => theme.colors.secondary};
      background: #f2f2f230;
    }
  }
`;

