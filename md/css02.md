- *전체 선택자에 margin padding 0으로 웹 문서 여백 없애서 이미지가 웹 브라우저 창에 딱 붙어서 나타남
---
### text
---
- font-family 글꼴
- font-size ; em rem ex px pt % xx-small<<medium<<xx-large 
- font-variant
- font-weight ; normal bold bolder lighter 100~900가장 굵음 
- font-style ; normal italic oblique
- text-align 정렬 ; start텍스트 시작줄 end끝줄 left right center justify양쪽맞춤 match-parent부모따라
- line-height 줄 간격 ; 보통 font size 두배. 
  -  ex)font-size : 12px; line-height : 24px; 2.0; 200%;
  -  세로 정렬 안돼있을때는 해당 영역 height=l ine-height 맞춰주기
- text-decoration ; none underline밑줄 overline line-through취소선
- text-shadow ; 가로 세로 번짐정도 색상 1px -1px 3px black; 
- text-transform ; none capitalize uppercase lowercase full-width
- letter-spacing ; 글자와 글자 사이 간격 em px % 
- word-spacing ; 단어와 단어 사이 간격

### list 
---
- list-sytle-type, image ; 목록 아이콘
- list-style-position ; 들여쓰기 inside outside 

### table
---
- caption-side ; 캡션 위치 지정, top, bottom
- border ; 1px solid black;
- border-spacing ;
- border-collapse ; collapse separate box

### box model
---
- block level ; 너비 100%. 혼자 한 줄 차지.
  -  h1 div p
- inline level ; 콘텐츠만큼만 영역 차지. 한줄에 여러개 올 수 있음. 나머지 공간에 다른 요소들 모두 가능.,
  -  span img strong


### 기본 구성
---
  - 콘텐츠
  - padding ; 박스와 콘텐츠 사이의 여백
  - border ; 
  - margin ; 박스 모델 사이의 여백
---
-  width height ; px em % (default)auto
-  box-sizing
    - <b>border-box</b> ; 테두리 포함해서 너비값 지정.<br><b><u>요소의 크기를 쉽게 계산하려면 이것!@!!</u></b>
    - content-box ; deafult. 콘텐츠 영역만 너비를 지정.
    - box-shadow ; 수평 수직 거리 필수, 나머지 옵션.
      - {box-shadow : 2px -5px 15px 5px blue inset;}
      - inset : 안쪽 그림자로 표시
- 박스 모델 방향 : top - right - bottom - left

### 테두리 border
---
- border-style ; none(default) hidden solid dotted dashed짧은 직선 double이중선 groove창틀느낌 inset outset ridge
  - border-right-style
  - border-bottom-style 방향 지정 가능
- border-width 두께 ; 2px thick medium thin
- border-color ; border-right-color로 방향 지정 가능
- border-radiuls ; px em %

### 마진 margin 
---
- 요소 주변의  여백을 설정. 요소와 요소 사이의 간격을 조절.
- px em % auto
- 마진 중첩 overlap/ 마진 상쇄 collapse : 요소를 세로로 배치할 때 중간 마진이 지나치게 커지는 것을 방지하기 위해 자동 중첩됨. 

### 패딩 padding
---
- 콘텐츠와 테두리 사이의 여백을 설정.
<br><br><br>
cf) 텍스트 요소 중앙 배치 : text-align<br>
    웹 문서 전체 화면 중앙 배치 : margin-left / margin-right : auto; (<b><u>배치할 요소의 width값이 정해져 있어야 함!!!</u></b>)