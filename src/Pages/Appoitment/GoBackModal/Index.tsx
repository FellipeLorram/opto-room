import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { BackGround } from './styled';

interface GoBackModalProps {
  onScreen: boolean;
  setOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GoBackModal: React.FC<GoBackModalProps> = ({ onScreen, setOnScreen }) => {
  return (
    <AnimatePresence>
      {onScreen && (
        <BackGround
          onClick={() => setOnScreen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

        </BackGround>
      )}
    </AnimatePresence>
  )
}

export default GoBackModal