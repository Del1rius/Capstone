<template>
    <div class="container-fluid text-center bg-black main">
        <div class="card mx-auto p-5 w-50 align-items-center login-form">
            <form @submit.prevent="login">
                <h2 class="text-center display-3">
                    Login: 
                </h2>
                <div class="mb-3">
                    <label for="emailAdd" class="form-label">Email: </label>
                    <input type="email" id="emailAdd" class="form-control" v-model="payload.emailAdd" required/>
                </div>

                <div class="mb-3">
                    <label for="userPass" class="form-label">Password: </label>
                    <input type="password" id="userPass" class="form-control" v-model="payload.userPass" required/>
                </div>

                <div class="text-center mb-3">
                    <button type="submit" class="btn login-btn fs-5 m-2">Login</button>
                    <button type="reset" class="btn clear-btn fs-5 m-2">Reset</button>
                </div>
            </form>
            <div class="text-center mb-3">
                    <router-link to="/register">Don't Have An Account? Register Here</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies();
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
        console.log(cookies.get('setToken'))
    }
}
</script>
<style scoped>
.main {
    min-height: 100vh;
    color: #eebc1d !important;
} 

.login-form {
    background-color: black;
    color: #eebc1d !important;
    border: 4px solid #eebc1d;
}

.login-btn {
    background-color: black;
    color: #eebc1d !important;
    border: 2px solid #eebc1d;
}

.clear-btn {
    background-color: black;
    color: #eebc1d;
    border: 2px solid #eebc1d;
}

a{
    text-decoration: none;
    color: #eebc1d;
}
</style>