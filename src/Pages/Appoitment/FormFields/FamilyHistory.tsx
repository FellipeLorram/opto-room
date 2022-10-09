import { AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect } from 'react'
import { Input } from '../../../Components/Input/Index';
import AppoitmentContext from '../context/Appointment/Index';
import { FormFieldContext } from '../context/FormFields/Index';
import FormFieldWrapper from './FormFieldWrapper';
import { FieldContainer, InputFieldsContainer } from './styled'



const FamilyHistoryComponent: React.FC = () => {
  const { familyHistoryOnScreen, setfamilyHistoryOnScreen } = useContext(FormFieldContext);
  const { familyHistory, setFamilyHistory } = useContext(AppoitmentContext);

  useEffect(() => {
    if (!familyHistoryOnScreen) setFamilyHistory('');

  }, [familyHistoryOnScreen, setFamilyHistory])


  return (
    <AnimatePresence>
      {familyHistoryOnScreen && (
        <FormFieldWrapper
          setFieldOnScreen={setfamilyHistoryOnScreen}
        >
          <FieldContainer>
            <div className="title">
              Histórico familiar
            </div>
            <InputFieldsContainer>
              <Input className='appoitment-input' value={familyHistory || ''} setValue={setFamilyHistory} type="text" label='Histórico familiar' />
            </InputFieldsContainer>
          </FieldContainer>
        </FormFieldWrapper>
      )}
    </AnimatePresence>
  );
}

export default FamilyHistoryComponent
