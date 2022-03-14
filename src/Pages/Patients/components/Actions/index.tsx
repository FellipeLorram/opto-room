import React, { useState } from 'react'
import ActionButton from '../../../../Components/ActionButton';
import { LayoutList } from '../../../../Assets/svgs/LayoutList';
import { LayoutGrid } from '../../../../Assets/svgs/LayoutGrid';
import { Filter } from '../../../../Assets/svgs/Filter';
import { SearchInput } from '../../../../Components/SearchInput/Index';
import { ActionsContainer } from './styled';
import Filters from './Filters/Index';


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
  const [filtersOnScreen, setFiltersOnScreen] = useState(false);
  const [handleCustomAnimate, sethandleCustomAnimate] = useState(false);

  const handleFilterButtonClick = () => {
    setFiltersOnScreen(!filtersOnScreen);
    sethandleCustomAnimate(!handleCustomAnimate)
  }

  return (
    <ActionsContainer>
      <div className='actions-button-container'>
        <ActionButton
          text={isLineDisposition ? 'Blocos' : 'Linhas'}
          onClick={() => setDisposition(!isLineDisposition)}
        >
          {isLineDisposition ? <LayoutGrid /> : <LayoutList />}
        </ActionButton>
        <ActionButton
          customAnimate={handleCustomAnimate}
          onClick={handleFilterButtonClick}
          text='Filtrar'
        >
          <Filter />
        </ActionButton>
        <Filters onScreen={filtersOnScreen} setOnScreen={setFiltersOnScreen} sethandleCustomAnimate={sethandleCustomAnimate} />
      </div>
      <div className='search-input-container' style={{ alignSelf: 'flex-end' }}>
        <SearchInput value={searchValue} setValue={setSearchValue} />
      </div>

    </ActionsContainer>
  )
}

export default Actions;
