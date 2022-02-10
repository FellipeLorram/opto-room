import React, { useContext, useState } from 'react';
import { ChevronLeft } from '../../../Assets/svgs/ChevronLeft';
import { Button } from '../../../Components/Button/Index';
import { Input } from '../../../Components/Input/Index';
import { FormProgressContext } from '../Context/Index';
import { UserContextData } from '../Context/UserContext';
import { createUserRequest } from '../Request/CreateUserRequest';
import { Variants } from './FormAnimationVariants';
import { FormContainer } from './styled';
import { AccountInfoFormValidate } from './Validations';

interface Props {
  requestFunction?: { (): void }
}

const AccountInfoForm: React.FC<Props> = () => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordType, setConfirmPasswordType] = useState('password');
  const [passwordType, setPasswordType] = useState('password');

  const [errors, setErrors] = useState({
    passwordError: false,
    passwordMessage: '',
    confirmPasswordError: false,
    confirmPasswordMessage: '',
    emailError: false,
    emailMessage: '',
  });

  const {
    birthday,
    cpf,
    email,
    password,
    name,
    setPassword,
    setEmail,
  } = useContext(UserContextData);

  const {
    setFormFirstStep,
    setFormSecondStep,
    setFormEmailVerifyStep,
  } = useContext(FormProgressContext);

  const handleBackwardsClick = () => {
    setFormSecondStep(false);
    setFormFirstStep(true);
  };

  const handleClickContinue = async () => {
    if (!AccountInfoFormValidate(
      email,
      password,
      confirmPassword,
      setErrors,
    )) return;
    
    setFormSecondStep(false);
    setFormEmailVerifyStep(true);

    await createUserRequest(
      email,
      password,
      cpf,
      name,
      birthday,
    );
  };

  return <FormContainer
    variants={Variants}
  >
    <div className="row">
      <Input
        value={email}
        setValue={setEmail}
        type="email"
        label="Email"
        error={errors.emailError}
        errorMessage={errors.emailMessage}
      />
    </div>
    <div className="row">
      <Input
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
      <Input
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
      <Button inverse className="back-button" onClick={handleBackwardsClick}>
        <ChevronLeft />
        Voltar
      </Button>
      <Button onClick={handleClickContinue}>
        Continuar
      </Button>
    </div>
  </FormContainer>;
};

export default AccountInfoForm;
