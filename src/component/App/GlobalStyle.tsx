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

  *:focus {
    outline: 1px solid #fff;
  }

  .swiper-slide {
    padding-top: 20px;
    padding-bottom: 50px;
  }

  .CountryInformation_watch__2_J_h {
    width: auto;
    text-align: center;
  }
`;

export default GlobalStyle;
