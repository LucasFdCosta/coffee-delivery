import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme["base-text"]};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, input-security, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
 `;
