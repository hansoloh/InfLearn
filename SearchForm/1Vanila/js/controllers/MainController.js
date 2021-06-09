import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'
import HistoryView from '../views/HistoryView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'

const tag = '[MainController]'

export default{
    init(){
        //console.log(tag, 'init()')
        FormView.setup(document.querySelector('form'))
          .on('@submit', e => this.onSubmit(e.detail.input)) //입력값 받아옴. setup.FormView에서 this return해주기. 1엔터 쳤을때 onSubmit 함수 구동.
          .on('@reset', e => this.onResetForm())

        TabView.setup(document.querySelector('#tabs'))
          .on('@change', e => this.onChangeTab(e.detail.tabName))

        KeywordView.setup(document.querySelector('#search-keyword'))
          .on('@click', e => this.onClickKeyword(e.detail.keyword))

        HistoryView.setup(document.querySelector('#search-history'))
          .on('@click', e => this.onClickHistory(e.detail.keyword))
          .on('@remove', e => this.onRemoveHistory(e.detail.keyword))

        ResultView.setup(document.querySelector('#search-result'))

        this.selectedTab = '추천 검색어'
        this.renderView() //MainController에 import한 view가 세개나 돼서 한번에 보여주게?        
    },

    renderView(){
        console.log(tag,'renderView()')
        TabView.setActiveTab(this.selectedTab)
        
        if(this.selectedTab === '추천 검색어'){
            // KeywordModel.list().then(data => { //import해서 가져온 keywordModel 안의 list 함수 호출.해서 얻어온 data를 render함수에 넣어주기.
            //     KeywordView.render(data)
            // })   
            this.fetchSearchKeyword()  
            HistoryView.hide()       
        }else{
            this.fetchSearchHistory()
            KeywordView.hide()
        }
        ResultView.hide() 
    },

    fetchSearchKeyword(){
        KeywordModel.list().then(data => { //import해서 가져온 keywordModel 안의 list 함수 호출.해서 얻어온 data를 render함수에 넣어주기.
            KeywordView.render(data)
        })
    },
    fetchSearchHistory(){
        HistoryModel.list().then(data => {
            HistoryView.render(data).bindRemoveBtn()
        })
    },

    search(query){
        FormView.setValue(query)
        HistoryModel.add(query)
        console.log(tag,'search()',query)
        //search api //3.search api를 통해 data를 얻어옴
        SearchModel.list(query).then(data => { //SearchModel의 list를 호출(query 검색어 넘겨줌)(list는 promise를 반환) 검색결과 data 넘어오고
            this.onSearchResult(data) //넘겨받은 data를 onSearchResult의 data에 넘겨줌
        })
        this.onSearchResult([]) 
    },

    onSubmit(input){
        console.log(tag, 'onSubmit()', input)
        this.search(input) //2검색 요청을 위해서 search 함수 실행.
    },
    onResetForm(){ 
        console.log(tag, 'onResetForm()')
        //ResultView.hide() //ResultView.js에 복사해놓은 View.js에 hide함수 만들어놓음...ㅡㅡ;
        this.renderView()
    },
    onSearchResult(data){
        TabView.hide()
        KeywordView.hide()        
        HistoryView.hide()        
        ResultView.render(data) //4data받아서 ResultView에 render 함수로 넘겨줌. -> render함수는 결과값 그려줌.. 
    },

    onChangeTab(tabName){
        this.selectedTab = tabName
        this.renderView()
    },

    onClickKeyword(keyword){ //keyword가 클릭되면 실행됨
        this.search(keyword)
    },
    onClickHistory(keyword){
        this.search(keyword)
    },

    onRemoveHistory(keyword){
        HistoryModel.remove(keyword)
        this.renderView()

    }

}