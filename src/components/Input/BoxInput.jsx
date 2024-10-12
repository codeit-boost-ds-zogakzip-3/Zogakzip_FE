import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function BoxInput() {
  return (
    <Wrapper>
      <Text>그룹명</Text>
      <Input placeholder="그룹명을 입력해주세요" />
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Text = styled.div`
  font-size: 14px;
  color: "#282828";
  font-weight: "500";
`;

const Input = styled.input`
  border: 1px solid #dddddd;
  border-radius: 6px;
  width: 400px;
  font-size: 12px;
  padding: 12px;
  background-color: #fafafa;
  margin-top: 10px;

  &:focus {
    border-color: #282828; /* 포커스 시 테두리 색상 변경 */
    outline: none; /* 기본 아웃라인 제거 */
  }
`;
