import { AnimatePresence } from 'framer-motion';
import React, { useContext, useState } from 'react'
import { Input } from '../../../Components/Input/Index';
import { FormFieldContext } from '../context/FormFields/Index';
import FormFieldWrapper from './FormFieldWrapper';
import { FieldContainer, InputFieldsContainer } from './styled'



const FamilyHistoryComponent: React.FC = () => {
  const [familyHistory, setFamilyHistory] = useState('');
  const { familyHistoryOnScreen, setfamilyHistoryOnScreen } = useContext(FormFieldContext);
  return (
    <AnimatePresence>
      {familyHistoryOnScreen && (
        <FormFieldWrapper
        setFieldValue={setFamilyHistory}
          setFieldOnScreen={setfamilyHistoryOnScreen}
        >
          <FieldContainer>
            <div className="title">
              Histórico familiar
            </div>
            <InputFieldsContainer>
              <Input className='appoitment-input' value={familyHistory} setValue={setFamilyHistory} type="text" label='Histórico familiar' />
            </InputFieldsContainer>
          </FieldContainer>
        </FormFieldWrapper>
      )}
    </AnimatePresence>
  );
}

export default FamilyHistoryComponent
