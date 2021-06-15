### Module Error (from ./node_modules/eslint-loader/index.js): 해결 시도
- root-directory에 vue.config.js 생성
  - module.exports = {
    devServer: {
      overlay: false
    }
  }
- App.vue 최상단에 /* eslint-disable*/ 과 하단에  /* eslint-enable*/ 선언
- 서버 껏다 키기
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

## install eslint