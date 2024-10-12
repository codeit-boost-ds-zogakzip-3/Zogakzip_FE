import styled from "styled-components";
import color from "../../util/Color";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.gray50};
  border-radius: 12px;
  border: 1px solid ${color.gray200};
  padding: 20px;
  font-size: 14px;
  text-align: left;
  color: ${color.black};
  gap: 20px;
  cursor: pointer;
`;

export const CardImg = styled.img`
  width: 100%;
  min-width: 202px;
  aspect-ratio: auto 1/1;
  border-radius: 6px;
  object-fit: cover;
`;

export const NonImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 202px;
  aspect-ratio: auto 1/1;
  border-radius: 6px;
  background-color: #efede4;
  img {
    width: 36%;
    height: 36%;
    object-fit: cover;
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
  overflow: hidden;
  h4 {
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    max-width: 253px;
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

export const EmptyImg = styled.img`
  height: 100px;
`;

export const EmptyTitle = styled.div`
  font-size: 18px;
  color: ${color.gray500};
  margin-top: 20px;
`;

export const EmptySubTitle = styled.div`
  font-size: 14px;
  color: ${color.gray400};
`;
