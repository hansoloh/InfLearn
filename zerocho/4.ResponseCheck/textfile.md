- 자동으로 생성되는 node_modules랑 dist 폴더 빼고 다 복사해서 가져옴
- package.json에 name 바꿔주기
- npm i ; package.json에 있는거 다 설치됨
- package.json에 "build": "webpack --watch";
  - --watch 붙여주면; 변화 있을때마다 자동으로 npm build해줌
- npm i -D webpack-dev-server ; 새로고침도 할 필요 없음
  - package.json script에 "dev": "webpack-dev-server" 추가
- npm i vue-style-loader -D / npm i css-loader -D 추가해주고 webpack에도 rules 추가
- style scoped; 해당 component에서만 style 적용하고 싶을때 scoped
- 