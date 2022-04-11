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

  button {
    padding: .5rem 1rem;
  }

  .cancel-button {
    background:#ff4d4d ;
  }
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
    id,
    editForm,
    setEditForm,
  } = useContext(PatientContext);

  const handleClickSaveButton = async () => {
    if (id) return;
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
    });
  }

  const handleClickCancelButton = () => {
    setEditForm(true);
  }

  return (
    <ButtonsHandleContainer>
      {!editForm && (
        <>
          {id && (
            <Button className='cancel-button' onClick={handleClickCancelButton}>
              Cancelar
            </Button>
          )}
          <Button onClick={handleClickSaveButton}>
            {id ? 'Salvar Alterações' : 'Salvar'}
          </Button>
        </>
      )}

    </ButtonsHandleContainer>
  )
}

export default ButtonsHandle