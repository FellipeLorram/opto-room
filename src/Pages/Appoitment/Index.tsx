import React, { useState } from 'react'
import { IRXFinal } from '../../Entities/AppoitmentUtils/RXFinal';
import AppointmentsFields from './Aside/Index'
import AppoitmentContext from './context/Appointment/Index';
import AppointmentForm from './Form/Index'
import { PageStruct } from './styled'
import GoBackModal from './GoBackModal/Index';
import FormFieldContextWrapper from './context/FormFields/Index';

interface PageParams {
  match: {
    params: {
      patientId: string,
      AppointmentId: string
    }
  };
}

const AppoitmentPage: React.FC<PageParams> = ({ match }) => {
  const [goBackModal, setGoBackModal] = useState(false);
  const [rxFinal, setRxFinal] = useState<IRXFinal>({
    leftEye: {
      axle: '',
      cylindrical: '',
      spherical: '',
      visualAcuity: '',
    },
    rightEye: {
      axle: '',
      cylindrical: '',
      spherical: '',
      visualAcuity: '',
    },
  });
  const [anamnesis, setAnamnesis] = useState('');


  const patientRef = match.params.patientId;
  const id = match.params.AppointmentId || '';

  const contextValue = {
    rxFinal,
    anamnesis,
    patientRef,
    id,
    setRxFinal,
    setAnamnesis
  }

  return (
    <PageStruct>
      <FormFieldContextWrapper>
        <GoBackModal onScreen={goBackModal} setOnScreen={setGoBackModal} />
        <AppoitmentContext.Provider value={contextValue}>
          <div className="aside">
            <AppointmentsFields setGoBackModal={setGoBackModal} />
          </div>
          <div className="main">
            <AppointmentForm />
          </div>
        </AppoitmentContext.Provider>
      </FormFieldContextWrapper>
    </PageStruct>
  )
}

export default AppoitmentPage