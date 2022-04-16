import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../../../Components/Input/Index';
import AppoitmentContext from '../context/Appointment/Index';
import { FieldContainer, InputFieldsContainer } from './styled'

const Anamnises: React.FC = () => {
  const [anamnesis, setAnamnesisState] = useState('');

  const {
    setAnamnesis,
  } = useContext(AppoitmentContext)

  useEffect(() => {
    setAnamnesis(anamnesis);
  }, [setAnamnesis, anamnesis])

  return (
    <FieldContainer>
      <div className="title">
        Anaminese
      </div>
      <InputFieldsContainer>
        <Input className='appoitment-input' value={anamnesis} setValue={setAnamnesisState} type="text" label='Anaminese' />
      </InputFieldsContainer>
    </FieldContainer>
  )
}

export default Anamnises;