import Header from "../components/Header";
import Button from "../components/Button";
import Tab from "../components/Tab";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import GroupCard from "../components/GroupCard";
import Badge from "../components/Badge";
import Toggle from "../components/Toggle";
import LikeBtn from "../components/LikeBtn";
import Pagination from "../components/Pagination";
import MoreBtn from "../components/MoreBtn";
import MemoryCard from "../components/MemoryCard";
import { useState } from "react";
import * as G from "./GroupStyle";

function Group() {
  const [isPublic, setIsPublic] = useState(true); // 공개 여부
  const [keyword, setKeyword] = useState(""); // 검색어
  const handleKeywordChange = (e) => setKeyword(e.target.value);
  const handlePublic = (e) => {
    e.target.innerText === "공개" ? setIsPublic(true) : setIsPublic(false);
  };
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  return (
    <>
      <Header />
      <Button
        style={{
          position: "absolute",
          right: "180px",
          top: "27px",
        }}
        text={"그룹 만들기"}
      />
      <Tab text={"공개"} onClick={handlePublic} isPublic={isPublic} />
      <Tab text={"비공개"} onClick={handlePublic} isPublic={!isPublic} />
      <Search
        text={"그룹명을 검색해주세요."}
        value={keyword}
        onChange={handleKeywordChange}
      />
      <Dropdown />
      <GroupCard isPublic={isPublic} />
      <MemoryCard isPublic={isPublic} />
      <Badge text={"👾 7일 연속 추억 등록"} />
      <Toggle />
      <LikeBtn />
      <MoreBtn />
      <Pagination
        currentPage={currentPage}
        setPage={setCurrentPage}
        totalPage={7}
      />
    </>
  );
}

export default Group;
