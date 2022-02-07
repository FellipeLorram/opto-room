import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  /* ${({ theme }) => theme.colors.background}; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .background-wave{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    z-index: 1;
    path {
      fill: #0e518b60;
    }
  }
`;
