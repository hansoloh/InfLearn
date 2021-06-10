<template>
<div>
  <header>
      <h2 class="container">검색</h2>
  </header> 
  <div class="container">
  <search-form v-bind:value="query" v-on:@submit="onSubmit"
        v-on:@reset="onReset"></search-form> 
  </div>
</div>
</template>

<script>
import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.vue'

export default {
  name: 'app',
  data() {
    return{
    query: '',
        submitted: false,
        tabs: ['추천 검색어', '최근 검색어'],
        selectedTab: '', 
        keywords: [], 
        history: [], 
        searchResult: []
    }
  },
  components: {
  'search-form' : FormComponent
  },
  methods: {
  onSubmit(query){ //enter누르면 호출됨
            this.query = query
            this.search()
        },
        onReset(){
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
}
</script>

<style>
body, ul {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
img {
  width: 100%;
}

.container {
  margin: 0 15px 0 15px;
}
header {
  border-bottom: 1px #ccc solid;
  padding: 15px 0  15px 0;
  text-align: center;
}
input[type=text] {
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 15px 0 15px 0;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #cccccc;
 
}
.content {
  border: 1px solid #ccc;
}
ul.tabs {
  display: flex;
}
.tabs li {
  display: inline-block;
  width: 50%;
  padding: 15px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc; 
  background-color: #eee;
  color: #999;
}
.tabs li.active {
  background-color: #2ac1bc;
  color: #fff;
}
.list li {
  box-sizing: border-box;
  display: block;
  padding: 15px;
  border-bottom: 1px solid #ccc; 
  position: relative;
}
.list li:last-child {
  border-bottom: none;
}
.list li .number{
  margin-right: 15px;
  color: #ccc;
}
.list li .date{
  position: absolute;
  right: 50px;
  top: 15px;
  margin-right: 15px;
  color: #ccc;
}
.list li .btn-remove{
  position: absolute;
  right: 0px;
  top: 15px;
  margin-right: 15px;
}

form {
  position: relative;
}
.btn-reset,
.btn-remove {
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  border: none;
  padding: 2px 5px;
}
.btn-reset {
  position: absolute;
  top: 12px;
  right: 10px;
}
.btn-reset::before, 
.btn-remove::before {
  content: 'X'
}

#search-result li {
  display: flex;
  margin-bottom: 15px;
}
#search-result img {
  width: 30%;
  height: 30%;
}
</style>