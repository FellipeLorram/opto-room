import styled from 'styled-components';

interface Props {
  animate: boolean;
  error?: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: #F5F5F5;
  padding: .5rem;

  input { 
    position: relative;
    width: 100%;
    border: 0;
    outline: none;
    background: none;
    font-size: 1rem;
    padding: .2rem 2%;
    line-height: 1px;  
    letter-spacing: 2px;
  }

  label { 
    cursor: text;
    position: absolute;
    left: 5%;
    bottom: ${({ animate }: Props) => animate ? '80%' : '25%'};
    font-size: ${({ animate }: Props) => animate ? '.7rem' : '1rem'};
    transition: all 0.2s ease-out;
    color: ${({ animate, theme }) => animate ? theme.colors.secondary : 'rgba(0,0,0, .5)'};
    letter-spacing: 2px;
  }

  .error-message{
    position: absolute;
    bottom: -15%;
    left: 5%;
    color: #ff0000;
    font-size: .8rem;
  }

  .eye {
    position: absolute;
    right: 5%;
    bottom: 5%;
    width: ${({ animate }) => animate ? '1rem' : 0};
    cursor: pointer;
    stroke: ${({ theme }) => theme.colors.secondary};
  }
  ${({ error }) => error && `
    animation-duration: 0.2s;
    animation-name: shake;
  `}
`;
