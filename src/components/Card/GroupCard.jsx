import * as C from "../../styles/components/CardStyle";
import img1 from "../../assets/img1.png";
import flower from "../../assets/flower.svg";
import color from "../../util/Color";
import { useNavigate } from "react-router-dom";

const GroupCard = ({ groupData }) => {
  const navigate = useNavigate();
  const today = new Date();
  const createDate = new Date(groupData.createdAt);
  const diffTime = today - createDate; // 밀리초 단위 차이 계산
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1; // 밀리초를 일수로 변환

  const handleClicked = () => navigate(`/${groupData.id}`);

  return (
    <C.Card onClick={handleClicked}>
      {groupData.isPublic && (
        <>
          {groupData?.imageUrl ? (
            <C.CardImg src={groupData.imageUrl || img1} alt="그룹이미지" />
          ) : (
            <C.NonImg>
              <img src={flower} alt="이미지없음" />
            </C.NonImg>
          )}
        </>
      )}

      <C.Row>
        <div>{`D+${diffDays}`}</div>
        <div style={{ color: color.gray400 }}>|</div>
        <div style={{ color: color.gray500 }}>
          {groupData.isPublic ? "공개" : "비공개"}
        </div>
      </C.Row>
      <C.Title>
        <div style={{ fontWeight: "bold" }}>{groupData.name}</div>
        <div>{groupData.introduction}</div>
      </C.Title>
      <C.Row style={{ gap: "40px" }}>
        {groupData.isPublic && (
          <C.Column>
            <C.CountTitle>획득 배지</C.CountTitle>
            {groupData.badgeCount}
          </C.Column>
        )}
        <C.Column>
          <C.CountTitle>추억</C.CountTitle>
          {groupData.postCount}
        </C.Column>
        <C.Column>
          <C.CountTitle>그룹 공감</C.CountTitle>
          <C.Row style={{ gap: "5px" }}>
            <C.ImgIcon src={flower} alt="그룹공감" />
            {`${groupData.likeCount}K`}
          </C.Row>
        </C.Column>
      </C.Row>
    </C.Card>
  );
};

export default GroupCard;
