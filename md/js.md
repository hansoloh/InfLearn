## JavaScript
---
- 식 exprression 표현식
- 문 statement 명령문; 식을 포함.
- alert("hi); 알림창
- confirm("hii"); 확인 창 두개
- prompt("hi","기본값"); 값을 입력받을 창. 기본값 없으면 빈 칸.
  - prompt()로 입력받은 값은 문자열로 저장 -> 산술 연산시 숫자형으로 자동 형변환
  - (데이터 타입 변환 문제 때문에) 처음부터 <u><b><i>parseInt()</i></b></u>로 숫자(정수)로 바꿔주는 것이 맞다!
    - var num = parseInt(prompt("숫자를 입력하세요"));
- document.write();
- console.log();
- JS Style Guide
  - https://google.github.io/styleguide/jsguide.html
  - https://github.com/airbnb/javascript#arrow-functions
  - Tab으로 들여쓰기
  - 세미콜론;으로 문장 구분
  - 공백
  - 주석 // /**/
  - 식별자 identifier; 영문 _ $로 시작, camel case
  - 예약어 keword는 식별자로 쓸수없음. var 등
    - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Lexical_grammar#%EB%A6%AC%ED%84%B0%EB%9F%B4
---
#### 변수 varibale
#### 상수 constant
#### 자료형 type
#### 연산자 operator
---
### 조건문
- if문
- switch문
### 반복문
- for문 
  - 초기값, 반복 크기가 일정할 때 사용
- while문 ; 조건=true일때 반복 실행
- do while문 ; 명령 먼저 실행하고/ 조건을 체크!
  - 초기값, 반복 크기 x, 조건만 주어졌을 때 사용
- break ; 종료 조건이 되기 전에 반복문 빠져나오기
- continue ; 주어진 조건에 해당하는 값을 만나면 반복문 한번 건너뛰기
---
### 함수
- scope; 변수 선언하고 변수가 적용되는 범위
  - 지역/로컬 변수 local variable ; 한 함수 안에서만 사용 가능
    - var ; 함수 영역의 스코프. 재할당 재선언 가능. 오류 가능성 up
  - 전역/글로벌 변수 ; script 전체에서 사용 가능
- hoisting
  - 재선언 재할당
- let const ; 블록 영역의 스코프. 블록 변수. 변수때문에 생기는 오류 줄일 수 있음
  - let ; 변수를 선언한 블록내에서만 유효. 재선언x 재할당 o. 값이 자주 바뀌는 변수일때 사용.
  - const 상수 변수 constant ; 변하지 않는 값 선언하는 상수 변수. 재선언x 재할당x. 재할당이 없는 변수일때 사용.
- 전역 변수는 최소한 사용
- var 변수는 함수 시작 부분에 선언
- for문에서는 블록 변수 let 사용 for(let i=1;i < n; i++>){}
- <u><b><i>매개변수; 변수값이 자주 변하는 경우
- return; 매개변수를 사용한 결과값을 함수 밖에서 사용하기 위해 함수를 실행한 위치로 return반환받기</i></u></b>
- 인수
- 표현식 
  - 익명 함수
  - 즉시 실행 함수
  - <u><b><i>화살표 함수</u></b></i> ; 익명 함수에서만 쓸수 있음. p537
    - let/const 함수명 = (매개변수) => {함수식}
- 이벤트 ; 마우스 키보드 문서로딩 폼 이벤트
- 이벤트 처리기/ 이벤트 핸들러; 이벤트가 발생하면 처리하는 함수

### 객체 object
---
- 객체
  - DOM 문서 객체 모델
  - 브라우저 관련 객체
    - window 객체 : 웹 브라우저의 상태를 제어. JS의 최상위. JS의 모든 객체는 window 객체 안에 포함. 기본 객체이므로 window.생략 가능.
      -open() close()등
    - navigator : 웹 브라우저 버전, 플러그인 설치 정보 등. 사용자가 수정 불가
    - history : 방문한 사이트 주소가 배열 형태로 저장. 읽기 전용.
    - location : 브라우저 주소 표시줄. 현재 문서의 URL 주소 정보. 현재 브라우저 창에서 열어야 할 사이트나 문서 지정 가능.
      - reload() replace() 등
    - screen : 사용자의 화면 크기, 정보
  - 내장 객체 ; 자주 사용하는 요소를 JS 안에 미리 정의해둠
    - Array
      - length 프로퍼티
      - concat() ; 서로 다른 배열 2개 합쳐서 new 배열
      - join() ; 배열 요소 연결해서 하나의 문자열로. ,
      - push() unshift() ; 배열의 맨 뒤/맨 앞에 요소 추가. 원래 배열 바뀜.
      - pop() shift() ; 배열의 맨 뒤/맨 앞에서 요소 꺼내기. 기존 배열은 꺼낸 요소가 빠진 상태로 바뀜.
      - splice() ; 기존 배열을 수정하며 요소를 추가,삭제. 기존 배열의 일부 요소만 삭제할때.
      - slice() ; 기존 배열에 영향 x. 기존 배열에서 꺼낸 요소로 새로운 배열 만들어 사용.
    - new Date(); 특정 날짜 지정, 날짜 다음에T로 시간 정보
      - YYYY-MM-DD YYYY-MM-DDTHH MM/DD/YYYY January Jan Mon
      - 메소드 ; 날짜/시간을 가져오기, 설정하기, 형식 바꾸기 가능
    - <u><b><i>Math 객체는 인스턴스 만들지 않기x</u></b></i>
      - random() 등
  - <u><b><i>new 객체명 : 인스턴스로 만들어서 사용</u></b></i>
- 프로퍼티 ; 객체의 특징, 속성
- 매서드 ; 객체에서 할 수 있는 동작

### DOM 17
---
- 노드 ; 요소 노드, 텍스트 노드, 속성 노드, 주석 노드, 루트 노드......./
- document.getElementById(""); : HTML 요소만 저장됨
  - Id/ClassName/TagName
- querySelector("#id")
- querySelectorAll(".class")
- innerText ; 텍스트 내용 가져옴
- innerHTML ; 텍스트 내용 + HTML 태그까지 반영하여 가져옴
- getAttribute(속성) ; 속성값 가져옴
- setAttribute(속성, 값) ; 속성을 값으로 지정
- addEventtListener(); 요소.addEventListener("이벤트",함수식);
  - <u><b><i>this</i></u></b> : 이벤트가 발생한 대상에 접근하려면 이벤트 처리기(함수)에서 예약어 this 사용해야함
- <u><b><i>CSS 속성 수정 : document.요소명.styel.속성명</u></b></i>
  - document.getElementById("id").style.color = "blue";
- <u><b><i>텍스트 노드 추가 : createElement() - createTextNode() - appendChild() - appendChild()(연결)</u></b></i>
- <u><b><i>속성값 있는 노드 추가 : createElement() - createAttribute() - setAttributeNode() - appendChild()</u></b></i>
- 노드 삭제 : 부모 노드 찾아서 자식 노드 삭제해야 함
  - 부모 노드 접근 : 노드.parentNode
  - 부모노드.removeChild(자식노드)

---
  - return false : button 기본 기능 submit 끄고 <u><b><i>함수만</i></u></b> 실행하도록 작성
  - onclick="addP(); this.onclick='';" addP() <u><b><i>함수 한 번만</i></u></b> 실행
  - itemList.insertBefore(newInput, itemList.childNodes[0]); //마지막 입력값 맨 위에 표시
  - onclick addeventlistener 차이
    - document.getElementById('trigger').onclick = () => {
    alert('hello!');} 중복 사용 불가. 덮어쓰기.
    - document.getElementById('trigger').addEventListener('click',()=>{
    alert('hello!'); 여러 개 계속 쓸수 있음. 누적.