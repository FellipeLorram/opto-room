import { motion } from "framer-motion";
import styled from "styled-components";

export const FormContainer = styled(motion.div)`
  width: 40rem;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  .row, .button-row{
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: .5rem 0;
    @media (max-width: 768px) {
      width: 85%;
    }
  }

  .button-row {
    padding: 10% 0 0;
  }
  .back-button{
    position: relative;
    svg { 
      position: absolute;
      left: 10%;
    }
  }

  .row.verify-message {
    font-size: 1rem;
    color: #00000099;
    span{
      background: ${({ theme }) => theme.colors.secondary};
      color: #fff;
      padding: 2px 5px;
      border-radius: 5px;
    }
  }

  .paid-button {
    width: unset;
  }
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
 
`;

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
    color: #00000040;
    font-weight: 700;
  }

`;

interface ModalityCardProps {
  selected?: boolean;
}

export const ModalityCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  padding: 1.5rem;
  cursor: pointer;
  width: 100%;
  background: #fff;
  transition: all 0.2s ease-in-out;
  align-self: stretch;
  gap: 0.5rem;
  border: ${({ selected }: ModalityCardProps) => selected ? '1px solid #1a73e8' : '1px solid transparent'};

  .header {
    color: ${({ selected }: ModalityCardProps) => selected ? '#1a73e8' : '#a6a6a6'};
    font-size: 1rem;
    font-weight: 700;
  }

  .price{
    font-size: 2.2rem;
    color: #00cc00;
  }

  :hover{
    background: #1a73e810;
  }

  .benefits-list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    color: #a6a6a6;
    font-size: .8rem;

    .benefit{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      gap: 0.5rem;

    }
  }

  .check{
    width: 1rem;
    stroke: #88c6a3;
  }

`;
