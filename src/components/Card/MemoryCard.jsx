import * as C from "../../styles/components/CardStyle";
import img1 from "../../assets/img1.png";
import flower from "../../assets/flower.svg";
import comment from "../../assets/comment.svg";
import color from "../../util/Color";

const MemoryCard = ({ postData }) => {
  const moment = new Date(postData.moment);
  const fomat = `${moment.getFullYear()}.${
    moment.getMonth() + 1
  }.${moment.getDate()}`;

  return (
    <C.Card>
      {postData.isPublic && (
        <>
          {postData?.imageUrl ? (
            <C.CardImg src={postData.imageUrl} alt="추억이미지" />
          ) : (
            <C.NonImg>
              <img src={flower} alt="이미지없음" />
            </C.NonImg>
          )}
        </>
      )}

      <C.Row>
        <div>{postData.nickname}</div>
        <div style={{ color: color.gray400 }}>|</div>
        <div style={{ color: color.gray500 }}>
          {postData.isPublic ? "공개" : "비공개"}
        </div>
      </C.Row>
      <C.Title>
        <h4>{postData.title}</h4>
        {postData.isPublic && <p>{postData.tags.map((tag) => `#${tag} `)}</p>}
      </C.Title>
      <C.Row style={{ justifyContent: "space-between" }}>
        {postData.isPublic && (
          <C.Row style={{ gap: "5px" }}>
            <C.CountTitle style={{ color: color.black }}>
              {postData.location}
            </C.CountTitle>
            <C.CountTitle style={{ color: color.black }}>{fomat}</C.CountTitle>
          </C.Row>
        )}
        <C.Row style={{ gap: "20px", color: color.gray500 }}>
          <C.Row style={{ gap: "5px" }}>
            <C.ImgIcon src={flower} alt="추억공감" />
            {postData.likeCount}
          </C.Row>
          <C.Row style={{ gap: "5px" }}>
            <C.ImgIcon src={comment} alt="댓글" />
            {postData.commentCount}
          </C.Row>
        </C.Row>
      </C.Row>
    </C.Card>
  );
};

export default MemoryCard;
