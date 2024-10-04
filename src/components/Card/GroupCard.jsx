import * as C from "../../styles/components/CardStyle";
import img1 from "../../assets/img1.png";
import flower from "../../assets/flower.svg";
import color from "../../util/Color";

const GroupCard = ({ groupData, isPublic }) => {
  return (
    <C.Card>
      {isPublic && (
        <>
          {groupData?.imageUrl ? (
            <C.CardImg src={groupData.imageUrl} alt="이미지1" />
          ) : (
            <C.NonImg>
              <img src={flower} alt="이미지없음" />
            </C.NonImg>
          )}
        </>
      )}

      <C.Row>
        <div>D+265</div>
        <div style={{ color: color.gray400 }}>|</div>
        <div style={{ color: color.gray500 }}>
          {isPublic ? "공개" : "비공개"}
        </div>
      </C.Row>
      <C.Title>
        <div style={{ fontWeight: "bold" }}>에델바이스</div>
        <div>서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.</div>
      </C.Title>
      <C.Row style={{ gap: "40px" }}>
        {isPublic && (
          <C.Column>
            <C.CountTitle>획득 배지</C.CountTitle>2
          </C.Column>
        )}
        <C.Column>
          <C.CountTitle>추억</C.CountTitle>8
        </C.Column>
        <C.Column>
          <C.CountTitle>그룹 공감</C.CountTitle>
          <C.Row style={{ gap: "5px" }}>
            <C.ImgIcon src={flower} alt="그룹공감" />
            1.5K
          </C.Row>
        </C.Column>
      </C.Row>
    </C.Card>
  );
};

export default GroupCard;
