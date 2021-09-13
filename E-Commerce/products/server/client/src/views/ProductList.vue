/* eslint-disable no-mixed-spaces-and-tabs */
<template>
      <main class="mt-3">
          <div class="container">
              <div class="row mb-3">
                  <div class="col-12">
                    <select class="form-select">
                        <option selected></option>
                        <option value="1">키보드</option>
                        <option value="2">모니터</option>
                        <option value="3">마우스</option>
                      </select>
                  </div>
              </div>

              <div class="row g-3">
                <div class="col-lg-3 col-md-6">
                    <div class="card" style="width: 18rem;">
                        <a @click="goToDetail(product.id);" style="cursor:pointer;"><img src="http://earlyadopter.godohosting.com/goods_earlyadopter_godo_co_kr/282/1614908721113m0.jpg?cache_ver=2021033002" class="card-img-top" alt="..."></a>
                        <div class="card-body">
                          <h5 class="card-title">마이크</h5>
                          <p class="card-text">
                            <span class="badge bg-dark me-1">전자 제품</span>
                            <span class="badge bg-secondary me-1">컴퓨터</span>
                            <span class="badge bg-secondary me-1">악세사리</span>
                          </p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                            </div>
                            <small class="text-dark">219,000원</small>
                          </div>
                        </div>
                      </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card" style="width: 18rem;">
                        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShh_AppkpQJvddV_4C8yLV_V12ltsqiBT3vZ8kq2TWygy19or7urEYxxwP8_CqJxrm3HtDF-OhHw6KTYFDlwldgELHVcjQJ-U_ZSSqZ85GuwOLM30nAT2xZw&usqp=CAE" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">엎드린 짱구 마우스</h5>
                          <p class="card-text">
                            <span class="badge bg-dark">전자 제품</span>
                            <span class="badge bg-secondary">컴퓨터</span>
                            <span class="badge bg-secondary">악세사리</span>
                          </p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                            </div>
                            <small class="text-dark">79,000원</small>
                          </div>
                        </div>
                      </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card" style="width: 18rem;">
                        <img src="http://earlyadopter.godohosting.com/goods_earlyadopter_godo_co_kr/222/1589853164950m0.jpg?cache_ver=2021033002" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">웹캠</h5>
                          <p class="card-text">
                            <span class="badge bg-dark">전자 제품</span>
                            <span class="badge bg-secondary">컴퓨터</span>
                            <span class="badge bg-secondary">악세사리</span>
                          </p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                            </div>
                            <small class="text-dark">49,000원</small>
                          </div>
                        </div>
                      </div>
                </div>

                <div class="col-lg-3 col-md-6">
                    <div class="card" style="width: 18rem;">
                        <img src="http://earlyadopter.godohosting.com/goods_earlyadopter_godo_co_kr/134/157300699997m0.png?cache_ver=2021033002" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">프린터기</h5>
                          <p class="card-text">
                            <span class="badge bg-dark">전자 제품</span>
                            <span class="badge bg-secondary">컴퓨터</span>
                            <span class="badge bg-secondary">악세사리</span>
                          </p>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group" role="group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                            </div>
                            <small class="text-dark">199,000원</small>
                          </div>
                        </div>
                      </div>
                </div>

                <div class="row g-3">
                    <div class="col-lg-3 col-md-6">
                        <div class="card" style="width: 18rem;">
                            <img src="http://earlyadopter.godohosting.com/goods_earlyadopter_godo_co_kr/282/1614908721113m0.jpg?cache_ver=2021033002" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">기계식 게이밍 키보드</h5>
                              <p class="card-text">
                                <span class="badge bg-dark">전자 제품</span>
                                <span class="badge bg-secondary">컴퓨터</span>
                                <span class="badge bg-secondary">악세사리</span>
                              </p>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                                </div>
                                <small class="text-dark">219,000원</small>
                              </div>
                            </div>
                          </div>
                    </div>
    
                    <div class="col-lg-3 col-md-6">
                        <div class="card" style="width: 18rem;">
                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcShh_AppkpQJvddV_4C8yLV_V12ltsqiBT3vZ8kq2TWygy19or7urEYxxwP8_CqJxrm3HtDF-OhHw6KTYFDlwldgELHVcjQJ-U_ZSSqZ85GuwOLM30nAT2xZw&usqp=CAE" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">엎드린 짱구 마우스</h5>
                              <p class="card-text">
                                <span class="badge bg-dark">전자 제품</span>
                                <span class="badge bg-secondary">컴퓨터</span>
                                <span class="badge bg-secondary">악세사리</span>
                              </p>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                                </div>
                                <small class="text-dark">79,000원</small>
                              </div>
                            </div>
                          </div>
                    </div>
    
                    <div class="col-lg-3 col-md-6">
                        <div class="card" style="width: 18rem;">
                            <img src="http://earlyadopter.godohosting.com/goods_earlyadopter_godo_co_kr/222/1589853164950m0.jpg?cache_ver=2021033002" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">웹캠</h5>
                              <p class="card-text">
                                <span class="badge bg-dark">전자 제품</span>
                                <span class="badge bg-secondary">컴퓨터</span>
                                <span class="badge bg-secondary">악세사리</span>
                              </p>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                                </div>
                                <small class="text-dark">49,000원</small>
                              </div>
                            </div>
                          </div>
                    </div>
    
                    <div class="col-lg-3 col-md-6" :key="i" v-for="(product,i) in productList">
                        <div class="card" style="width: 18rem;">
                            <img :src="product.path" class="card-img-top" alt="...">
                            <div class="card-body">
                              <h5 class="card-title">{{product.product_name}}</h5>
                              <p class="card-text">
                                <span class="badge bg-dark me-1">{{product.category1}}</span>
                                <span class="badge bg-secondary me-1">{{product.category2}}</span>
                                <span class="badge bg-secondary me-1">{{product.category3}}</span>
                              </p>
                              <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group" role="group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">장바구니 담기</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">주문하기</button>
                                </div>
                                <small class="text-dark">{{product.product_price}}원</small>
                              </div>
                            </div>
                          </div>
                    </div>
    
                  </div>
              </div>
          </div>		  
      </main>
</template>

<script>
export default {
    data(){
        return{
            productList: []
        };
    },
    created(){
        this.getProductList();
    },
    methods: {
        async getProductList(){
            this.productList = await this.$api("/api/productList",{});
            console.log(this.productList);
        },
        goToDetail(product_id){
            this.$router.push({path:'/detail', query:{product_id:product_id}});
        }
    }    
}
</script>
