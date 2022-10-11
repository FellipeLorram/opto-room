import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: #fff;

  border-right: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  flex-direction: column;

  color: #000000;

  .header{
    width: 100%;
    padding: 1rem;
    background-image: linear-gradient(#eff1f5, #fff);
    height: 64px;

    border-bottom: 1px solid;
    border-image-slice: 1;
    border-width: 1px;
    border-image-source: linear-gradient(to left, #bfc6d9, #dfe2ec, #f5f6f9);

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
  active: string;
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
  background: ${({ active }) => active === 'true' ? '#eff1f5' : 'none'};
  color:  ${({ active }) => active === 'true' ? '#4a4953' : '#a0a2ae'};
  font-weight: bold;
  border-radius: 10px 0 0 10px;
  transition: all .2s ease-in-out;

  :hover{
    color: #61606c;
  }

  ::after, ::before {
    content: '';
    position: absolute;
    height: ${({ active }) => active === 'true' ? '50%' : '0'};
    width: 3px;
    right: 0;
    background: ${({ active, theme }) => active === 'true' ? theme.colors.secondary : 'none'};
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
      stroke: ${({ active, theme }) => active === 'true' ? theme.colors.secondary : '#a0a2ae'};
    }
  }

  .block-icon{
    position: absolute;
    right: 20px;
    top: 23%;
    
    svg {
      width: 1rem;
      stroke: ${({ active }) => active === 'true' ? '#ff0000' : '#a0a2ae'};
    }
  }
`;
