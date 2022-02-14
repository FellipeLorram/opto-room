import React, { createContext, useState } from 'react';
import Header from '../Header';
import AccountInformationForm from '../Forms/AccountInformationForm/AccountInformationForm';

import { Background, Container } from './styled';
import { FormProgress } from '../Forms/FormProgress/FormProgress';
import { SignupModalProps } from '../Index';
import { AnimatePresence } from 'framer-motion';
import { BackgroundVariants, ContainerVariants } from './AnimationVariants';
import { SubsciptionModalityForm } from '../Forms/SubscriptionModalityForm/SubsciptionModalityForm';
import { VerifyEmailForm } from '../Forms/VerifyEmail/VerifyEmailForm';
import { WaveOpacity } from '../../../Assets/svgs/WaveOpacity';
import { ChooseSignupForm } from '../ChooseSignupForm/ChooseSignupForm';

interface IFormProgressContext {
  EmailFormStepOnScreen: boolean;
  setEmailFormStepOnScreen(value: boolean): void;
  PlanSubscriptionFormOnScreen: boolean;
  setPlanSubscriptionFormOnScreen(value: boolean): void;
  formEmailVerifyStep: boolean;
  setFormEmailVerifyStep(value: boolean): void;
}

export const FormProgressContext = createContext({} as IFormProgressContext)

const SignupModalWrapper: React.FC<SignupModalProps> = ({ onScreen, setOnScreen }) => {
  const [EmailSignup, setEmailSignup] = useState(false);
  const [EmailFormStepOnScreen, setEmailFormStepOnScreen] = useState(true);
  const [formEmailVerifyStep, setFormEmailVerifyStep] = useState(false);
  const [PlanSubscriptionFormOnScreen, setPlanSubscriptionFormOnScreen] = useState(false);

  const formSteps = {
    EmailFormStepOnScreen,
    setEmailFormStepOnScreen,
    PlanSubscriptionFormOnScreen,
    setPlanSubscriptionFormOnScreen,
    formEmailVerifyStep,
    setFormEmailVerifyStep
  };

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
              {EmailSignup ? (
                <>
                  <FormProgress />
                  {EmailFormStepOnScreen && <AccountInformationForm setSignupEmailForm={setEmailSignup} />}
                  {formEmailVerifyStep && <VerifyEmailForm />}

                </>
              ) : (PlanSubscriptionFormOnScreen) ?
                (
                  <>
                    <FormProgress />
                    <SubsciptionModalityForm />
                  </>
                ) :
                <ChooseSignupForm setSignupEmailForm={setEmailSignup} />

              }

            </FormProgressContext.Provider>

            <WaveOpacity className="waveOpacity" />
          </Container>
        </Background>
      )}
    </AnimatePresence>
  );
};

export { SignupModalWrapper };
