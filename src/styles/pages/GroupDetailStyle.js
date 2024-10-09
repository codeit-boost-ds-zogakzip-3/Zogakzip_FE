import styled from "styled-components";
import color from "../../util/Color";

export const Line = styled.div`
  border: 1px solid ${color.gray200};
  box-sizing: border-box;
  height: 1px;
  opacity: 0.5;
  margin: 120px auto;
`;

export const Title = styled.div`
  position: relative;
  font-size: 24px;
  letter-spacing: -0.03em;
  color: ${color.black};
  text-align: center;
  line-height: 45px;
`;
