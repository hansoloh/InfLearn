<template>
  <div>
    <list-item></list-item>

    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" class="post">
        
        <div class="points">
          {{ item.points }}
        </div>
      
        <div>
        <p class="news-title">
          <router-link v-bind:to="`item/${item.id}`">
          {{ item.title }}
        </router-link>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by
          <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
        </small>
        </div>
      </li>
      </ul>   -->
  </div>    
</template>

<script>
import ListItem from '../components/ListItem.vue';
//import { mapSate, mapGetters } from 'vuex';
import bus from '../utils/bus';

export default {
  components: {
    ListItem,
  },
  created(){
    bus.$emit('start:spinner');
    setTimeout(() => {
    this.$store.dispatch("FETCH_ASK")
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log(error);
      });
  }, 3000);
}
  // // data(){
  // //   return {
  // //     ask: []
  // //   }
  // // },
  // computed: {
  //   ...mapGetters([
  //     'fetchedAsk'
  //   ]),
  // },
  // created(){
  //   this.$store.dispatch('FETCH_ASK');
  //   // var vm = this;
  //   // fetchAskList()
  //   // .then(function(response){
  //   //   vm.ask = response.data;
  //   // })
  //   // .catch(function(error){
  //   //   console.log(error);
  //   // });
  // },
}
</script>
