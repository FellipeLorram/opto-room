import { AnimatePresence } from 'framer-motion';
import React from 'react'
import Card from '../components/Card/Index'
import { PlanSelectionContainer } from './styled';

interface Props {
  NonScreen: boolean;
}

const variants = {
  initial: {
    x: '0',
  },
  animate: {
    x: '0',
  },
  exit: {
    x: '-100vh',
  }
}

const PlanSelection: React.FC<Props> = ({ NonScreen }) => {
  const montlyBenefits = [
    'Adicione quantos pacientes quiser',
    'Crie e gerencie seu locais de atendimento',
    'Faça o download de suas receitas',
    'Organize suas fichas por locais de atendimento',
  ];
  return (
    <AnimatePresence>
      {!NonScreen && (
        <PlanSelectionContainer
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Card
            benefits={montlyBenefits}
            CTA={false}
            header='MENSAL'
            priceType='mês'
            price='40'
            priceKey='price_1KQynuEqE8aFGmq4XB8Ylzkn'
          />
          <Card
            benefits={[...montlyBenefits, 'Economize mais que uma mensalidade']}
            CTA
            priceType='ano'
            header='ANUAL'
            price='350'
            priceKey='price_1KQzqsEqE8aFGmq4lvQDGDnP'
          />
        </PlanSelectionContainer>
      )}
    </AnimatePresence>
  )
}

export default PlanSelection