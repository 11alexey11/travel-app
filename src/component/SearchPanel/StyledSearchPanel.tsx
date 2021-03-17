import styled from "styled-components";

const StyledSearchPanel = styled.input`
  {
    width: 360px;
    height: 50px;
    padding: 0 20px;
    padding-right: 60px;
    background-color: transparent;
    color: #fff;
    font-size: 1rem;  
    border: 2px solid #fff;
    border-radius: 30px;
    outline: none;

    &::placeholder {
      color: #fff;
    }

    @media (max-width: 1300px) {
      width: 250px;
    }

    @media (max-width: 768px) {
      width: 100%;
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      &::placeholder {
        font-size: 0.8rem;
      }
    }
  }
`

export default StyledSearchPanel;
