import React, { useContext, useState } from 'react'
import { Input } from '../../../Components/Input/Index'
import { AddToAWorkPlaceButton, FormContainer } from './styled'
import { PatientContext } from '../context/PatientContext';
import SelectWorkPlaceModal from './SelectWorkPlaceModal/Index';

const PatientForm: React.FC = (): JSX.Element => {
  const [workPlacesModalOnScreen, setWorkPlacesModalOnScreen] = useState(false);

  const {
    name,
    setName,
    address,
    setAddress,
    age,
    setAge,
    birthday,
    setBirthday,
    cpf,
    setCpf,
    local,
    localColor,
    editForm,
  } = useContext(PatientContext);


  const handleSelectWorkPlaceModalOnScreenClick = () => {
    if (editForm) return;
    setWorkPlacesModalOnScreen(!workPlacesModalOnScreen)
  }

  return (
    <FormContainer formBlock={editForm}>
      <Input disabled={editForm} className='patient-form-input' label='Nome' setValue={setName} value={name} type='text' />
      <Input disabled={editForm} className='patient-form-input' label='Endereço' setValue={setAddress} value={address} type='text' />
      <div className="input-row-container">
        <Input disabled={editForm} className='patient-form-input' label='CPF' setValue={setCpf} value={cpf as string} type='text' format='###.###.###-##' />
        <Input disabled={editForm} className='patient-form-input' label='Data de nascimento' setValue={setBirthday} value={birthday as string} type='text' format='##/##/####' />
        <Input disabled={editForm} className='patient-form-input' label='Idade' setValue={setAge} value={age} type='text' format='##' />
      </div>
      <div className="work-locals-modal-wrapper">
        <SelectWorkPlaceModal onScreen={workPlacesModalOnScreen} setOnScreen={setWorkPlacesModalOnScreen} />
        <AddToAWorkPlaceButton background={localColor ? localColor : 'Default'} onClick={handleSelectWorkPlaceModalOnScreenClick}>{`Local: ${local}`}</AddToAWorkPlaceButton>
      </div>
    </FormContainer >
  )
}

export default PatientForm