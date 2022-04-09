import React, { useState } from 'react'
import { Input } from '../../../Components/Input/Index'
import AppoitmentInputWrapper from '../components/Appointmentnput/Index'
import { InputFieldsContainer } from './styled'

const RxFinal: React.FC = () => {
  const [esfOd, setEsfOd] = useState('')
  const [cilOd, setCilOd] = useState('')
  const [axleOd, setAxleOd] = useState('');
  return (
    <InputFieldsContainer onClick={() => console.log(esfOd)}>
      <AppoitmentInputWrapper value={esfOd} setValue={setEsfOd} type="text" label='ESF' />
      <AppoitmentInputWrapper value={cilOd} setValue={setCilOd} type="text" label='CIL' />
      <Input className='appoitment-input' value={axleOd} setValue={setAxleOd} type="text" format='###' label='EIXO' />
      <Input className='appoitment-input' value={axleOd} setValue={setAxleOd} type="text" format='###' label='EIXO' />
    </InputFieldsContainer >
  )
}

export default RxFinal;
