import React, { useEffect, useState } from 'react'
import Actions from './components/Actions';
import PatientCard from './components/PatientCard';
import PatientTable, { PatientTr } from './components/PatientsTable/Index';
import FilterContext from './context/FilterContext';
import { CardDisposition, PatientPageStruct } from './styled'
import useGetPatients from '../../firebase/firestore/Patients/getPatients';
import { DocumentData } from 'firebase/firestore';
import NoPatients from './components/NoPatient';


const PatientsPage: React.FC = () => {
  const [isLineDisposition, setIsLineDisposition] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [patients, setPatients] = useState<DocumentData[]>([]);
  const [patientDocs] = useGetPatients();
  const [filters, setFilters] = useState({
    workplace: false,
    lastAppoitment: false,
  });

  useEffect(() => {
    if (!patientDocs) return;
    setPatients(patientDocs)
  }, [patientDocs])

  const filterByDate = (a: DocumentData, b: DocumentData): number => {
    if (b.lastAppoitment && a.lastAppoitment) return +new Date(b.lastAppoitment) - +new Date(a.lastAppoitment);
    return a.name > b.name ? 1 : -1
  }

  const filterByWorkplace = (a: DocumentData, b: DocumentData): number => {
    if (b.local && a.local) return a.local > b.local ? 1 : -1;
    return 0;
  }

  useEffect(() => {
    if (!patientDocs) return;
    if (filters.workplace && filters.lastAppoitment) setPatients(patients.sort(filterByWorkplace).sort(filterByDate));
    if (filters.lastAppoitment) setPatients(patients.sort(filterByDate));
    if (filters.workplace) setPatients(patients.sort(filterByWorkplace));
    else setPatients(patientDocs);

  }, [patientDocs, patients, filters.lastAppoitment, filters.workplace])


  return (
    <PatientPageStruct>
      <FilterContext.Provider value={{ ...filters, setFilters }}>
        <Actions
          isLineDisposition={isLineDisposition}
          setDisposition={setIsLineDisposition}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {patients.length > 0 ? (
          <>
            {isLineDisposition ? (
              <PatientTable>
                {patients.filter(({ name }) => name.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase())).map((props) => (
                  <PatientTr {...props} key={props.id} />
                ))}
              </PatientTable>
            ) : (
              <CardDisposition>
                {patients.filter(({ name }) => name.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase())).map((props) => (
                  <PatientCard {...props} key={props.id} />
                ))}
              </CardDisposition>
            )}
          </>
        ) : (
          <NoPatients onScreen={patients.length === 0} />
        )}
      </FilterContext.Provider>
    </PatientPageStruct>
  )
}

export default PatientsPage;