import Vue from 'vue';
//packge.json에 설치한 vue 가져오기

import NumberBaseball from './NumberBaseball';
//NumberBaseball.vue에서 export defualt해서 쓸 것임

new Vue(NumberBaseball).$mount('#root');
//$mount = el

//webpack을 통해 main.js + NumberBaseball.vue = dist 에 하나로 합쳐짐