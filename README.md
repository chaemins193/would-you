# Would, U?
> 친구와 함께 일기를 작성하고 서로의 감정을 돌아볼 수 있는 서비스

## 프로젝트 개요

![로고](./front/public/mainlogo.png)

- 개발 기간: 2022-11-14 ~ 2022-12-16
- 서비스 링크: [https://kdt-ai5-team05.elicecoding.com](https://kdt-ai5-team05.elicecoding.com/)
- 본 프로젝트의 구조를 더 자세히 알고 싶다면?
  - [백엔드 README](./back/README.md)
  - [프론트엔드 README](./front/README.md)
  - [AI README](./ai/README.md)

## 기술 스택
`Front-End` 

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&logo=ReactQuery&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-black?style=flat-square&logo=Recoil&logoColor=white"/>
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactHookForm-EC5990?style=flat-square&logo=ReactHookForm&logoColor=white"/>


`Back-end`

<img src="https://img.shields.io/badge/Nest.js-E0234E?style=flat-square&logo=Nestjs&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/mysql-4479A1?style=flat-square&logo=mysql&logoColor=white">

`AI`

<img src="https://img.shields.io/badge/Tensorflow-FF6F00?style=flat-square&logo=TensorFlow&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/Flask-000000?style=flat-square&logo=Flask&logoColor=white">

## 실행 방법

1. 프로젝트 레포지토리를 클론합니다.

```sh
$ git clone https://kdt-gitlab.elice.io/ai_track/class05/ai_project/team05/team05.git
```

2. 프로젝트 실행에 필요한 패키지를 설치합니다.

```sh
$ cd front
$ npm i

$ cd back
$ npm i
```

3. development server을 실행합니다.
```sh
$ npm run dev
# or
$ yarn dev
```

## 주요 기능

### ✏ 소중한 사람과 **공용 일기장**을 만들어 서로의 일상을 공유할 수 있어요.  
  ![캡처1](https://user-images.githubusercontent.com/63277996/209142428-f134a53f-fb23-43a1-b505-6ee0761b9bfb.PNG)
  ![캡처2](https://user-images.githubusercontent.com/63277996/209142431-4143e67e-6316-4581-a642-4878eb82a054.PNG)
  ![캡처3](https://user-images.githubusercontent.com/63277996/209142435-7239bb61-01ba-4f83-a17a-b6775de842f4.PNG)
  ![캡처4](https://user-images.githubusercontent.com/63277996/209142437-d5154a08-b494-4d79-9258-550e6d2b4b4b.PNG)

+ 마이페이지
  + 유저 코드를 입력하여 친구 요청
  + 알림을 통해 친구 요청을 수락하거나 거절
  + 수락 시 공용 일기장 생성
  + 일기장 이름 수정 가능

+ 교환일기
  + 월 별 일기 기록 제공
  + 정확한 감정 분석을 위해 일기 작성은 당일 한 번만 가능 (수정 및 삭제 불가능)
  + 일기 작성 시 자동으로 감정을 분석
  + 일기 작성 당일 자정이 지나는 시점에 기분 전환할 수 있는 활동을 추천
+ 홈
  + 분석된 감정 기록을 캘린더 형태로 제공 (나 & 상대방)

### 📌 추천받은 활동을 포함한 사용자의 일정을 **투두 리스트**로 관리할 수 있어요.   
  ![캡처5](https://user-images.githubusercontent.com/63277996/209142438-031022a6-dc0a-4a64-be42-26f9cb8a1bf2.PNG)
  ![캡처6](https://user-images.githubusercontent.com/63277996/209142439-44559a98-b21e-4a6b-a545-76bd45d21639.PNG)

+ 일정 관리
  + 추천받은 활동은 자동으로 투두 리스트에 추가
  + 사용자가 직접 투두 리스트 생성, 수정, 삭제 가능
  + 월 별로 일정을 보여 줌
  + 완료 표시 가능

### ⚙ 내 정보를 간편하게 관리할 수 있어요.
  ![캡처7](https://user-images.githubusercontent.com/63277996/209142441-b0cc9317-71a0-4cb0-8f04-985d86e49fc0.PNG)
  ![캡처8](https://user-images.githubusercontent.com/63277996/209142444-296e9d13-6539-4024-b86d-e8fd8a5e7a1a.PNG)
  
+ 마이페이지
  + 닉네임, 비밀번호, 일기장 이름 수정 가능
  + 최적화된 활동 추천을 위한 관심 분야 설정 가능
  + 연결 끊기, 회원 탈퇴 가능

## 부가 기능

* 소셜 로그인 (카카오)
* 반응형 웹 디자인
* react-error-boundary 사용하여 폴백 UI로 에러 화면 구성
* 전역 style 정의하여 라이트/다크 모드 구현

## 팀원 소개

| 이름 | 포지션 | Contact |
| --- | --- | --- |
| 송태원 | AI | stw8194@gmail.com |
| 신채민 | BE | chaemins193@gmail.com |
| 남궁혜진 | FE | hjinnny@naver.com |
| 박지연 | FE | https://github.com/yeoooon |
| 임정은 | FE | zzeong315@gmail.com |
