import React from 'react'
import styled from 'styled-components'
import ActionButton from '../../../../Components/ActionButton';
import { LayoutList } from '../../../../Assets/svgs/LayoutList';
import { LayoutGrid } from '../../../../Assets/svgs/LayoutGrid';
import { Filter } from '../../../../Assets/svgs/Filter';
import { SearchInput } from '../../../../Components/SearchInput/Index';

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  width: 100%;

  .actions-button-container{
    display: flex;
    flex-direction: row;
    gap: 1rem  
  }  
`;

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
      </div>
      <div className='search-input-container' style={{ alignSelf: 'flex-end' }}>
        <SearchInput value={searchValue} setValue={setSearchValue} />
      </div>

    </ActionsContainer>
  )
}

export default Actions;
