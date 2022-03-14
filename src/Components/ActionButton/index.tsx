import React, { useEffect, useState } from 'react';
import { ActionsButtonWrapper } from './styled';

interface Props {
  text: string;
  children: React.ReactNode;
  onClick?: { (): void };
  customAnimate?: boolean;
}

const ActionButton: React.FC<Props> = ({ children, text, onClick, customAnimate }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (customAnimate) setAnimate(true);
    else setAnimate(false);
  }, [customAnimate])

  const handleMouseLeave = () => {
    if (!customAnimate) setAnimate(false);
  }

  return (
    <ActionsButtonWrapper
      animate={animate}
      onMouseEnter={() => setAnimate(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className='icon-container'>
        {children}
      </div>
      <div className='text-container'>
        {text}
      </div>
    </ActionsButtonWrapper>
  )
}

export default ActionButton;
