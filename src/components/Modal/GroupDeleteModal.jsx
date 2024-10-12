import * as M from "../../styles/components/GroupModalStyle";
import * as D from "../../styles/pages/GroupDetailStyle";
import close from "../../assets/close.svg";
import BoxInput from "../Input/boxInput";
import LongBtn from "../Button/LongBtn";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { deleteGroup } from "../../util/api";

function GroupDeleteModal({ setModal, setResultModal }) {
  const { GroupId } = useParams();
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handlePasswordChange = (e, error) => {
    setPassword(e.target.value);
    setIsError(error);
  };

  const handledeleted = () => {
    if (!isError) {
      const data = deleteGroup(GroupId, password);
      data.then((el) => {
        if (el.status === 200) {
          // 삭제 성공
          setModal("");
          setResultModal("groupDeleteSuccess");
        } else {
          // t삭제 실패
          setResultModal("groupDeleteFail");
          alert("비밀번호를 올바르게 입력해주세요.");
        }
      });
    } else {
      alert("비밀번호를 올바르게 입력해주세요.");
    }
  };

  return (
    <M.ModalOverlay>
      <M.ModalContent style={{ overflow: "hidden" }}>
        <M.CloseImg src={close} alt="닫기" onClick={() => setModal("")} />
        <D.Title style={{ margin: "40px auto" }}>그룹 삭제</D.Title>
        <BoxInput
          type="password"
          title={"삭제 권한 인증"}
          value={password}
          onChange={handlePasswordChange}
        >
          그룹 비밀번호를 입력해 주세요
        </BoxInput>
        <LongBtn
          style={{ margin: "60px auto 40px" }}
          text={"삭제하기"}
          onClick={handledeleted}
        />
      </M.ModalContent>
    </M.ModalOverlay>
  );
}

export default GroupDeleteModal;
