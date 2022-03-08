import React from 'react'
import { PatientTableContainer } from './styled'

interface Props {
  name: string;
  age: number;
  address: string;
  lastAppoitment: string;
  id: string;
}

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

export const PatientTr: React.FC<Props> = ({ address, age, id, lastAppoitment, name }) => {
  return (
    <tr className='row'>
      <td>{name}</td>
      <td>{address}</td>
      <td>{age}</td>
      <td>{new Date(lastAppoitment).toLocaleDateString('pt-BR')}</td>
      <td></td>
    </tr>
  );
}

export default PatientTable