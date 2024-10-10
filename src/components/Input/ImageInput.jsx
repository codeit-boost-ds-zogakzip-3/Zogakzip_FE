import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import color from "../../util/Color";

export default function ImageInput() {
  const [placeholder, setPlaceholder] = useState("파일을 선택해주세요");
  const inputEl = useRef(null);
  const fileInputHandler = useCallback((event) => {
    const files = event.target && event.target.files;
    if (files && files[0]) {
      setPlaceholder(event.target.files[0].name);
    }
  }, []);
  useEffect(() => {
    if (inputEl.current !== null) {
      inputEl.current.addEventListener("input", fileInputHandler);
    }
    return () => {
      inputEl.current &&
        inputEl.current.removeEventListener("input", fileInputHandler);
    };
  }, [inputEl, fileInputHandler]);

  return (
    <Wrapper>
      <Text>대표 이미지</Text>
      <InputContainer>
        <Input placeholder={placeholder} />
        <Label htmlFor="img">파일 선택</Label>
      </InputContainer>
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
const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 45px;
  background-color: ${color.gray50};
  border-radius: 6px;
  color: ${color.black};
  border: 1px solid ${color.black};
  font-size: 14px;
  cursor: pointer;
`;
const FileInput = styled.input`
  display: none;
`;
