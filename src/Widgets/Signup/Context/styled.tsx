import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Background = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const Container = styled(motion.div)`
  width: 60rem;
  max-width: 90%;
  background: ${({ theme }) => theme.colors.card};
  /* height: 100vh; */
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  z-index: 4;
  position: relative;
  .waveOpacity{
    opacity: 0.5;
    position: absolute;
    left: 0;
    bottom: -20px;
    transform: rotate(180deg);
  }
  @media (max-width: 841px) {
    padding-top: 4rem;
    max-width: 100%;
  }
`;
