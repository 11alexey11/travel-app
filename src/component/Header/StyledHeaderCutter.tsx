import styled from "styled-components";

import headerCutter from '../../assets/img/header-cutter.png';

const StyledHeaderCutter = styled.header`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: url(${headerCutter}) center no-repeat;
`

export default StyledHeaderCutter;