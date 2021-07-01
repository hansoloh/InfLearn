TicTacToe - TableComponent - TrComponent - TdComponent
- this.$root.$data
- this.$parent.$data
- 배열에서 index를 쓸 때는 꼭 vue.set (= this.$set)을 써준다
---
- eventBus; event를 중앙에서 통제
- root component에서 data 조작 처리, 나머지 Tr Td등 component에는 EventBus $emit 정도만 적어주면 간편
- VueX; (store.js 에서 data 중앙집권) data를 중앙에서 통제
  - state; (=data) ; computed를 통해 가져옴
  - getters; (=computed)
  - mutations; state 수정할 때 사용.
    - 함수명은 대문자로 명명.
    - 변수로 선언 가능. const SET_WINNER = 'SET_WINNER';
    - export 붙여서 module로 만들기 ; 다른 파일들에서도 불러와 쓸수 있게 export const SET_WINNER = 'SET_WINNER';
    - this.$store.commit으로 실행
  - actions; 비동기 사용할때, 여러 mutation 연달아 실행할때.

- store.js
  - Vue.use(Vuex); //vue와 vuex연결
- root component 에서 store랑 연결
  - import store from './store';
  -  export default {
    store,
- root.vue 
  - <template><component> component에 tag를 넣어주면 <slot>에서 해당 tag가 화면에 렌더링됨