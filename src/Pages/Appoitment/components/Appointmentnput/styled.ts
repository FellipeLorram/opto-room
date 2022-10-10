import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: .5rem;
  max-width: 140px;
  
  span {
    text-align: center;
    font-size: 1rem;
    transition: all .2s ease-in-out;
    cursor: pointer;
    :hover {
      color: #1a73e8;
    }
  }

  .appoitment-input {
    width: 100%;
  }

`
