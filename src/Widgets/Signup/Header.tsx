import React from 'react';
import styled from 'styled-components';
import { OptoLogo } from '../../Components/Logo/Index';

const Container = styled.div`
width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
 
  .info{
    color: #a6a6a6;
    font-size: 1.2rem;
  }

  .logo{
    position: absolute;
    top: 0;
    left: 0;
  }

  .close{
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

interface Props {
  setOnScreen(value: boolean): void
}

const Header: React.FC<Props> = ({ setOnScreen }) => {
  return (
    <Container>
      <div className="logo">
        <OptoLogo style={{ fontSize: '1.3rem' }} />
      </div>

      <div className="info">
        Só algumas informações e você já terá seu Opto room
      </div>

      <div className="close" onClick={() => setOnScreen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a6a6a6" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </Container>
  );
};

export default Header;
