import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Source Serif Pro', serif;
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

  .card-title {
    margin-bottom: 8px ;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .card-info-wrapper {
    position: relative;
  }

  .card-img {
    border-radius: 7px;
  }

  .card-capital {
    position: absolute;
    bottom: 6px;
    padding: 10px 25px 3px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-top-right-radius: 20px 12px;
    border-bottom-left-radius: 7px 7px;
  }

  .footer-year {
    align-self: end;
  }

  .footer-wrapper {
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
