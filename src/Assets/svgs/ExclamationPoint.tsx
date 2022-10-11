import React from 'react';
import { Props } from './Props';

const ExclamationPoint: React.FC<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 2V6.5" stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2 12.5V12.515" stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export { ExclamationPoint };
