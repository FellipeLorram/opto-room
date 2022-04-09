import React, { useState } from 'react'
import { IRXFinal } from '../../Entities/AppoitmentUtils/RXFinal';
import AppointmentsFields from './Aside/Index'
import AppoitmentContext from './context/Index';
import AppointmentForm from './Form/Index'
import { PageStruct } from './styled'

interface PageParams {
  match: {
    params: {
      id: string
    }
  };
}

const AppoitmentPage: React.FC<PageParams> = ({ match }) => {
  const [rxFinal, setRxFinal] = useState<IRXFinal>({
    left_eye: {
      axle: '',
      cylindrical: '',
      spherical: '',
      visual_acuity: '',
    },
    right_eye: {
      axle: '',
      cylindrical: '',
      spherical: '',
      visual_acuity: '',
    },
  });
  const [anamnesis, setAnamnesis] = useState('')
  const patientRef = match.params.id;

  const contextValue = {
    rxFinal,
    anamnesis,
    patientRef,
    setRxFinal,
    setAnamnesis
  }

  return (
    <PageStruct>
      <AppoitmentContext.Provider value={contextValue}>
        <div className="aside">
          <AppointmentsFields />
        </div>
        <div className="main">
          <AppointmentForm />
        </div>
      </AppoitmentContext.Provider>

    </PageStruct>
  )
}

export default AppoitmentPage