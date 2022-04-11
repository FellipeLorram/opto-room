import React, { useContext } from 'react';
import useGetPatient from '../../../firebase/firestore/Patients/getPatient';
import AppoitmentContext from '../context/Index';
import ButtonsRequestAction from '../DataHandle/ButtonsRequestAction';
import Anamnises from '../FormFields/Anamnises';
import RxFinal from '../FormFields/RxFinal';
import { AppointmentFormContainer } from './styled'


const AppointmentForm: React.FC = () => {
  const { patientRef } = useContext(AppoitmentContext)
  const [patientData] = useGetPatient(patientRef);

  return (
    <AppointmentFormContainer>
      <div className="header">
        <div className="info-container">
          <div className="info-header">
            Nome: <span className='info-text'>{patientData?.name}</span>
          </div>
        </div>
        <div className="info-container">
          <div className="info-header">
            Idade: <span className='info-text'>{patientData?.age}</span>
          </div>
        </div>
      </div>

      <Anamnises />
      <RxFinal />
      
      <ButtonsRequestAction />
    </AppointmentFormContainer>
  )
}

export default AppointmentForm