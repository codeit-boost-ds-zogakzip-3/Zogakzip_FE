import styled from "styled-components";
import color from "../../util/Color";

export const Container = styled.div`
  min-width: 740px;
  min-height: 100vh;
  position: relative;
  background-color: ${color.gray50};
`;

export const wapper = styled.div`
  padding: 0 9%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 40px auto 60px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1560px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const NoData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 180px;
  padding: 140px 0;
`;
