import React from 'react'
import PatientProps from '../PatientProps'
import { PatientTableContainer, Row } from './styled'


const PatientTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <PatientTableContainer>
      <tr>
        <th>
          Nome
        </th>
        <th>
          Endereço
        </th>
        <th>
          Idade
        </th>
        <th>
          Ultima consulta
        </th>
        <th>
          Local
        </th>
      </tr>
      {children}
    </PatientTableContainer>
  )
}

export const PatientTr: React.FC<PatientProps> = ({ address, age, id, lastAppoitment, name, local, localColor }) => {
  return (
    <Row localColor={localColor}>
      <td>{name}</td>
      <td>{address}</td>
      <td>{age}</td>
      <td>{new Date(lastAppoitment).toLocaleDateString('pt-BR')}</td>
      <td>{local}</td>
    </Row>
  );
}

export default PatientTable