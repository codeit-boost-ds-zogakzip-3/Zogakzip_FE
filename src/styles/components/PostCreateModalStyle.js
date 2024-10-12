import styled from "styled-components";
import color from "../../util/Color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
`;

export const Line = styled.div`
  border: 1px solid ${color.gray200};
  box-sizing: border-box;
  width: 1px;
  opacity: 0.5;
  //margin: 120px auto;
`;

export const CloseImg = styled.img`
  position: absolute;
  top: 160px;
  right: 20%;
  cursor: pointer;
`;
