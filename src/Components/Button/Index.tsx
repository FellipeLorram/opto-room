import React from 'react';
import { StyledButton } from './styled';

interface Props {
  children: React.ReactNode;
  onClick?: { (): void };
  className?: string;
}

const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return <StyledButton className={className} onClick={onClick}>{children}</StyledButton>;
};

export { Button };
