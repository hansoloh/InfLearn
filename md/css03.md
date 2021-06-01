
- background-color
- background-clip
  - border-box ; 테두리까지 배경 지정
  - padding-box ; 테두리 빼고 패딩까지 배경
  - content-box ; 콘텐츠에만 배경
- background-image
- background-repeat
  - repeat, repeat-x, repeat-y, no-repeat
- background-position
- background-origin
- background-attachment
- background : 한 번에 선언 가능. 순서 상관 x
- background-size
---
- linear-gradient
- radial-gradient
---
### 연결 선택자
---
  - 하위/자손 선택자 descendant selector
    - section p ; section에 들어있는 모든 p. 손자 요소인 p까지 모두 해당.
  - 자식 선택자 child selector
    - section > p ; 한 단계 아래. 자식요소에'만' 적용
  - 인접 형제 선택자 adjacent selector
    - 요소1 + 요소2 
    - h1 + p ; h1과 형제인 p 중에서 첫번째 p 선택   
    - 부모가 같은 요소들은 형제 관계. 형제 관계에서 먼저 나오는 요소가 형. 나중 동생.
    - 첫번째 동생 요소만 선택  
  - 형제 선택자 sibling selector
    - 요소1 ~ 요소2 ; 모든 형제 요소 선택
    - h1 ~ p ; h1뒤에 오는 모든 p를 선택

### 속성 선택자 10-2 p326
---
  - []

### 가상 클래스
---
- :link :visited
- :hover :active :focus
- :target ; 앵커로 연결된 부분
- :enabled :disabled
- :checked
- :not
- 순서 : link visited hover active (LoVeHAte)

### 구조 가상 클래스 p343 
---
- .contents:nth-child(x); contents의 ***모든*** 자식 요소 중 x번째
  - nth-child(2n+1); 수식,add,odd 가능.
- .contents div:nth-type-of(x); contents의 div 자식 요소 중에서 x번째

### 가상 요소
---
- ::first-line; 첫번째 줄 선택
- ::first-letter ; 첫번째 줄의 첫 글자
- ::before; 앞에 내용 추가
- ::after; 뒤에
