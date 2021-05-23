### 시멘틱 태그; 웹 문서 구조를 나눔 sementic tag
- - -
- header 
- nav
- main
- article
- section
- aside
- footer
- div

### 텍스트 태그 text tag
- - -
- hn 제목 태그. 크고 진하게.
- p 텍스트 단락
- br 줄 바꿈
- blockquote 인용문. 들여쓰기.
- strong, b 굵게
- em 기울이기. 강조?
- i 기울이기

### 목록 태그 list tag
- - -
- ol li 순서 있는 리스트. 리스트가 1,2,3,4 번호로 매겨진다<br>
    ol type="a" type 1,a,A,i,I 기본 숫자형, 알파벳 소,대문자, 로마 소,대문자<br>
   ol태그 속성 type, start<br>
- ul li 순서(번호) 없는 리스트

### 설명 목록 태그 description tag 많이 쓰나?
- - -
- dl
- dt
- dd

### 표 태그 table tag
- - - 
- table 표
- caption 표 외부 센터에 표 제목. 
- tr 표 칸 나눔. 행. 
- td 표 내용. 셀. th첫째줄 제목 굵은 글씨.<br>
   td rowspan="2"세로 2칸 합침 td colspan="3"가로 3칸 합침<br>
ex) 4행3열 표 = 4개의 tr안에 각각td 3개씩

### 표 구조 나누기 table structure
- - - -
- thead 제목
- tbody 본문 내용
- tfoot footer

- colgroupcol 캡션 다음에 위치. 열을 선택해서 묶을 수 있음.
- col 닫는 태그 없음 단독 사용.<br>열의 개수만큼 col 무조건 넣어야 함. 스타일 지정 안해도 col 작성해야 함.<br>        style 중복되는 col태그는 span으로 묶어서 한번만 쓸수 있음. 

### 하이퍼링크 삽입 hyperlink
- - -
- 이미지 삽입
  - img src="images/top.jpg" alt="" width="100%"
- 오디오/비디오 삽입
  - audio src="medias/spring.mp3" controls/audio
     -  controls : 컨트롤 바. 재생, 정지 등
  - audio src="medias/spring.mp3" autoplay loop/audio
  - video src="medias/salad.mp4" width="700" autoplay muted loop/video
    - 오디오/비디오 자동 재생: autoplay loop
    - 플레이어 안보이게 (배경음악 등) : controls 빼면 됨
    - 비디오 자동 재생 : muted autoplay loop

- 텍스트 링크
  - a href="04quiz.html"퀴즈 고!/a
- 새 탭에서 링크 열기
  - a href="04quiz.html" <b>target="_blank"</b>/a
- 이미지에 링크 걸기
  - a href="04quiz.html"img src="images/tangerines.jpg" alt="레드향"/a 