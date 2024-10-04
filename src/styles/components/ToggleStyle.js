import styled from "styled-components";
import color from "../../util/Color";

export const Toggle = styled.div`
  transition: all 0.4s ease-in-out;
  position: relative;
  width: 48px;
  height: 24px;
  cursor: pointer;
  border-radius: 15px;
  padding: 1.5px;
  background-color: ${(props) =>
    props["data-ispublic"] ? color.black : color.gray400};
`;

export const ToggleButton = styled.div`
  transition: all 0.4s ease-in-out;
  width: 50%;
  height: 100%;
  border-radius: 50%;
  background-color: ${color.gray50};
  transform: ${(props) =>
    props["data-ispublic"] ? "translateX(24px)" : "translateX(0px)"};
`;
