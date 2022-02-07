import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled(motion.div)`
  background: #fff;
  color: ${({ theme }) => theme.colors.logo};
  font-size: 1rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: var(--radius);
  max-width: 200px;
`;

interface Props {
  children: React.ReactNode;
  className?: string;
  rotate?: number[];
}

const CommentContainer: React.FC<Props> = ({ className, children, rotate }) => {
  return <Container
    initial={{ scale: 1, rotate: 0, }}
    animate={{ scale: 1.05, rotate: rotate}}
    transition={{
      duration: 2,
      ease: 'easeInOut',
      repeat: 2000000000,
      repeatType: 'mirror'
    }}
    className={className}
  >
    {children}
  </Container>;
};

export { CommentContainer };
