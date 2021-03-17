import styled from "styled-components";

import background from '../../assets/img/background.jpg';

const StyledFooter = styled.footer`
  {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
    position: relative;
    background: url('${background}') center no-repeat; 
    background-color: #00695c;
  }
`

export default StyledFooter;
