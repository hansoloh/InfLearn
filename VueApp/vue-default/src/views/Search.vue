<template>
<div>
	<div>
		<select v-model="selectedCity">
			<option :value="city.code" :key="i" v-for="(city,i) in cityList">{{city.name}}</option>
		</select>
		<input type="text" v-model="userName" @keyup.enter="searchUserList" />
		<button type="button" @click="searchUserList">조회</button>
	</div>
	<div>
		<table>
			<thead>
				<tr>
					<th>이름</th>
					<th>나이</th>
					<th>직업</th>
				</tr>
				<tbody>
					<tr :key="i" v-for="(person,i) in userList">
						<td>{{person.name}}</td>
						<td>{{person.age}}</td>
						<td>{{person.job}}</td>
					</tr>
				</tbody>
			</thead>
		</table>
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			cityList: [
				{name:'서울',code:'02'},
				{name:'부산',code:'21'},
				{name:'제주',code:'064'}
			],
			selectedCity: '',
			userName: '',
			userList: []
		};
	},
	setup(){},
	create(){},
	mounted(){},
	unmounted(){
	},
	methods:{		
		searchUserList(){
			const params = {
				selectedCity: this.selectedCity,
				userName: this.userName
			}
			this.userList = this.gerUserList(params);
		},
		gerUserList(params){
			console.log(params);

			let list = [
				{name:'김태형', age:25, job:'연예인'},
				{name:'전정국', age:24, job:'연예인'},
				{name:'유태오', age:37, job:'연예인'},
				{name:'김강우', age:46, job:'연예인'},
			];
			return list;
		}		
	}
}
</script>

<style scoped>

</style>