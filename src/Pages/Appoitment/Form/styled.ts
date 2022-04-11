import { motion } from "framer-motion";
import styled from "styled-components";


export const AppointmentFormContainer = styled(motion.div)`
  width: 800px;
  max-width: 90%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem;
  gap: .7rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 2rem;

    .info-container {
      width: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      .info-header {
        font-size: 1rem;
        color: #a0a2ae;
      }

      .info-text {
        font-size: 1rem;
        color: #000;
        padding-left: .3rem;
      }
    }
  }

`;
