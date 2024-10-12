import * as G from "../styles/pages/GroupStyle";
import * as D from "../styles/pages/GroupDetailStyle";
import Header from "../components/Header";
import BoxInput from "../components/Input/boxInput";
import LongBtn from "../components/Button/LongBtn";
import { groupPassword } from "../util/api";
import { useParams } from "react-router-dom";
import { useState } from "react";

function GroupAccess({ setIsGroupPublic, setResultModal }) {
  const { GroupId } = useParams();
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClicked = () => {
    const data = groupPassword(GroupId, password);
    data.then((el) => {
      if (el.status === 200) {
        // 권한 성공
        //navigate(`/`);
        setIsGroupPublic(true);
      } else {
        // 실패
        setResultModal("groupAccessFail");
        setIsGroupPublic(false);
      }
    });
  };
  return (
    <G.Container>
      <Header />
      <D.Column>
        <D.Title style={{ marginTop: "284px" }}>비공개 그룹</D.Title>
        <D.SubTitle>
          비공개 그룹에 접근하기 위해 권한 확인이 필요합니다.
        </D.SubTitle>
        <BoxInput
          type="password"
          title={"삭제 권한 인증"}
          value={password}
          onChange={handlePasswordChange}
        >
          그룹 비밀번호를 입력해 주세요
        </BoxInput>
        <LongBtn
          style={{ marginTop: "60px" }}
          text={"제출하기"}
          onClick={handleClicked}
        />
      </D.Column>
    </G.Container>
  );
}

export default GroupAccess;
