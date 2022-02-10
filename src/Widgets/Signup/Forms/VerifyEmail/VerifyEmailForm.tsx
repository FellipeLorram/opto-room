import React, { useContext, useState } from 'react';
import { ChevronLeft } from '../../../../Assets/svgs/ChevronLeft';
import { Button } from '../../../../Components/Button/Index';
import { FormProgressContext } from '../../Context/Index';
import { UserContextData } from '../../Context/UserContext';
import { verifyUserEmail } from '../../Request/VerifyUserEmail';
import { Variants } from '../FormAnimationVariants';

import { FormContainer } from '../styled';

const VerifyEmailForm: React.FC = () => {
  const { email, password } = useContext(UserContextData);
  const [verificationFailed, setVerificationFailed] = useState(false);

  const {
    setFormSecondStep,
    setFormThirdStep,
    setFormEmailVerifyStep,
  } = useContext(FormProgressContext);

  const handleBackwardsClick = () => {
    setFormSecondStep(true);
    setFormEmailVerifyStep(false);
  };

  const handleClickContinue = async () => {
    const emailVeified = await verifyUserEmail(email, password);
    if (!emailVeified) {
      setVerificationFailed(true);
      return;
    };
    setFormEmailVerifyStep(false);
    setFormThirdStep(true);
  };

  return (
    <FormContainer
      variants={Variants}
    >
      <div className="row verify-message">
        {!verificationFailed ? (
          <p>
            Enviamos um mensagem de verificação para <span>{email}</span>.
            <br />
            <br />
            Agora é só entrar lá, clicar no link que está na mensagem de email, voltar aqui e clicar em 'VERIFICAR'.
            <br />
            <br />
            Não se preocupe, esse processo é padrão. Fazemos isso para termos certeza que você digitou o endereço de e-mail certo.
            <br />
            <br />
            Caso esse não seja o seu email, é só voltar e corrigir.
          </p>
        ) : (
          <p>
            Enviamos um mensagem de verificação para <span>{email}</span>.
            <br />
            <br />
            Parece que você ainda não clicou no link que mandamos pra você por email :(
            <br />
            <br />
            Basta clicar no link, voltar aqui e clicar em Verificar. <br />
            Não esqueça de olhar na caixa de SPAM.
            <br />
            <br />
            Caso esse não seja o seu email, é só voltar e corrigir.
          </p>
        )}
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
