import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { Check } from '../../../../Assets/svgs/Check';
import { Close } from '../../../../Assets/svgs/CloseX';
import useGetLocals from '../../../../firebase/firestore/locals/getLocals';
import { ModalContainer, WorkPlaceCheck } from './styled';


interface Props {
  onScreen: boolean;
  setOnScreen(value: boolean): void;
}

const SelectWorkPlaceModal: React.FC<Props> = ({ setOnScreen, onScreen }) => {
  const [locals] = useGetLocals();
  const handleCloseClick = () => {
    setOnScreen(false);
  }
  return (
    <AnimatePresence>
      {onScreen && (
        <ModalContainer>
          <div className="pre-header">
            <Close className='close-button' onClick={handleCloseClick} />
          </div>
          <div className="header">
            Seus Locais
          </div>
          <div className="body">
            {locals && locals?.length > 0 && (
              locals?.map(local => (

                <WorkPlaceCheck selected={false}>
                  <span className="filter">{local.name}</span>
                  <span className="check">
                    <Check className='checked' />
                  </span>
                </WorkPlaceCheck>

              ))
            )}
          </div>
        </ModalContainer>
      )}
    </AnimatePresence>

  )
}

export default SelectWorkPlaceModal