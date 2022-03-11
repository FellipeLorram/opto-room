import React from 'react'
import ActionButton from '../../../../Components/ActionButton';
import { LayoutList } from '../../../../Assets/svgs/LayoutList';
import { LayoutGrid } from '../../../../Assets/svgs/LayoutGrid';
import { Filter } from '../../../../Assets/svgs/Filter';
import { SearchInput } from '../../../../Components/SearchInput/Index';
import { ActionsContainer, FilterOptions } from './styled';


interface Props {
  isLineDisposition: boolean;
  setDisposition(value: boolean): void;
  searchValue: string;
  setSearchValue(value: string): void;
}

const Actions: React.FC<Props> = ({
  isLineDisposition,
  setDisposition,
  searchValue,
  setSearchValue
}) => {
  return (
    <ActionsContainer>
      <div className='actions-button-container'>
        <ActionButton
          text={isLineDisposition ? 'Blocos' : 'Linhas'}
          onClick={() => setDisposition(!isLineDisposition)}
        >
          {isLineDisposition ? <LayoutGrid /> : <LayoutList />}
        </ActionButton>
        <ActionButton text='Filtrar'>
          <Filter />
        </ActionButton>
        <FilterOptions>
          <div className="header">
            Filtros
          </div>
        </FilterOptions>
      </div>
      <div className='search-input-container' style={{ alignSelf: 'flex-end' }}>
        <SearchInput value={searchValue} setValue={setSearchValue} />
      </div>

    </ActionsContainer>
  )
}

export default Actions;
