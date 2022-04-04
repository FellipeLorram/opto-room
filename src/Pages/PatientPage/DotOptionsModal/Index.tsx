import { AnimatePresence } from 'framer-motion'
import React, { useContext } from 'react'
import { Close } from '../../../Assets/svgs/CloseX';
import { EditIcon } from '../../../Assets/svgs/EditIcon';
import { Trash } from '../../../Assets/svgs/Trash';
import { PatientContext } from '../context/PatientContext';
import { variants } from '../Form/SelectWorkPlaceModal/variants';
import { ModalOptionsContainer } from './styled'

interface Props {
  onScreen: boolean;
  setOnScreen(value: boolean): void;
}

const DotOptionsModal: React.FC<Props> = ({ onScreen, setOnScreen }) => {
  const { setEditForm } = useContext(PatientContext)

  const handleEditActionClick = () => {
    setEditForm(false);
    setOnScreen(false);
  }

  return (
    <AnimatePresence>
      {onScreen && (
        <ModalOptionsContainer
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="pre-header">
            <Close className='close-button' onClick={() => setOnScreen(false)} />
          </div>
          <div className="body">
            <div onClick={handleEditActionClick} className='action-button'>
              <EditIcon className='action-button-icon' />
              <span>Editar</span>
            </div>
            <div className='action-button'>
              <Trash className='action-button-icon' />
              <span>Deletar</span>
            </div>
          </div>
        </ModalOptionsContainer>
      )}
    </AnimatePresence>
  )
}

export default DotOptionsModal