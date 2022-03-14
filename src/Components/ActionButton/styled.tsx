import styled from "styled-components";

interface Props {
  animate: boolean;
}

export const ActionsButtonWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
  padding: .7rem;
  max-width: ${({ animate }) => animate ? '120px' : '40px'};
  height: 40px;
  overflow: hidden;
  gap: 1rem;
  border: 1px solid transparent;
  border-color: ${({ theme, animate }) => animate ? theme.colors.secondary : 'transparent'};

  transition: all .2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .icon-container{
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    width: 100%;
    svg{
      width: 1rem;
      height: 1rem;
      stroke: ${({ animate }) => animate ? '#464853' : '#838695'};
      transition: all .2s ease-in-out;
    }
  }

  .text-container{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: .6rem;
    color: #838695;
  }

  /* :hover{
    border-color: ${({ theme }) => theme.colors.secondary};
    max-width: 120px;
    .icon-container{
      svg{
        stroke: #464853;
      }
    }
  } */
`
