<template>
    <div>
      <button
        type="button"
        class="btn edit-users-btn"
        @click="openEditModal(user?.userID)"
        data-bs-toggle="modal"
        :data-bs-target="'#edit-user-modal' + user?.userID"
      >
        Edit
      </button>
  
      <div
        class="modal"
        :id="'edit-user-modal' + user?.userID"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content bg-black">
            <div class="modal-header">
              <h1 class="modal-title text-center heading-text">Update User:</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="close"
              ></button>
            </div>
  
            <div class="modal-body">
              <form @submit.prevent="updateUser">
                <div class="mb-3">
                  <label class="form-label">First Name :</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="payload.firstName"
                  />
                </div>
  
                <div class="mb-3">
                  <label class="form-label">Last Name :</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="payload.lastName"
                  />
                </div>
  
                <div class="mb-3">
                  <label class="form-label">User Role :</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="payload.userRole"
                  />
                </div>
  
                <div class="mb-3">
                  <label class="form-label">Email :</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="payload.emailAdd"
                  />
                </div>
  
                <div class="mb-3">
                  <label class="form-label">Password :</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="payload.userPass"
                  />
                </div>
  
                <div class="mb-3">
                  <label class="form-label">Profile Image :</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="payload.userImg"
                  />
                </div>
  
                <div class="modal-footer">
                  <button type="button" class="btn edit-user-btn">Update</button>
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
    props: ["user"],

  data() {
    return {
      editUser: {
        ...this.user,
      },

      editUserID: null,

      payload: {
        userID: this.user?.userID,
        firstName: this.user?.firstName,
        lastName: this.user?.lastName,
        userRole: this.user?.userRole,
        emailAdd: this.user?.emailAdd,
        userPass: this.user?.userPass,
        userImg: this.user?.userImg,
      },
    };
  },

  computed: {
    currentUser() {
      return this.$store.state.user;
    },
  },

  methods: {
    openEditModal(userID) {
      this.editUserID = userID;
      this.editUser = {
        ...this.$store.state.users.find((user) => user.userID === userID),
      };
    },

    updateUser() {
      localStorage.removeItem('user');

      this.$store.dispatch("updateUser", this.payload);
      localStorage.setItem('user', this.payload);

      this.$swal({
        title: "Profile Updated!",
        icon: "success",
        timer: 5000,
      });
    },
  },

}
</script>
<style scoped>
.edit-users-btn {
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