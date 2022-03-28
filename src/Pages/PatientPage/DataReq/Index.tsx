import React, { useContext } from 'react'
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Button } from '../../../Components/Button/Index';
import createPatient from '../../../firebase/firestore/Patients/CreateNewPatient';
import { PatientContext } from '../context/PatientContext';

const ButtonsHandleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  gap: 2rem;
  margin-top: 1rem;
`;

const ButtonsHandle: React.FC = (): JSX.Element => {
  const {
    name,
    address,
    birthday,
    age,
    cpf, 
    local,
    localColor,
    user_ref,
  } = useContext(PatientContext);

  const handleClickSaveButton = async () => {
    await createPatient({
      name, 
      address, 
      age,
      birthday,
      cpf,
      id: nanoid(),
      local,
      localColor,
      user_ref,
    })
  }
 
  return (
    <ButtonsHandleContainer>
      <Button onClick={handleClickSaveButton}>
        Salvar
      </Button>
    </ButtonsHandleContainer>
  )
}

export default ButtonsHandle