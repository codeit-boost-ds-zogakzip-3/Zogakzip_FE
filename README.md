# 토이 프로젝트 [조각집]
기억 저장 및 공유 서비스

## 💡서비스 핵심 기능
### 그룹 관리
- 그룹 등록/수정/삭제/조회
- 그룹 목록
    - 최신순, 공감순, 획득 배지순, 게시글 많은순으로 정렬
    - 그룹명으로 검색
    - 그룹 공개 여부 선택
- 그룹 상세 정보 조회
    - 그룹의 대표 이미지, 그룹명, 그룹 소개, 그룹 공개 여부, 디데이(생성 후 지난 일수), 획득 배지 목록, 추억수, 그룹 공감수 표시
    - 일정 조건을 달성하면 자동으로 배지를 획득
    - 게시글 목록
### 게시글(추억) 관리
- 게시글 등록/수정/삭제/조회
- 게시글 목록
    - 최신순, 댓글순, 공감순으로 정렬
    - 제목, 태그로 검색
    - 게시글 공개 여부 선택
- 게시글 상세 정보 조회
    - 닉네임, 제목, 이미지(한 장), 본문, 태그, 장소, 추억의 순간, 추억 공개 여부, 추억 공감수, 댓글수가 표시
    - 댓글 목록
### 댓글 관리
- 댓글 등록/수정/삭제/조회
- 댓글 목록
    - 닉네임, 댓글 생성 날짜, 댓글 내용이 표시

## 구현부
| **공개 그룹 목록**  |  **비공개 그룹 목록**   |  **그룹 목록(데이터 X)**   |
| :------------: | :------------: | :------------: |
| ![image](https://github.com/user-attachments/assets/1b7236d7-b53e-4387-998f-e4c641acbce0) | ![image](https://github.com/user-attachments/assets/3dc491b4-bed0-44cf-b963-7752ee64292a) | ![image](https://github.com/user-attachments/assets/7e2e3568-2d64-4a98-ae83-f36a63791d94) |
| **그룹 상세 - 공개 추억**   |  **그룹 상세 - 비공개 추억**   |  **그룹 상세 - 추억(데이터 X)**   |
| ![image](https://github.com/user-attachments/assets/9a11b493-282a-4c0b-927f-299c46cc2c0d) | ![image](https://github.com/user-attachments/assets/e6adbccf-388d-4a87-9a6d-6085f6ac1964) | ![image](https://github.com/user-attachments/assets/932f9905-65ac-48a1-b339-1a827346bd2d) |
| **그룹 만들기** | **그룹 정보 수정 모달** | **그룹 삭제 모달** |
| 삽입 예정 | ![image](https://github.com/user-attachments/assets/b8be2a26-e82b-4020-8f01-3510433e159d) | ![image](https://github.com/user-attachments/assets/c66747d4-067a-4972-9b79-21873daac772) |
| **추억 올리기**   |  **추억 올리기 권한 확인 모달**   |  **추억 올리기 성공 모달**  |
| ![image](https://github.com/user-attachments/assets/9db95943-40e1-4ef2-a6ae-dcdc5ec9b4dc) | ![image](https://github.com/user-attachments/assets/7fc86b5a-98bb-4e07-8a5b-46f92cc33350) | ![image](https://github.com/user-attachments/assets/6072b019-3910-4cc9-bbfb-3a1fcc8f1fac) |
| **비공개 그룹 접근 권한 확인** | **비공개 추억 접근 권한 확인** | **404** |
| ![image](https://github.com/user-attachments/assets/2597d2e8-4576-4a1a-860b-1859aae7554a) | 삽입 예정 | 삽입 예정 |
| **추억 상세**   |  **추억 수정 모달**   |  **추억 삭제 모달**   |
| 삽입 예정 | 삽입 예정 | 삽입 예정 |
| **댓글 등록 모달**   |  **댓글 수정 모달**   |  **댓글 삭제 모달**   |
| 삽입 예정 | 삽입 예정 | 삽입 예정 |

## 📅개발 기간
- 전체 개발 기간 : 2024.09.16 ~ 2024.10.13
- UI 구현 : 2024.09.16 ~ 2024.10.01
- 기능 구현 : 2024.10.01 ~ 2024.10.13

## ⚙️개발 환경
- Front : JavaScript, React + Vite, Styled-components, React Router, Axios
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
- 페이지 : 그룹 목록, 그룹 상세, 그룹 정보 수정 및 삭제 모달, 추억 올리기 및 권한 확인 모달, 비공개 그룹 접근 권한 확인 
- 공통 컴포넌트 : 버튼, 그룹 및 추억 카드, 헤더, 뱃지

### 이하늘
- 페이지 : 그룹 만들기, 비공개 추억 접근 권한 확인, 추억 상세, 추억 수정 및 삭제 모달, 댓글 모달, 404
- 공통 컴포넌트 : 그룹 및 추억 상세, Input, 404
