<template>
<div>
	<button type="button" @click="getProductList">조회</button>
	<table>
		<thead>
			<tr>
				<th>제품명</th>
				<th>가격</th>
				<th>배송료</th>
				<th>카테고리</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(product,i) in productList" :key="i">
				<td>{{product.product_name}}</td>
				<td>{{product.price}}</td>
				<td>{{product.delivery_price}}</td>
				<td>{{product.category}}</td>
			</tr>
		</tbody>
	</table>
</div>
</template>
<script>
import axios from 'axios';

export default {
	data() {
		return {
			productList: []
		};
	},
	setup(){},
	create(){},
	mounted(){},
	unmounted(){
	},
	methods:{		
		async getProductList(){
			this.productList = await this.api('https://3347078a-147d-42c0-9eb0-e1d4d97ec852.mock.pstmn.io/productList','get',{})
			console.log(this.productList);
		},
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