import React, { useState } from 'react';
import { ChevronLeft } from '../../../Assets/svgs/ChevronLeft';
import GoBackModal from '../GoBackModal/Index';
import Field from './Field/Index';
import { AppointmentsFieldsContainer } from './styled';

const AppointmentsFields: React.FC = () => {
  const [goBackModal, setGoBackModal] = useState(false);
  return (
    <AppointmentsFieldsContainer>
      <GoBackModal onScreen={goBackModal} setOnScreen={setGoBackModal} />
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
        <Field />
        <Field />
      </div>


    </AppointmentsFieldsContainer>
  )
}

export default AppointmentsFields;
