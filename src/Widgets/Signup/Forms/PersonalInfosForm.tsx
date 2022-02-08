import React, { useContext, useState } from 'react';
import { Button } from '../../../Components/Button/Index';
import { Input } from '../../../Components/Input/Index';
import { FormProgressContext } from '../Context/Index';
import { UserContextData } from '../Context/UserContext';
import { Variants } from './FormAnimationVariants';
import { FormContainer } from './styled';
import { PersonalInfoFormValidate } from './Validations';

const PersonalInfosForm: React.FC = () => {
  const [errors, setErrors] = useState({
    nameError: false, birthDayError: false, cpfError: false,
  });

  const { setFormFirstStep, setFormSecondStep} = useContext(FormProgressContext);

  const {
    name,
    setName,
    birthday,
    setBirthday,
    cpf,
    setCpf,
    lastName,
    setLastName,
  } = useContext(UserContextData);

  const handleContinueClick = () => {
    if (!PersonalInfoFormValidate(
      name,
      birthday,
      cpf,
      setErrors,
    )) return;
    setFormFirstStep(false);
    setFormSecondStep(true);
  };

  return <FormContainer
    variants={Variants}
  >
    <div className="row">
      <Input
        value={name}
        setValue={setName}
        type="text"
        label="Nome"
        error={errors.nameError}
        errorMessage="Precisamos do seu nome"
      />
    </div>
    <div className="row">
      <Input
        value={lastName}
        setValue={setLastName}
        type="text"
        label="Sobrenome"
      />
    </div>
    <div className="row">
      <Input
        value={birthday}
        setValue={setBirthday}
        type="text"
        label="Data de nascimento"
        error={errors.birthDayError}
        errorMessage="Qual a sua data de nascimento"
        format="## / ## / ####"
      />
    </div>
    <div className="row">
      <Input
        value={cpf}
        setValue={setCpf}
        type="text"
        label="CPF"
        error={errors.cpfError}
        errorMessage="Precisamos do seu CPF"
        format="###.###.###-##"
      />
    </div>
    <div className="button-row">
      <Button onClick={handleContinueClick}>
        Continuar
      </Button>
    </div>
  </FormContainer>;
};

export default PersonalInfosForm;
