### Module Error (from ./node_modules/eslint-loader/index.js): 해결 시도
- root-directory에 vue.config.js 생성
  - module.exports = {
    devServer: {
      overlay: false
    }
  }
- App.vue 최상단에 /* eslint-disable*/ 과 하단에  /* eslint-enable*/ 선언
- 서버 껏다 키기
- 에러 나는 줄 옆에 주석 달아서 해결! // eslint-disable-line no-unused-vars
---
### Vetur can't find `tsconfig.json` or `jsconfig.json`
- tsconfig.json 생성
  - {
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": [
          "src/*"
        ]
      }
    }
  }

### install eslint
---
## ES6 for Vue.js
- const, let
- => arrow 함수
- 향상된 객체 리터럴 Enhanced Object Literals
  - function 축약; 객체의 속성을 메서드로 사용할때 function 생략 가능
  - 객체의 속성명과 값 이름이 동일할때 축약 가능
    - ex) TodoHeader': TodoHeader -> TodoHeader
---
## vuex
- 설치 시 ERESOLVE unable to resolve dependency tree 오류
  - npm i vuex --save --legacy-peer-deps 
    - npm 버전 4에서 6까지 스타일로 설치할때 모든 peer dependencies를 무시하고 설치할수 있음
### 강의 환경설정과 cli 버전 호환 문제
- vue2버전으로 vuex-todo 폴더 생성
- src 폴처 아래 코드만 vue2 플젝으로 옮기기!!