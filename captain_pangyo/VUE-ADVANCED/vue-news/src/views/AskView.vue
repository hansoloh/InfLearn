<template>
  <div>
      <!-- <div v-for="item in this.$store.state.ask">{{ item.title }}</div> -->
      <p v-for="item in fetchedAsk" :key="item.id">
        <!-- <a :href="ask.url">
          {{ ask.title }}
        </a> -->
        <router-link v-bind:to="`item/${item.id}`">
          {{ item.title }}
        </router-link>
        <small>{{ item.time_ago }} by {{ item.user }}</small>
      </p>
  </div>
      
</template>

<script>
import {mapSate, mapGetters } from 'vuex';

export default {
  // data(){
  //   return {
  //     ask: []
  //   }
  // },
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]),
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
    // var vm = this;
    // fetchAskList()
    // .then(function(response){
    //   vm.ask = response.data;
    // })
    // .catch(function(error){
    //   console.log(error);
    // });
  },
}
</script>

<style>

</style>