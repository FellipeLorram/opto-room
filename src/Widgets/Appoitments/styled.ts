import { motion } from "framer-motion";
import styled from "styled-components";

export const AppoitmentsContainer = styled(motion.div)`
  width: 80%;
  max-width: 90%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .header {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    padding: 1rem 0 0;
    font-weight: 700;
    color: #4a4953;
  }

  .body {
    width: 100%;
    gap: 1.3rem;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(250px, 300px) );
    grid-template-rows: auto;  
  }

`;
