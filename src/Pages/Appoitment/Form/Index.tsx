import React from 'react';
import RxFinal from '../FormFields/RxFinal';
import { AppointmentFormContainer } from './styled'


const AppointmentForm: React.FC = () => {  
  return (
    <AppointmentFormContainer>
      <div className="header">
        Nome: { }
      </div>
      <RxFinal />
    </AppointmentFormContainer>
  )
}

export default AppointmentForm