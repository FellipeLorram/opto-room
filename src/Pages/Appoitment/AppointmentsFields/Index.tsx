import React from 'react';
import Field from './Field/Index';
import { AppointmentsFieldsContainer } from './styled';

const AppointmentsFields: React.FC = () => {
  return (
    <AppointmentsFieldsContainer>
      <div className="header">
        Clique em um campo para adicioná-lo no formulário da consulta
      </div>

      <div className="fields">
        Campos
      </div>

      <div className="fields-grid">
        <Field />
        <Field />
      </div>
    </AppointmentsFieldsContainer>
  )
}

export default AppointmentsFields;
