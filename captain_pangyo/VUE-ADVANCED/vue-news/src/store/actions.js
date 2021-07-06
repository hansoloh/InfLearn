import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index';

export default{
    FETCH_NEWS(context){
        fetchNewsList(context)
        .then(response => {
            console.log(response.data);
            context.commit('SET_NEWS', response.data);
            state.news = response.data;
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
        .then(({ data }) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ASK({ commit }){
        fetchAskList()
        .then(({ data }) => {
            commit('SET_ASK',data);
        })
        .catch(error => {
            console.log(error);
        });
    }
}