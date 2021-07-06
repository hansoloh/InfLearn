<template>
  <div>
      <!-- <div v-for="item in this.$store.state.ask">{{ item.title }}</div> -->
      <p v-for="ask in this.$store.state.ask" :key="ask.id">
        <a :href="ask.url">
          {{ ask.title }}
        </a>
        <small>{{ ask.time_ago }} by {{ ask.user }}</small>
      </p>
  </div>
      
</template>

<script>
export default {
  // data(){
  //   return {
  //     ask: []
  //   }
  // },
  created(){
    // var vm = this;
    // fetchAskList()
    // .then(function(response){
    //   vm.ask = response.data;
    // })
    // .catch(function(error){
    //   console.log(error);
    // });
    this.$store.dispatch('FETCH_ASK')
    .then(() => console.log('success'))
      .catch(() => console.log('fail'));
  }
}
</script>

<style>

</style>