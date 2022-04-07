import { motion } from "framer-motion";
import styled from "styled-components";

export const BackGround = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0,0,0,0.1);
`;
