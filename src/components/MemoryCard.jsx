import * as C from "../styles/CardStyle";
import img1 from "../assets/img1.png";
import flower from "../assets/flower.svg";
import comment from "../assets/comment.svg";
import color from "../util/Color";

const MemoryCard = ({ memoryData, isPublic }) => {
  return (
    <C.Card>
      {isPublic && (
        <>
          {memoryData?.imageUrl ? (
            <C.CardImg src={memoryData.imageUrl} alt="이미지1" />
          ) : (
            <C.NonImg>
              <img src={flower} alt="이미지없음" />
            </C.NonImg>
          )}
        </>
      )}

      <C.Row>
        <div>달봉아이들</div>
        <div style={{ color: color.gray400 }}>|</div>
        <div style={{ color: color.gray500 }}>
          {isPublic ? "공개" : "비공개"}
        </div>
      </C.Row>
      <C.Title>
        <h4>에델바이스 꽃말이 소중한 추억인데 길어지면 요렇게 하세요.</h4>
        {isPublic && (
          <p>
            #태그 #길면 #두줄 #낚시 #인천 #낚시 #인천 #낚시 #인천 #낚시 #인천
          </p>
        )}
      </C.Title>
      <C.Row style={{ justifyContent: "space-between" }}>
        {isPublic && (
          <C.Row style={{ gap: "5px" }}>
            <C.CountTitle style={{ color: color.black }}>
              인천 앞바다
            </C.CountTitle>
            <C.CountTitle style={{ color: color.black }}>
              · 24.01.19
            </C.CountTitle>
          </C.Row>
        )}
        <C.Row style={{ gap: "20px", color: color.gray500 }}>
          <C.Row style={{ gap: "5px" }}>
            <C.ImgIcon src={flower} alt="추억공감" />
            120
          </C.Row>
          <C.Row style={{ gap: "5px" }}>
            <C.ImgIcon src={comment} alt="추억공감" />8
          </C.Row>
        </C.Row>
      </C.Row>
    </C.Card>
  );
};

export default MemoryCard;
