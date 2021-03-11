import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 393.3px;
  margin-bottom: 10px;

  &:nth-child(4) {
    width: 490px;
  }

  &:nth-child(5) {
    width: 700px;
  }
`

export default StyledCard;