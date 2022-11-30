import { createGlobalStyle } from "styled-components";
import background from "./dollars.jpg"

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  .body {
    background-color: ${({ theme }) => theme.color.lightTeal};
    background-image: url("${background}");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ theme }) => theme.color.darkGrey};
    min-height: 100vh;
    justify-content: center;
  }
`;