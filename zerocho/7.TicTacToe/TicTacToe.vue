<template>
    <div>
        <div>{{turn}}님의 턴입니다.</div>
        <table-component :table-data="tableData"></table-component>
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>
</template>

<script>
 //import Vue from 'vue';
 import TableComponent from './TableComponent.vue';
 
 export default {
    components: { //자식component LottoBall.vue를 부모 components에 등록해주기. import도 해주기!
     TableComponent,
    },
    data(){
        return{
           tableData: [ //2차원 배열
               ['','',''],
               ['','',''],
               ['','',''],
           ],
           turn: 'O',     
           winner: '',      
        };
    },
    methods: {
        onChangeData(){
            //this.tableData[1][0] = 'X'; 작동하지 않음
            //Vue.set(this.tableData[1],0,'X');
            this.$set(this.tableData[1],0,'X'); //Vue.set과 동일
        }        
    },
};
</script>

<style>
 table{
    border-collapse: collapse;
 }
 td{
     border: 1px solid black;
     width: 80px;
     height: 80px;
     text-align: center;
 }

</style> 