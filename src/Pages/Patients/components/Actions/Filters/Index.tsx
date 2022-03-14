import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react'
import { Check } from '../../../../../Assets/svgs/Check'
import { Close } from '../../../../../Assets/svgs/CloseX';
import FilterContext from '../../../context/FilterContext';
import { FilterContainer, FilterOptions } from './styled'
import { variants } from './variants';

interface Props {
  onScreen: boolean;
  setOnScreen(value: boolean): void;
  sethandleCustomAnimate(value: boolean): void;
}

const Filters: React.FC<Props> = ({ onScreen, setOnScreen, sethandleCustomAnimate }) => {
  const { lastAppoitment, workplace, setFilters } = useContext(FilterContext);

  const handleFilterOptionClick = (option: 'lastAppoitment' | 'workplace') => {
    setFilters(filters => {
      const newFilters = { ...filters }
      newFilters[option] = !filters[option]
      return newFilters;
    });
  }

  const handleCloseClick = () => {
    setOnScreen(false);
    sethandleCustomAnimate(false);
  }

  return (
    <AnimatePresence>
      {onScreen && (
        <FilterOptions
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <div className="pre-header">
            <Close className='close-button' onClick={handleCloseClick} /> 
          </div>
          <div className="header">
            Filtrar por
          </div>
          <div className="body">
            <FilterContainer active={workplace} onClick={() => handleFilterOptionClick('workplace')}>
              <span className="filter">Local de trabalho</span>
              <span className="check">
                <Check className='checked' />
              </span>
            </FilterContainer>

            <FilterContainer active={lastAppoitment} onClick={() => handleFilterOptionClick('lastAppoitment')}>
              <span className="filter">Ultima consulta</span>
              <span className="check">
                <Check className='checked' />
              </span>
            </FilterContainer>
          </div>
        </FilterOptions>
      )}
    </AnimatePresence>
  )
}

export default Filters