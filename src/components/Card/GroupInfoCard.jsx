import React, { useRef, useState } from "react";
import { groupLike } from "../../util/api";
import { useParams } from "react-router-dom";
import { Dday } from "./GroupCard";
import styled from "styled-components";
import * as C from "../../styles/components/CardStyle";
import flower from "../../assets/flower.svg";
import img2 from "../../assets/img2.png";
import Badge from "../Badge";
import LikeBtn from "../Button/LikeBtn";
import GroupDeleteModal from "../Modal/GroupDeleteModal";
import GroupUpdateModal from "../Modal/GroupUpdateModal";
import ResultModal from "../Modal/ResultModal";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

// const groupInfoData = {
//   dday: "225",
//   imageUrl: img2,
//   isPublic: true,
//   name: "달봉이네 가족 달봉이네 가족 달봉이네 가족 달봉이네 가족 달봉이네 가족 달봉이네 가족 달봉이네 가족 달봉이네 가족 달봉이네 가족",
//   postCount: 8,
//   likeCount: 14,
//   introduction:
//     "서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.서로 한 마음으로 응원하고 아끼는 달봉이네 가족입니다.",
//   badges: [
//     "👾 7일 연속 추억 등록",
//     "🌼 그룹 공감 1만 개 이상 받기",
//     "👾 7일 연속 추억 등록",
//     "🌼 그룹 공감 1만 개 이상 받기",
//   ],
// };

export default function GroupInfoCard({ groupInfoData }) {
  const badgeSectionRef = useRef(null);
  const { GroupId } = useParams();
  const [modal, setModal] = useState("");
  const [resultModal, setResultModal] = useState();
  const [groupData, setGroupData] = useState(groupInfoData);
  const diffDays = Dday(groupData.createdAt);

  const scrollLeft = () => {
    if (badgeSectionRef.current) {
      badgeSectionRef.current.scrollBy({
        left: -150,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (badgeSectionRef.current) {
      badgeSectionRef.current.scrollBy({
        left: 150,
        behavior: "smooth",
      });
    }
  };

  const handleLiked = () => {
    const data = groupLike(GroupId);
    data.then((el) => setGroupData({ ...groupData, likeCount: el }));
  };

  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          {groupData.imageUrl ? (
            <Image src={groupData.imageUrl} />
          ) : (
            <C.NonImg style={{ width: "250px" }}>
              <img src={flower} alt="이미지없음" />
            </C.NonImg>
          )}
        </ImageContainer>
        <Content>
          <Header>
            <LabelContainer>
              <ColorLabel>{`D+${diffDays}`}</ColorLabel>
              <Label>|</Label>
              {groupData.isPublic === true ? (
                <Label>공개</Label>
              ) : (
                <Label>비공개</Label>
              )}
            </LabelContainer>
            <ActionButtonsTop>
              <EditButton onClick={() => setModal("update")}>
                그룹 정보 수정하기
              </EditButton>
              <DeleteButton onClick={() => setModal("delete")}>
                그룹 삭제하기
              </DeleteButton>
            </ActionButtonsTop>
          </Header>
          <TitleContainer>
            <Title>{groupData.name}</Title>
            <Stats>
              <Stat>추억 {groupData.postCount}</Stat>
              <Stat>|</Stat>
              <Stat>그룹 공감 {groupData.likeCount}</Stat>
            </Stats>
          </TitleContainer>
          <Description>{groupData.introduction}</Description>
          <BottomWrapper>
            <BadgeTitle>획득 뱃지</BadgeTitle>
            <BottomContainer>
              <BadgeContainer>
                <ArrowButton onClick={scrollLeft} src={arrowLeft} />
                <BadgeSection ref={badgeSectionRef}>
                  {groupData.badges?.map((badge, idx) => (
                    <Badge key={idx} text={badge} />
                  ))}
                </BadgeSection>
                <ArrowButton onClick={scrollRight} src={arrowRight} />
              </BadgeContainer>
              <ActionButtonsBottom>
                <LikeBtn onClick={handleLiked} />
              </ActionButtonsBottom>
            </BottomContainer>
          </BottomWrapper>
        </Content>
      </Container>
      {modal === "update" && (
        <GroupUpdateModal
          setModal={setModal}
          groupData={groupData}
          setGroupData={setGroupData}
          setResultModal={setResultModal}
        />
      )}
      {modal === "delete" && (
        <GroupDeleteModal setModal={setModal} setResultModal={setResultModal} />
      )}
      {resultModal && (
        <ResultModal type={resultModal} setResultModal={setResultModal} />
      )}
    </Wrapper>
  );
}

// Styled Components

const Wrapper = styled.div`
  /* max-width: 1000px; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
const Container = styled.div`
  padding: 20px;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  flex-direction: row;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  margin-right: 20px;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 75%; */
  position: relative;
  gap: 10px;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  /* position: relative; */
`;

const Label = styled.span`
  font-size: 14px;
  color: #888;
  font-weight: 700;
`;
const ColorLabel = styled.span`
  font-size: 14px;
  color: #282828;
  font-weight: 700;
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  color: #282828;
  margin: 0 0 10px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const BadgeTitle = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 700;
  color: #282828;
`;

const EditButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 14px;
  color: #282828;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: 0px;
  font-size: 14px;
  color: #8d8d8d;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
`;

const Stats = styled.div`
  display: flex;
  gap: 17px;
  margin-bottom: 10px;
  width: 30%;
`;

const Stat = styled.span`
  font-size: 14px;
  color: #282828;
  font-style: normal;
  font-weight: 700;
`;

const Description = styled.div`
  font-size: 16px;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 44px;
  white-space: normal;
  width: 100%;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
  width: 100%;
  flex-direction: column;
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  /* justify-content: space-between; */
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ActionButtonsTop = styled.div`
  /* position: absolute; */
  display: flex;
  /* 
  gap: 10px;
  margin-left: auto; */
  justify-content: flex-end;
`;

const ActionButtonsBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

const BadgeSection = styled.div`
  display: flex;
  /* margin-top: 15px; */
  overflow-x: auto;
  scroll-behavior: smooth;
  white-space: nowrap;
  overflow: hidden;
  width: 100px;
  flex: 1;
  white-space: nowrap;
`;

const ArrowButton = styled.img`
  background: none;
  border: 0;
  border-radius: 50%;
  font-size: 24px;
  background-color: #e5e5e5;
  cursor: pointer;
  color: #666;
  &:hover {
    color: #000;
  }
`;
const Section = styled.div`
  display: flex;
  /* margin-top: 15px; */
  overflow: hidden;
  width: 100%;
  gap: 10px;
  white-space: nowrap;
`;
