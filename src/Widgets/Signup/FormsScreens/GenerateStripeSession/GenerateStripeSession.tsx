import React from 'react'
import styled from 'styled-components';
import creditCardImage from '../../../../Assets/png/credit-card-security.png';

const StripeSessionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  .text{
    font-size: 1rem;
    color: #00000099;
  }
`;


const GenerateStripeSession: React.FC = () => {
  return (
    <StripeSessionContainer>
      <img src={creditCardImage} alt="Cartão de credito" />
      <div className='text'>
        Um momento...
      </div>
      <div className='text'>
        Estamos criando uma sala segura para o seu pagamento 🔒
      </div>
    </StripeSessionContainer>
  )
}

export { GenerateStripeSession }