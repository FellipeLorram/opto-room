import { motion } from "framer-motion";
import styled from "styled-components";
import { ModalContainer } from "../../PatientPage/Form/SelectWorkPlaceModal/styled";

export const BackGround = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0,0,0,0.1);
  display: grid;
  place-items: center;
`;

export const CancelModalContainer = styled(ModalContainer)`
  position: initial;
  width: 25rem;
  background: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  .header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border: none;
    .close-button {
      stroke: #838695;
      width: .9rem;
      height: .9rem;
      cursor: pointer;
    }
  }

  .body-text {
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
  }

  .button-container {
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15%;

    button {
      width: 25%;
      padding: 0.5rem 0;
    
      &.save {
        background: #fff;
        border: 1px solid #1a73e8;
        color:#1a73e8;
        :hover {
          background: #f2f2f2;
        }
      }

    }

  }

`
