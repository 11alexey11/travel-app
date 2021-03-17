import styled from "styled-components";

import footerCutter from '../../assets/img/footer-cutter.png';

const StyledFooterCutter = styled.div`
  {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100px;
    background: url('${footerCutter}') center no-repeat;
  }
`

export default StyledFooterCutter;
