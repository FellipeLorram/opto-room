import React from 'react'
import { Check } from '../../../../Assets/svgs/Check';
import { Button } from '../../../../Components/Button/Index';
import createCheckoutSession from '../../../../stripe/createCheckoutSession';
import { CardContainer } from './styled';
import useUserRef from '../../../../firebase/userRef/useUserRef';

interface Props {
  header: string;
  price: string;
  benefits: string[];
  CTA: boolean;
  priceKey: string;
}

const Card: React.FC<Props> = ({ header, price, benefits, CTA, priceKey }) => {
  const userRef = useUserRef() 
  const handleClick = async () => {
    await createCheckoutSession(userRef, priceKey);
  }
  return (
    <CardContainer CTA={CTA}>
      <div className="card-header">{header}</div>
      <div className="line-container">
        <div className="line" />
        <div className="dot" />
        <div className="line" />
      </div>
      <div className="price-container">
        <div className="currency">R$</div>
        <div className="price">{price}</div>
        <div className="month">/mês</div>
      </div>

      <div className="button-container">
        <Button onClick={handleClick} className='card-button'>
          COMEÇAR
        </Button>
      </div>

      <div className="card-body">
        {benefits.map(benefit => (
          <div key={benefit} className="benefit">
            <Check className='check' />
            {benefit}
          </div>
        ))}
      </div>
    </CardContainer>
  )
}

export default Card;