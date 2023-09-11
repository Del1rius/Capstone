<template >
    <div class="container-fluid bg-black main">
        <h2 class="display-3 text-center">Products</h2>
        <div v-if="products" class="flex-container" id="prods">
            <div class="display" v-for="product in products" :key="product" :product="product" col-6>
                <div class="card">
                    <div>
                        <img src="product.prodUrl" alt="product.prodName" class="img-fluid">
                    </div>
                    <div class="text-center mt-auto">
                        <h2 class="display-6">{{  product.prodName }}</h2>
                        <div>
                            R {{  product.price }}
                            <button @click="viewProduct(product.prodName)"
                                class="productBtn">
                                View Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <spinner-comp class="mx-auto"/>
        </div>
    </div>
</template>
<script>
import SpinnerComp from '../components/SpinnerComp.vue'

export default {
    props: {product},

    components: {SpinnerComp},

    data() {
        return {
            search: "",
            genre: "All",
        };
    },

    computed: {
        products() {
            return this.$store.state.products?.filter((product) => {
                let isMatch = true;
                if (
                    !product.prodName.toLowerCase().includes(this.search.toLowerCase())
                ) {
                    isMatch = false;
                } 
                if (this.genre !== "All" && this.genre !== product.genre) {
                    isMatch = false;
                }
                return isMatch;
            });
        },
    },

    mounted() {
        this.$store.dispatch("fetchProducts");
    },

    


}
</script>

<style scoped>
.main {
    min-height: 100vh;
    color: #EEBC1D !important;
}
</style>