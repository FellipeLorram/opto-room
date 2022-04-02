import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: #f5f5f5;
  position: relative;
  z-index: 2;

  .header {
    width: 100%;
    position: relative;
    padding: 1rem 4rem 0;
    z-index: 2;
  }

  .opto-logo {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 1rem;
    width: unset;
    font-size: 1rem;
    color: #fff;
  }

  .back-arrow {
    align-self: start;
    cursor: pointer;
    stroke: #fff;
  }

  .promo-text {
    font-size: 1rem;
    color: #fff;
    text-align: center;
    z-index: 2;
    padding-bottom: 2rem;
  }

`;

