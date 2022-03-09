import React, { useState } from 'react'
import Actions from './components/Actions';
import PatientCard from './components/PatientCard';
import PatientTable, { PatientTr } from './components/PatientsTable/Index';
import { Patiens } from './mock/data';
import { CardDisposition, PatientPageStruct } from './styled'

const Patients: React.FC = () => {
  const [isLineDisposition, setIsLineDisposition] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  return (
    <PatientPageStruct>
      <Actions
        isLineDisposition={isLineDisposition}
        setDisposition={setIsLineDisposition}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {isLineDisposition ? (
        <PatientTable>
          {Patiens.map((props) => (
            <PatientTr {...props} />
          ))}
        </PatientTable>
      ) : (
        <CardDisposition>
          {Patiens.map((props) => (
            <PatientCard {...props} />
          ))}
        </CardDisposition>
      )}
    </PatientPageStruct>
  )
}

export default Patients;