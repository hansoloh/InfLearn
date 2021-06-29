import Vue from 'vue';
//packge.json에 설치한 vue 가져오기

import RockScissorsPaper from './RockScissorsPaper';
//RockScissorsPaper.vue에서 export defualt해서 쓸 것임

new Vue(RockScissorsPaper).$mount('#root');
//$mount = el

//webpack을 통해 main.js + RockScissorsPaper.vue = dist 에 하나로 합쳐짐