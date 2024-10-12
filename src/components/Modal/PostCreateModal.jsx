import * as D from "../../styles/pages/GroupDetailStyle";
import * as M from "../../styles/components/GroupModalStyle";
import * as P from "../../styles/components/PostCreateModalStyle";
import TextInput from "../Input/TextInput";
import BoxInput from "../Input/boxInput";
import ImageInput from "../Input/ImageInput";
import TagInput from "../Input/TagInput";
import DateInput from "../Input/DateInput";
import LongBtn from "../Button/LongBtn";
import Toggle from "../Button/Toggle";
import close from "../../assets/close.svg";
import ResultModal from "./ResultModal";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { createPost, groupPassword } from "../../util/api";

function PostCreateModal({ setPostCreateOpen, setResultModal }) {
  const { GroupId } = useParams();
  const [isPublic, setIsPublic] = useState(true);
  const [passwordModal, setPasswordModal] = useState(false);
  const [isError, setIsError] = useState(false);
  const [values, setValues] = useState({
    nickName: "",
    title: "",
    content: "",
    location: "",
    postPassword: "",
    groupPassword: "",
    imageUrl: "",
    tags: [],
    moment: "",
  });

  const handleValuesChange = (e, error = false) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setIsError(error);
  };

  const handleTagChange = (tags) => setValues({ ...values, tags: tags });

  const handleCreated = () => {
    if (!isError) {
      const success = groupPassword(GroupId, values.groupPassword);
      success.then((el) => {
        if (el.status === 200) {
          // 그룹 비번 확인 성공
          const payload = {
            nickname: values.nickName,
            title: values.title,
            content: values.content,
            password: values.postPassword,
            //groupPassword: values.upPassword,
            image: "http://example.com/image.jpg",
            tags: values.tags,
            location: values.location,
            memory_time: values.moment,
            is_public: isPublic,
          };
          const data = createPost(GroupId, payload);
          data.then((el) => {
            if (el.status === 201) {
              setPasswordModal(false);
              setResultModal("postSuccess");
              setPostCreateOpen(false);
            } else {
              //게시글 내용 오류
              setResultModal("postFail");
              setPasswordModal(false);
              alert("게시글을 모두 올바르게 입력해주세요.");
            }
          });
        } else {
          //그룹 비번 오류
          setPasswordModal(false);
          setResultModal("postFail");
          alert("비밀번호를 올바르게 입력해주세요.");
        }
      });
    } else {
      alert("모두 올바르게 입력해주세요.");
    }
  };

  return (
    <P.Container>
      <P.CloseImg
        src={close}
        alt="닫기"
        onClick={() => setPostCreateOpen(false)}
      />
      <D.Title style={{ margin: "78px auto 60px" }}>추억 올리기</D.Title>
      <P.Row style={{ marginBottom: "60px" }}>
        <P.Column>
          <BoxInput
            name={"nickName"}
            title={"닉네임"}
            value={values.nickName}
            onChange={handleValuesChange}
          >
            닉네임을 입력해 주세요
          </BoxInput>
          <BoxInput
            name={"title"}
            title={"제목"}
            value={values.title}
            onChange={handleValuesChange}
          >
            제목을 입력해 주세요
          </BoxInput>
          <ImageInput />
          <TextInput
            name="content"
            title="본문"
            value={values.content}
            onChange={handleValuesChange}
          >
            본문 내용을 입력해 주세요
          </TextInput>
        </P.Column>
        <P.Line />
        <P.Column>
          <TagInput onChange={handleTagChange} />
          <BoxInput
            name={"location"}
            title={"장소"}
            value={values.location}
            onChange={handleValuesChange}
          >
            장소를 입력해 주세요
          </BoxInput>
          <DateInput value={values.moment} onChange={handleValuesChange} />
          <P.Column style={{ gap: "20px" }}>
            <M.Title>추억 공개 선택</M.Title>
            <P.Row style={{ gap: "20px" }}>
              {isPublic ? "공개" : "비공개"}
              <Toggle isPublic={isPublic} setIsPublic={setIsPublic} />
            </P.Row>
          </P.Column>
          <BoxInput
            name={"postPassword"}
            title={"비밀번호 생성"}
            type="password"
            value={values.postPassword}
            onChange={handleValuesChange}
          >
            추억 비밀번호를 생성해 주세요
          </BoxInput>
        </P.Column>
      </P.Row>
      <LongBtn text={"올리기"} onClick={() => setPasswordModal(true)} />
      {passwordModal && (
        <M.ModalOverlay>
          <M.ModalContent style={{ overflow: "hidden" }}>
            <M.CloseImg
              src={close}
              alt="닫기"
              onClick={() => setPasswordModal(false)}
            />
            <D.Title style={{ margin: "40px auto" }}>추억 올리기</D.Title>
            <BoxInput
              name="groupPassword"
              type="password"
              values={values.groupPassword}
              title={"올리기 권한 인증"}
              onChange={handleValuesChange}
            >
              그룹 비밀번호를 입력해 주세요
            </BoxInput>
            <LongBtn
              style={{ margin: "60px auto 40px" }}
              text={"제출하기"}
              onClick={handleCreated}
            />
          </M.ModalContent>
        </M.ModalOverlay>
      )}
    </P.Container>
  );
}

export default PostCreateModal;
