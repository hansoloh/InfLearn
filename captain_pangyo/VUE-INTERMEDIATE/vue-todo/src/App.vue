<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- v:on: 하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명" -->
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <!-- v-bind: 내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성" -->
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// var my_cmp = {
//   template: '<div>my component</div>'
// };

// new Vue({
//   el:'',
//   components:{
//     'my-cmp': my_cmp
//   }
// })

export default {
  data:function(){
    return {
      todoItems: []
    }
  },
  methods:{
    addOneItem : function(todoItem){
      var obj = {completed: false, item: todoItem};
        //localStorage.setItem(this.newTodoItem, this.newTodoItem);
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
    }
  },
  
  created: function(){
    //console.log('created');
    if(localStorage.length > 0){
      for (var i = 0; i< localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
        //this.todoItems.push(localStorage.key(i));
        // console.log(localStorage.key(i))
         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  
  components:{
    //컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}

</script>
<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}

</style>
