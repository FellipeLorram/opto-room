import React from 'react';

interface Props {
  className?: string;
  onClick?: { (): void; };
}

const BlackManSmile: React.FC<Props> = ({ className, onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} className={className} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M650 1300C290.71 1300 0 1008.86 0 650C0 290.71 291.141 0 650 0C1009.29 0 1300 291.141 1300 650C1300.43 1009.29 1009.29 1300 650 1300Z" fill="#1A73E8" />
    </svg>
  );
};

export { BlackManSmile };
