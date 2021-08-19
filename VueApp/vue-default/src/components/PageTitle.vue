<template>
	<h1 class="page-title">{{title}}</h1>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '페이지 타이틀 이고든'
		}
	}
}
</script>
<style scoped>
.page-title{
	padding-left: 7px;
	border-left: 3px solid salmon;
	text-align: left;
}
</style>