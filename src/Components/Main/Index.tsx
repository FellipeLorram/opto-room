import React from 'react'
import { MainContainer } from './styled';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <MainContainer>{children}</MainContainer>
  )
}

export default Main;