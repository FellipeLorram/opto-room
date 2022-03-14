import React, { useEffect, useState } from 'react'
import Actions from './components/Actions';
import PatientCard from './components/PatientCard';
import PatientTable, { PatientTr } from './components/PatientsTable/Index';
import FilterContext from './context/FilterContext';
import Patient from './Entities/Patient';
import { Patients } from './mock/data';
import { CardDisposition, PatientPageStruct } from './styled'


const PatientsPage: React.FC = () => {
  const [isLineDisposition, setIsLineDisposition] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filters, setFilters] = useState({
    workplace: false,
    lastAppoitment: false,
  });

  useEffect(() => {
    setPatients(Patients)
  }, [])

  const filterByDate = (a: Patient, b: Patient) => {
    return +new Date(b.lastAppoitment) - +new Date(a.lastAppoitment)
  }

  const filterByWorkplace = (a: Patient, b: Patient): number => {
    return a.local > b.local ? 1 : -1;
  }

  useEffect(() => {
    if (filters.workplace && filters.lastAppoitment) setPatients(patients.sort(filterByWorkplace).sort(filterByDate));
    if (filters.lastAppoitment) setPatients(patients.sort(filterByDate));
    if (filters.workplace) setPatients(patients.sort(filterByWorkplace));
    else setPatients(Patients);
    console.log(1);
    
  }, [patients, filters.lastAppoitment, filters.workplace])


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
            {patients.filter(({ name }) => name.toLocaleLowerCase().startsWith(searchValue)).map((props) => (
              <PatientTr {...props} key={props.name} />
            ))}
          </PatientTable>
        ) : (
          <CardDisposition>
            {Patients.filter(({ name }) => name.toLocaleLowerCase().startsWith(searchValue)).map((props) => (
              <PatientCard {...props} key={props.name} />
            ))}
          </CardDisposition>
        )}
      </FilterContext.Provider>
    </PatientPageStruct>
  )
}

export default PatientsPage;