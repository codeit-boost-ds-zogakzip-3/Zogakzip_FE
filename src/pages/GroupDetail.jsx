import Header from "../components/Header";
import Button from "../components/Button/Button";
import LongBtn from "../components/Button/LongBtn";
import Tab from "../components/Button/Tab";
import Search from "../components/Search";
import Dropdown from "../components/Button/Dropdown";
import MoreBtn from "../components/Button/MoreBtn";
import MemoryCard from "../components/Card/MemoryCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostList, getGroupDetail } from "../util/api";
import * as G from "../styles/pages/GroupStyle";
import * as D from "../styles/pages/GroupDetailStyle";

function GroupDetail() {
  const { GroupId } = useParams();
  const [isPublic, setIsPublic] = useState(true); // 공개 여부
  const [searchWord, setSearchWord] = useState(""); // 검색어
  const [sort, setSort] = useState("latest");
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const data = getGroupDetail(GroupId);
    data.then((el) => console.log(el));
  }, []);

  useEffect(() => {
    const params = {
      page: 1,
      pageSize: 12,
      sortBy: sort,
      keyword: searchWord,
      isPublic: isPublic,
      groupId: GroupId,
    };
    const data = getPostList(GroupId, params);
    data.then((el) => setPostList(el));
  }, [isPublic, sort, searchWord, GroupId]);

  return (
    <G.Container>
      <Header />
      <G.wapper>
        <div>Group Detail component</div>
        <D.Line />
        <D.Title>
          추억 목록
          <Button
            style={{
              position: "absolute",
              right: "0px",
              top: "0px",
            }}
            text={"추억 올리기"}
          />
        </D.Title>
        <G.Row style={{ margin: "60px auto" }}>
          <Tab setIsPublic={setIsPublic} isPublic={isPublic} text={"공개"} />
          <Tab setIsPublic={setIsPublic} isPublic={!isPublic} text={"비공개"} />
          <Search
            text={"태그 혹은 제목을 입력해 주세요."}
            setSearchWord={setSearchWord}
          />
          <Dropdown type="post" setSort={setSort} />
        </G.Row>
        {postList?.length > 0 ? (
          <>
            <G.List>
              {postList.map((post) => (
                <MemoryCard key={post.id} postData={post} />
              ))}
            </G.List>
            <MoreBtn />
          </>
        ) : (
          <G.NoData style={{ padding: "60px 0" }}>
            <div>no post</div>
            <LongBtn text={"추억 올리기"} />
          </G.NoData>
        )}
      </G.wapper>
    </G.Container>
  );
}

export default GroupDetail;
