<template>
  <div>
      <div>당첨 숫자</div>
      <div id="결과창">
          <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
      </div>
      <div>보너스</div>
      <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
      <button v-if="redo" @click="onClickRedo">한번 더!</button>      
  </div>
</template>

<script>
import LottoBall from './LottoBall.vue';

function getWinNumbers(){
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v,i) => i+1);
    const shuffle = [];
    while (candidate.length > 0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length -1];
    const winNumbers = shuffle.slice(0,6).sort((p,c) => p - c);
    return [...winNumbers, bonusNumber];
}

const timeouts = [];
export default {
    components: { //자식component LottoBall.vue를 부모 components에 등록해주기. import도 해주기!
        LottoBall,
    },
    data(){
        return{
            winNumbers: getWinNumbers(),
            winBalls: [],
            bonus: null,
            redo: false,
        };
    },
    methods: {
        onClickRedo(){
            this.winNumbers = getWinNumbers(); //전부 초기화 해주기
            this.winBalls = [];
            this.bonus = null;
            this.redo = false;
            this.showBalls();
        },        
        showBalls(){
            for(let i = 0; i < this.winNumbers.length -1; i++){
            timeouts[i] = setTimeout(() => {
                this.winBalls.push(this.winNumbers[i]);
            }, (i + 1) * 1000);
        }
        timeouts[6] = setTimeout(() => {
            this.bonus = this.winNumbers[6];
            this.redo = true;
        }, 7000);
        },
    },
    mounted(){
        this.showBalls();
    },
    beforeDestroy(){
        timeouts.forEach((t) => {
            clearTimeout(t);
        });       
    },
    // watch: { //감시를 원하는 data 적어주기
    //     winBalls(value, oldValue){
    //         console.log(value, oldValue);
    //         if(value.length === 0){
    //             this.showBalls();
    //         }
    //     }
        // bonus(value, oldValue){
        //     console.log(value,oldValue);
        //     if(value === null){
        //         this.showBalls();  
        //     }}  

        // redo(value, oldValue){
        //     console.log(value,oldValue);
        //     if(value === false){
        //         this.showBalls();  
        //     }}  
    //},
};
</script>

<style scoped>

</style> 