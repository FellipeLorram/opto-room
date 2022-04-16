import { motion } from "framer-motion";
import styled from "styled-components";

export const FieldContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;  
  /* box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */
  padding: 1rem;
  width: 100%;
  gap: 1rem;
  position: relative;

  .title, .sub-title {
    width: 100%;
    padding: 0 1rem;
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .sub-title {
    font-size: 1rem;
    color: #a0a2ae;
  }
`;


export const FieldWrapper = styled(motion.div)`
  width: 100%;
  position: relative;
  .action {
    position:  absolute;
    right: 2%;
    top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .2rem;
    width: 5px;
    cursor: pointer;
    z-index: 2;

    .delete {
      width: 1rem;
      height: 1rem;
      transition: all .2s ease-in-out;
      stroke: #a0a2ae;
    }

    :hover {
      .delete {
        stroke: #ff4d4d;
      }
    }
  }
`;

interface IInputFieldsContainerProps {
  flex?: boolean;
}

export const InputFieldsContainer = styled.div<IInputFieldsContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .appoitment-input {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    width: 100%;
    max-width: ${({ flex }) => flex && '140px'};
  }
`;
