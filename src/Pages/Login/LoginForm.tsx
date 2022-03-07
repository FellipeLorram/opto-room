import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../Components/Button/Index';
import { Input } from '../../Components/Input/Index';
import signInEmailAndPassord from '../../firebase/Auth/signin/signinWithEmailAndPassword';
import ArrowLink from './ArrowLink';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/Modules/auth/actions';


const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;
  flex-direction:column;
  gap: .5rem;

  .input-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-direction:column;

  }

  .forgot-container{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 .5rem;
    margin-bottom: 2rem;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [typePassword, setTypePassword] = useState('password');
  const [errorMessage, setErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const handleLoginRequestClick = async () => {
    if (!email || !password) return;
    const { id, token } = await signInEmailAndPassord(email, password);
    if (!token) {
      setErrorMessage(true);
      return;
    }
    dispatch(actions.loginRequest({ email: email, id, token }));
  }
  return (
    <FormContainer>
      <div className="input-group">
        <Input
          label='E-mail'
          value={email}
          setValue={setEmail}
          type="email"
          error={errorMessage}
          errorMessage="Usúario ou senha inválidos"
        />
        <Input
          label='Senha'
          value={password}
          setValue={setPassword}
          type={typePassword}
          setType={setTypePassword}
        />
      </div>

      <div className="forgot-container">
        <ArrowLink text="Esqueci minha senha" />
      </div>
      <Button onClick={handleLoginRequestClick}>
        Login
      </Button>
    </FormContainer>
  );
};

export default LoginForm;
