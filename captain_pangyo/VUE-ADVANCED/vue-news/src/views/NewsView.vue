<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>
        <!-- 기타 정보 역역 -->
        <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>
          {{ item.time_ago }} by 
          <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>          
          </small>
      </li>
    </ul>
  </div>
</template>

<script> 
import { fetchNewsList } from '../api/index';

export default {
  created(){
    this.$store.dispatch('FETCH_NEWS');

  //   fetchNewsList()
  //   .then(response => {
  //     console.log(response);
  //     this.users = response.data;
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   })
  // }
  },
}
</script>

<style scoped>
.news-list{
  margin: 0;
  padding: 0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
</style>