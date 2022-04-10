import styled from "styled-components";

interface Props {
  animate: boolean;
  error?: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 40px;
  border-radius: 5px;
  width: 25rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px solid transparent; 
  transition: all .2s ease-in-out;
  position: relative;

  :hover{
    border-color: ${({ theme, animate }) => !animate && theme.colors.secondary};
  }

  .placeholder {
    transition: all 0.2s ease-out;
    position: absolute;
    left: 5%;
    letter-spacing: 2px;
    font-size: .8rem;
    bottom: ${({ animate }: Props) => animate ? '71%' : '19%'};
  }

  input { 
    position: relative;
    width: 100%;
    border: 0;
    outline: none;
    background: none;
    font-size: .8rem;
    padding: .2rem 5%;
    line-height: 1px;  
    letter-spacing: 2px;
    align-self: stretch;
    border-radius: 5px;
  }

  .search-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem 1rem;
    transition: all .2s ease-in-out;
    cursor: pointer;

    svg{
      stroke: #838695;
      width: 1rem;
      height: 1rem;
    }
  }
`;