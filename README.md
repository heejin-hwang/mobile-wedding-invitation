# 💌 Mobile Wedding Invitation 💌

![훑어보기.gif](..%2F..%2FDownloads%2F%ED%9B%91%EC%96%B4%EB%B3%B4%EA%B8%B0.gif)


이 프로젝트는 모바일 청첩장 입니다.

React와 Typescript를 기반으로 개발되었으며, Vite를 사용하여 빠르고 간편한 개발 환경을 제공합니다. 

eslint와 prettier를 적용했고, emotion/styled를 활용하여 스타일링을 헸습니다.

갤러리는 react-photoswipe-gallery, 지도는 react-naver-maps 를 사용했습니다.

js-confetti를 이용하여 귀여운 컨페티 기능을 넣었습니다.


---

## 목차
1. 프로젝트 설치 및 실행 방법
2. 프로젝트 사용 방법
3. 커스텀 해야하는 파일
4. 참고 자료
5. 라이센스


---

### 프로젝트 설치 및 실행 방법
1. 저장소를 클론합니다.
```
git clone https://github.com/your-username/mobile-wedding-invitation.git
```
2. 프로젝트 폴더로 이동합니다.
```
cd mobile-wedding-invitation
```
3. 필요한 의존성을 설치합니다.
```
npm install
```
4. (필수) .env 파일을 생성하고, VITE_APP_NAVERMAPS_CLIENT_ID에 `clinet_id`를 채웁니다. `client_id`는 [NAVER CLOUD PLATFORM](https://console.ncloud.com/naver-service/application) 에서 어플리케이션 등록 후 발급받을 수 있습니다.
5. (선택) likes와 방명록 기능 사용을 원한다면 Firebase 설정이 필요합니다. src/firebase.ts 파일에 Firebase SDK를 설정합니다. [Firebase](https://firebase.google.com/docs/web/setup?hl=ko) 문서를 참고하여 SDK를 설정할 수 있습니다.
6. 사용자 정의가 필요한 파일들을 수정합니다. (아래의 체크리스트 참고)
7. 애플리케이션을 실행합니다.
```
npm run dev
```

---
### 커스텀 체크리스트

- [ ] `src/data.json` 청첩장에 들어갈 정보를 수정합니다.
- [ ] `index.html` 파비콘, title, og tag에 쓰일 meta tag 등을 수정합니다.
- [ ] `public/thumbnail.jpg` 썸네일 사진을 수정합니다.
- [ ] `src/layout/Gallery/PhotoGallery.tsx` 사용할 사진들에 맞게 사진 사이즈를 수정합니다.
- [ ] `.env` VITE_APP_NAVERMAPS_CLIENT_ID=client_id 입력이 필요합니다.
- [ ] (선택) `src/firebase.ts` likes, 방명록을 사용한다면 firebase sdk 설정이 필요합니다.
- [ ] (선택) `src/data.json` 혼주 계좌번호 작성시 `kakaopayAccount`, `tossAccount` 항목을 이용해 카카오페이나 토스 링크를 추가할 수 있습니다.

---
### 참고 자료
- 개발자: [heejin-hwang](https://github.com/heejin-hwang)
- react-photoswipe-gallery 라이브러리: [react-photoswipe-gallery](https://www.npmjs.com/package/react-photoswipe-gallery)
- react-naver-maps 공식문서: [react-naver-maps](https://zeakd.github.io/react-naver-maps/)
- 네이버 클라우드 플랫폼: [NAVER CLOUD PLATFORM](https://console.ncloud.com/naver-service/application)
- 카카오 디벨로퍼스: https://developers.kakao.com/
- 토스 아이디 만들기: https://toss.me/


이 프로젝트는 MIT 라이센스에 따라 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.