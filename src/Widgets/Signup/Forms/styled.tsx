import { motion } from "framer-motion";
import styled from "styled-components";

export const FormContainer = styled(motion.div)`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  .row, .button-row{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: .5rem 0;
  }

  .button-row {
    padding: 10% 0 0;

    .back-button{
      position: relative;
      svg { 
        position: absolute;
        left: 10%;
      }
    }
  }
`;

export const FormStepsContainer = styled(motion.div)`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const StepsTrace = styled.div`
  width: 70%;
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: 1rem;
  .step-progress{
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
    font-weight: 700;
  }

  .current-step{
    font-size: 1rem;
    color: #00000040;
    font-weight: 700;
  }

`;
