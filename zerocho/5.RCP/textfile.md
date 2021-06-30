## Vue LifeCycle
- created; 보여지긴 하지만 화면에 나타나기 전
- mounted; 화면에 나타난 후
- updated;
- destroyed;
  - beforeDestroy; 메모리 누수 memory lick 방지를 위해 clearInterval나 clearTimeout 사용

- async onClickButton(choice{
    await Promise()
})
- 함수 앞 async 쓰는 이유; await 쓰기 위해서; promise 처리를 위해서; 콜백이나 비동기 깔끔하게 쓰려고