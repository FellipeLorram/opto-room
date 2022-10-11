import { motion } from 'framer-motion';
import styled from 'styled-components';


export const LoadingConainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
`;

export const LoadingDot = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: var(--primary-color);
`;
