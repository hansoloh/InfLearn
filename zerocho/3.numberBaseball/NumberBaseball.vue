<template>
  <div>
      <h1>{{result}}</h1>
      <form @submit.prevent="onSubmitForm">
          <input ref="answer" minlength="4"  maxlength="4" v-model="value" />
          <button type="submit">입력</button>
      </form>
      <div>시도: {{tries.length}} 회</div>
      <ul>
          <li v-for="t in tries" v-bind:key="t.try">
              <!-- 반복문에서 li가 여러 개가 되는데 이들을 구별할 때 사용되는 key로 bind해주기 -->
              <div>{{t.try}}</div>
              <div>{{t.result}}</div>
          </li>
      </ul>
      <!-- <div>{{answer}}</div> -->
  </div>
</template>

<script>
const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for(let i = 0; i< 4; i+=1){
        const chosen = candidates.splice(Math.floor(Math.random()*(9-i)),1)[0];
        array.push(chosen);
    }
    return array;
};

export default { // main.js에서 import NumberBaseball 해서 가져온 부분 export 한 것
    data(){
        return{
            tries: [],//숫자 입력할때마다 push해서 tries 배열에 넣어줄거임
            value: '',
            result: '',
            answer: getNumbers(), //ex) [1,5,3,4]
        }
    },
    methods: {
        onSubmitForm(){
            if(this.value === this.answer.join('')){ //정답일때
            this.tries.push({
                try: this.value,
                result: '홈런',
            });
            this.result = '홈런';
            alert('게임을 다시 시작합니다.');
            this.value = '';
            this.answer = getNumbers();
            this.tries = [];
            this.$refs.answer.focus();           
            }
            else{ //틀렸을때
            if(this.tries.length >= 2){
                //this.result = `10회 초과.. 답은 ${this.answer.join(',')} 이었습니다!`;
                alert(`10회 초과.. 답은 ${this.answer.join(',')} 이었습니다!`);
                this.result = `게임을 다시 시작합니다`;
            this.value = '';
            this.answer = getNumbers();
            this.tries = [];
            this.$refs.answer.focus();
            }
            let strike = 0;
            let ball = 0;
            const answerArray = this.value.split('').map(v => parseInt(v));
            for(let i = 0; i<4; i+=1){
                if(answerArray[i] === this.answer[i]){ //숫자 자릿수 모두 맞았을때
                    strike++;
                }else if(this.answer.includes(answerArray[i])){ //숫자만 맞았을때
                    ball++;
                }
            }
            this.tries.push({
                try: this.value,
                result: `${strike} 스트라이크, ${ball} 볼 입니다.`
            });
            this.value = '';
            this.$refs.answer.focus();
            }           
        }
    }
};
</script>

<style>

</style>