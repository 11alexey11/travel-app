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

  header { 
    position: relative;
  }

  .header-text-wrapper {
    position: absolute;
    top: 30%;
    left: 5%;
    min-width: 600px;
    color: #fff;
  }

  .header-title {
    font-size: 5rem;
    font-family: 'Cuprum', sans-serif;
  }

  .header-slogan {
    font-size: rem;
    font-size: 2.8rem;
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
    font-size: 2.4rem;
  }

  .cards-description {
    font-size: 1.4rem;
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
    font-size: 1.3rem;
    font-weight: 600;
  }

  .card-info-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 25px 10px 10px;
    color: #fff;
  }

  .card-img {
    height: 263px;
    border-radius: 2px;
    object-fit: cover;
  }

  .card-mask {
    position: absolute;
    width: 100%;
    height: 263px;
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(40,40,40,0.4991130241158963) 40%, rgba(255,255,255,0) 100%); 
    opacity: 0.7;
  }
  
  .footer-year {
    align-self: end;
  }

  .footer-wrapper {
    width: 70%;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .footer-bottom {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-bottom: 5px;
    color: #fff;
  }

  .footer-mask {
    position: absolute;
    width: 100%;
    height: 25vh;
    background: rgba(0, 105, 92, 0.6);
  }
`;

export default GlobalStyle;
