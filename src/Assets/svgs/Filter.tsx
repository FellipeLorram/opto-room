import React from 'react';

interface Props {
  className?: string;
}

const Filter: React.FC<Props> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
    </svg>
  );
};

export { Filter };
