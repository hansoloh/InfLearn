import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.js'
import ResultComponent from './components/ResultComponent.js'
import ListComponent from './components/ListComponent.js'
import TabComponent from './components/TabComponent.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        //selectedTab: '추천 검색어', created에 만들어줌
        selectedTab: '', //정의. 초기화?
        keywords: [], //추천 검색어 kewords에 배열로 담고, 최근 검색어 history[]에 담아서 
        history: [], //각각 값이 있을 경우와 for / else 없을 경우로 생각
        searchResult: []
    },
    components: {
        'search-form': FormComponent,
        'search-result': ResultComponent,
        'list': ListComponent,
        'tabs': TabComponent
    },
    created(){ //view 인스턴스가 생성될때 호출되는 함수
        this.selectedTab = this.tabs[0]
        this.fetchKeyword() //KeywordModel 가져오기
        this.fetchHistory()
    },
    methods: {
        onSubmit(query){ //enter누르면 호출됨
            this.query = query
            this.search()
        },
        onReset(e){
            this.resetForm()
        },
        onClickTab(tab){
            this.selectedTab = tab //탭 변경
        },
        onClickKeyword(keyword){
            this.query = keyword //keword를 통해 들어오는 입력값으로 검색 함수 호출
            this.search() //검색결과 페이지로 이동
        },
        onClickremoveHistory(keyword){ //keword 받아오기
            HistoryModel.remove(keyword) 
            this.fetchHistory() //다시 fetch해주기???
        },

        fetchKeyword(){ //KeywordModel로부터 data 가져옴
            KeywordModel.list().then(data =>{
                this.keywords = data //keywords 변수에 data를 할당
            })
        },
        fetchHistory(){
            HistoryModel.list().then(data =>{
                this.history = data
            })
        },
        search(){
            SearchModel.list().then(data =>{ //SearchModel import 해줌
                this.submitted = true
                this.searchResult = data
            })
            HistoryModel.add(this.query) //HistoryModel에 입력값 저장
            this.fetchHistory()
        },
        resetForm(){
            this.query = ''
            this.submitted = false
            //this.searchResult = [] //없어도 초기화 되는디
        }
    }
})