import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";
export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --roboto: 'Roboto', sans-serif;

    --poppins: 'Poppins', sans-serif;

    font-size: 62.5%;

    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
     body{background-color: red;} 
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing:antialiased;
    font-size: 1.6rem;
  }

  body, input, button, textarea {
    font-family: var(--roboto);
    outline: none;

  }
  


  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2;
  }

  button:hover {
    filter: brightness(0.9);
  }
`;
