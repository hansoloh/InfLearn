- NPM Node Package Manager
  - 명령어로 자바스크립트 라이브러리를 설치하고 관리할 수 있는 패키지/라이브러리 매니저. 
  - 자바스크립트 개발자 모두가 자바스크립트 라이브러리를 공개된 저장소에 올려놓고 npm 명령어로 다운 가능!
  - Node.js 설치하면 NPM 자동 설치됨
- Node.js
  - 브라우저 밖에서도 자바스크립트를 실행할 수 있는 환경. 뭔 소린지

- node -v ; 버전 확인
- npm -v
- npm init ; 초기화 명령어. package.json 생성
- npm init -y
- npm install jquery (--save-prod 생략되어 있음); 라이브러리 설치. node_modules 생성됨. jquery 설치.
- package.json에 해당 프로젝트에 사용되는 라이브러리의 목록과 각각의 버전을 (의존성?) 정리해둬서 한 눈에 알아볼수 있음. 편하게 관리 가능.
- 해당 라이브러리 사이트 방문 cdn 따오기 등등 구구절절 필요없이 터미널에서 install; 설치 간편!
- npm i gulp
- npm uninstall gulp
- npm i gulp --global
  - global 전역 설치; 시스템 레벨 경로에 설치됨
  - install 지역 설치; node.modules에 설치됨
- npm install vue --save-dev = npm i vue -D

- npm i jquery; dependencies (배포용 라이브러리)에 설치됨. 어플리케이션의 로직을 구현하는데 연관이 있는 부분. 화면의 로직과 직접적 연관. jquery angular vue react 등
npm i vue--save-dev = npm i vue -D ; devDependencies (개발용 라이브러리) 에 설치됨. 개발할때 도움을 주는 개발용 보조 라이브러리. webpack(빌드 도구), js-compression, sass, eslint(코드 문법 검사)등

- WebPack
  - 최신 FE Framework에서 가장 많이 사용되는 Module Bundler.
    - Module Bundler; 웹 애플리케이션을 구성하는 자원 HTML CSS JS Images등을 모두 각각의 모듈로 보고 이를 조합, 하나의 결과물로 만드는 도구
    - Module; 프로그래밍 관점에서 특정 기능을 갖는 작은 코드 단위