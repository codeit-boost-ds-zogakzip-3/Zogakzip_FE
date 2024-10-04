import styled from "styled-components";
import color from "../util/Color";

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.gray50};
  img {
    width: 137px;
    height: 48px;
    cursor: pointer;
  }
`;
