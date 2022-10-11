import React from 'react';
import { Props } from './Props';

const BackArrow: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick} width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="9" y2="16" />
      <line x1="5" y1="12" x2="9" y2="8" />
    </svg>);
};

export { BackArrow };
