<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- v:on: 하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명" -->
    <TodoList v-bind:propsdata="todoItems"
    v-on:removeItem="removeOneItem"
    v-on:toggleItem="toggleOneItem"></TodoList>
    <!-- v-bind: 내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성" -->
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
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
  data(){
    return {
      todoItems: []
    }
  },
  methods:{
    addOneItem(todoItem){
      const obj = {completed: false, item: todoItem};
        //localStorage.setItem(this.newTodoItem, this.newTodoItem);
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index){
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
    },
    toggleOneItem(todoItem,index){ 
      //todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;

      //로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(){
      localStorage.clear();
      this.todoItems = []; //배열 비워서 화면에서도 지워지게
    } 
  },
  
  created(){
    //console.log('created');
    if(localStorage.length > 0){
      for (let i = 0; i< localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server')
        //this.todoItems.push(localStorage.key(i));
        // console.log(localStorage.key(i))
         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  
  components:{
    //컴포넌트 태그명 : 컴포넌트 내용
    // 'TodoHeader': TodoHeader,
    // 'TodoInput': TodoInput,
    // 'TodoList': TodoList,
    // 'TodoFooter': TodoFooter
    
    //향상된 객체 리터럴 적용하여 축약 
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter


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
