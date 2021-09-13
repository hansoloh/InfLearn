/* eslint-disable no-mixed-spaces-and-tabs */
<template>

	<main class="mt-3">
			<div class="container">
				<div class="row">
					<div class="col-md-5">
					<div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item active">
							<img src="http://earlyadopter.godohosting.com/goods_earlyadopter_godo_co_kr/282/1614908721113m0.jpg?cache_ver=2021033002" class="d-block w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="http://earlyadopter.godohosting.com/goods_earlyadopter_godo_co_kr/282/1615774770616m0.jpg?cache_ver=2021033002" class="d-block w-100" alt="...">
							</div>
							<div class="carousel-item">
							<img src="http://earlyadopter.godohosting.com/goods_earlyadopter_godo_co_kr/326/1627867467804m0.jpg?cache_ver=2021033002" class="d-block w-100" alt="...">
							</div>
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>
						</div>
					</div>
					<div class="col-md-7">
					<div class="card shadow-sm">
						<div class="card-body">
							<h5 class="card-title">마이크</h5>
							<h5 class="card-title pt-3 pb-3 border-top">33,000원</h5>
							<p class="card-text pt-3 border-top">
							<span class="badge bg-dark">전자 제품</span>
							<span class="badge bg-secondary">컴퓨터</span>
							<span class="badge bg-secondary">악세사리</span>
							</p>
							<p class="card-text pb-3">
							배송비 2,500원 | 도서산간(제주도) 배송비 추가 5,000원 | 택배 배송 | 5일 이내 출고
							</p>
							<div class="card-text pt-3 pb- border-top">
							<div class="row">
								<div class="col-auto">
									<label class="col-form-label">구매 수량</label>
								</div>
								<div class="col-auto">
									<div class="input-group">
										<span class="input-group-text">-</span>
										<input type="text" class="form-control" style="width: 40px;" value="1">
										<span class="input-group-text">+</span>
										</div>
								</div>
							</div>
							</div>
							<div class="row pt-3 pb-3 border-top">
								<div class="col-6">
									<h3>총 상품 금액</h3>
								</div>
								<div class="col-6" style="text-align: right;">
								<h3>33,000원</h3>
							</div>

							</div>
							<div class="d-flex justify-content-between align-items-center">
								<div class="col-6 d-grid p-1">
									<button type="button" class="btn btn-lg btn-secondary">장바구니 담기</button>
								</div>
								<div class="col-6 d-grid p-1">
								<button type="button" class="btn btn-lg btn-warning">주문하기</button>
							</div>
							</div>
						</div>
						</div>

					<div class="row g-3">
						<div class="col-lg-3 col-md-6">
							
						</div>
				</div>
				</div>
					
				</div>

				<div class="row">
					<div class="col-12">
						<img src="http://zound.speedgabia.com/z4/brandIMG/Rode/rode_intro.jpg" class="img-fluid"/>
					</div>

				</div>

			</div>		  
		</main>
</template>

<script>
export default {
		data(){
				return{
					productId: 0,
					productDetail: [],
					ProductImage: []
				};
		},
		created(){
			this.productId = this.$route.query.product_id;
			this.getProductDetail();
			this.getProductImage();
		},
		methods: {
				async getProductDetail(){
						this.productDetail = await this.$api("/api/productDetail",{param:[this.productId]});
						console.log(this.productDetail);
				},
				async getProductImage(){
						this.productImage = await this.$api("/api/productMainImages",{param:[this.productId]});
				}
		}    
}
</script>