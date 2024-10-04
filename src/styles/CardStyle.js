import styled from "styled-components";
import color from "../util/Color";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  background-color: ${color.gray50};
  border-radius: 12px;
  padding: 20px;
  font-size: 14px;
  text-align: left;
  color: ${color.black};
  gap: 20px;
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 335px;
  height: 335px;
  border-radius: 6px;
  object-fit: cover;
`;

export const NonImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 335px;
  border-radius: 6px;
  background-color: #efede4;
  img {
    width: 36%;
    height: 36%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;
  h4 {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    fontweight: bold;
    font-size: 16px;
    margin: 0;
  }
  p {
    font-size: 14px;
    color: ${color.gray400};
    margin: 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CountTitle = styled.div`
  font-size: 12px;
  color: ${color.gray400};
`;

export const ImgIcon = styled.img`
  height: 18px;
`;
