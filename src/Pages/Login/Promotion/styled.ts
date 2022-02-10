import { motion } from "framer-motion";
import styled from "styled-components";

export const PromotionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background: #1a73e8;
  width: 60%;
  z-index: 2;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  color: #fff;
  align-self: stretch;  
  position: relative;
  .footer {
    position: absolute;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    left: 0;
    bottom: 0;
    background: #fff;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    a{
      color: #1a73e8;
      font-size: .9rem;
    }

    .dots-container {
      display: flex;
      gap: 1rem;
    }
  }
`;

export const PromotionContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  gap: 1rem;


  .promo-text {
    padding: 0 10rem;
    text-align: center;
    font-size: 1.3rem;
    color: #fff;
  }
`;

export const DotContainer = styled.span`
  border-radius: 50%;
  border: 2px solid #1a73e8;
  /* height: 15px;
  width: 15px; */
  padding: 3px;
  cursor: pointer;
  background: ${({ active }: { active: boolean }) => active ? '#1a73e8' : 'none'};
  transition: all 0.2s ease-in-out;
  :hover {
    background: ${({ active }: { active: boolean }) => active ? '#1a73e8' : '#1a73e820'};
  }
`;
