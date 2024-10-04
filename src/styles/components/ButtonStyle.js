import styled from "styled-components";
import color from "../../util/Color";

export const Btn = styled.div`
  width: 200px;
  height: 45px;
  background-color: ${color.black};
  border-radius: 6px;
  color: ${color.gray50};
  text-align: center;
  font-size: 14px;
  line-height: 45px;
  cursor: pointer;
`;

export const Tab = styled.div`
  width: max-content;
  background-color: ${(props) =>
    props["data-ispublic"] ? color.black : color.gray50};
  border-radius: 22.5px;
  color: ${(props) => (props["data-ispublic"] ? color.white : color.black)};
  text-align: center;
  font-size: 14px;
  padding: 13px 20px;
  cursor: pointer;
`;

export const LikeBtn = styled.div`
  border-radius: 6px;
  background-color: ${color.gray50};
  border: 1px solid ${color.black};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  color: ${color.black};
  width: 188px;
  height: 52px;
  cursor: pointer;
  img {
    height: 22px;
  }
`;

export const MoreBtn = styled.div`
  border-radius: 6px;
  background-color: ${color.gray50};
  border: 1px solid ${color.black};
  font-size: 14px;
  color: ${color.black};
  text-align: center;
  width: 100%;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
`;

export const Badge = styled.div`
  border-radius: 50px;
  background-color: ${color.gray100};
  width: max-content;
  padding: 16px 30px;
  text-align: center;
  font-size: 16px;
  color: ${color.black};
`;
