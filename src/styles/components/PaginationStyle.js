import styled from "styled-components";
import color from "../../util/Color";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ArrowBtn = styled.div`
  width: 45px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.gray50};
  border: 1px solid
    ${(props) => (props["data-active"] ? color.gray400 : color.black)};
  height: 45px;
  cursor: pointer;
  img {
    height: 24px;
    filter: ${(props) =>
      props["data-active"]
        ? "invert(84%) sepia(0%) saturate(7431%) hue-rotate(172deg) brightness(103%) contrast(59%)"
        : "invert(10%) sepia(4%) saturate(6%) hue-rotate(356deg) brightness(96%) contrast(85%)"};
  }
`;

export const NumBtn = styled.div`
  width: 45px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props["data-active"] ? color.black : color.gray50};
  border: 1px solid ${color.black};
  height: 45px;
  font-size: 14px;
  color: ${(props) => (props["data-active"] ? color.white : color.black)};
  cursor: pointer;
`;
