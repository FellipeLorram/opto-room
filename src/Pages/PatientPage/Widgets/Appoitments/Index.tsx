import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { AddNote } from '../../../../Assets/svgs/AddNote';
import { Button } from '../../../../Components/Button/Index';
import useGetAppoitments from '../../../../firebase/firestore/Appoitments/GetAppoitments';
import history from '../../../../Services/history';
import NoAppoitments from './NoAppointments';
import { AppoitmentsContainer } from './styled'

const variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: { type: 'tween', delay: 0.2 }
  },
}


interface Props {
  patientid?: string;
}

const Appoitments: React.FC<Props> = ({ patientid }) => {
  const [appoitments] = useGetAppoitments(patientid);

  return (
    <AnimatePresence>
      {patientid && (
        <AppoitmentsContainer
          variants={variants}
          initial="initial"
          animate="animate"

        >
          <div className="header">
            Consultas
            <Button onClick={() => history.push(`/${patientid}/new-appoitment`)} className='add-appointment-button'>
              <span className='text'>
                Iniciar consulta
              </span>
              <AddNote />
            </Button>
          </div>
          {appoitments && appoitments.length > 0 ? (
            <>
              a
            </>
          ) : (
            <NoAppoitments />
          )}
        </AppoitmentsContainer>
      )}
    </AnimatePresence>

  )
}

export default Appoitments
