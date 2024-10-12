import React, { useRef } from "react";
import styled from "styled-components";
import color from "../../util/Color";
import calender from "../../assets/calendar.svg";

export default function DateInput({ value, onChange }) {
  const dateInputRef = useRef(null);

  const handleDateChange = (event) => {
    if (onChange) {
      onChange(event); // 부모 컴포넌트에 변경된 날짜 전달
    }
  };

  const handleButtonClick = () => {
    dateInputRef.current?.showPicker(); // 날짜 선택 창 열기
  };

  return (
    <Container>
      <Title>추억의 순간</Title>
      <Input
        name="moment"
        type="date"
        ref={dateInputRef}
        value={value}
        onChange={handleDateChange}
        placeholder="YYYY-MM-DD"
        onClick={handleButtonClick}
      />
    </Container>
  );
}

export const Container = styled.div`
  position: relative;
`;

export const Title = styled.div`
  color: #282828;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;

  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 360px;
  padding: 13px 20px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.42px;
  border-radius: 6px;
  border: ${(props) =>
    props.$isError ? `1px solid ${color.red}` : `1px solid ${color.gray200}`};
  background-color: #fafafa;
  cursor: pointer;
  user-select: none;
  background: url("src/assets/calendar.svg") no-repeat 95% center / 24px;
  &::placeholder {
    color: #b8b8b8;
  }
  &:focus {
    outline: none;
  }
  &::-webkit-calendar-picker-indicator,
  ::-webkit-inner-spin-button {
    opacity: 0;
    appearance: none;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 42px;
  right: 20px;
`;
