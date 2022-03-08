import React from 'react'
import styled from 'styled-components'
import ActionButton from '../../../../Components/ActionButton';
import { Search } from '../../../../Assets/svgs/Search';
import { LayoutList } from '../../../../Assets/svgs/LayoutList';
import { LayoutGrid } from '../../../../Assets/svgs/LayoutGrid';
import { Filter } from '../../../../Assets/svgs/Filter';

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
`;

interface Props {
  isLineDisposition: boolean;
  setDisposition(value: boolean): void;
}

const Actions: React.FC<Props> = ({
  isLineDisposition, setDisposition
}) => {
  return (
    <ActionsContainer>
      <ActionButton
        text={isLineDisposition ? 'Blocos' : 'Linhas'}
        onClick={() => setDisposition(!isLineDisposition)}
      >
        {isLineDisposition ? <LayoutGrid /> : <LayoutList />}
      </ActionButton>
      <ActionButton text='Filtrar'>
        <Filter />
      </ActionButton>
      <ActionButton text='Pesquisar'>
        <Search />
      </ActionButton>
    </ActionsContainer>
  )
}

export default Actions;
