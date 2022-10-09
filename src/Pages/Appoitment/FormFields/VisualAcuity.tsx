import { AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { Input } from '../../../Components/Input/Index';
import { VisualAcuityInitialVState } from '../AppointmentInitialStates';
import AppoitmentContext from '../context/Appointment/Index';
import { FormFieldContext } from '../context/FormFields/Index';
import FormFieldWrapper from './FormFieldWrapper';
import { FieldContainer, InputFieldsContainer } from './styled';


const VisualAcuity: React.FC = () => {
  const { visualAcuityOnScreen, setVisualAcuityOnScreen } = useContext(FormFieldContext);
  const { setVisualAcuity } = useContext(AppoitmentContext);

  const [CCOdLonge, setCCOdLonge] = useState('');
  const [CCOdPerto, setCCOdPerto] = useState('');
  const [CCOdPH, setCCOdPH] = useState('');

  const [CCOeLonge, setCCOeLonge] = useState('');
  const [CCOePerto, setCCOePerto] = useState('');
  const [CCOePH, setCCOePH] = useState('');

  const [SCOdLonge, setSCOdLonge] = useState('');
  const [SCOdPerto, setSCOdPerto] = useState('');
  const [SCOdPH, setSCOdPH] = useState('');

  const [SCOeLonge, setSCOeLonge] = useState('');
  const [SCOePerto, setSCOePerto] = useState('');
  const [SCOePH, setSCOePH] = useState('');

  const [usedOptotype, setUsedOptotype] = useState('');

  useEffect(() => {
    setVisualAcuity({
      CC: {
        rightEye: {
          far: CCOdLonge,
          near: CCOdPerto,
          ph: CCOdPH
        },
        leftEye: {
          far: CCOeLonge,
          near: CCOePerto,
          ph: CCOePH
        },
      },
      SC: {
        rightEye: {
          far: SCOdLonge,
          near: SCOdPerto,
          ph: SCOdPH
        },
        leftEye: {
          far: SCOeLonge,
          near: SCOePerto,
          ph: SCOePH
        },
      },
      usedOptotype: usedOptotype,
    })
  }, [
    CCOdLonge,
    CCOdPerto,
    CCOdPH,
    CCOeLonge,
    CCOePerto,
    CCOePH,
    SCOdLonge,
    SCOdPerto,
    SCOdPH,
    SCOeLonge,
    SCOePerto,
    SCOePH,
    usedOptotype,
    setVisualAcuity
  ])

  useEffect(() => {
    if (!visualAcuityOnScreen) setVisualAcuity(VisualAcuityInitialVState);
  }, [visualAcuityOnScreen, setVisualAcuity])

  return (
    <AnimatePresence>
      {visualAcuityOnScreen && (
        <FormFieldWrapper
          setFieldOnScreen={setVisualAcuityOnScreen}
        >
          <FieldContainer>
            <div className="title">Acuidade visual</div>
            <div className="sub-title">CC</div>
            <div className="sub-title">Olho direito</div>
            <InputFieldsContainer>
              <Input setValue={setCCOdLonge} value={CCOdLonge} type="text" className='appoitment-input' label='Longe OD' />
              <Input setValue={setCCOdPerto} value={CCOdPerto} type="text" className='appoitment-input' label='Perto OD' />
              <Input setValue={setCCOdPH} value={CCOdPH} type="text" className='appoitment-input' label='PH OD' />
            </InputFieldsContainer>
            <div className="sub-title">Olho direito</div>
            <InputFieldsContainer>
              <Input setValue={setCCOeLonge} value={CCOeLonge} type="text" className='appoitment-input' label='Longe OE' />
              <Input setValue={setCCOePerto} value={CCOePerto} type="text" className='appoitment-input' label='Perto OE' />
              <Input setValue={setCCOePH} value={CCOePH} type="text" className='appoitment-input' label='PH OE' />
            </InputFieldsContainer>

            <div className="sub-title">SC</div>
            <div className="sub-title">Olho direito</div>
            <InputFieldsContainer>
              <Input setValue={setSCOdLonge} value={SCOdLonge} type="text" className='appoitment-input' label='Longe OD' />
              <Input setValue={setSCOdPerto} value={SCOdPerto} type="text" className='appoitment-input' label='Perto OD' />
              <Input setValue={setSCOdPH} value={SCOdPH} type="text" className='appoitment-input' label='PH OD' />
            </InputFieldsContainer>
            <div className="sub-title">Olho direito</div>
            <InputFieldsContainer>
              <Input setValue={setSCOeLonge} value={SCOeLonge} type="text" className='appoitment-input' label='Longe OE' />
              <Input setValue={setSCOePerto} value={SCOePerto} type="text" className='appoitment-input' label='Perto OE' />
              <Input setValue={setSCOePH} value={SCOePH} type="text" className='appoitment-input' label='PH OE' />
            </InputFieldsContainer>
            <div className="sub-title">Optotipo Usado</div>
            <InputFieldsContainer>
              <Input setValue={setUsedOptotype} value={usedOptotype} type="text" className='appoitment-input' label='Optotipo Usado' />
            </InputFieldsContainer>
          </FieldContainer>
        </FormFieldWrapper>
      )}
    </AnimatePresence>
  )
}

export default VisualAcuity;