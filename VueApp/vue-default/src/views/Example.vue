<template>
<div>
	<!-- <button type="button" @click="callChildFunc">부모 클릭</button>
	<ChildComponent ref="child"/>
	<ChildComponent @send-message="sendMessage" />
	<h1>{{parentMsg}}</h1> -->
	<ChildComponent ref="child" />
	<button type="button" @click="showData">부모 버튼</button>
</div>
</template>
<script>
import ChildComponent from '../components/ChildComponent.vue';

export default {
	name: '',
	components: {ChildComponent},
	data() {
		return {
			parentMsg: ''
		};
	},
	computed: {
		msg(){
			return this.$refs.child.msg;
		}
	},
	setup(){},
	create(){},
	mounted(){},
	unmounted(){
	},
	methods:{
		callChildFunc(){
			//this.$refs.child.$refs.child_btn.click();
			//this.$refs.child.childFunc();
			this.$refs.child.msg = '부모 컴포넌트에서 변경한 메세지얌';
			},
			sendMessage(data){
				alert(data);
				this.parentMsg = data;
			},
			showData(){
				alert(this.msg);
			}
		}
	}
</script>

<style scoped>

</style>