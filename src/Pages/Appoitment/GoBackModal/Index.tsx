import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Close } from '../../../Assets/svgs/CloseX';
import { Button } from '../../../Components/Button/Index';
import history from '../../../Services/history';
import { BackGround, CancelModalContainer } from './styled';

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
        >
          <CancelModalContainer
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <div className="header">
              <Close className='close-button' onClick={() => setOnScreen(false)} />
            </div>
            <div className="body-text">
              Deseja salvar os dados para continuar depois?
            </div>
            <div className="button-container">
              <Button onClick={() => history.goBack()} className='save'>
                Não salvar
              </Button>
              <Button>
                Salvar
              </Button>
            </div>
          </CancelModalContainer>
        </BackGround>
      )}
    </AnimatePresence>
  )
}

export default GoBackModal