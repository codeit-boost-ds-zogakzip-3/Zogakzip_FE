import React, { useRef, useState } from "react";
import styled from "styled-components";
import color from "../../util/Color";

export default function TextInput({ title, name, children, value, onChange }) {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;

    if (newValue.length === 0) {
      setIsError(true);
      setErrorMessage("필수 입력사항입니다.");
    } else {
      setIsError(false);
      setErrorMessage();
    }
    onChange(event, isError);
  };
  return (
    <Wrapper>
      <Text>{title}</Text>
      <TextArea
        name={name || ""}
        placeholder={children}
        value={value}
        onChange={handleChange}
        $isError={isError}
      />
      {isError && <ErrorText>{errorMessage}</ErrorText>}
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  //width: 100%;
  margin: 0 auto;
`;

const Text = styled.div`
  font-size: 14px;
  color: "#282828";
  font-weight: "500";
`;

const TextArea = styled.textarea`
  border: ${(props) =>
    props.$isError ? `1px solid ${color.red}` : `1px solid ${color.gray200}`};
  border-radius: 6px;
  width: 360px;
  height: 80px;
  font-size: 12px;
  padding: 13px 20px;
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
    border-color: ${(props) => (props.$isError ? color.red : color.black)};
    outline: none;
  }
`;

const ErrorText = styled.div`
  font-size: 12px;
  color: ${color.red};
  margin-top: 10px;
`;
