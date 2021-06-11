- props; 부모(app.js)로부터 받은 data를 자식 component(FormComponent.js)에 출력
- $emit(); 반대 child -> parent
---
- component.js 파일 생성
- export default{
    template: '가져올 부분 id값 등'
    data(){

    },
    methods:{
        함수들 써주기
    }
}
- index.html 맨 아래 html 밖에 template 생성
- app.js에서 해당 component import
  - vue 인스턴스 components:{}에 component 추가
- index.html div따온 부분에 search-result 디렉티브 작성 
  - view인스턴스가 가지고 있는 결과값 v-bind로 넘겨주기
  - ResultComponent에서 props: ['data']로 받기
  - data 값은 index.html - search-result template에서 받음
- data 받아올때 Component.js - methods에 함수 작성 onRemoveList(keyword){
            this.$emit('@remove', keyword)
        }
  - index.html에 v-on:@remove="onRemoveList" 작성
- v-bind: props에 작성
- v-on: methods에 작성