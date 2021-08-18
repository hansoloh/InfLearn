<template>
<div>
</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			sampleData: ''
		};
	},
	setup(){},
	create(){},
	mounted(){},
	unmounted(){
	},
	methods:{		
		async api(url, method, data) {
			return (await axios({
				method: method,
				url: url,
				data: data
			}).catch(e => {
				console.log(e);
			})).data;
		}
	}
}
</script>

<style scoped>

</style>