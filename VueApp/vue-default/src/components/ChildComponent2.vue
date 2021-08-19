<template>
	<div>
		<div>likes: {{likes}}</div>
		<div>isOk: {{isOk}}</div>
		<div>author name: {{author.name}}</div>
	</div>
</template>
<script>
export default {
	name: '',
	props: {
		likes:{
			type: Number,
			deafult: 0
		},
		isOk: {
			type: Boolean,
			deafult: false
		},
		commentIds: {
			type: Array
		},
		author: {
			type: Object
		}
	},
	components: {},
	data() {
		return {
			sampleData: ''
		};
	},
	setup(){},
	create(){},
	mounted(){
		console.log(this.commentIds);
	},
	unmounted(){
	},
	methods:{		
		}
	}
</script>

<style scoped>

</style>