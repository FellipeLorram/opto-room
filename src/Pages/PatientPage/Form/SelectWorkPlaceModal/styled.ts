import { motion } from "framer-motion";
import styled from "styled-components";
import { localColor } from "../../../../Entities/Patient";

export const ModalContainer = styled(motion.div)`
  position: absolute;
  right: -30%;
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
  z-index: 3;

  .pre-header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .close-button {
      stroke: #838695;
      width: .9rem;
      height: .9rem;
      cursor: pointer;
    }

  }

  .header {
    width: 100%;
    text-align:left;
    font-size: .9rem;
    color: #838695;
    padding: .1rem;
    border-bottom: 1px solid  #83869530;
  }

  .body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: .3rem;
  }
`;


interface IWorkPlaceCheckProps {
  selected: boolean;
  color: localColor
}

const defaultColorCheck = (color: string) => {
  return color === 'Default' ? '#838695' : '#ffffff'
}

export const WorkPlaceCheck = styled.div<IWorkPlaceCheckProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  width: 100%;

  .local{
    text-align: center;
    font-size: 1rem;
    background: ${({ selected, color, theme }) => selected ? theme.colors.localColors[color] : `${theme.colors.localColors[color]}05`};
    color: ${({ selected, color, theme }) => selected ? defaultColorCheck(color) : theme.colors.localColors[color]};
    cursor: pointer;
    padding: .2rem 1rem;
    width: 100%;
    border-radius: 6px;
  }
  
`
