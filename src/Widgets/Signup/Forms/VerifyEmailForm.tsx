import React, { useContext } from 'react';
import { ChevronLeft } from '../../../Assets/svgs/ChevronLeft';
import { Button } from '../../../Components/Button/Index';
import { FormProgressContext } from '../Context/Index';
import { UserContextData } from '../Context/UserContext';

import { FormContainer } from './styled';

const VerifyEmailForm: React.FC = () => {
  const { email } = useContext(UserContextData);

  const {
    setFormSecondStep,
    setFormThirdStep,
    setFormEmailVerifyStep,
  } = useContext(FormProgressContext);

  const handleBackwardsClick = () => {
    setFormSecondStep(true);
    setFormEmailVerifyStep(false);
  };

  const handleClickContinue = () => {
    setFormEmailVerifyStep(false);
    setFormThirdStep(true);
  };

  return (
    <FormContainer>

      <div className="row verify-message">
        <p>
          Enviamos um mensagem de verificação para <span>{email}</span>. 
          <br/>
          <br/>
          Agora é só entrar lá, clicar no link que está na mensagem de email, voltar aqui e clicar em 'VERIFICAR'.
          <br />
          <br />
          Não se preocupe, esse processo é padrão. Fazemos isso para termos certeza que você digitou o endereço de e-mail certo.
          <br />
          <br />
          Caso esse não seja o seu email, é só voltar e corrigir. 
        </p>
      </div>

      <div className="button-row">
        <Button inverse className="back-button" onClick={handleBackwardsClick}>
          <ChevronLeft />
          Voltar
        </Button>
        <Button onClick={handleClickContinue}>
          Verificar
        </Button>
      </div>
    </FormContainer>
  )
}

export { VerifyEmailForm };