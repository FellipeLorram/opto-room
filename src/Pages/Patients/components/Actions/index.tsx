import React, { useContext, useEffect, useState } from 'react'
import ActionButton from '../../../../Components/ActionButton';
import { LayoutList } from '../../../../Assets/svgs/LayoutList';
import { LayoutGrid } from '../../../../Assets/svgs/LayoutGrid';
import { Filter } from '../../../../Assets/svgs/Filter';
import { Input } from '../../../../Components/Input/Index';
import { ActionsContainer, AppliedFilterIndicator } from './styled';
import Filters from './Filters/Index';
import FilterContext from '../../context/FilterContext';


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
  const [filtersAppliedQuantity, setFiltersAppliedQuantity] = useState('');

  const { workplace, lastAppoitment } = useContext(FilterContext);

  useEffect(() => {
    if (workplace && lastAppoitment) setFiltersAppliedQuantity('2');
    else if (workplace || lastAppoitment) setFiltersAppliedQuantity('1');
    else setFiltersAppliedQuantity('');

  }, [workplace, lastAppoitment])

  const handleFilterButtonClick = () => {
    setFiltersOnScreen(!filtersOnScreen);
    sethandleCustomAnimate(!handleCustomAnimate)
  }

  const handleDispositionButtonCLick = () => {
    setDisposition(!isLineDisposition);
    setFiltersOnScreen(false);
    sethandleCustomAnimate(false)
  }

  return (
    <ActionsContainer>
      <div className='actions-button-container'>
        <ActionButton
          text={isLineDisposition ? 'Blocos' : 'Linhas'}
          onClick={handleDispositionButtonCLick}
        >
          {isLineDisposition ? <LayoutGrid /> : <LayoutList />}
        </ActionButton>
        <ActionButton
          customAnimate={handleCustomAnimate}
          onClick={handleFilterButtonClick}
          text='Filtrar'
        >
          <Filter />
          {filtersAppliedQuantity && <AppliedFilterIndicator>{filtersAppliedQuantity}</AppliedFilterIndicator>}
        </ActionButton>
        <Filters onScreen={filtersOnScreen} setOnScreen={setFiltersOnScreen} sethandleCustomAnimate={sethandleCustomAnimate} />
      </div>
      <div>
        <Input search type='text' value={searchValue} className="search-input" setValue={setSearchValue} />
      </div>

    </ActionsContainer>
  )
}

export default Actions;
