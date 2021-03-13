import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Cuprum', sans-serif;
    font-size: 16px;
  }

  body, p {
    margin: 0;
  }

  ul {
    padding: 0;
  }
  
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
