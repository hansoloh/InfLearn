import {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList,
}
from '../api/index';

export default {
    // FETCH_NEWS(context) {
    //     fetchNewsList(context)
    //         .then(response => {
    //             console.log(response.data);
    //             context.commit('SET_NEWS', response.data);
    //             //state.news = response.data;
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //         .then(({ data }) => {
    //             commit('SET_JOBS', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    // FETCH_ASK({ commit }) {
    //     fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASK', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    // FETCH_USER({ commit }, name) {
    //     fetchUserInfo(name)
    //         .then(({ data }) => {
    //             commit('SET_USER', data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    async FETCH_LIST({ commit }, pageName){
        const response = await fetchList(pageName);
        console.log(4);
        commit('SET_LIST', response.data);
        return response;
    },
}