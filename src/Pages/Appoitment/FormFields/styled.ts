import styled from "styled-components";

export const InputFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .appoitment-input {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    width: 100%;
    max-width: 140px;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
  padding: 2rem 1rem;
  width: 100%;
  gap: .5rem;

  .title, .sub-title {
    width: 100%;
    padding: 0 1rem;
    text-align: left;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .sub-title {
    font-size: 1rem;
    color: #a0a2ae;
  }

`;
