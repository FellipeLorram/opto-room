import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Background = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const Container = styled(motion.div)`
  width: 60rem;
  background: ${({ theme }) => theme.colors.card};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  z-index: 4;
`;
