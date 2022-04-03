import React, { useEffect, useState } from 'react'
import { localColor } from '../../Entities/Patient';
import useUserRef from '../../firebase/userRef/useUserRef';
import { PatientContext } from './context/PatientContext';
import ButtonsHandle from './DataReq/Index';
import PatientForm from './Form/Index';
import { Container, PatientPageStruct } from './styled'
import useGetPatient from '../../firebase/firestore/Patients/getPatient';

const variants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
}

interface PageParams {
  match: {
    params: {
      id: string
    }
  };
}

const PatientPage: React.FC<PageParams> = ({ match }) => {
  const user_ref = useUserRef();
  const [patientData] = useGetPatient(match.params.id)
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [local, setLocal] = useState('Avulso');
  const [localColor, setLocalColor] = useState<localColor>('Default');

  useEffect(() => {
    if (!match?.params?.id) return;
    if (!patientData) return;

    setName(patientData.name)
    setAddress(patientData.address)
    setAge(patientData.age)
    setBirthday(patientData.birthday || '');
    setCpf(patientData.cpf);
    setLocal(patientData.local || 'Avulso');
    setLocalColor(patientData.localColor || 'Default');

  }, [match?.params?.id, patientData])

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