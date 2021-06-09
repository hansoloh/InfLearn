import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function(el){
    this.init(el)
    this.inputEl = el.querySelector('[type=text]')
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false)
    this.bindEvents()
    return this
}

FormView.showResetBtn = function(show = true){
    this.resetEl.style.display = show ? 'block' : 'none'
}
FormView.bindEvents = function(){ //키보드 입력에 대한 이벤트 bind 
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e)) //키 입력되면 onKeyup 이벤트 발생?
    this.resetEl.addEventListener('click', e => this.onClickReset()) //키 입력되면 onKeyup 이벤트 발생?
}
FormView.onKeyup = function(e){ //키보드 입력
    const enter = 13 //enter
    this.showResetBtn(this.inputEl.value.length) //입력값이 있으면 x버튼 표시
    if(!this.inputEl.value.length) this.emit('@reset') //입력값을 지워도 리셋되게?
    if(e.keyCode !== enter) return //입력값이 엔터값이 아니면 그냥 입력값 return
    this.emit('@submit', {input: this.inputEl.value}) //엔터키 누르면 @submit 이벤트 발생 => 방금 입력받은 값 컨트롤러에 넘겨주기
}
FormView.onClickReset = function(){ //MainController에 reset 이벤트 전달
    this.emit('@reset')
    this.showResetBtn(false) //입력값 리셋 후 엑스 버튼 숨기기
}

FormView.setValue = function (value = ''){
    this.inputEl.value = value
    this.showResetBtn(this.inputEl.value.length)
    //this.showResetBtn(true)
}

export default FormView 