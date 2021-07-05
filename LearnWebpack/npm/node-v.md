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
- npm i gulp; 자동화
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
    - 등장 배경
      - 파일 단위의 js 모듈 관리의 필요성
      - 웹 개발 작업 자동화 도구 Web Task Manager
      - 웹 애플리케이션의 빠른 로딩 속도와 높은 성능
    - 웹팩으로 해결하려는 문제
      - js 변수 유효 scope
      - 브라우저별 HTTP 요청 숫자의 제약
      - 사용하지 않는 코드의 관리
      - Dynamic Loading & Lazy Loading 미지원
    - 속성
      - entry; (build = compile = bundling = 변환)을 위한 최초 진입점. js 파일 경로.
      - module; 웹팩으로 변환 후 결과물의 파일 경로.정보.
      - loader; 웹팩이 웹 애플리케이션 해석할때 js 파일이 아닌 다른 HTML CSS images 폰트 등을 변환할수 있게 도와주는 속성. 
      파일을 해석하고 변환하는 과정에 관여. 오른쪽 -> 왼쪽 순으로 적용 됨. 
      - plugins; 웹팩의 기본적인 동작에 추가적인 기능을 제공. 결과물의 형태를 바꾸는 역할.
      - output;

      - 전에 해둔 메모
        - webpack ; 어떤 파일 형식이든 다 js 파일 하나로 합쳐줌
        - entry로 시작해서 module, plugins 거쳐서 output으로 나오는 플로우
        - entry; 빌드를 할 대상 파일을 정의
        - module; entry 에서 output으로 변환할때 개입
        - output; 웹팩으로 변환을 한 결과물에 대한 정보를 정의
    - npn run build


- "build":"webpack --mode=none"
- dist 폴더; webpack으로 변환한 결과 파일이 있음
- package.json파일 "scripts"에 "build":webpack" 추가해줘야 npm run build 먹혀서 빌드할수 있음

- Webpack Dev Server
  - 파일이 변경되었을때 자동 빌드 & 브라우저 새로고침
  - npm run dev
  - package.json - "scripts" - "dev": "webpack serve"
  - 개발할 때만 사용. 개발 완료되면 webpack 명령어 써서 결과물을 파일로 생성해야 함ㅇㅋ

  1. package.json에 등록된 "dev" 명령어로 인해  webpack serve 실행
  2. webpack serve는 webpack.config.js를 읽어서 인메모리에 빌드 결과물을 적재
  3. localhost:${devServer.port}에서 확인.

  - webpack.config.js에 output설정으로 지정된 값들을 데브 서버가 확인하고, 빌드 결과물 내부의 index.html을 실행.