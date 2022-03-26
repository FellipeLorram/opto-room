import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react'
import { Close } from '../../../../Assets/svgs/CloseX';
import { localColor } from '../../../../Entities/Patient';
import useGetLocals from '../../../../firebase/firestore/locals/getLocals';
import { PatientContext } from '../../context/PatientContext';
import { ModalContainer, WorkPlaceCheck } from './styled';
import { variants } from './variants';


interface Props {
  onScreen: boolean;
  setOnScreen(value: boolean): void;
}

const SelectWorkPlaceModal: React.FC<Props> = ({ setOnScreen, onScreen }) => {
  const [locals] = useGetLocals();

  const { local, setLocalColor, setLocal } = useContext(PatientContext)

  const handleCloseClick = () => {
    setOnScreen(false);
  }

  const handleLocalClick = (index: number) => {
    if (!locals) return
    if (index === -1) {
      setLocal('Avulso');
      setLocalColor('Default');
      return;
    }
    setLocalColor(locals[index].color as localColor);
    setLocal(locals[index].name);
  }

  return (
    <AnimatePresence>
      {onScreen && (
        <ModalContainer
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="pre-header">
            <Close className='close-button' onClick={handleCloseClick} />
          </div>
          <div className="header">
            Seus Locais
          </div>
          <div className="body">
            {locals && locals?.length > 0 && (
              locals?.map((localDoc, index) => (

                <WorkPlaceCheck onClick={() => handleLocalClick(index)} color={localDoc.color ? localDoc.color : 'Default'} selected={localDoc.name === local}>
                  <span className="local">{localDoc.name}</span>
                </WorkPlaceCheck>

              ))
            )}
            <WorkPlaceCheck onClick={() => handleLocalClick(-1)} color='Default' selected={'Avulso' === local}>
              <span className="local">Avulso</span>
            </WorkPlaceCheck>
          </div>
        </ModalContainer>
      )}
    </AnimatePresence>

  )
}

export default SelectWorkPlaceModal