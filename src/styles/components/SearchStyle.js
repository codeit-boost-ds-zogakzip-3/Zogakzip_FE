import styled from "styled-components";
import color from "../../util/Color";

export const SearchContainer = styled.div`
  position: relative;
  margin: 0 30px 0 10px;
  flex: 1;
`;

export const SearchBar = styled.input`
  height: 45px;
  width: calc(100% - 74px);
  background-color: ${color.gray100};
  border-radius: 6px;
  border: none;
  padding: 0px 20px 0px 54px;
  text-align: left;
  font-size: 14px;
  line-height: 45px;
  &::placeholder {
    color: ${color.gray400};
  }
`;

export const Icon = styled.img`
  position: absolute;
  left: 20px;
  top: 10px;
  cursor: pointer;
`;
