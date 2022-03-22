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
}

const Input: React.FC<Props> = ({ type, label, setValue, value, search, format }) => {
  return (
    <SeachInputContainer>
      {!format ? <input
        type={type}
        placeholder={label || 'Buscar'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /> :
        <NumberFormat
          type="text"
          displayType="input"
          id={label}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          format={format}
        />

      }
      <div className='search-button'>
        {search && <Search />}
      </div>
    </SeachInputContainer>
  )
}

export { Input };