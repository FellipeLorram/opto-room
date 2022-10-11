import React from 'react';
import { Props } from '../Props';


const Lock: React.FC<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="8" y="11" width="8" height="5" rx="1" />
      <path d="M10 11v-2a2 2 0 1 1 4 0v2" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  );
};

export { Lock };
