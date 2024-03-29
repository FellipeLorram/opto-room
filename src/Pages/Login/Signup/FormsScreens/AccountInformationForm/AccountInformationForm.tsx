import React, { useContext, useState } from 'react';
import { ChevronLeft } from '../../../../../Assets/svgs/ChevronLeft';
import { Button } from '../../../../../Components/Button/Index';
import { LoginPageInput } from '../../../../../Components/Input/LoginPageInput/Index';
import signupWithEmailAndPassword from '../../../../../firebase/Auth/signup/SignupWithEmailAndPassword';
import { FormProgressContext } from '../../Context/FormProgressContext';
import { UserContextData } from '../../Context/UserContext';
import { Variants } from '../FormAnimationVariants';
import { FormContainer } from '../styled';
import signupWithEmailAndPasswordFormValidation from '../Validations';

interface Props {
  setSignupEmailForm(value: boolean): void;
}

const AccountInformationForm: React.FC<Props> = ({ setSignupEmailForm }) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [passwordType, setPasswordType] = useState('password');
  
  const [errors, setErrors] = useState({
    nameError: false,
    passwordError: false,
    passwordMessage: '',
    confirmPasswordError: false,
    confirmPasswordMessage: '',
    emailError: false,
    emailMessage: '',
  });

  const { setEmailFormStepOnScreen, 
    setFormEmailVerifyStep,
  } = useContext(FormProgressContext);

  const {
    name,
    password,
    email,
    setName,
    setPassword,
    setEmail,
  } = useContext(UserContextData);

  const handleContinueClick = async () => {
    if (!signupWithEmailAndPasswordFormValidation(
      name,
      email,
      password,
      confirmPassword,
      setErrors,
    )) return;
    if(!await signupWithEmailAndPassword(email, password)){
      setErrors((errors) => {
        const newErrorsObject = {...errors}
        newErrorsObject.emailError = true;
        newErrorsObject.emailMessage = 'E-mail inválido. Esse endereço de email já está em uso'
        return newErrorsObject;
      });
      return;
    }
    setEmailFormStepOnScreen(false);
    setFormEmailVerifyStep(true);
  };

  return <FormContainer
    variants={Variants}
  >
    <div className="row">
      <LoginPageInput
        value={name}
        setValue={setName}
        type="text"
        label="Nome"
        error={errors.nameError}
        errorMessage="Precisamos do seu nome"
      />
    </div>
    <div className="row">
      <LoginPageInput
        value={email}
        setValue={setEmail}
        type="email"
        label="Email"
        error={errors.emailError}
        errorMessage={errors.emailMessage}
      />
    </div>
    <div className="row">
      <LoginPageInput
        value={password}
        setValue={setPassword}
        type={confirmPasswordType}
        label="Senha"
        setType={setConfirmPasswordType}
        error={errors.passwordError}
        errorMessage={errors.passwordMessage}
      />
    </div>
    <div className="row">
      <LoginPageInput
        value={confirmPassword}
        setValue={setConfirmPassword}
        type={passwordType}
        label="Confirme a senha"
        setType={setPasswordType}
        error={errors.confirmPasswordError}
        errorMessage={errors.confirmPasswordMessage}
      />
    </div>
    <div className="button-row">
      <Button inverse onClick={() => setSignupEmailForm(false)}>
        <ChevronLeft />
        Voltar
      </Button>
      <Button onClick={handleContinueClick}>
        Continuar
      </Button>
    </div>
  </FormContainer>;
};

export default AccountInformationForm;
