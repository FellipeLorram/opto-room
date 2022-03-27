import { DocumentData } from 'firebase/firestore'
import React from 'react'
import Patient from '../../../../Entities/Patient'
import { PatientCardContainer } from './styled'

const PatientCard: React.FC<Patient  | DocumentData> = ({ name, address, age, lastAppoitment, id, local, localColor }) => {
  return (
    <PatientCardContainer localColor={localColor || 'Default'}>
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
          <span>{lastAppoitment && new Date(lastAppoitment).toLocaleDateString('pt-BR')}</span>
        </div>
        <div className='info local'>
          <span>Local de atendimento</span>
          <span>{local}</span>
        </div>
      </div>
    </PatientCardContainer>
  )
}

export default PatientCard