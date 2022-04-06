import styled from "styled-components";

export const PageStruct = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content:center;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  min-height: 100vh;

  .main, .aside {
    display: flex;
    align-items: center;
    justify-content:center;
  }

  .main {
    padding: 2rem 0;
    width: 85%;
  }

  .aside {
    width: 15%;
    align-self: stretch;
    padding: 0;
  }
`;
