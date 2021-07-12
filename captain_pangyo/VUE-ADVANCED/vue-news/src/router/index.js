import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView';
import bus from '../utils/bus';
import { store } from '../store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: 'news',
        },
        {
            //path: ulr 주소
            path: '/news',
            name: 'news',
            //component: url 주소로 갔을 때 표시될 component
            //component: NewsView,
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
        setTimeout(() => {
        store.dispatch("FETCH_LIST",to.name)
          .then(() => {
            console.log(5);
            console.log('fetched');
            //bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }, 1000);
                // console.log('to',to);
                // console.log('from',from);
                // console.log(next);
            },
        },
        {
            path: '/ask',
            name: 'ask',
            //component: AskView,
            component: createListView('AskView'),
        },
        {
            path: '/Jobs',
            name: 'jobs',
            //component: JobsView,
            component: createListView('JobsView'),
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        }

    ]
});