import React, { useRef } from "react";
import styled from "styled-components";
import img1 from "../../assets/img1.png";
import Badge from "../Badge";
import LikeBtn from "../Button/LikeBtn";
import flower from "../../assets/flower.svg";

export default function MemoryInfoCard() {
  return (
    <Wrapper>
      <Content>
        <Header>
          <LabelContainer>
            <ColorLabel>달봉이네아들</ColorLabel>
            <Label>|</Label>
            {/* {groupInfoData.isPublic === true ? (
              <Label>공개</Label>
            ) : (
              <Label>비공개</Label>
            )} */}
            <Label>공개</Label>
          </LabelContainer>
          <ActionButtonsTop>
            <EditButton>추억 수정하기</EditButton>
            <DeleteButton>추억 삭제하기</DeleteButton>
          </ActionButtonsTop>
        </Header>
        <TitleContainer>
          <Title>인천 앞바다에서 무려 60cm 월척을 낚다!</Title>
        </TitleContainer>
        <Description>#인천 #낚시</Description>
        <BottomWrapper>
          <BottomContainer>
            <Section>
              <Label>인천 앞바다</Label>
              <Label></Label>
              <Label>24.01.19</Label>
              <Image src={flower} />
              <Label>240</Label>
              <Label>댓글</Label>
              <Label>12</Label>
            </Section>
            <ActionButtonsBottom>
              <LikeBtn />
            </ActionButtonsBottom>
          </BottomContainer>
        </BottomWrapper>
      </Content>
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
  width: 20px;
  height: 20px;
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

const ActionButtonsTop = styled.div`
  display: flex;
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
  width: 800px;
  white-space: nowrap;
`;

const ArrowButton = styled.button`
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
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
