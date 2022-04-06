import React from 'react';
import styled from 'styled-components'
import { AddNote } from '../../../Assets/svgs/AddNote';
import { Button } from '../../../Components/Button/Index';

const NoAppoitmentsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 3rem;
  gap: 1rem;
  font-size: 1.2rem;
  text-align: center;
`;

const NoAppoitments: React.FC = () => {
  return (
    <NoAppoitmentsContainer>
      Parece que esse paciente ainda não possui consultas salvas..<br />
      Que tal adicionar a primeira?
      <Button className='add-appointment-button'>
        <span className='text'>
          Iniciar consulta
        </span>
        <AddNote />
      </Button>
    </NoAppoitmentsContainer>
  )
}

export default NoAppoitments