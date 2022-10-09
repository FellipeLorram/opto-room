import React, { useState } from 'react'
import { Trash } from '../../../Assets/svgs/Trash'
import DeleteFieldModal from '../components/DeleteFieldModal/Index'
import { FieldWrapper } from './styled'

const variants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  }
}

interface FieldOnScreenProps {
  setFieldOnScreen: React.Dispatch<React.SetStateAction<boolean>>
}

const FormFieldWrapper: React.FC<FieldOnScreenProps> = ({ children, setFieldOnScreen }) => {
  const [deleteFieldModalOnScreen, setDeleteFieldModalOnScreen] = useState(false);
  return (
    <FieldWrapper
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <DeleteFieldModal
        setOnScreen={setDeleteFieldModalOnScreen}
        setFieldOnScreen={setFieldOnScreen}
        onScreen={deleteFieldModalOnScreen}
      />
      <div onClick={() => setDeleteFieldModalOnScreen(true)} className="action">
        <Trash className='delete' />
      </div>
      {children}
    </FieldWrapper>
  )
}

export default FormFieldWrapper