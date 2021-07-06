import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../3.numberBaseball/NumberBaseball';
import ResponseCheck from '../4.ResponseCheck/ResponseCheck';
import RockScissorsPaper from '../5.RCP/RockScissorsPaper';
import LottoGenerator from '../6.Lotto/LottoGenerator';
import GameMatcher from './GameMatcher';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    //주소창에 # hash값 있다가 history 모드 쓰면 깔끔해짐. 새로고침이 안됨..?(서버 셋팅 필요함)
    routes: [
        { path: '/number-baseball', component: NumberBaseball },
        { path: '/response-check', component: ResponseCheck },
        { path: '/rock-scissors-paper', component: RockScissorsPaper },
        { path: '/lotto-generator', component: LottoGenerator },
        { path: '/game/:name', component: GameMatcher },
        //다이나믹 라우트 매칭; 수많은 게임들을 하나의 주소로 묶을 수 있음
    ],
});