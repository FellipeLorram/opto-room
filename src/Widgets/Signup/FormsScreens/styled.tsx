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
  position: relative;
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
