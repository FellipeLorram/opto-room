import React, { useState } from 'react'
import { localColor } from '../../Entities/Patient';
import { PatientContext } from './context/PatientContext';
import ButtonsHandle from './DataReq/Index';
import PatientForm from './Form/Index';
import { Container, PatientPageStruct } from './styled'

const PatientPage: React.FC = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');
  const [local, setLocal] = useState('Avulso');
  const [localColor, setLocalColor] = useState<localColor>('Default');

  return (
    <PatientContext.Provider
      value={{
        name,
        address,
        age,
        birthday,
        local,
        localColor,
        setBirthday,
        setName,
        setAddress,
        setAge,
        setLocal,
        setLocalColor
      }}
    >
      <PatientPageStruct>
        <Container>
          <div className="header">
            Informações pessoais
          </div>
          <PatientForm />
          <ButtonsHandle />
        </Container>
      </PatientPageStruct>
    </PatientContext.Provider>
  )
}

export default PatientPage;