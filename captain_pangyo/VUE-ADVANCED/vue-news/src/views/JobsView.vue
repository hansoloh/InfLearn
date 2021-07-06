<template>
  <div>
      <!-- <div v-for="job in this.$store.state.jobs">
        {{ job.title }}
      </div> -->
      <p v-for="job in this.$store.state.jobs">
        <a :href="job.url">{{ job.title }}</a>
        <small>{{ job.time_ago }},{{ job.domain }}</small>
      </p>      
  </div>
</template>

<script>

export default {
  // data(){
  //   return{
  //     jobs: []
  //   }
  // },
  created(){
    // fetchJobsList()
    // .then(response => this.jobs = response.data)
    // .catch(error => consol.log(error));
    this.$store.dispatch('FETCH_JOBS');
  }
}
</script>

<style>

</style>