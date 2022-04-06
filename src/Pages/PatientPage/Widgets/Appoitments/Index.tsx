import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react'
import { AddNote } from '../../../../Assets/svgs/AddNote';
import { Button } from '../../../../Components/Button/Index';
import useGetAppoitments from '../../../../firebase/firestore/Appoitments/GetAppoitments';
import history from '../../../../Services/history';
import { PatientContext } from '../../context/PatientContext';
import NoAppoitments from './NoAppoitments/Index';
import { AppoitmentsContainer } from './styled'

const variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: { type: 'tween', delay: 0.2 }
  },
}


interface Props {
  patientId?: string;
}

const Appoitments: React.FC<Props> = ({ patientId }) => {
  const [appoitments] = useGetAppoitments(patientId);

  const { id } = useContext(PatientContext);

  return (
    <AnimatePresence>
      {patientId && (
        <AppoitmentsContainer
          variants={variants}
          initial="initial"
          animate="animate"

        >
          <div className="header">
            Consultas
            <Button onClick={() => history.push(`/${id}/new-appoitment`)} className='add-appointment-button'>
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
