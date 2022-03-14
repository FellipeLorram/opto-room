import React, { useState } from 'react'
import Actions from './components/Actions';
import PatientCard from './components/PatientCard';
import PatientTable, { PatientTr } from './components/PatientsTable/Index';
import FilterContext from './context/FilterContext';
import { Patiens } from './mock/data';
import { CardDisposition, PatientPageStruct } from './styled'


const Patients: React.FC = () => {
  const [isLineDisposition, setIsLineDisposition] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const [filters, setFilters] = useState({
    workplace: false,
    lastAppoitment: false,
  });

  return (
    <PatientPageStruct>
      <FilterContext.Provider value={{ ...filters, setFilters }}>
        <Actions
          isLineDisposition={isLineDisposition}
          setDisposition={setIsLineDisposition}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {isLineDisposition ? (
          <PatientTable>
            {Patiens.filter(({name}) => name.toLocaleLowerCase().startsWith(searchValue)).map((props) => (
              <PatientTr {...props} />
            ))}
          </PatientTable>
        ) : (
          <CardDisposition>
            {Patiens.filter(({name}) => name.toLocaleLowerCase().startsWith(searchValue)).map((props) => (
              <PatientCard {...props} />
            ))}
          </CardDisposition>
        )}
      </FilterContext.Provider>
    </PatientPageStruct>
  )
}

export default Patients;