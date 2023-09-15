<template>
  <div>
    <div class="button">
      <a
        href="#add-prod-modal"
        data-bs-toggle="modal"
        data-bs-target="#add-prod-modal"
        class="m-2 text-center btn add-prod-btn"
      >
        Add Product
      </a>
    </div>
    <div class="modal" id="add-prod-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="text-center display-5">New Product:</h3>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form @submit.prevent="addProduct" class="p-3">
              <div class="mb-3">
                <label for="prodID" class="form-label"> Product ID: </label>
                <input
                  v-model="product.prodID"
                  type="text"
                  id="prodID"
                  class="form-control"
                  placeholder="e.g 1"
                  required
                  oninvalid="this.setCustomValidity('Please Enter A Product ID')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="prodName" class="form-label"> Product Name: </label>
                <input
                  v-model="product.prodName"
                  type="text"
                  id="prodName"
                  class="form-control"
                  placeholder="Name of the product"
                  required
                  oninvalid="this.setCustomValidity('Please Enter A Product Name!')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="quantity" class="form-label"> Quantity: </label>
                <input
                  v-model="product.quantity"
                  type="number"
                  id="quantity"
                  class="form-control input-bg"
                  placeholder="eg: 100"
                  required
                  oninvalid="this.setCustomValidity('Please enter quantity')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label"> Price: * </label>
                <input
                  v-model="product.price"
                  type="number"
                  id="price"
                  class="form-control input-bg"
                  placeholder="eg: 300.00"
                  required
                  oninvalid="this.setCustomValidity('Please enter a price')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="category" class="form-label"> Category: * </label>
                <input
                  v-model="product.category"
                  type="text"
                  id="category"
                  class="form-control"
                  placeholder="eg: Turbo's"
                  required
                  oninvalid="this.setCustomValidity('Please Enter Category!')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="prodUrl" class="form-label"> Product Image: </label>
                <input
                  v-model="product.prodUrl"
                  type="text"
                  id="prodUrl"
                  class="form-control"
                  placeholder="Please Enter A Link for The Product Image!"
                />
              </div>

              <div class="modal-footer">
                <button
                  type="submit"
                  class="m-2 btn add-prod-btn"
                  data-bs-dismiss="modal"
                >
                  Add Product
                </button>
                <button type="reset" class="m-2 btn clr-btn">
                  Clear Fields
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],

  data() {
    return {
      product: {
        prodID: "",
        prodName: "",
        quantity: "",
        price: "",
        category: "",
        prodUrl: "",
      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.product);
      this.$router.push("/admin");
      setTimeout(() => {
        console.log("Reload");
        location.reload();
      }, 5000);
    },
  },
};
</script>
<style scoped></style>
