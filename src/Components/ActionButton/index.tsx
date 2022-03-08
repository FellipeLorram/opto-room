import React from 'react';
import { ActionsButtonWrapper } from './styled';

interface Props{
  text: string;
  children: React.ReactNode;
  onClick?: { (): void };
}

const ActionButton: React.FC<Props> = ({children, text, onClick}) => {
  return (
    <ActionsButtonWrapper onClick={onClick}>
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
