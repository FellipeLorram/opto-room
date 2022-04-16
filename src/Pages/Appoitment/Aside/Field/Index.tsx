import React from 'react';
import { FieldContainer } from './styled';

interface IFieldProps {
  fieldText: string;
  fieldOnForm: boolean;
  setFieldOnForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Field: React.FC<IFieldProps> = ({
  fieldText,
  fieldOnForm,
  setFieldOnForm,
}) => {
  const HandleClick = () => {
    if (!fieldOnForm) setFieldOnForm(true);
  }

  return (
    <FieldContainer
      onClick={HandleClick}
      selected={fieldOnForm}
      title={fieldText}
    >
      {fieldText}
    </FieldContainer>
  )
}

export default Field;