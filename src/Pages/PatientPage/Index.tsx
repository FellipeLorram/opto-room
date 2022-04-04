import React, { useEffect, useState } from 'react'
import { localColor } from '../../Entities/Patient';
import useUserRef from '../../firebase/userRef/useUserRef';
import { PatientContext } from './context/PatientContext';
import ButtonsHandle from './DataReq/Index';
import PatientForm from './Form/Index';
import { Container, PatientPageStruct } from './styled'
import useGetPatient from '../../firebase/firestore/Patients/getPatient';
import DotOptionsModal from './DotOptionsModal/Index';

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
  const [patientData] = useGetPatient(match?.params?.id || 'NO')
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [local, setLocal] = useState('Avulso');
  const [localColor, setLocalColor] = useState<localColor>('Default');
  const [id, setId] = useState(match?.params?.id || '');
  const [editForm, setEditForm] = useState(false);
  const [actionsOnScreen, setActionsOnScreen] = useState(false);

  useEffect(() => {
    if (!id) return;
    if (!patientData) return;
    setEditForm(true);
    setName(patientData.name)
    setAddress(patientData.address)
    setAge(patientData.age)
    setBirthday(patientData.birthday || '');
    setCpf(patientData.cpf);
    setLocal(patientData.local || 'Avulso');
    setLocalColor(patientData.localColor || 'Default');

  }, [id, patientData])

  const handleActionsDotsClick = () => {
    setActionsOnScreen(true)
  }

  return (
    <PatientContext.Provider
      value={{
        editForm,
        name,
        address,
        age,
        birthday,
        local,
        localColor,
        cpf,
        user_ref,
        id,
        setId,
        setBirthday,
        setName,
        setAddress,
        setAge,
        setLocal,
        setLocalColor,
        setCpf,
        setEditForm,
      }}
    >
      <PatientPageStruct patientId={id}>
        <Container
          patientId={id}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          {editForm && (
            <>
              <DotOptionsModal onScreen={actionsOnScreen} setOnScreen={setActionsOnScreen} />
              <div onClick={handleActionsDotsClick} className="actions-dots">
                <span className='dot' />
                <span className='dot' />
                <span className='dot' />
              </div>
            </>
          )}
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