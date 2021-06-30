<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
import EventBus from './EventBus';

 export default{
     props: {
         cellData: String,
         rowIndex: Number,
         cellIndex: Number,
     },
     methods: {
         onClickTd(){
             if (this.cellData) return; //남이 누른 칸을 눌렀을때는 return해서 함수 중단

             EventBus.$emit('clickTd', this.rowIndex, this.cellIndex);
                         
         }
     }
 };
</script>