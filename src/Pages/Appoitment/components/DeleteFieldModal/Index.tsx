import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Close } from '../../../../Assets/svgs/CloseX';
import { Trash } from '../../../../Assets/svgs/Trash';
import { DeleteFieldModalContainer } from './styled';

const variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  }
}

interface Props {
  onScreen: boolean;
  setOnScreen: React.Dispatch<React.SetStateAction<boolean>>
  setFieldOnScreen: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteFieldModal: React.FC<Props> = ({ onScreen, setFieldOnScreen, setOnScreen }) => {
  const handleDeleteClick = () => {
    setFieldOnScreen(false);
  }
  return (
    <AnimatePresence>
      {onScreen && (
        <DeleteFieldModalContainer
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <div className="pre-header">
            <Close className='close-button' onClick={() => setOnScreen(false)} />
          </div>
          <div className="body">
            <Trash className="delete-field-modal-icon" />
            <div onClick={handleDeleteClick} className="delete-field-modal-text">
              Deletar campo
            </div>
          </div>
        </DeleteFieldModalContainer>
      )}
    </AnimatePresence>

  )
}

export default DeleteFieldModal