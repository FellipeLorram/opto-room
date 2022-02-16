import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --radius: 10px;
    --shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
  }

  body {
    font-size: 62.5%;
    font-family: 'Cairo', sans-serif;
    background:#f6f7f9;
  }
  @keyframes shake {
    0% {
      transform: translateX(10px);
    }
    25% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-10px);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
