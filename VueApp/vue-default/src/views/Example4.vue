<template>
<div>
	<page-title :title="title" />
	<ChildComponent2 :likes="23" :isOk="isOk" :commentIds="commentIds" :author="author"/>
</div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';
import ChildComponent2 from '../components/ChildComponent2.vue';

export default {
	name: '',
	components: {'page-title':PageTitle, ChildComponent2},
	data() {
		return {
			title: '까눌레 마시써용',
			likes: 23,
			isOk: true,
			commentIds: [1,5,2,3],
			author: {name: '홍길동', company:'강남역'}
		};
	},
	setup(){},
	create(){},
	mounted(){},
	unmounted(){
	},
	methods:{		
		}
	}
</script>

<style scoped>

</style>