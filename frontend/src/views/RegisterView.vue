<template>
  <div class="container-fluid text-center bg-black main">
    <div class="card">
      <h2 class="display-3 mb-3">Register</h2>

      <form @submit.prevent="registerUser" class="p-3">
        <div class="m-3">
          <label for="firstName" class="form-label">First Name:</label>
          <input
            v-model="user.firstName"
            type="text"
            id="firstName"
            class="form-control"
            placeholder="Enter your First Name Here"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Name')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="m-3">
          <label for="lastName" class="form-label">Surname:</label>
          <input
            v-model="user.lastName"
            type="text"
            id="lastName"
            class="form-control"
            placeholder="Enter your Surname Here"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Surname')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="m-3">
          <label for="emailAdd" class="form-label">Email: </label>
          <input
            v-model="user.emailAdd"
            type="text"
            id="emailAdd"
            class="form-control"
            placeholder="@gmail.com"
            required
            oninvalid="this.setCustomValidity('Please Enter Your Email')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="m-3">
          <label for="userPass" class="form-label">Password: </label>
          <input
            v-model="user.userPass"
            type="text"
            id="password"
            class="form-control"
            required
            oninvalid="this.setCustomValidity('Please Enter A Password')"
            oninput="this.setCustomValidity('')"
          />
        </div>
        <div class="m-3">
          <label for="userImg" class="form-label">User Image: </label>
          <input
            v-model="user.userImg"
            type="text"
            id="userImg"
            placeholder="Insert Image Link"
            class="form-control"
          />
        </div>
        <div class="text-center mt-2">
            <button type="submit" class="p-2 btn register-btn m-3">
                Register
            </button>
            <button type="reset" class="p-2 btn reset-btn m-3">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        emailAdd: "",
        userPass: "",
        userImg: "",
        userRole: "",
      },
    };
  },

  methods: {
    registerUser() {
      this.$store.dispatch("registerUser", this.user);
      this.$router.push("/");
    },
  },
};
</script>
<style>
.main {
  min-height: 100vh;
  color: #eebc1d !important;
}

.card {
  background-color: black;
  color: #eebc1d;
}

.reset-btn {
    background-color: black;
    color: #eebc1d;
    border: 2px solid #eebc1d;
}

.register-btn {
    background-color: black;
    color: #eebc1d;
    border: 2px solid #eebc1d;
}
</style>
