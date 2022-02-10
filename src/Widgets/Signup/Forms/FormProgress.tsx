import React, { useContext, useEffect, useState } from 'react';
import { FormStepsContainer, StepsTrace } from './styled';

import { FormProgressContext } from '../Context/Index';

const FormProgress: React.FC = () => {
  const {
    formFirstStep,
    formSecondStep,
    formThirdStep
  } = useContext(FormProgressContext);
  const [formProgress, setFormProgress] = useState('1');
  const [currentStep, setCurrentStep] = useState('Informações pessoais');

  useEffect(() => {
    if (formFirstStep) {
      setFormProgress('1');
      setCurrentStep('Precisamos de algumas informações pessoais. Nos conte sobre você');
    };
    if (formSecondStep) {
      setFormProgress('2');
      setCurrentStep('Dados para criar seu acesso.');
    };
    if (formThirdStep) {
      setFormProgress('3');
      setCurrentStep('Por fim, escolha o plano que melhor se adapta as suas necessidades e entre no seu Opto room :)');
    }
  }, [formSecondStep, formThirdStep, formFirstStep]);

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
