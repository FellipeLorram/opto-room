import { motion } from "framer-motion";
import styled from "styled-components";

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  position: relative;
  .actions-button-container{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    position: relative;
  }  
`;

export const FilterOptions = styled(motion.div)`
  position: absolute;
  right: -50%;
  top: 0;
  background: #fff;
`
export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  width: 100%;
  .filter{
    text-align: left;
    font-size: .9rem;
    color: #838695;
  }

  .check {
    
  }
`
