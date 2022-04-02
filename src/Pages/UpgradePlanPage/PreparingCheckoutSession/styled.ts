import { motion } from "framer-motion";
import styled from "styled-components";

export const PreparingCheckoutSessionContainer = styled(motion.div)`
  width: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-self: stretch;
  gap: 1rem;
  background: #fff;
  width: 50vw;
  padding: 3rem;
  margin: 1vh auto 0;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 8px;
  img {
    width: 325px;
    max-width: 90%;
    animation: ImgAnimation 5s ease-in-out infinite;
  }

  .text {
    font-size: 1.2rem;
    text-align: center;
  }

  @keyframes ImgAnimation {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0);
    }
  }

`