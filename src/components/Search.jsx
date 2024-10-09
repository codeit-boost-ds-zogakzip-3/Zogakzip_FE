import * as S from "../styles/components/SearchStyle";
import search from "../assets/search.svg";
import { useState } from "react";

const Search = ({ text, setSearchWord }) => {
  const [keyword, setKeyword] = useState("");
  const handleKeywordChange = (e) => setKeyword(e.target.value);
  const handleKeyword = () => {
    if (window.event.keyCode == 13) {
      setSearchWord(keyword);
    }
  };

  return (
    <S.SearchContainer>
      <S.SearchBar
        value={keyword}
        onChange={handleKeywordChange}
        placeholder={text}
        onKeyUp={handleKeyword}
      />
      <S.Icon src={search} alt="검색" />
    </S.SearchContainer>
  );
};

export default Search;
