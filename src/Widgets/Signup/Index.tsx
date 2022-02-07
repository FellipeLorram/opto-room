import React from 'react';
import { SignupModalWrapper } from './Context/Index';
import UserContext from './Context/UserContext';

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
