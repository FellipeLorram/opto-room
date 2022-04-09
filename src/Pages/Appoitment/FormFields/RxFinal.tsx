import React, { useState } from 'react'
import { Input } from '../../../Components/Input/Index'
import { InputFieldsContainer } from './styled'

const RxFinal: React.FC = () => {
  const [esfOd, setEsfOd] = useState('')
  return (
    <InputFieldsContainer>
      <Input type='' label='Esf' format='##.##' value={esfOd} setValue={setEsfOd} />
      <Input type='' label='Cil' format='##.##' value={esfOd} setValue={setEsfOd} />
      <Input type='' label='Eixo' format='##.##' value={esfOd} setValue={setEsfOd} />
    </InputFieldsContainer>
  )
}

export default RxFinal;
