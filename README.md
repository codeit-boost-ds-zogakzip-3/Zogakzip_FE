# 토이 프로젝트 [조각집]
기억 저장 및 공유 서비스

## 📅개발 기간
- 전체 개발 기간 : 2024.09.16 ~ 2024.10.13
- UI 구현 : 2024.09.16 ~ 2024.10.01
- 기능 구현 : 2024.10.01 ~ 2024.10.13

## ⚙️개발 환경
- Front : JavaScript, React + Vite, Styled-components, React Router, Axios
- Back-end : 
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : AWS S3
- 디자인 : Figma
- [컨벤션](https://wise-risk-0fc.notion.site/1078b87f9f72809184fcf26502fba2e5?pvs=4)

## 🗂️폴더 구조

    ├── package-lock.json
    ├── package.json
    │
    ├── public
    └── src
        ├── assets
        ├── components
        ├── hooks
        ├── pages
        └── util
    

## 👩‍👧‍👧역할 분담
### 박주하
- 페이지 : 그룹 목록, 그룹 상세, 그룹 정보 수정 및 삭제 모달, 추억 올리기 및 권한 확인 모달 
- 공통 컴포넌트 : 버튼, 그룹 및 추억 카드, 헤더, 뱃지

### 이하늘
- 페이지 : 그룹 만들기, 비공개 그룹 및 추억 접근 권한 확인, 추억 상세, 추억 수정 및 삭제 모달, 댓글 모달, 404
- 공통 컴포넌트 : 그룹 및 추억 상세, Input, 404
