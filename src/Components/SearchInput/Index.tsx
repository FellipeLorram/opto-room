import React from 'react'
import { Search } from '../../Assets/svgs/Search';
import { SeachInputContainer } from './styled';

interface Props {
  value: string;
  setValue(value: string): void;
}

const SearchInput: React.FC<Props> = ({ setValue, value }) => {
  return (
    <SeachInputContainer>
      <input
        type="text"
        placeholder='Buscar'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className='search-button'>
        <Search />
      </div>
    </SeachInputContainer>
  )
}

export { SearchInput };