import { motion } from "framer-motion";
import styled from "styled-components";

export const FilterOptions = styled(motion.div)`
  position: absolute;
  right: -100%;
  top: -50%;
  background: #fff;
  padding: .7rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: .2rem;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  
  .header {
    width: 100%;
    text-align:left;
    font-size: .8rem;
    color: #838695;
    padding: .1rem;
    border-bottom: 1px solid  #83869530;
  }
`

interface IFilterContainerProps {
  active: boolean;
}

export const FilterContainer = styled.div<IFilterContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  width: 100%;

  .filter{
    text-align: left;
    font-size: .9rem;
    color: ${({ active }) => active ? '#5d9cef' : '#838695'};
    cursor: pointer;
  }

  .check {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #83869530;
    height: 1rem;
    width: 1rem;
    border-radius: 3px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    background: ${({ active }) => active ? '#1a73e8' : '#fff'};
    .checked {
      stroke: #fff;
    }
  }
`
