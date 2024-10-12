import React, { useRef, useState } from "react";
import styled from "styled-components";
import color from "../../util/Color";

export default function BoxInput({
  title,
  name,
  children,
  value,
  onChange,
  type = "text",
}) {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;

    // 유효성 검사
    const regex = /^[a-zA-Z0-9ㄱ-힣ㄱ-ㅎㅏ-ㅣ!@#$%^_ ]*$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#&])[A-Za-z\d@$!%#&]{8,}$/;
    if (newValue.length === 0) {
      setIsError(true);
      setErrorMessage("필수 입력사항입니다.");
    } else if (type === "password" && !passwordRegex.test(newValue)) {
      setIsError(true);
      setErrorMessage(
        "영문, 숫자, 특수문자(@$!%#&) 조합 8글자 이상으로 입력해주세요."
      );
    } else if (type === "text" && !regex.test(newValue)) {
      setIsError(true);
      setErrorMessage("특수문자는 !@#$%^_만 사용하실 수 있습니다.");
    } else {
      setIsError(false);
      setErrorMessage();
    }
    onChange(event, isError);
  };
  return (
    <Wrapper>
      <Text>{title}</Text>
      <Input
        name={name || ""}
        type={type}
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

const Input = styled.input`
  border: ${(props) =>
    props.$isError ? `1px solid ${color.red}` : `1px solid ${color.gray200}`};
  border-radius: 6px;
  width: 360px;
  font-size: 12px;
  padding: 13px 20px;
  background-color: #fafafa;
  margin-top: 10px;

  &:focus {
    border-color: ${(props) =>
      props.$isError
        ? color.red
        : color.black}; /* 포커스 시 테두리 색상 변경 */
    outline: none; /* 기본 아웃라인 제거 */
  }
`;

const ErrorText = styled.div`
  font-size: 12px;
  color: ${color.red};
  margin-top: 10px;
`;
