import React, { useEffect, useState } from 'react';
import { PromotionContainer } from './styled';
import Mobile from '../../../Assets/Animations/Mobile-Loop.json'
import Talking from '../../../Assets/Animations/Talking.json'
import CheckListLoop from '../../../Assets/Animations/CheckListLoop.json'

import Content from './Promotion';
import Dot from './Dot';
import { AnimatePresence } from 'framer-motion';

const Promotion = () => {
  const [promoOnScreen, setpromoOnScreen] = useState([true, false, false]);

  useEffect(() => {
    setTimeout(() => {
      if (promoOnScreen[0]) {
        setpromoOnScreen([false, true, false]);
        return;
      };
      if (promoOnScreen[1]) {
        setpromoOnScreen([false, false, true]);
        return;
      };
      if (promoOnScreen[2]) {
        setpromoOnScreen([true, false, false]);
        return;
      };
    }, 5000);
  }, [promoOnScreen]);


  const promotions = [
    {
      animation: Mobile,
      text: 'Tenha seu consultório em todos os lugares, em quaisquer dispositivos, e nunca mais perca aquela receita importante.',
      onScreen: promoOnScreen[0],
    },
    {
      animation: Talking,
      text: 'Construa o histórico de cada paciente, faça ele se sentir conectado e confiante com o seu atendimento.',
      onScreen: promoOnScreen[1],
    },
    {
      animation: CheckListLoop,
      text: 'Acabe com a dor de cabeça na organização das suas receitas, aumente sua produtividade, e tenha mais tempo livre pra relaxar e curtir a vida.',
      onScreen: promoOnScreen[2],
    },
  ]

  const Sets = [
    { active: promoOnScreen[0], index: 0 },
    { active: promoOnScreen[1], index: 1 },
    { active: promoOnScreen[2], index: 2 },
  ]

  return <PromotionContainer>
    <AnimatePresence >
      {promotions.map(({ animation, text, onScreen }) => (
        <Content
          key={text}
          animation={animation}
          text={text}
          onScreen={onScreen}
        />
      ))}
    </AnimatePresence>
    <div className="dots-container">
      {Sets.map(({ active, index }) => (
        <Dot
          key={index}
          index={index}
          active={active}
          setOnScreen={setpromoOnScreen}
        />
      ))}
    </div>
  </PromotionContainer>;
};

export { Promotion };
