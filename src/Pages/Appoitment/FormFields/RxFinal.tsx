import React, { useContext, useEffect, useState } from 'react'
import { Input } from '../../../Components/Input/Index'
import AppoitmentInputWrapper from '../components/Appointmentnput/Index'
import AppoitmentContext from '../context/Appointment/Index'
import { FieldContainer, InputFieldsContainer } from './styled'

const RxFinal: React.FC = () => {
  const [esfOd, setEsfOd] = useState('');
  const [cilOd, setCilOd] = useState('');
  const [axleOd, setAxleOd] = useState('');
  const [visualAcuityOd, setVisualAcuityOd] = useState('');

  const [esfOe, setEsfOe] = useState('');
  const [cilOe, setCilOe] = useState('');
  const [axleOe, setAxleOe] = useState('');
  const [visualAcuityOe, setVisualAcuityOe] = useState('');

  const { setRxFinal } = useContext(AppoitmentContext);

  useEffect(() => {
    setRxFinal({
      rightEye: {
        spherical: esfOd,
        cylindrical: cilOd,
        axle: axleOd,
        visualAcuity: visualAcuityOd
      },
      leftEye: {
        spherical: esfOe,
        cylindrical: cilOe,
        axle: axleOe,
        visualAcuity: visualAcuityOe
      }
    });
  }, [
    esfOd,
    cilOd,
    axleOd,
    visualAcuityOd,
    esfOe,
    cilOe,
    axleOe,
    visualAcuityOe,
    setRxFinal,
  ])


  return (
    <FieldContainer>
      <div className="title">
        RX Final
      </div>
      <div className="sub-title">
        Olho direito
      </div>

      <InputFieldsContainer>
        <AppoitmentInputWrapper value={esfOd} setValue={setEsfOd} type="text" label='Esférico Od' />
        <AppoitmentInputWrapper value={cilOd} setValue={setCilOd} type="text" label='Cilindrico Od' />
        <Input className='appoitment-input' value={axleOd} setValue={setAxleOd} type="text" format='###°' label='Eixo Od' />
        <Input className='appoitment-input' value={visualAcuityOd} setValue={setVisualAcuityOd} type="text" format='##/###' label='AC Visual Od' />
      </InputFieldsContainer >

      <div className="sub-title">
        Olho esquerdo
      </div>
      <InputFieldsContainer>
        <AppoitmentInputWrapper value={esfOe} setValue={setEsfOe} type="text" label='Esférico Oe' />
        <AppoitmentInputWrapper value={cilOe} setValue={setCilOe} type="text" label='Cilindrico Oe' />
        <Input className='appoitment-input' value={axleOe} setValue={setAxleOe} type="text" format='###°' label='Eixo Oe' />
        <Input className='appoitment-input' value={visualAcuityOe} setValue={setVisualAcuityOe} type="text" format="##/###" label='AC Visual Oe' />
      </InputFieldsContainer >
    </FieldContainer>
  )
}

export default RxFinal;
