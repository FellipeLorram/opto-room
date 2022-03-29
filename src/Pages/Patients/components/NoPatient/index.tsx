import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { PatientPlus } from '../../../../Assets/svgs/PatientPlus';
import { Button } from '../../../../Components/Button/Index';
import history from '../../../../Services/history';
import { NoPatientContainer } from './styled';
import { AddPatientIllustration } from '../../../../Assets/svgs/AddPatientIllustration'

interface Props {
  onScreen: boolean;
}

const variants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
}

const NoPatients: React.FC<Props> = ({ onScreen }) => {
  return (
    <AnimatePresence>
      {onScreen && (
        <NoPatientContainer
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <AddPatientIllustration className='svg' />
          <div className="modal-text">
            Você ainda não possui nenhum paciente cadastrado..<br />
            <b>Que tal cadastrar o primeiro agora?</b>
          </div>
          <div className="button-container">
            <Button onClick={() => history.push('/new-patient')} className='add-patient-button'>
              <span className='text'>
                Adicionar Paciente
              </span>
              <PatientPlus />
            </Button>
          </div>
        </NoPatientContainer>
      )}
    </AnimatePresence>
  )
}

export default NoPatients