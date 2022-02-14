import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FormStepsContainer = styled(motion.div)`
  width: 40rem;
  max-width: 100%;
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
    color: #999999;
    font-weight: 700;
  }

`;
