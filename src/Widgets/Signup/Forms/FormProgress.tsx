import React, { useContext, useEffect, useState } from 'react';
import { FormStepsContainer, StepsTrace } from './styled';

import { FormProgressContext } from '../Context/Index';

const FormProgress: React.FC = () => {
  const {
    formSecondStep,
    formThirdStep
  } = useContext(FormProgressContext);
  const [formProgress, setFormProgress] = useState('1');
  const [currentStep, setCurrentStep] = useState('Informações pessoais');

  useEffect(() => {
    if (formSecondStep) {
      setFormProgress('2');
      setCurrentStep('Informações da conta');
    };
    if (formThirdStep) {
      setFormProgress('3');
      setCurrentStep('Escolha seu plano');
    }
  }, [formSecondStep, formThirdStep]);

  return <FormStepsContainer>
    <StepsTrace>
      <div className="step-progress">
        {formProgress} de 3 Etapas
      </div>
      <div className="current-step">
        {currentStep}
      </div>
    </StepsTrace>
  </FormStepsContainer>;
};

export { FormProgress };
