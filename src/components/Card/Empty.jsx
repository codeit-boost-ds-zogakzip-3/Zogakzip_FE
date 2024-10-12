import * as C from "../../styles/components/CardStyle";
import empty from "../../assets/empty.svg";

const Empty = ({ type }) => {
  const cardType = {
    group: ["등록된 그룹이 없습니다.", "가장 먼저 그룹을 만들어보세요!"],
    post: ["게시된 추억이 없습니다.", "첫 번째 추억을 올려보세요!"],
  };
  return (
    <C.Column style={{ gap: "20px" }}>
      <C.EmptyImg src={empty} alt="데이터 없음" />
      <C.EmptyTitle>{cardType[type][0]}</C.EmptyTitle>
      <C.EmptySubTitle>{cardType[type][1]}</C.EmptySubTitle>
    </C.Column>
  );
};

export default Empty;
