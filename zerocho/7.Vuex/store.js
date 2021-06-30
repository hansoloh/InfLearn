import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //vue와 vuex연결

export const SET_WINNER = 'SET_WINNER'; //import {SET_WINNER, CHANGE_TURN} from './store';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';
//export 붙여서 module로 만들기 ; 다른 파일들에서도 불러와 쓸수 있게

export default new Vuex.Store({ //import store from './store';
    state: { //data
        tableData: [
            ['','',''],
            ['','',''],
            ['','',''],
        ],
        turn: 'O',     
        winner: '',
    },
    getters: { //computed
        turnMessage(state){
            return state.turn + '님이 승리하셨습니다';
        },
    },
    mutations: { //state 수정할때 사용. 동기적으로
        [SET_WINNER](state, winner){
            state.winner = winner;
        },
        [CLICK_CELL](state, {row, cell}){
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state){
            state.turn = state.turn === 'O' ? 'X' : 'O';
        },
        [RESET_GAME](state){
            state.turn = 'O';
            state.tableData = [
                ['','',''],
                ['','',''],
                ['','',''],
            ];
        },
        [NO_WINNER](state){
            state.winner = '';
        }
    },    
    actions: { //비동기를 사용할때, 또는 여러 뮤테이션을 연달아 실행할 때

    },
});