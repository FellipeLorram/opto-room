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
  gap: 2rem;
  flex-direction: column;

  color: #000000;

  .header{
    width: 100%;
    padding: 1.5rem;
    background-image: linear-gradient(#eff1f5, #f5f6f9);
    .nav-logo {
      text-align: left;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .content-top {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-left: 1rem;
    flex-direction: column;
    width: 100%;
    
    .nav-link-container {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
    }
  }

  .add-patient-button{
    padding: .5rem 0;
    gap: .5rem;
    font-size: .9rem;
    svg{
      width: 1.1rem;
      stroke: #fff;
    }
  }
 

`;

interface NavBarLinkProps {
  active: boolean;
}

export const NavBarLink = styled(Link) <NavBarLinkProps>`
position: relative;
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
  font-weight: bold;
  border-radius: 10px 0 0 10px;
  transition: all .2s ease-in-out;

  ::after, ::before {
    content: '';
    position: absolute;
    height: ${({ active, theme }) => active ? '50%' : '0'};
    width: 3px;
    right: 0;
    background: ${({ active, theme }) => active ? theme.colors.secondary : 'none'};
    transition: all .2s ease-in-out;
  }

  ::after {
    top: 50%;
    border-radius: 0 0 0 40% ;
  }

  ::before {
    bottom: 50%;
    border-radius: 40% 0 0 0;
  }

  .icon{
   display: grid;
   place-items: center; 
    svg{
      stroke: ${({ active, theme }) => active ? theme.colors.secondary : '#a0a2ae'};
    }
  }
`;
