<template>
    <div class="container-fluid bg-black text-center main">
        <h2 class="display-3">
            Admin
        </h2>

        <div class="my-3 prod-table">
            <div class="mx-auto d-flex justify-content-between">
                <h4 class="display-5">
                    Products
                </h4>
                <AddProductComp/>
            </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
import AddProductComp from '@/components/AddProductComp.vue';
export default {
    props: ['product', 'user'],

    components: {
        AddProductComp
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
                    timer: 5000,
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
                    timer: 5000,
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
</style>