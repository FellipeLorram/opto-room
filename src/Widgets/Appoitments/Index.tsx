import { AnimatePresence } from 'framer-motion';
import React from 'react'
import useGetAppoitments from '../../firebase/firestore/Appoitments/GetAppoitments';
import { AppoitmentsContainer } from './styled'

interface Props {
  patientId?: string;
}

const AppoitmentsGrid: React.FC<Props> = ({ patientId }) => {
  const [appoitments] = useGetAppoitments(patientId)
  return (
    <AnimatePresence>
      {patientId && (
        <AppoitmentsContainer>
          <div className="header">Consultas</div>
          {appoitments && appoitments.length > 0 ? '' : (
            <></>
          )}
        </AppoitmentsContainer>
      )}
    </AnimatePresence>

  )
}

export default AppoitmentsGrid