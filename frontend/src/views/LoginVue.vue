<template>
    <div class="container-fluid text-center bg-black main">
        <div class="card mx-auto p-5 w-50 align-items-center">
            <form @submit.prevent="login">
                <h2 class="text-center display-3">
                    Login: 
                </h2>
                <div class="mb-3">
                    <label for="emailAdd" class="form-label">Email: </label>
                    <input type="email" id="emailAdd" class="form-control" v-model="payload.emailAdd" required/>
                </div>

                <div class="mb-3">
                    <label for="emailAdd" class="form-label">Password: </label>
                    <input type="password" id="userPass" class="form-control" v-model="payload.userPass" required/>
                </div>


            </form>
        </div>
    </div>
</template>
<script>
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies;
export default {
    data() {
        return {
            payload: {
                emailAdd: "",
                userPass: ""
            }
        }
    },

    computed: {
        msg() {
            return this.$store.state.msg
        },

        user() {
            return this.$store.state.user
        }
    },

    methods: {
        login() {
            this.$store.dispatch("login", this.payload)
            this.$router.push("/profile")
        }
    },

    mounted() {
        console.log(cookies.get("setToken"))
    }
}
</script>
<style scoped>
.main {
    min-height: 100vh;
    color: #eebc1d !important;
} 
</style>