import React, { useContext, useState } from 'react';
import { ChevronLeft } from '../../../Assets/svgs/ChevronLeft';
import { Button } from '../../../Components/Button/Index';
import { Input } from '../../../Components/Input/Index';
import { UserContextData } from '../Context/UserContext';
import { Variants } from './FormAnimationVariants';
import { FormContainer } from './styled';

const AccountInfoForm: React.FC = () => {
  const [confirmPassword, setConfirmPassword] = useState('');

  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(UserContextData);

  return <FormContainer
    variants={Variants}
  >
    <div className="row">
      <Input value={email} setValue={setEmail} type="email" label="Email" />
    </div>
    <div className="row">
      <Input value={password} setValue={setPassword} type="password" label="Senha" />
    </div>
    <div className="row">
      <Input value={confirmPassword} setValue={setConfirmPassword} type="text" label="Confirme a senha" />
    </div>

    <div className="button-row">
      <Button inverse className="back-button">
        <ChevronLeft />
        Voltar
      </Button>
      <Button>
        Continuar
      </Button>
    </div>
  </FormContainer>;
};

export default AccountInfoForm;
