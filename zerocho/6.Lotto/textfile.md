- props; 부모 component -> 자식 component로 data 값을 물려줌
  - read only느낌. 선언하고 값 바꿀수 없음.
- mounted 에서 setTimeout, interval 한 부분 beforeDestroy 부분에서 clearTimeout, clearInterval 해줘야함