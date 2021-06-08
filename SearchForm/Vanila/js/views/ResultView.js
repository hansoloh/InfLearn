import View from './View.js'

const tag = '[MainController]' //디버깅을 위한 태그

const ResultView = Object.create(View) //View 객체를 이용해 복사?

ResultView.messages = {
    NO_RESULT: '검색 결과가 없습니다.'
}

ResultView.setup = function(el){ //setup 메소드. element 주입.
    this.init(el)
}
ResultView.render = function(data = []){
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT
    this.show()
}
ResultView.getSearchResultsHtml = function(data){
    //debugger //멈춤
    return data.reduce((html, item) => { //문자열만 리턴해주기
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
}
ResultView.getSearchItemHtml = function(item){
    return `<li>
     <img src="${item.image}">
     <p>${item.name}</p>
     </li>`
}

export default ResultView //ResultView를 컨트롤해서 사용하기 위해 모듈 export 해줘야함