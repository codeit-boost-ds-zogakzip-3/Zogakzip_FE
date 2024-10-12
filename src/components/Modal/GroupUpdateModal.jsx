import * as M from "../../styles/components/GroupModalStyle";
import * as D from "../../styles/pages/GroupDetailStyle";
import * as P from "../../styles/components/PostCreateModalStyle";
import close from "../../assets/close.svg";
import TextInput from "../Input/TextInput";
import BoxInput from "../Input/boxInput";
import ImageInput from "../Input/ImageInput";
import LongBtn from "../Button/LongBtn";
import Toggle from "../Button/Toggle";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { updateGroup } from "../../util/api";

function GroupUpdateModal({
  setModal,
  groupData,
  setGroupData,
  setResultModal,
}) {
  const { GroupId } = useParams();
  const [isPublic, setIsPublic] = useState(groupData.isPublic);
  const [isError, setIsError] = useState(false);
  const [values, setValues] = useState({
    name: groupData.name,
    introduction: groupData.introduction,
    password: "",
    imageUrl: "",
    isPublic: isPublic,
  });

  const handleValuesChange = (e, error) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setIsError(error);
  };

  const handleUpdated = () => {
    const payload = {
      ...values,
      // name: values.groupName,
      // password: values.updatePassword,
      imageUrl: "http://example.com/image.jpg",
      // isPublic: isPublic,
      // introduction: values.groupContent,
    };

    if (!isError) {
      const data = updateGroup(GroupId, payload);
      data.then((el) => {
        if (el.status === 200) {
          // 수정 성공
          setGroupData(el.data);
          setModal("");
          setResultModal("groupUpdateSuccess");
        } else {
          // 수정 실패
          setResultModal("groupUpdateFail");
          alert("모두 올바르게 입력해주세요.");
        }
      });
    } else {
      alert("모두 올바르게 입력해주세요.");
    }
  };

  return (
    <M.ModalOverlay>
      <M.ModalContent>
        <M.CloseImg src={close} alt="닫기" onClick={() => setModal("")} />
        <D.Title style={{ marginTop: "40px" }}>그룹 정보 수정</D.Title>
        <P.Column style={{ margin: "60px auto" }}>
          <BoxInput
            name={"name"}
            title={"그룹명"}
            value={values.name}
            onChange={handleValuesChange}
          >
            그룹명을 입력해 주세요
          </BoxInput>
          <TextInput
            name="introduction"
            title="그룹 소개"
            value={values.introduction}
            onChange={handleValuesChange}
          >
            그룹을 소개해 주세요
          </TextInput>
          <ImageInput />
          <P.Column style={{ gap: "20px" }}>
            <M.Title>추억 공개 선택</M.Title>
            <P.Row style={{ gap: "20px" }}>
              {isPublic ? "공개" : "비공개"}
              <Toggle isPublic={isPublic} setIsPublic={setIsPublic} />
            </P.Row>
          </P.Column>
          <BoxInput
            name={"password"}
            type="password"
            title={"수정 권한 인증"}
            value={values.password}
            onChange={handleValuesChange}
          >
            그룹 비밀번호를 입력해 주세요
          </BoxInput>
        </P.Column>
        <LongBtn
          style={{ marginBottom: "40px" }}
          text={"수정하기"}
          onClick={handleUpdated}
        />
      </M.ModalContent>
    </M.ModalOverlay>
  );
}

export default GroupUpdateModal;
