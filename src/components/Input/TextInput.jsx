import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function TextInput() {
  return (
    <Wrapper>
      <Text>그룹 소개</Text>
      <TextArea placeholder="그룹을 소개해 주세요" />
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

const TextArea = styled.textarea`
  border: 1px solid #dddddd;
  border-radius: 6px;
  width: 400px;
  height: 80px;
  font-size: 12px;
  padding: 12px;
  background-color: #fafafa;
  margin-top: 10px;
  resize: none;
  overflow: auto;

  &::placeholder {
    color: #b8b8b8;
    font-size: 12px;
    font-weight: 400;
  }

  &:focus {
    border-color: #282828;
    outline: none;
  }
`;
