- 기본형 
  - new Vue({ 뷰 인스턴스
    el: '#app',
    data: {
        msg: 'hello world'
    },
    methods: {}
      - 뷰 인스턴스의 파라미터 el data merhods etc
})
- query
  - 입력 data를 받아 저장.
  - vue에 있는 query data를 html에 동적 바인딩
  - 태그에 v-model="query" 추가
- v-model; 양방향 디렉티브를 지원
  - form v-on:submit.prevent="onSubmit" === preventDefault
- v-show; hide show
- v-on; 이벤트 달기
- v-if; 조건식 참일 때
- v-else
- v-for; 배열 처리할때 반복문
- v-bind; attribute의 값을 지정
---
- methods: {}
  - 실제 DOM과 바인딩할 함수들을 정리
- created(){} view 인스턴스가 생성될때 호출되는 함수