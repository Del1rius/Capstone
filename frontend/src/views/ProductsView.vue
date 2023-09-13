<template>
  <div class="container-fluid bg-black main">
    <h2 class="display-3 text-center">Products</h2>
    <div v-if="products" class="flex-container" id="prods">
      <div
        class="display col-4"
        v-for="product in products"
        :key="product.prodID"
        :product="product"
      >
        <div class="card bg-black">
          <div class="text-center">
            <img
              :src="product.prodUrl"
              :alt="product.prodName"
              class="img-fluid img mt-2"
            />
          </div>
          <div class="text-center mt-2">
            <h2 class="fs-2">{{ product.prodName }}</h2>
            <div class="fs-4 price">R {{ product.price }}</div>
            <div class="view-prod mt-2">
                <button
                @click="viewProduct(product.prodID)"
                class="btn details-btn"
              >
              View Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <spinner-comp class="mx-auto" />
    </div>
  </div>
</template>
<script>
import SpinnerComp from "../components/SpinnerComp.vue";

export default {
//   props: [products],

  components: { SpinnerComp },

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

    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
  },

  methods: {
    viewProduct(prodID) {
        const selectedProduct = this.products.find(
            (product) => product.prodID === prodID
        );

        this.$store.commit("setSelectedProduct", selectedProduct);
        this.$router.push({name: "product", params: { prodID: prodID}})
    }
  }
};
</script>

<style scoped>
.main {
  min-height: 100vh;
  color: #eebc1d !important;
}

.card {
  min-height: 25vh;
  border: 2px solid #eebc1d;
  border-radius: 10px;
  min-width: 500px !important;
  padding: 10px;
}

.img {
  width: 250px;
  border: 2px solid #eebc1d;
  border-radius: 10px;
}

h2 {
  color: #eebc1d;
}

.price {
  color: #eebc1d;
}
.productBtn {
  background-color: black;
  color: #eebc1d;
  border: 2px solid #eebc1d;
  border-radius: 10px;
  padding: 5px;
}

a {
    text-decoration: none;
}
</style>
