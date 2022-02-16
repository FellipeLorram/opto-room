import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: #f5f6f9;

  border-right: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  gap: 3rem;
  color: #000000;

  padding: 2rem 0 1rem 2rem;

  .nav-logo {
    text-align: left;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .nav-link-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

`;

interface NavBarLinkProps {
  active: boolean;
}

export const NavBarLink = styled(Link)<NavBarLinkProps>`
  padding: .5rem 1.5rem;
  font-size: .9rem;
  gap: 1.3rem;
  text-decoration: none;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background: ${({ active }) => active ? '#eff1f5' : 'none'};
  color:  ${({ active }) => active ? '#4a4953' : '#a0a2ae'};
  border-right: 3px solid  ${({ active, theme }) => active ? theme.colors.secondary : 'transparent'};
  font-weight: bold;
  border-radius: 10px 0 0 10px;
  transition: all .2s ease-in-out;
  .icon{
   display: grid;
   place-items: center; 
    svg{
      stroke: ${({ active, theme }) => active ? theme.colors.secondary : '#a0a2ae'};
    }
  }
  
`;
