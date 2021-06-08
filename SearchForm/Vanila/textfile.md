## export default{
- init(el); element를 주입
- on(event, handler)
    - view에서 발생한 이벤트를 어떻게 처리할 것인가
    - 특정 이벤트에 대한 행동
- emit(event, data)
    - 스스로 event를 발생
    - customEvent(event, {detail:data})
    - dispatchEvent(evt)
    - controller로 전달!
- data[{},{}]; 배열 형식
- list(){}; data 리턴해줌. promise리턴.
    - list().then(data => {
        XView.render(data)
    })
- render
    - 서버에서 받아온 data를 동적으로 그려줌
    - data 받아와서 뿌려줌ㅈ
- reduce
---
## XView
- import view from './View.js'
- const tag = '[MainController]'
- XView.setup = function(el){
    this.init(el)
  - this.bindEvent() 이벤트 추가
}
- XView.bindEvent = function(){
    
}

- export default XView
- - -
## MainController setup
export default{
    init(){
        XView.setup(document.querySelector())
    }
}

