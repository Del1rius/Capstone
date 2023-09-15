<template>
  <div>
    <div class="button">
      <a
        data-bs-toggle="modal"
        data-bs-target="#add-user-modal"
        href="#add-user-modal"
        class="m-2 text-center btn add-user-btn"
      >
        Add User
      </a>
    </div>
    <div class="modal" id="add-user-modal">
      <div class="modal-dialog">
        <div class="modal-content bg-black">
          <div class="modal-header blue-bg">
            <h1 class="text-center heading-text">Register User:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form @submit.prevent="registerUser" class="p-3 blue-bg">
              <div class="mb-3">
                <label for="firstName" class="form-label">
                  First Name: *
                </label>
                <input
                  v-model="user.firstName"
                  type="text"
                  id="firstName"
                  class="form-control input-bg"
                  placeholder="eg: A First Name"
                  required
                  oninvalid="this.setCustomValidity('Please enter your first name')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name: </label>
                <input
                  v-model="user.lastName"
                  type="text"
                  id="lastName"
                  class="form-control input-bg"
                  placeholder="eg: A Surname"
                  required
                  oninvalid="this.setCustomValidity('Please Enter Your Surname!.')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="userRole" class="form-label"> User Role: </label>
                <input
                  v-model="user.userRole"
                  type="text"
                  id="userRole"
                  class="form-control input-bg"
                  placeholder="eg: Admin"
                  required
                  oninvalid="this.setCustomValidity('Please enter your user role.')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="emailAdd" class="form-label"> Email: </label>
                <input
                  v-model="user.emailAdd"
                  type="text"
                  id="emailAdd"
                  class="form-control input-bg"
                  placeholder="eg: claytonsherman@gmail.com"
                  required
                  oninvalid="this.setCustomValidity('Please enter a valid email address.')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="userPass" class="form-label">Password: </label>
                <input
                  v-model="user.userPass"
                  type="text"
                  id="password"
                  class="form-control input-bg"
                  required
                  oninvalid="this.setCustomValidity('Please enter a password')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="userImg" class="form-label">User Profile: </label>
                <input
                  v-model="user.userImg"
                  type="text"
                  id="userImg"
                  class="form-control input-bg"
                  placeholder="Insert image link."
                />
              </div>

              <div class="modal-footer blue-bg">
                <button
                  type="submit"
                  class="m-2 btn add-user-btn"
                  data-bs-dismiss="modal"
                >
                  Register
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
    props: ['user'],

  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userImg: "https://i.postimg.cc/t4K6NhxQ/default-profile.png",
      },
    };
  },

  methods: {
      registerUser() {
      this.$store.dispatch("registerUser", this.user);
      this.$router.push('/admin');
      setTimeout(() => {
        location.reload();
      }, 5000);
    },
  },
};
</script>
<style scoped>
.add-user-btn {
  color: #eebc1d;
  border: 2px solid #eebc1d;
  padding: 5px;
  border-radius: 10px;
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
