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
    background: ${({ theme }) => theme.colors.background};
  }
`;
