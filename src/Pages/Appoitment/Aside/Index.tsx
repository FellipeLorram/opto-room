import React, { useContext } from 'react';
import { ChevronLeft } from '../../../Assets/svgs/ChevronLeft';
import { FormFieldContext } from '../context/FormFields/Index';
import Field from './Field/Index';
import { AppointmentsFieldsContainer } from './styled';

interface Props {
  setGoBackModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppointmentsFields: React.FC<Props> = ({ setGoBackModal }) => {
  const {
    familyHistoryOnScreen,
    setfamilyHistoryOnScreen,
  } = useContext(FormFieldContext);

  const fields = [
    { fieldText: 'Histórico Familiar', setFieldOnForm: setfamilyHistoryOnScreen, fieldOnForm: familyHistoryOnScreen }
  ]

  return (
    <AppointmentsFieldsContainer>
      <div onClick={() => setGoBackModal(true)} className="backwards-container">
        <ChevronLeft className='svg-icon' />
        <span>
          Cancelar e voltar
        </span>
      </div>

      <div className="header">
        Clique em um campo para adicioná-lo no formulário da consulta
      </div>

      <div className="fields">
        Campos
      </div>

      <div className="fields-grid">
        {fields.map(({ fieldText, setFieldOnForm, fieldOnForm }) => (
          <Field fieldOnForm={fieldOnForm} setFieldOnForm={setFieldOnForm} fieldText={fieldText} />
        ))}
      </div>


    </AppointmentsFieldsContainer>
  )
}

export default AppointmentsFields;
