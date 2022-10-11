import React, { useState } from 'react';
import UserContext from './Context/UserContext';

import Header from './Header';
import AccountInformationForm from './FormsScreens/AccountInformationForm/AccountInformationForm';

import { Background, Container } from './styled';
import { FormProgress } from './FormsScreens/FormProgress/FormProgress';
import { AnimatePresence } from 'framer-motion';
import { BackgroundVariants, ContainerVariants } from './AnimationVariants';
import { VerifyEmailForm } from './FormsScreens/VerifyEmail/VerifyEmailForm';
import { ChooseSignupForm } from './ChooseSignupForm/ChooseSignupForm';
import { WaveOpacity } from '../../../Assets/svgs/WaveOpacity';
import { FormProgressContext } from './Context/FormProgressContext';


const SignupModalWrapper: React.FC<SignupModalProps> = ({ onScreen, setOnScreen }) => {
  const [EmailSignup, setEmailSignup] = useState(false);
  const [EmailFormStepOnScreen, setEmailFormStepOnScreen] = useState(true);
  const [formEmailVerifyStep, setFormEmailVerifyStep] = useState(false);

  const formSteps = {
    EmailFormStepOnScreen,
    setEmailFormStepOnScreen,
    formEmailVerifyStep,
    setFormEmailVerifyStep,
    setEmailSignup,
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
              ) : <ChooseSignupForm setSignupEmailForm={setEmailSignup} /> }
              
            </FormProgressContext.Provider>

            <WaveOpacity className="waveOpacity" />
          </Container>
        </Background>
      )}
    </AnimatePresence>
  );
};


export interface SignupModalProps {
  onScreen: boolean;
  setOnScreen(value: boolean): void;
}

const SignupModal: React.FC<SignupModalProps> = ({ onScreen, setOnScreen }) => {
  return <UserContext>
    <SignupModalWrapper onScreen={onScreen} setOnScreen={setOnScreen} />
  </UserContext>

};

export { SignupModal };
