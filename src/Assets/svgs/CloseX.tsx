import React from 'react';
import { Props } from './Props';

const Close: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};

export { Close };
