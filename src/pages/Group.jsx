import Header from "../components/Header";
import Button from "../components/Button/Button";
import LongBtn from "../components/Button/LongBtn";
import Tab from "../components/Button/Tab";
import Search from "../components/Search";
import Dropdown from "../components/Button/Dropdown";
import GroupCard from "../components/Card/GroupCard";
import MoreBtn from "../components/Button/MoreBtn";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getGroupList } from "../util/api";
import * as G from "../styles/pages/GroupStyle";

function Group() {
  const navigate = useNavigate();
  const [isPublic, setIsPublic] = useState(true); // 공개 여부
  const [sort, setSort] = useState("latest"); // 정렬
  const [groupList, setGroupList] = useState([]);
  const [searchWord, setSearchWord] = useState(""); // 검색어

  useEffect(() => {
    const params = {
      page: 1,
      pageSize: 12,
      sortBy: sort,
      keyword: searchWord,
      isPublic: isPublic,
    };
    const data = getGroupList(params);
    data.then((el) => setGroupList(el));
  }, [isPublic, sort, searchWord]);

  // 그룹 만들기 버튼 클릭 시 그룹 만들기 페이지로 이동
  //const handleClicked = () => navigate(~~~~~);

  return (
    <G.Container>
      <Header />
      <Button
        style={{
          position: "absolute",
          right: "9%",
          top: "27px",
        }}
        text={"그룹 만들기"}
        //onClick={handleClicked}
      />
      <G.wapper>
        <G.Row>
          <Tab setIsPublic={setIsPublic} isPublic={isPublic} text={"공개"} />
          <Tab setIsPublic={setIsPublic} isPublic={!isPublic} text={"비공개"} />
          <Search
            text={"그룹명을 검색해 주세요."}
            setSearchWord={setSearchWord}
          />
          <Dropdown type="group" setSort={setSort} />
        </G.Row>
        {groupList.length > 0 ? (
          <>
            <G.List>
              {groupList.map((group) => (
                <GroupCard key={group.id} groupData={group} />
              ))}
            </G.List>
            <MoreBtn />
          </>
        ) : (
          <G.NoData>
            <div>no group</div>
            <LongBtn
              text={"그룹 만들기"}
              //onClick={handleClicked}
            />
          </G.NoData>
        )}
      </G.wapper>
    </G.Container>
  );
}

export default Group;
