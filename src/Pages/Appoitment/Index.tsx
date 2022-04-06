import React from 'react'
import AppointmentsFields from './AppointmentsFields/Index'
import { AppointmentFormContainer } from './Form/styled'
import { PageStruct } from './styled'

const AppoitmentPage: React.FC = () => {
  return (
    <PageStruct>
      <div className="aside">
        <AppointmentsFields />
      </div>
      <div className="main">
        <AppointmentFormContainer />
      </div>
    </PageStruct>
  )
}

export default AppoitmentPage