import React, { createContext, useState } from 'react';
import Header from '../Header';
import PersonalInfosForm from '../Forms/PersonalInfosForm';

import { Background, Container } from './styled';
// import { UserContextData } from './UserContext';
import { FormProgress } from '../Forms/FormProgress';
import AccountInfoForm from '../Forms/AccountInfoForm';
import { SignupModalProps } from '../Index';
import { AnimatePresence } from 'framer-motion';
import { BackgroundVariants, ContainerVariants } from './AnimationVariants';
import { SubsciptionModalityForm } from '../Forms/SubsciptionModalityForm';

interface IFormProgressContext {
  formFirstStep: boolean;
  setFormFirstStep(value: boolean): void;
  formSecondStep: boolean;
  setFormSecondStep(value: boolean): void;
  formThirdStep: boolean;
  setFormThirdStep(value: boolean): void;
}

export const FormProgressContext = createContext({} as IFormProgressContext)

const SignupModalWrapper: React.FC<SignupModalProps> = ({ onScreen, setOnScreen }) => {
  const [formFirstStep, setFormFirstStep] = useState(true);
  const [formSecondStep, setFormSecondStep] = useState(false);
  const [formThirdStep, setFormThirdStep] = useState(false);

  const formSteps = {
    formFirstStep,
    setFormFirstStep,
    formSecondStep,
    setFormSecondStep,
    formThirdStep,
    setFormThirdStep,
  }

  return (
    <AnimatePresence>
      {onScreen && (
        <Background
          variants={BackgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Container
            variants={ContainerVariants}
          >
            <Header setOnScreen={setOnScreen} />
            <FormProgressContext.Provider value={formSteps}>
              <FormProgress />
              {formFirstStep && <PersonalInfosForm />}
              {formSecondStep && <AccountInfoForm />}
              {formThirdStep && <SubsciptionModalityForm />}
            </FormProgressContext.Provider>
          </Container>
        </Background>
      )}
    </AnimatePresence>
  );
};

export { SignupModalWrapper };
