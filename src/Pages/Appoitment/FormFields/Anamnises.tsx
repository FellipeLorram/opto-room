import React, { useState } from 'react'
import { Input } from '../../../Components/Input/Index';
import { FieldContainer, InputFieldsContainer } from './styled'

const Anamnises: React.FC = () => {
  const [Anamnesis, setAnamnesis] = useState('');
  return (
    <FieldContainer>
      <div className="title">
        Anaminese
      </div>
      <InputFieldsContainer>
        <Input className='appoitment-input' value={Anamnesis} setValue={setAnamnesis} type="text" label='Anaminese' />
      </InputFieldsContainer>
    </FieldContainer>
  )
}

export default Anamnises