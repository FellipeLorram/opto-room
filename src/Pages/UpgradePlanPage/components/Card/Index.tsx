import React from 'react'
import { Check } from '../../../../Assets/svgs/Check';
import { Button } from '../../../../Components/Button/Index';
import { CardContainer } from './styled';

interface Props {
  header: string;
  price: string;
  benefits: string[];
  CTA: boolean;
}

const Card: React.FC<Props> = ({ header, price, benefits, CTA }) => {
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
        <Button className='card-button'>
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