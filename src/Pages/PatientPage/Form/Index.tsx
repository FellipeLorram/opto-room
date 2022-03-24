import React, { useContext } from 'react'
import { Input } from '../../../Components/Input/Index'
import { AddToAWorkPlaceButton, FormContainer } from './styled'
import { PatientContext } from '../context/PatientContext';

const PatientForm: React.FC = (): JSX.Element => {
  const {
    name,
    setName,
    address,
    setAddress,
    age,
    setAge,
    birthday,
    setBirthday
  } = useContext(PatientContext);

  return (
    <FormContainer>
      <Input className='patient-form-input' label='Nome' setValue={setName} value={name} type='text' />
      <Input className='patient-form-input' label='Endereço' setValue={setAddress} value={address} type='text' />
      <div className="input-row-container">
        <Input className='patient-form-input' label='Data de nascimento' setValue={setBirthday} value={birthday as string} type='text' format='##/##/####' />
        <Input className='patient-form-input' label='Idade' setValue={setAge} value={age} type='text' />
      </div>
      <AddToAWorkPlaceButton>Local</AddToAWorkPlaceButton> 
    </FormContainer>
  )
}

export default PatientForm