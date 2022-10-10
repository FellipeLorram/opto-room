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
  border-radius: 5px;
  width: 25rem;
  background: none;
  transition: all .2s ease-in-out;
  position: relative;


  .placeholder {
    transition: all 0.2s ease-out;
    position: absolute;
    left: 1rem;
    letter-spacing: 1px;
    font-size: .9rem;
    font-weight: 600;
    color: #a0a2ae;
    bottom: ${({ animate }: Props) => animate ? '2.1rem': '18.4px'};
  }

  input { 
    position: relative;
    width: 100%;
    border: 0;
    outline: none;
    background: #f7f7f8;
    font-size: .9rem;
    padding: 1.5rem 1rem .8rem;
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