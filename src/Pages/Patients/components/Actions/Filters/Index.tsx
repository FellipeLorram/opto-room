import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react'
import { Check } from '../../../../../Assets/svgs/Check'
import FilterContext from '../../../context/FilterContext';
import { FilterContainer, FilterOptions } from './styled'

interface Props {
  onScreen: boolean;
}

const Filters: React.FC<Props> = ({ onScreen }) => {
  const { lastAppoitment, workplace, setFilters } = useContext(FilterContext);

  const handleFilterOptionClick = (option: 'lastAppoitment' | 'workplace') => {
    setFilters(filters => {
      const newFilters = {...filters}
      newFilters[option] = !filters[option]
      return newFilters;
    });
  }

  return (
    <AnimatePresence>
      {onScreen && (
        <FilterOptions>
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