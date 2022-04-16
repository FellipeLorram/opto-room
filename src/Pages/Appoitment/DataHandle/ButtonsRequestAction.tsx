import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { Button } from '../../../Components/Button/Index';
import createAppointment from '../../../firebase/firestore/Appoitments/CreateAppointment';
import history from '../../../Services/history';
import AppoitmentContext from '../context/Appointment/Index';

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

const ButtonsRequestAction: React.FC = () => {
  const {
    anamnesis,
    rxFinal,
    patientRef,
    id,
  } = useContext(AppoitmentContext);

  const handleSaveButtonClick = async () => {
    await createAppointment({
      anamnesis,
      rxFinal,
      patientRef,
      id: nanoid(),
    });
    history.push(`/patient/${patientRef}`)
  };

  return (
    <>
      {!id && (
        <ButtonsHandleContainer>
          <Button onClick={handleSaveButtonClick}>
            Finalizar
          </Button>
        </ButtonsHandleContainer>
      )}
    </>
  )
}

export default ButtonsRequestAction