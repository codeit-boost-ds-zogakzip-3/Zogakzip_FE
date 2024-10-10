import React, { useRef, useState } from "react";
import styled from "styled-components";

export default function TagInput() {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && tag.trim() !== "") {
      setTags((prevTags) => [...prevTags, tag]);
      setTag("");
    }
  };
  const handleTagRemove = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };
  return (
    <Wrapper>
      <Text>태그</Text>
      <Input
        placeholder="태그 입력 후 Enter"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <TagContainer>
        {tags.map((t, index) => (
          <Tag key={index}>
            #{t}
            <RemoveButton onClick={() => handleTagRemove(t)}>x</RemoveButton>
          </Tag>
        ))}
      </TagContainer>
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
  color: #282828;
  font-weight: 500;
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
    border-color: #282828;
    outline: none;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 400px;
`;

const Tag = styled.div`
  /* background-color: #e0e0e0; */
  color: #8d8d8d;
  border-radius: 4px;
  font-size: 12px;
  /* padding: 5px 10px; */
  margin: 1px;
  display: flex;
  align-items: center;
`;

const RemoveButton = styled.button`
  background: transparent;
  border: none;
  color: #8d8d8d;
  /* margin-left: 5px; */
  cursor: pointer;
`;
