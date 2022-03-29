import React, { useState } from 'react'
import { localColor } from '../../Entities/Patient';
import useUserRef from '../../firebase/userRef/useUserRef';
import { PatientContext } from './context/PatientContext';
import ButtonsHandle from './DataReq/Index';
import PatientForm from './Form/Index';
import { Container, PatientPageStruct } from './styled'

const variants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
}

const PatientPage: React.FC = () => {
  const user_ref = useUserRef()
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [cpf, setCpf] = useState('');
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
        cpf,
        user_ref,
        setBirthday,
        setName,
        setAddress,
        setAge,
        setLocal,
        setLocalColor,
        setCpf,
      }}
    >
      <PatientPageStruct>
        <Container
          variants={variants}
          initial="initial"
          animate="animate"
        >
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