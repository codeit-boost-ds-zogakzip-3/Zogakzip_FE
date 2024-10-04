import * as S from "../styles/SearchStyle";
import search from "../assets/search.svg";

const Search = ({ value, onChange, text }) => {
  return (
    <S.SearchContainer>
      <S.SearchBar value={value} onChange={onChange} placeholder={text} />
      <S.Icon src={search} alt="검색" />
    </S.SearchContainer>
  );
};

export default Search;
