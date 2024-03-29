import React from 'react';
import { Props } from './Props';

const Check: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
};

export { Check };
