import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { AddNote } from '../../Assets/svgs/AddNote';
import { Button } from '../../Components/Button/Index';
import useGetAppoitments from '../../firebase/firestore/Appoitments/GetAppoitments';
import NoAppoitments from './NoAppoitments/Index';
import { AppoitmentsContainer } from './styled'

interface Props {
  patientId?: string;
}

const Appoitments: React.FC<Props> = ({ patientId }) => {
  const [appoitments] = useGetAppoitments(patientId)
  return (
    <AnimatePresence>
      {patientId && (
        <AppoitmentsContainer>
          <div className="header">
            Consultas
            <Button className='add-appointment-button'>
              <span className='text'>
                Iniciar consulta
              </span>
              <AddNote />
            </Button>
          </div>
          {appoitments && appoitments.length > 0 ? '' : (
            <NoAppoitments />
          )}
        </AppoitmentsContainer>
      )}
    </AnimatePresence>

  )
}

export default Appoitments
