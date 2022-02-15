import React, { useContext, useEffect, useState } from 'react';
import { FormStepsContainer, StepsTrace } from './styled';

import { FormProgressContext } from '../../Context/FormProgressContext';

const FormProgress: React.FC = () => {
  const {
    EmailFormStepOnScreen,
    formEmailVerifyStep,
  } = useContext(FormProgressContext);
  const [formProgress, setFormProgress] = useState('1');
  const [currentStep, setCurrentStep] = useState('Informações da conta 📝');

  useEffect(() => {
    if (EmailFormStepOnScreen) {
      setFormProgress('1');
      setCurrentStep('Informações da conta 📝');
    }
    if (formEmailVerifyStep) {
      setFormProgress('2');
      setCurrentStep('Verificando seu email');
    }
  }, [formEmailVerifyStep, EmailFormStepOnScreen]);

  return <FormStepsContainer>
    <StepsTrace>

      <div className="step-progress">
        {formProgress} de 2 Etapas
      </div>

      <div className="current-step">
        {currentStep}
      </div>
    </StepsTrace>
  </FormStepsContainer>;
};

export { FormProgress };
