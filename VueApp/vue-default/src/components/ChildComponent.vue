<template>
	<div>
		<h1>{{msg}}</h1>
		<button type="button" @click="childFunc" ref="child_btn">자식 클릭</button><br><br>
		<button type="button" @click="sendFromChild">자식 컴포넌트 버튼</button><br><br>
		<button type="button" @click="changeData">자식 컴포넌트 데이터 변경</button><br><br>
	</div>
</template>
<script>
export default {
	name: '',
	props: {
	},
	components: {},
	data() {
		return {
			msg: '자식 컴포넌트에 있던 메세지',
			msg2: '자식 컴포넌트로부터 보내는 메세지'
		};
	},
	setup(){},
	create(){},
	mounted(){
	},
	unmounted(){
	},
	methods:{
		childFunc(){
			alert('부모 컴포넌트에서 직접 발생시킨 이벤트')
		},
		sendFromChild(){
			this.$emit('send-message', this.msg2);
		},
		changeData(){
			this.msg = '자식 컴포넌트에서 데이터 변경이 일어남';
		}
		}
	}
</script>

<style scoped>

</style>