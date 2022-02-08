import React from 'react';
import { StyledButton } from './styled';

interface Props {
  children: React.ReactNode;
  onClick?: { (): void };
  className?: string;
  inverse?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, className, inverse }) => {
  return <StyledButton inverse={inverse} className={className} onClick={onClick}>{children}</StyledButton>;
};

export { Button };
