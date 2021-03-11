import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 393.3px;
  margin-bottom: 10px;

  &:nth-child(1) {
    width: 490px;
  }

  &:nth-child(2) {
    width: 700px;
  }
`

export default StyledCard;