<template>
    <footer class="text-center text-lg-start bg-black" style="background-color: #CDCDCD">
      <div class="container p-4">
        <hr class="my-3">
        <section class="">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <img class="logo" src="https://i.postimg.cc/rz2mjq9w/logo.png" />
            </div>
            <hr class="w-100 clearfix d-md-none" />
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Pages</h6>
                <p>
                    <router-link to="/">Home</router-link>
                </p>
                <p>
                    <router-link to="/about">About</router-link>
                </p>
                <p>
                    <router-link to="/contact">Contact</router-link>
                </p>
                <p>
                    <router-link to="/products">Products</router-link>
                </p>
                <p>
                    <router-link to="/admin">Admin</router-link>
                </p>
            </div>
            <hr class="w-100 clearfix d-md-none"/>
            <hr class="w-100 clearfix d-md-none"/>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i class="fas fa-home mr-3"></i>Cape Town</p>
              <p><i class="fas fa-envelope mr-3"></i>kustomkulture@gmail.com</p>
              <p><i class="fas fa-phone mr-3"></i> <img class="whatsapp" src="https://i.postimg.cc/SsrhQqGX/whatsapp.png"/>Telephone:(+27) 021 420 6969</p>
            </div>
          </div>
        </section>
        <hr class="my-3">
        <section class="p-3 pt-0">
          <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-8 text-center text-md-start">
              <div class="p-3 test">
                © 2023 Copyright:
                <a>KustomKulture</a>
              </div>
            </div>
            <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a class="btn btn-outline-light btn-floating m-1 text-white"
                 role="button"><i class="fab fa-linkedin"><img class="icon" src="https://i.postimg.cc/yN8qf0T5/linkedin.png"/></i>
              </a>
              <a class="btn btn-outline-light btn-floating m-1 text-white"
                 role="button"><i class="fab fa-twitter"><img class="icon" src="https://i.postimg.cc/fbz17Yvz/twitter-1.png"/></i>
              </a>
              <a class="btn btn-outline-light btn-floating m-1 text-white"
                 role="button"><i class="fab fa-facebook"><img class="icon" src="https://i.postimg.cc/wBnPCnpv/facebook.png"/></i>
              </a>
              <a class="btn btn-outline-light btn-floating m-1 text-white"
                 role="button"><i class="fab fa-instagram"> <img class="icon" src="https://i.postimg.cc/X7wCd5JD/instagram.png"/> </i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  </template>
  
<script>
export default {
    
}
</script>
<style scoped>
.logo {
  width: 200px;
}
.icon {
  width: 25px;
}
.whatsapp{
  width:20px;
}

a {
    text-decoration: none;
    color: #EEBC1D;
}

h6 {
    color: #EEBC1D;
}

p {
    color: #EEBC1D !important;
}

.test {
    color: #EEBC1D !important;
}
hr {
  color: #EEBC1D !important;
}

</style>