import React from 'react';

interface Props {
  className?: string;
}

const SquareX: React.FC<Props> = ({ className }) => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" className={className} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <path d="M10 10l4 4m0 -4l-4 4" />
</svg>
  );
};

export { SquareX };
