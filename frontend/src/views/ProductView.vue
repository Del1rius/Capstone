<template >
    <div v-if="product" :product="product" class="card mx-auto my-3 text-center prod-card">
        <div class="text-center">
            <img :src="product.prodImg" :alt="product.prodName" class="img-fluid img text-center">
        </div>
        <div class="text-center mt-2">
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
<style >
    
</style>