<template >
    <div class="container-fluid text-center bg-black main">
        <div v-if="product" :product="product" class="card mx-auto text-center prod-card">
        <div class="row">
            <div class="col-5 text-center">
                <img :src="product.prodUrl" :alt="product.prodName" class="img-fluid img text-center">
            </div>
            <div class="col-6 text-center my-auto">
                <h2 class="fs-2">{{  product.prodName }}</h2>
                <div class="fs-4 price">
                    R {{  product.price }}
                </div>
                <div class="view-prod mt-2">
                    <button class="productBtn">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props: ["product"],

    computed: {
        product() {
            return this.$store.state.selectedProduct;

        }
    },
    mounted () {
        this.$store.dispatch("fetchProduct")
    }
}
</script>
<style scoped>
.main {
    min-height: 100vh;
    color: #eebc1d !important;

}

.prod-card {
    background-color: black;
    color: #eebc1d !important;
}
.productBtn {
  background-color: black;
  color: #eebc1d;
  border: 2px solid #eebc1d;
  border-radius: 10px;
  padding: 5px;
}
    
</style>