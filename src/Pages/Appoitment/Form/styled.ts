import { motion } from "framer-motion";
import styled from "styled-components";

interface FormProps {
  formBlock?: boolean;
}

export const AppointmentFormContainer = styled(motion.div)<FormProps>`
  width: 800px;
  max-width: 90%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .input-row-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
  }

  .patient-form-input {
    width: 100%;
   /* border: 1px solid #ccc; */
   box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
   :hover {
     border-color: ${({ theme, formBlock }) => !formBlock ? theme.colors.secondary : 'transparent'};
   }
  }

  .work-locals-modal-wrapper {
    align-self: flex-start;
    position: relative;
  }

`;
