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
 import EventBus from './EventBus'; //js파일new Vue 불러온것. 아래 created에 등록해주기.
 
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
        },
        onClickTd(rowIndex, cellIndex){
          console.log(rowIndex, cellIndex);
            //const this = this.$root.$data;
            //console.log(this.tableData);
            //this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
            this.$set(this.tableData[rowIndex], cellIndex, this.turn);            
            let win = false;

        if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
          win = true;
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
          win = true;
        }

        if (win) { // 이긴 경우: 3줄 달성
          this.winner = this.turn;
          this.turn = 'O';
          this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
        } else { // 무승부
          let all = true; // all이 true면 무승부라는 뜻
          this.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            });
          });
          if (all) { // 무승부
            this.winner = '';
            this.turn = 'O';
            this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
          } else {
            this.turn = this.turn === 'O' ? 'X' : 'O';
        }
        }
        },
    },
    created(){
        EventBus.$on('clickTd', this.onClickTd);
        // EventBus.$on('clickTr', this.onClickTr);
        // EventBus.$on('clickTable', this.onClickTable);
    }
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