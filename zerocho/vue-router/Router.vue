<template>
    <div>
      <div>
        <router-link to="/game">게임 매쳐</router-link>
        <router-link to="/game/number-baseball">숫자 야구</router-link>
        <router-link to="/game/response-check">반응속도 체크</router-link>
        <router-link to="/game/rock-scissors-paper">가위바위보</router-link>
        <router-link to="/game/lotto-generator">로또 추첨기</router-link>
      </div>
        <router-view></router-view>
    </div>
</template>

<script>
 import router from './routes';

 export default {
   router,
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