import { motion } from "framer-motion";
import styled from "styled-components";

export const NoPatientContainer = styled(motion.div)`
  max-width: 100%;
  width: 40rem;
  padding: 2rem;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;

  .modal-text {
    font-size: 1.2rem;
  }

  .svg {
    width: 11rem;
    height: 11rem;
  }

  .add-patient-button{
    padding: .5rem 0;
    gap: .5rem;
    font-size: .9rem;
    svg{
      width: 1.1rem;
      stroke: #fff;
    }
  }
`;