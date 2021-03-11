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

  header { 
    position: relative;
  }

  .header-text-wrapper {
    position: absolute;
    top: 30%;
    left: 8%;
    min-width: 600px;
    color: #fff;
  }

  .header-title {
    font-size: 5.5rem;
    font-family: 'Cuprum', sans-serif;
  }

  .header-slogan {
    font-size: rem;
    font-size: 3.3rem;
    font-family: 'Lobster', cursive;
  }

  .header-cutter {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: url('./img/header-cutter.png') center no-repeat;
  }

  .cards-title-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cards-title {
    margin: 25px 0 20px 0;
    font-size: 2.2rem;
  }

  .cards-description {
    font-size: 1.2rem;
  }

  .cards-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .card-title {
    margin-bottom: 8px;
    font-size: 1.3rem;
    font-weight: 600;
  }

  .card-info-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 25px 3px 10px;
    color: #fff;
  }

  .card-img {
    height: 263px;
    border-radius: 2px;
  }

  .card-mask {
    position: absolute;
    width: 100%;
    height: 263px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(54,54,54,0.12088585434173671) 41%, rgba(255,255,255,0) 100%);

    opacity: 0.2;
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
