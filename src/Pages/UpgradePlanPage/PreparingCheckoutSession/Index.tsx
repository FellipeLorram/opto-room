import React from 'react';
import { PreparingCheckoutSessionContainer } from './styled';
import CreditCardSecurity from '../../../Assets/png/credit-card-security.png'
import { AnimatePresence } from 'framer-motion';

interface Props {
  onScreen: boolean;
}

const variants = {
  initial: {
    x: '100vh',
  },
  animate: {
    x: '0',
  },
  exit: {
    x: '100vh',
  }
}

const PreparingCheckoutSession: React.FC<Props> = ({ onScreen }) => {
  return (
    <AnimatePresence>
      {onScreen && (
        <PreparingCheckoutSessionContainer
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <img src={CreditCardSecurity} alt="Sala de pagamento segura" />
          <div className="text">
            Só um momento... <br/> <b>Prezamos muito pela segurança</b> e estamos criando uma sala <b>segura</b> para o seu pagamento.
          </div>
        </PreparingCheckoutSessionContainer>
      )}
    </AnimatePresence>
  )
}

export default PreparingCheckoutSession