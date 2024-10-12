import * as M from "../../styles/components/GroupModalStyle";
import * as D from "../../styles/pages/GroupDetailStyle";
import LongBtn from "../Button/LongBtn";
import { useNavigate } from "react-router-dom";

function ResultModal({ type, setResultModal }) {
  const navigate = useNavigate();
  const modalType = {
    postSuccess: ["추억 올리기 성공", "추억이 성공적으로 등록되었습니다."],
    postFail: ["추억 올리기 실패", "추억 등록에 실패했습니다."],
    groupUpdateSuccess: ["그룹 수정 성공", "그룹 정보 수정에 성공했습니다."],
    groupUpdateFail: ["그룹 수정 실패", "그룹 수정에 실패했습니다."],
    groupDeleteSuccess: [
      "그룹 삭제 성공",
      "그룹 삭제에 성공했습니다. 그룹 목록 페이지로 이동합니다.",
    ],
    groupDeleteFail: ["그룹 삭제 실패", "그룹 삭제에 실패했습니다."],
    groupAccessFail: ["비공개 그룹 접근 실패", "비밀번호가 일치하지 않습니다."],
  };

  const handleClicked = () => {
    if (type === "groupDeleteSuccess") navigate(`/`);
    setResultModal();
  };

  return (
    <M.ModalOverlay>
      <M.ModalContent style={{ overflow: "hidden" }}>
        <D.Title style={{ marginTop: "80px" }}>{modalType[type][0]}</D.Title>
        <M.SubTitle style={{ marginTop: "20px" }}>
          {modalType[type][1]}
        </M.SubTitle>
        <LongBtn
          style={{ margin: "60px auto 40px" }}
          text={"확인"}
          onClick={handleClicked}
        />
      </M.ModalContent>
    </M.ModalOverlay>
  );
}

export default ResultModal;
