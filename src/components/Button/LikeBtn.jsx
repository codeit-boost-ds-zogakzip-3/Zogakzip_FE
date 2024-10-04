import * as B from "../../styles/components/ButtonStyle";
import flower from "../../assets/flower.svg";

const LikeBtn = ({ onClick }) => {
  return (
    <B.LikeBtn onClick={onClick}>
      <img src={flower} alt="이미지" />
      공감 보내기
    </B.LikeBtn>
  );
};

export default LikeBtn;
