<template>
    <div>
      <button
        type="button"
        class="btn edit-prod-btn"
        @click="openEditModal(product?.prodID)"
        data-bs-toggle="modal"
        :data-bs-target="'#edit-prod-modal' + product?.prodID"
      >
        Edit
      </button>
  
      <div
        class="modal"
        :id="'edit-prod-modal' + product?.prodID"
        tab-index="-1"
        :aria-labelledby="'edit-prod-label' + product?.prodID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-black">
            <div class="modal-header">
              <h1 class="modal-title heading-text" id="edit-prod-label">
                Update Product:
              </h1>
  
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="close"
              ></button>
            </div>
  
            <div class="modal-body">
              <div class="mb-3">
                <label for="productID" class="form-label">Product ID:</label>
  
                <input
                  type="text"
                  class="form-control input-bg"
                  v-model="editProduct.prodID"
                  id="productID"
                />
              </div>
  
              <form @submit.prevent="updateProduct">
                <div class="mb-3">
                  <label for="prodName" class="form-label">Product Name:</label>
  
                  <input
                    type="text"
                    class="form-control input-bg"
                    v-model="payload.prodName"
                  />
                </div>
  
                <div class="mb-3">
                  <label for="quantity" class="form-label"
                    >Quantity:</label
                  >
  
                  <input
                    type="number"
                    class="form-control input-bg"
                    v-model="payload.quantity"
                  />
                </div>

                <div class="mb-3">
                  <label for="price" class="form-label">Price:</label>
  
                  <input
                    type="number"
                    class="form-control input-bg"
                    v-model="payload.price"
                  />
                </div>
  
                <div class="mb-3">
                  <label for="category" class="form-label">Category:</label>
  
                  <input
                    type="text"
                    class="form-control input-bg"
                    v-model="payload.category"
                  />
                </div>
  
                <div class="mb-3">
                  <label for="prodUrl" class="form-label">Product Image:</label>
  
                  <input
                    type="text"
                    class="form-control input-bg"
                    v-model="payload.prodUrl"
                  />
                </div>
  
                <div class="modal-footer">
                  <button type="submit" class="btn update-btn">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
import Swal from 'sweetalert2';

export default {
    props: ["product"],

    data() {
        return {
        editProduct: {
            ...this.product,
        },

    editProductID: null,

    payload: {
        prodID: this.product?.prodID,
        prodName: this.product?.prodName,
        quantity: this.product?.quantity,
        price: this.product?.price,
        category: this.product?.category,
        prodUrl: this.product?.prodUrl,
      },
    };
  },

  computed: {
    currentProduct() {
      return this.$store.state.product;
    },
  },

  methods: {
    openEditModal(prodID) {
      this.editProductID = prodID;
      this.editProduct = {
        ...this.$store.state.products.find(
          (product) => product.prodID === prodID
        ),
      };
    },

    updateProduct() {
      this.$store.dispatch("updateProduct", this.payload);

      Swal.fire({
        title: "Product Details Updated!",
        icon: "success",
        background: "#000000",
        color: "#eebc1d",
      });
    },
  },
}
</script>
<style scoped>
.edit-prod-btn {
  color: #eebc1d;
  border: 2px solid #eebc1d;
  padding: 5px;
  border-radius: 10px;
  margin: 10px;
}

.update-btn {
    color: #eebc1d;
    border: 2px solid #eebc1d;
    padding: 5px;
    border-radius: 10px;
    margin: 10px;
}


.clr-btn {
    color: #eebc1d;
    border: 2px solid #eebc1d;
    padding: 5px;
    border-radius: 10px; 
}
.btn-close {
    background-color: #eebc1d;
}    
</style>