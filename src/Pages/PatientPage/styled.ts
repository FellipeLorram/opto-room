import { motion } from "framer-motion";
import styled from "styled-components";

interface IPatientPageStruct {
  patientId?: string | undefined;
}

export const PatientPageStruct = styled.div<IPatientPageStruct>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ patientId }) => patientId ? '1rem' : '6rem'} ;
`;

export const Container = styled(motion.div)<IPatientPageStruct>`
  width: ${({ patientId }) => patientId ? '80%' : '800px'} ;
  max-width: 90%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem; 
  flex-direction: column;
  position: relative;

  .header {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    padding: 1rem 0 0;
    font-weight: 700;
    color: #4a4953;
  }

  .actions-dots {
    position:  absolute;
    right: 2%;
    top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .2rem;
    width: 5px;
    cursor: pointer;

    .dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #ccc;
      transition: all .2s ease-in-out;
    }

    :hover {
      .dot {
        background: var(--primary-color);
      }
    }
  }
`;

