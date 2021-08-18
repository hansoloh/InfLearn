<template>
<div>
	<div class="container" v-bind:class="{'active':isActive, 'text-red':isRed}">Class Binding</div><br><br>
	<div v-bind:style="styleObject">인라인 스타일 Binding</div><br><br>

	<input type="text" v-model="valueModel"/>
	<input type="number" v-model.number="valueModel2"/><br><br>
	<textarea>투무로랜드</textarea>
	<textarea v-model="valueModel3"></textarea><br><br>
	<select v-model="city">
		<option value="02">서울</option>
		<option value="21">부산</option>
		<option value="064">제주</option>
	</select>
	<label><input type="checkbox" value="서울" v-model="checked">서울</label>
	<label><input type="checkbox" value="부산" v-model="checked">부산</label>
	<label><input type="checkbox" value="제주" v-model="checked">제주</label>
	<br>
	<span>체크한 지역 : {{checked}}</span><br><br>
	<label><input type="radio" v-bind:value="radio1" v-model="picked">서울</label>
	<label><input type="radio" v-bind:value="radio2" v-model="picked">부산</label>
	<label><input type="radio" v-bind:value="radio3" v-model="picked">제주</label>
	<br>
	<span>선택한 지역 : {{picked}}</span><br><br>
	<img v-bind:src="url" /><br><br>
	<input type="text" v-model="textValue" />
	<button type="button" v-bind:disabled="textValue==''">Click</button> 
</div>
</template>
<script>
export default {
	name: '',
	components: {},
	data() {
		return {
			valueModel: 'Hi',
			valueModel2: '12',
			city: "064",
			checked: [],
			picked: "",
			radio1: "서울",
			radio2: "부산",
			radio3: "제주",
			url: 'https://kr.vuejs.org/images/logo/png',
			textValue: '',
			isActive: true,
			isRed: true,
			styleObject: {
				backgroundColor: 'yellow',
				color: 'red',
				fontWeight: 'bold',
			},
		};
	},
	setup(){},
	create(){},
	mounted(){},
	unmounted(){
		let valueModel3 = 11;
		console.log(valueModel3);

		console.log(this.valueModel2);
	},
	methods:{		
	}
}
</script>

<style scoped>
.container {
	width: 100%;
	height: 200px;
}
.active {
	background-color: yellowgreen;
	font-weight: bold;
}
.text-red {
	color: violet;
}

</style>