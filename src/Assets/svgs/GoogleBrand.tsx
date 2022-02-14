import React from 'react';

interface Props {
  className?: string;
}

const GoogleBrand: React.FC<Props> = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1a73e8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" /> 
    </svg>
  );
};

export { GoogleBrand };
