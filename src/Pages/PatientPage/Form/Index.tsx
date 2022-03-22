import React, { useContext } from 'react'
import { Input } from '../../../Components/Input/Index'
import { FormContainer } from './styled'
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
      <Input label='Nome' setValue={setName} value={name} type='text' />
      <Input label='Endereço' setValue={setAddress} value={address} type='text' />
      <div className="input-row-container">
        <Input label='Data de nascimento' setValue={setBirthday} value={birthday as string} type='text' format='##/##/####' />
        <Input label='Idade' setValue={setAge} value={age} type='text' />
      </div>

    </FormContainer>
  )
}

export default PatientForm