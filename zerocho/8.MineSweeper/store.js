import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //vue와 vuex연결

export const START_GAME = 'START_GAME';
export const OPEN_CELL = 'OPEN_CELL';
export const CLICK_MINE = 'CLICK_MINE';
export const FLAG_CELL = 'FLAG_CELL';
export const QUESTION_CELL = 'QUESTION_CELL';
export const NORMALIZE_CELL = 'NORMALIZE_CELL';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';
//필요한 data 값들 state에 설정해주고 (관련있는 값들끼리 {}묶어줌, 필요할 mutations 먼저 생성할수 있음. export 하고 mutations에 생성)

export const CODE = { //2차원 배열
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0, // 0 이상이면 다 opened
  };

//지뢰 심는 js 코드
const plantMine = (row, cell, mine) => {
    console.log(row, cell, mine);
    const candidate = Array(row * cell).fill().map((arr, i) => {
      return i;
    });
    const shuffle = [];
    while (candidate.length > row * cell - mine) {
      const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
      shuffle.push(chosen);
    }
    const data = [];
    for (let i = 0; i < row; i++) {
      const rowData = [];
      data.push(rowData);
      for (let j = 0; j < cell; j++) {
        rowData.push(CODE.NORMAL);
      }
    }
  
    for (let k = 0; k < shuffle.length; k++) {
      const ver = Math.floor(shuffle[k] / cell);
      const hor = shuffle[k] % cell;
      data[ver][hor] = CODE.MINE;
    }
  
    console.log(data);
    return data;
  };


export default new Vuex.Store({ //import store from './store';
    state: { //data
        tableData: [],
        data: {
            row: 0,
            cell: 0,
            mine: 0,
        },
        timer: 0,
        halted: true, //중단됨
        result: '',
    },
    getters: { //computed
       
    },
    mutations: { //state 수정할때 사용. 동기적으로
        [START_GAME](state, {row, cell, mine}){
            state.data = {
                row,
                cell,
                mine,
            };
            // state.date.row = row;
            // Vue.set(state.data, 'row', row);
            state.tableData = plantMine(row, cell, mine);
            state.timer = 0;
            state.halted = false;
            state.openedCount = 0;
        },
        [OPEN_CELL](state, {row, cell}){
            let openedCount = 0;
            let around = [];
            around = around.concat([
            ])
            Vue.set(state.tableData[row],cell, CODE.OPENED);
            //index로 접근할때는 화면이 바뀌지 않기 때문에 vue.set 써줘야함
        },
        [CLICK_MINE](state, {row, cell}){
            state.halted = true;
            Vue.set(state.tableData[row], cell, CODE.CLICKED_MINE);
        },
        [FLAG_CELL](state, {row, cell}){
            if(state.tableData[row][cell] === CODE.MINE){
                Vue.set(state.tableData[row], cell, CODE.FLAG_MINE);
            }else{
                Vue.set(state.tableData[row], cell, CODE.FLAG);
            }
        },
        [QUESTION_CELL](state, {row, cell}){
            if(state.tableData[row][cell] === CODE.FLAG_MINE){
                Vue.set(state.tableData[row], cell, CODE.QUESTION_MINE);
            }else{
                Vue.set(state.tableData[row], cell, CODE.QUESTION);
            }
        },
        [NORMALIZE_CELL](state, {row, cell}){
            if(state.tableData[row][cell] === CODE.QUESTION_MINE){
                Vue.set(state.tableData[row], cell, CODE.MINE);
            }else{
                Vue.set(state.tableData[row], cell, CODE.NORMAL);
            }
        },
        [INCREMENT_TIMER](state){
            state.timer += 1;
        },
    },    
});