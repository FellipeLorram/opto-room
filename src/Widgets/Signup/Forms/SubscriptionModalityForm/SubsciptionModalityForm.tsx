import React, { useState } from 'react';
import { SquareX } from '../../../../Assets/svgs/Analitycs copy';
import { Check } from '../../../../Assets/svgs/Check';
import { Button } from '../../../../Components/Button/Index';
import { Variants } from '../FormAnimationVariants';
import { FormContainer } from '../styled';
import { ModalityCard } from './styled';

const SubsciptionModalityForm: React.FC = () => {
  const [paymentSelectTrace, setPaymentSelectTrace] = useState([false, true, false]);
  const [price, setPrice] = useState('R$349,99')

  const cards = [
    {
      index: 0,
      type: 'free',
      header: 'Plano grátis',
      price: 'R$0,00',
      selected: paymentSelectTrace[0],
      benefits: [
        { haveThisBenefit: true, text: 'Crie e gerencie seus pacientes', },
        { haveThisBenefit: false, text: 'Adicione seus locais de trabalho', },
        { haveThisBenefit: false, text: 'Imprima suas receitas', },
        { haveThisBenefit: false, text: 'Crie suas fichas de exame', },
      ],
    },
    {
      index: 1,
      type: 'anual',
      header: 'Plano anual',
      price: 'R$349,99',
      selected: paymentSelectTrace[1],
      benefits: [
        { haveThisBenefit: true, text: 'Crie e gerencie seus pacientes', },
        { haveThisBenefit: true, text: 'Adicione seus locais de trabalho', },
        { haveThisBenefit: true, text: 'Imprima suas receitas', },
        { haveThisBenefit: true, text: 'Crie suas fichas de exame', },
        { haveThisBenefit: true, text: 'Economize uma mensalidade', },
      ],
    },
    {
      index: 2,
      type: 'montly',
      header: 'Plano mensal',
      price: 'R$39,99',
      selected: paymentSelectTrace[2],
      benefits: [
        { haveThisBenefit: true, text: 'Crie e gerencie seus pacientes', },
        { haveThisBenefit: true, text: 'Adicione seus locais de trabalho', },
        { haveThisBenefit: true, text: 'Imprima suas receitas', },
        { haveThisBenefit: true, text: 'Crie suas fichas de exame', },
        { haveThisBenefit: false, text: 'Economize uma mensalidade', },
      ],
    },
  ];

  const handleCardCick = (index: number) => {
    const newArr = [false, false, false];
    newArr[index] = true;
    setPaymentSelectTrace(newArr);
    if (index === 0) {
      setPrice('R$0,00')
      return;
    }
    setPrice(index === 1 ? 'R$349,00' : 'R$39,99');
  }

  return (
    <FormContainer
      style={{ width: '60rem' }}
      variants={Variants}
    >
      <div className="row" style={{ gap: '1.5rem', width: '100%' }}>
        {cards.map(({ header, price, selected, benefits, index }) => (
          <ModalityCard
            selected={selected}
            key={price}
            onClick={() => handleCardCick(index)}
          >
            <div className="header">
              {header}
            </div>
            <div className="price">
              {price}
            </div>
            <div className="benefits-list">
              {benefits.map(({ text, haveThisBenefit }) => (
                <span className="benefit" key={text}>
                  {haveThisBenefit ? <Check className="check" /> : <SquareX className="non-check" />}
                  {text}
                </span>
              ))}
            </div>
          </ModalityCard>
        ))}
      </div>

      <div className="row" style={{ justifyContent: 'center' }}>
        <Button className="paid-button" >
          {`Pagar ${price}`}
        </Button>
      </div>
    </FormContainer>
  );
};

export { SubsciptionModalityForm };
