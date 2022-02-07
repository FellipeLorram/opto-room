import { motion } from "framer-motion";
import styled from "styled-components";

export const FormContainer = styled(motion.div)`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  .row{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: .5rem 0;
  }

  .button-container {
    width: 70%;
    padding: 10% 0 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
  padding: 0 1rem;
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
