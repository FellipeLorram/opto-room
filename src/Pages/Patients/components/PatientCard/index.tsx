import React from 'react'
import { PatientCardContainer } from './styled'

interface Props {
  name: string;
  age: number;
  address: string;
  lastAppoitment: string;
  id: string;
}

const PatientCard: React.FC<Props> = ({ name, address, age, lastAppoitment, id }) => {
  return (
    <PatientCardContainer>
      <div className='header'>{name}</div>
      <div className='body'>
        <div className='info'>
          <span>Endereço:</span>
          <span>{address.substring(0, 10)} ...</span>
        </div>
        <div className='info'>
          <span>Idade:</span>
          <span>{age}</span>
        </div>
        <div className='info'>
          <span>Ultima consulta:</span>
          <span>{new Date(lastAppoitment).toLocaleDateString('pt-BR')}</span>
        </div>
      </div>
    </PatientCardContainer>
  )
}

export default PatientCard