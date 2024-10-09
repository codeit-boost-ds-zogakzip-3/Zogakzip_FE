import styled from "styled-components";
import color from "../../util/Color";

export const Dropdown = styled.div`
  position: relative;
  width: 160px;
  height: 45px;
  background-color: ${color.gray50};
  font-size: 14px;
`;

export const DropdownHeader = styled.div`
  padding: 13px 20px;
  background-color: ${color.gray50};
  border: 1px solid ${color.black};
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) =>
    props["data-isopen"]
      ? `url("src/assets/dropup.svg") no-repeat 92% center / 24px`
      : `url("src/assets/dropdown.svg") no-repeat 92% center / 24px`};
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  margin-top: 2px;
  padding: 0;
  background-color: ${color.gray50};
  border: 1px solid ${color.black};
  border-radius: 6px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  color: ${color.gray500};
  &:hover {
    color: ${color.black};
    background-color: ${color.gray100};
  }
`;
