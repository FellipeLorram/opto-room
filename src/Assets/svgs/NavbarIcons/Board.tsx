import React from 'react';

interface Props {
  className?: string;
}

const Board: React.FC<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 9h8" />
      <path d="M12 15h8" />
      <path d="M12 4v16" />
    </svg>);
};

export { Board };
