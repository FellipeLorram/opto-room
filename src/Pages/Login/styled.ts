import { motion } from 'framer-motion';
import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  /* ${({ theme }) => theme.colors.background}; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: row; 
  gap: 2rem;
  padding: 2rem;
  
  .background-wave{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
    path {
      fill: #0e518b60;
    }
  }
  @media (max-width: 568px) {
    padding: 0;
  }
`;


export const CardContainer = styled(motion.div)`
  width: 30rem;
  max-width: 90%;
  align-self: stretch;  

  background: ${({ theme }) => theme.colors.card};

  padding: 2rem;
  /* box-shadow: var(--shadow); */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 2rem;

  z-index: 2;

  .container-header{
    width: 100%;
    text-align: center;
  }

  @media (max-width: 568px) {
    width: 100%;
    max-width: 100%;
    /* height: 100%; */
    align-self: stretch;  
  }
`;
