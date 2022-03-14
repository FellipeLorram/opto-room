import React from 'react';

interface Props {
  className?: string;
  onClick?: { (): void; };
}
const Check: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="9 11 12 14 20 6" />
  <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
    </svg>
  );
};

export { Check };
