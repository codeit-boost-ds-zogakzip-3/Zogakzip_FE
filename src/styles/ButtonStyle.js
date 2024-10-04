import styled from "styled-components";
import color from "../util/Color";

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
  background-color: ${(props) => (props.isPublic ? color.black : color.gray50)};
  border-radius: 22.5px;
  color: ${(props) => (props.isPublic ? color.white : color.black)};
  text-align: center;
  font-size: 14px;
  padding: 13px 20px;
  cursor: pointer;
`;
