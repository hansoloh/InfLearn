import Vue from 'vue';
//packge.json에 설치한 vue 가져오기

import ResponseCheck from './ResponseCheck';
//ResponseCheck.vue에서 export defualt해서 쓸 것임

new Vue(ResponseCheck).$mount('#root');
//$mount = el

//webpack을 통해 main.js + ResponseCheck.vue = dist 에 하나로 합쳐짐