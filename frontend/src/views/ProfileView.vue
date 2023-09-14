<template>
    <div class="container-fluid text-center bg-black main">
        <h2 class="display-3">
            User Profile:
        </h2>
        
        <div class="card text-center mx-auto">
            <div class="mb-3">
                <img :src="$store.state.user?.userImg" :alt="$store.state.user?.firstName" class="img-fluid img mt-2">
            </div>

            <div class="row">
                <div class="mb-3 col-3">
                    <h2 class="display-6 mb-1">Name:</h2>
                    <h3 class="fs-3">
                    {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
                    </h3>
                </div>
                <div class="mb-3 col-3">
                    <h2 class="display-6 mb-1">
                        User Role:
                    </h2>
                    <h3 class="fs-3">
                    {{ $store.state.user?.userRole }}
                    </h3>
                </div>

                <div class="mb-3 col-3">
                    <h2 class="display-6 mb-1">
                        Email:
                    </h2>
                    <h3 class="fs-3">
                    {{ $store.state.user?.emailAdd }}
                    </h3>
                </div>
                <div class="mb-3 col-3">
                    <h2 class="display-6 mb-1">
                        Password:
                    </h2>
                    <h3 class="fs-3">
                    <!-- {{ $store.state.user?.userPass }} -->
                    </h3>
                </div>
            </div>

            <div class="text-center p-2 m-2">
                <UpdateUserComp class="btn edit-btn"/>
                <button type="submit" class="btn logout-btn fs-4"><router-link to="/logout">Logout</router-link></button>
                <button type="submit" class="btn delete-btn fs-4" @click="deleteUser(user.userID)">Delete Account</button>
            </div>

        </div>
    </div>
</template>
<script>
import UpdateUserComp from "../components/UpdateUserComp.vue"

export default {
    components: {
        UpdateUserComp
    },

    computed: {
        user() {
            return this.$store.state.user
        },

        mounted() {
            return this.$store.dispatch("fetchUser")
        },
    },

    methods: {
        deleteUser(userID) {
            if (confirm("Are You Sure You Want TO Delete Your Account?")) {
                this.$store.dispatch("deleteUser", userID);
                setTimeout(() => {
                    location.reload();
                }, 500)
            }
        }
    }
}
</script>
<style scoped>
.main {
    min-height: 100vh;
    color: #eebc1d !important;
} 

h2 {
    color: #eebc1d !important;
}

h3 {
    color: #eebc1d !important;
}
.card {
    background-color: black;
    border: 3px solid #eebc1d;
}

.delete-btn {
    color: #eebc1d !important;
    border: 2px solid #eebc1d;
    padding: 5px;
    border-radius: 10px;
}

a {
    text-decoration: none;
    color: #eebc1d !important;
    border: 2px solid #eebc1d;
    padding: 8px;
    border-radius: 10px;
}

.img {
    border: 3px solid #eebc1d;
    border-radius: 10px;
}
</style>