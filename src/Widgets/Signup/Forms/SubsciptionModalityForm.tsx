import React, { useContext, useState } from 'react';
import { Check } from '../../../Assets/svgs/Check';
import { ChevronLeft } from '../../../Assets/svgs/ChevronLeft';
import { Button } from '../../../Components/Button/Index';
import { FormProgressContext } from '../Context/Index';
import { FormContainer, ModalityCard } from './styled';

const SubsciptionModalityForm: React.FC = () => {
  const [montlyPaymentSelected, setMontlyPaymentSelected] = useState(false);
  const [anualPaymentSelected, setAnualPaymentSelected] = useState(true);

  const {
    setFormThirdStep,
    setFormSecondStep,
  } = useContext(FormProgressContext);

  const cards = [
    {
      type: 'montly',
      header: 'Plano mensal',
      price: 'R$39,99',
      selected: montlyPaymentSelected,
      benefits: [
        'Crie e gerencie seus pacientes',
        'Adicione seus locais de trabalho',
        'Imprima suas receitas',
        'Crie suas fichas de exame'
      ],
    },
    {
      type: 'anual',
      header: 'Plano anual',
      price: 'R$349,99',
      selected: anualPaymentSelected,
      benefits: [
        'Crie e gerencie seus pacientes',
        'Adicione seus locais de trabalho',
        'Imprima suas receitas',
        'Crie suas fichas de exame',
        'Economize uma mensalidade'
      ],
    }
  ];

  const handleBackwardButtonClick = () => {
    setFormThirdStep(false);
    setFormSecondStep(true);
  }

  const handleCardCick = (type: string) => {
    if (type === 'montly') {
      setMontlyPaymentSelected(true);
      setAnualPaymentSelected(false);
      return;
    }
    setMontlyPaymentSelected(false);
    setAnualPaymentSelected(true);
  }

  return (
    <FormContainer>
      <div className="row" style={{ gap: '1.5rem', width: '90%' }}>
        {cards.map(({ header, price, selected, benefits, type }) => (
          <ModalityCard
            selected={selected}
            key={price}
            onClick={() => handleCardCick(type)}
          >
            <div className="header">
              {header}
            </div>
            <div className="price">
              {price}
            </div>
            <div className="benefits-list">
              {benefits.map((benefit) => (
                <span className="benefit" key={benefit}>
                  <Check className="check" />
                  {benefit}
                </span>
              ))}
            </div>
          </ModalityCard>
        ))}
      </div>

      <div className="row">
        <Button inverse className="back-button" onClick={handleBackwardButtonClick}>
          <ChevronLeft />
          Voltar
        </Button>
        <Button className="paid-button" >
          Pagar
          {anualPaymentSelected ? ' R$349,99' : ' R$39,99'}
        </Button>
      </div>
    </FormContainer>
  );
};

export { SubsciptionModalityForm };
