import React from 'react';
import { PromotionContent } from './styled';
import Lottie from 'react-lottie';

const promotionVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

interface Props {
  onScreen: boolean;
  text: string;
  animation: any;
}

const Content: React.FC<Props> = ({ text, animation, onScreen }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      {onScreen && (
        <PromotionContent
          variants={promotionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1 }}
        >
          <Lottie
            options={defaultOptions}
            height={300}
            width={300}
          />
          <div className="promo-text">{text}</div>
        </PromotionContent>
      )}
    </>
  );
};

export default Content;
