import React from 'react';

interface Props {
  className?: string;
}

const ChevronLeft: React.FC<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="1.3rem" height="1.3rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1a73e8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
};

export { ChevronLeft };
