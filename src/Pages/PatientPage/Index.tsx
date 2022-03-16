import React, { useState } from 'react'
import { PatientContext } from './context/PatientContext';
import PatientForm from './Form/Index';
import { Container, PatientPageStruct } from './styled'

const PatientPage: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');

  return (
    <PatientContext.Provider
      value={{
        name,
        address,
        age,
        birthday,
        setBirthday,
        setName,
        setAddress,
        setAge
      }}
    >
      <PatientPageStruct>
        <Container>
          <div className="header">
            Informações pessoais
          </div>
          <PatientForm />
        </Container>
      </PatientPageStruct>
    </PatientContext.Provider>
  )
}

export default PatientPage;