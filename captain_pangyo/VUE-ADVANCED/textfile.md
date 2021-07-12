- ajax ; data 요청할때 쓰는 jQuery 내장 API
- API를 vuex에서 담을 때; actions에서
- HOC를 많이 쓸수록 component의 깊이가 깊어지면서 component 통신에 있어서 불편함이 발생 -> Mixin 사용
- 데이터 호출 시점
  1. 컴포넌트 라이프 사이클 훅
    - created : (컴포넌트가 생성)되자마자 호출되는 로직
  2. 라우터 네비게이션 가드
    - 특정 URL로 접근하기 전의 동작을 정의하는 속성(함수)