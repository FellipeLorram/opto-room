import React from 'react';

interface Props {
  className?: string;
  onClick?: { (): void; };
}

const Eye: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="2" />
      <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
    </svg>
  );
};

export { Eye };
