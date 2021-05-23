- Web Developer 확장 기능 css 소스 경량화 minify : css minify, css compress, cssminifier.com
---
- 브라우저 기본 스타일
- 인라인 스타일 : 태그에 직접 스타일 입력
- 내부 스타일 시트 : 같은 html 문서 head 태그 내에 style 태그로 정의.
- 외부 스타일 시트: 스타일을 별도 파일로 저장. link 태그로 불러와 사용. head 태그 가장 마지막줄.<br>link rel="styleshee" href="스타일 파일 경로"<br><br>


### 기본 선택자
---
  - 전체 선택자 
    - *{스타일}
  - 타입 선택자 
    - 태그명p {
            스타일
        }        
   - 클래스 선택자
     - .클래스명 {
            스타일
        }        
   - id 선택자
     -  #id명 {
            스타일
        }        
   - 그룹 선택자
     - 같은 스타일 요소들 묶을수 있음  h1,
        p {
            스타일
        }      

### cascading 스타일 먹혀지는 우선순위      
---
- 사용자>제작자>브라우저 기본 스타일 
- !mportant>인라인>#id>.class>타입
- 우선순위가 같은 스타일은 나중에 적은 스타일로 적용됨.
- 스타일 상속: body>는 모든 태그의 부모. body>에 스타일 지정하면 모든 문서에 적용됨. 

### form Tag 
---
- form <b>action</b>="register.php"
- form action="" <b>autocomplete</b>="off">자동완성 끄기. 디폴트 <i>on</i>
- fieldset 구역 나누기
- legend ; fieldset으로 나눈 구역 틀에 제목 쓰기.  
- label 굳이? 왜쓰는지 모르겠음
- textarea ; cols rows
- select
  - option value, selected 드롭다운 메뉴
- datalist
  - option 데이터 목록
- button type="submit reset button" default <i>submit</i>
### input Tag 속성
- --
- autofocus placeholder required readonly size칸 크기
- type : text password
- checkbox radio
  -  checked 속성
  -  radio 하나만 체크 가능하게 하려면 name 같게 설정
- number range
  - min max step value 지정 가능
- date month week
- time datetime-local 
- hidden? p147