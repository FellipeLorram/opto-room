import { motion } from "framer-motion";
import styled from "styled-components";

export const AppoitmentsContainer = styled(motion.div)`
  width: 80%;
  max-width: 90%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .header {
    width: 100%;
    text-align: left;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem 2rem;
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

  .add-appointment-button{
    padding: .5rem 0;
    gap: .5rem;
    font-size: .9rem;
    svg{
      width: 1.1rem;
      height: 1.1rem;
      stroke: #fff;
    }
  }
 
`;
