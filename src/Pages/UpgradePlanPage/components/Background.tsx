import React from 'react'
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  .background-long-wave {
    width: 100%;
    height: 45vh;
    background: #1A73E8;
  }

  svg{
    path {
      fill: #1A73E8;
    }
  }
`;

const Background: React.FC = () => {
  return (
    <BackgroundContainer>
      <div className='background-long-wave' />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
    </BackgroundContainer>
  )
}

export default Background