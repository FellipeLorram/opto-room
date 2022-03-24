import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 8px;
  padding: 2rem;
  gap: 2rem;

  .input-row-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
  }

  .patient-form-input {
    width: 100%;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
`;

export const AddToAWorkPlaceButton = styled.div`
  padding: 0.2rem 5%;
  color: #00000080;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  font-size: .8rem;
  align-self: flex-start;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;  
  border: 1px solid transparent;
  cursor: pointer;
  transition: all .2s ease-in-out;
  letter-spacing: 2px;
  border-radius: 5px;
  :hover {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
