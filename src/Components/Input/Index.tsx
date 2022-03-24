import React from 'react'
import NumberFormat from 'react-number-format';
import { Search } from '../../Assets/svgs/Search';
import { SeachInputContainer } from './styled';

interface Props {
  value: string;
  setValue(value: string): void;
  search?: boolean;
  label?: string;
  type: string
  format?: string;
  className?: string;
}

const Input: React.FC<Props> = ({
  className,
  type,
  label,
  setValue,
  value,
  search,
  format
}) => {
  return (
    <SeachInputContainer className={className}>
      {!format ? <input
        type={type}
        placeholder={label || 'Buscar'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /> :
        <NumberFormat
          placeholder={label || 'Buscar'}
          type="text"
          displayType="input"
          id={label}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          format={format}
        />

      }
      {search && (
        <div className='search-button'>
          <Search />
        </div>
      )} 
    </SeachInputContainer>
  )
}

export { Input };