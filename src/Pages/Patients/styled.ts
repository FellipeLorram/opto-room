import styled from "styled-components";

export const PatientPageStruct = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 3rem;
  gap: 3rem;
`;


export const CardDisposition = styled.div`
  width: 100%;
  gap: 1.3rem;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 300px) );
  grid-template-rows: auto;
`;

