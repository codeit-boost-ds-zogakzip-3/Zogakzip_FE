import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import color from "../../util/Color";

export default function ReplyInput() {
  return (
    <Wrapper>
      <Text>댓글 8</Text>
      <InputContainer>
        <TextArea placeholder="댓글을 입력해 주세요" />
        <Button>댓글 등록</Button>
      </InputContainer>
      <PWContainer>
        <Text>비밀번호</Text>
        <PWInput placeholder="비밀번호를 입력해주세요" type="password" />
      </PWContainer>
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
const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
`;
const Input = styled.input`
  border: 1px solid #dddddd;
  border-radius: 6px;
  width: 290px;
  font-size: 12px;
  padding: 12px;
  background-color: #fafafa;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
  background-color: ${color.gray50};
  border-radius: 6px;
  color: ${color.black};
  border: 1px solid ${color.black};
  font-size: 14px;
  cursor: pointer;
`;

const TextArea = styled.textarea`
  border: 1px solid #dddddd;
  border-radius: 6px;
  width: 290px;
  font-size: 12px;
  padding: 12px;
  background-color: #fafafa;
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

const PWContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  align-items: center;
`;

const PWInput = styled.input`
  border: 1px solid #dddddd;
  border-radius: 6px;
  width: 225px;
  font-size: 12px;
  padding: 12px;
  background-color: #fafafa;
  margin-top: 10px;

  &:focus {
    border-color: #282828; /* 포커스 시 테두리 색상 변경 */
    outline: none; /* 기본 아웃라인 제거 */
  }
`;
