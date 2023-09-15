<template>
    <div class="container-fluid bg-black text-center main">
        <h2 class="display-3">
            Admin
        </h2>

        <div class="my-3 prod-table">
            <div class="mx-auto d-flex justify-content-between">
                <h4 class="display-5 text-center p-3">
                    Products
                </h4>
                <AddProductComp />
            </div>
            <div class="d-flex justify-content-center">
                <table>
                    <thead>
                        <th>Product ID: </th>
                        <th>Product Name: </th>
                        <th>Quantity: </th>
                        <th>Price: </th>
                        <th>Category: </th>
                        <th>Product Url: </th>
                        <th>Action: </th>
                    </thead>
                    <tbody v-for="product in products" :key="product.prodID" :product="product">
                        <tr v-if="product">
                            <td>{{ product.prodID }}</td>
                            <td>{{ product.prodName }}</td>
                            <td>{{ product.quantity }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.category }}</td>
                            <td><img :src="product.prodUrl" :alt="product.prodName" loading="lazy" class="img-fluid prod-img"></td>
                            <td>
                                <UpdateProductComp :product="product"/>
                                <button type="submit" class="btn del-btn" @click="deleteProduct(product.prodID)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="my-3 user-table">
            <div class="d-flex justify-content-between">
                <h4 class="display-5 text-center p-3">
                    Users
                </h4>
                <AddUserComp/>
            </div>
            <div class="d-flex justify-content-center">
                <table>
                    <thead>
                        <tr>
                            <th>User ID: </th>
                            <th>First Name: </th>
                            <th>Last Name: </th>
                            <th>User Role: </th>
                            <th>Email: </th>
                            <th>Profile Image: </th>
                            <th>Action: </th>
                        </tr>
                    </thead>
                    <tbody v-for="user in users" :key="user.userID" :user="user" class="">
                        <tr v-if="user">
                            <td>{{ user.userID }}</td>
                            <td>{{ user.firstName }}</td>
                            <td>{{ user.lastName }}</td>
                            <td>{{ user.userRole }}</td>
                            <td>{{ user.emailAdd }}</td>
                            <td><img :src="user.userImg" :alt="user.userImg" loading="lazy" class="img-fluid user-img"></td>
                            <td>
                                <UpdateUserComp/>

                                <button class="btn del-btn" @click="deleteUser(user.userID)">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import Swal from 'sweetalert2'
import AddProductComp from '@/components/AddProductComp.vue';
import UpdateUserComp from '@/components/UpdateUserComp.vue';
import UpdateProductComp from '@/components/UpdateProductComp.vue'
import AddUserComp from '../components/AddUserComp.vue';
export default {
    props: ['product', 'user'],

    components: {
        SpinnerComp,
        AddProductComp,
        UpdateUserComp,
        UpdateProductComp,
        AddUserComp,
    },

    computed: {
        products() {
            return this.$store.state.products
        },

        product() {
            return this.$store.state.product
        },

        users() {
            return this.$store.state.users
        },

        user() {
            return this.$store.state.user
        },

        mounted() {
            this.$store.dispatch("fetchProducts");
            this.$store.dispatch("fetchUsers")
        },
    },

    methods: {
        deleteProduct(prodID) {
            if (confirm("Are You Sure You Want To Delete This Item?")) {
                this.$store.dispatch("deleteProduct", prodID)
                setTimeout(() => {
                    location.reload();
                }, 500);

                Swal.fire({
                    title: "Product Deleted!",
                    icon: "success",
                    background: "#000000",
                    color: "#eebc1d",

                })
            }
        },

        deleteUser(userID) {
            if (confirm("Are You Sure You Want To Delete This Item?")) {
                this.$store.dispatch("deleteUser", userID)
                setTimeout(() => {
                    location.reload();
                }, 500);

                Swal.fire({
                    title: "User Deleted!",
                    icon: "success",
                    background: "#000000",
                    color: "#eebc1d",
                })
            }
        },
    }
}
</script>
<style scoped>
.main {
    min-height: 100vh;
    color: #eebc1d !important;
}    

tr,
th,
td {
  border: 3px solid #eebc1d;
  padding: 10px;
  color: #eebc1d;
}

.del-btn{
    color: #eebc1d;
    border: 2px solid #eebc1d;
    padding: 5px;
    border-radius: 10px;  
}


</style>