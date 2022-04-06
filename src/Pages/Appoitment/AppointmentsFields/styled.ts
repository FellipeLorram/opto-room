import { motion } from "framer-motion";
import styled from "styled-components";

export const AppointmentsFieldsContainer = styled(motion.div)`
  width: 100%;
  background: #fff;
  align-self: stretch;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 2rem 1rem;

  .header {
    font-size: .9rem; 
    font-weight: 700;
    text-align: center;
    color: #a0a2ae;
  }

  .fields {
    padding: 1.5rem 0 .2rem;
    font-size: 1rem; 
    font-weight: 700;
    text-align: left;
    color: #000;
    border-bottom: 1px solid #a0a2ae70;
  }

  .fields-grid {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: .5rem;
  }

`;
