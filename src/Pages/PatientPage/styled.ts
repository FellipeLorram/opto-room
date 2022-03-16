import styled from "styled-components";

export const PatientPageStruct = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
`;

export const Container = styled.div`
  width: 800px;
  max-width: 90%;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem; 
  flex-direction: column;

  .header {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    padding: 1rem 0 0;
    font-weight: 700;
    color: #4a4953;
  }
`;
