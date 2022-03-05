import styled from "styled-components";

export const SeachInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8f1fc;
  width: 25rem;

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
  }

  .search-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem 1rem;
    background: ${({theme}) => theme.colors.button.primary};
    transition: all .2s ease-in-out;
    cursor: pointer;

    svg{
      stroke: #F5F5F5;
      width: 1rem;
      height: 1rem;
    }
    
    :hover{
      background: ${({theme}) => theme.colors.button.primaryHover};
    }
  }
`;