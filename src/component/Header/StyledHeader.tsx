import styled from "styled-components";

import background from '../../assets/img/background.jpg';

const StyledHeader = styled.header`
  min-height: ${(props: { history: any }) => props.history.location.pathname === "/" ? "630px" : "470px"};
  background: url('${background}') center no-repeat;
  background-color: #00695c;

  @media (max-width: 768px) {
    min-height: 450px;
  }
`

export default StyledHeader;
