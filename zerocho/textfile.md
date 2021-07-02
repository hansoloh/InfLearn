
- MVVM Model View ViewModel 패턴
- vue; data 중심으로 사고. data값의 변화 따라가기. 값 바뀌는 부분 -> data
---
## new Vue({ instance의 속성, API들
  - el : 대상이 되는 html element, css selector. vue로 관리할 영역.
  - template : 화면에 표시할 HTML, CSS 등의 마크업 요소를 정의하는 속성
  - data : 화면을 그리는데 사용하는 data. 를 반환하는 함수 혹은 data 객체(뷰의 반응성이 반영된 데이터 속성)
  - methods : 화면 로직 제어와 관련된 메서드를 정의하는 속성. functions들 써주기.
  - created : 뷰 인스턴스가 생성되자마자 호출되는 함수 (라이프 사이클)
  - watch : data에서 정의한 속성이 변화햇을 때 추가 동작을 실행하도록 정의
  - computed : data에서 쓰던 일반 데이터를 가공(계산)해서 쓸 때 사용 (데이터에 추가적인 문자열이 붙을 때) -> 캐싱됨 -> 성능 최적화
});
---
## 데이터 바인딩
- 단방향 바인딩
  - {{ }} mustache 문법; vue instance에서 정의한 속성들을 화면에 표시하는 방법
  - v-on @ event에 접근. methods에 써주기? 이벤트 리스터.
  - v-bind : data에 접근. props에 써주기?
- 양방향 바인딩
  - v-model; data 받아오기. data binding
  - v-가 붙으면 data를 가짐
  - v-if="a" v-on:click="b" 디렉티브 "" 사이의 내용은 모두 data나 methods 안에 있는 이름들

- this
  - 객체 자체를 의미. data나 methods에 접근하기 위해 필요
  - data 안에 들어가면 this. 써서 불러오기
- ref; html 태그에 ref="이름" 지어주고 methods에서 this.$ref.이름 으로 접근 가능
- vue kebab-case = js camelCase
- <form @submit.prevent="onSubmitForm"> 축약형
- import from (main.js)와 export default (main.vue)는 세트
---
## LifeCycle
- created; 보여지긴 하지만 화면에 나타나기 전
- mounted; 화면에 나타난 후
- updated;
- destroyed;
  - beforeDestroy; 메모리 누수 memory lick 방지를 위해 clearInterval나 clearTimeout 사용

- async onClickButton(choice{
    await Promise()
})
- 함수 앞 async 쓰는 이유; await 쓰기 위해서; promise 처리를 위해서; 콜백이나 비동기 깔끔하게 쓰려고
---
- props; 부모 component -> 자식 component로 data 값을 물려줌
  - read only느낌. 선언하고 값 바꿀수 없음.
- mounted 에서 setTimeout, interval 한 부분 beforeDestroy 부분에서 clearTimeout, clearInterval 해줘야함
---
-TicTacToe - TableComponent - TrComponent - TdComponent
- this.$root.$data
- this.$parent.$data
- 배열에서 index를 쓸 때는 꼭 vue.set (= this.$set)을 써준다
---
##  eventBus; event를 중앙에서 통제
- root component에서 data 조작 처리, 나머지 Tr Td등 component에는 EventBus $emit 정도만 적어주면 간편

## VueX; (store.js 에서 data 중앙집권) data를 중앙에서 통제
vue 어플리케이션에 대한 상태 관리를 도와주는 라이브러리, 어플의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할
  - state (=data)
    - computed를 통해 가져옴. 여러 component간 공유할 데이터.
  - getters (=computed)
    -  state값에 접근하는 속성. computed()처럼 미리 연산된 값에 접근.
  - mutations (=methods)
    - state값 변경할 때 사용. commit()으로 작동시킨다. this.$store.commit
    - 함수명은 대문자로 명명.
    - 변수로 선언 가능. const SET_WINNER = 'SET_WINNER';
    - export 붙여서 module로 만들기 ; 다른 파일들에서도 불러와 쓸수 있게 export const SET_WINNER = 'SET_WINNER';
    - this.$store.commit으로 실행
  - actions (=aysnc methods)
    -  비동기 사용할때, 여러 mutation 연달아 실행할때.
---
- store.js
  - Vue.use(Vuex); //vue와 vuex연결
- root component 에서 store랑 연결
  - import store from './store';
  -  export default {
    store,
- root.vue 
  - 템플릿 태그 안 component 태그에 에 tag를 넣어주면 <slot>에서 해당 tag가 화면에 렌더링됨

- slot
- helper함수
- router