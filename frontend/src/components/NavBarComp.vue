<template >
    <nav class="navbar navbar-expand-lg bg-black border mt-0 ms-0 me-0">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link to="/" class="navbar-brand fs-3 ms-4" href="#">Kustom Kulture</router-link>
      <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link fs-5" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link fs-5" href="#">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link fs-5" href="#">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link fs-5" href="#">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link fs-5" href="#">Admin</router-link>
          </li>
          
        </ul>
        <ul class="navbar-nav me-1">
          <li class="nav-item">
            <router-link to="/login" class="nav-link fs-5" href="#">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link fs-5" href="#">Register</router-link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
</template>
<script>
import router from '@/router';

export default {
    components: { router }
}
</script>
<style scoped>
a {
  color: #EEBC1D;
}
.border {
  border: 2px solid black !important;
 border-bottom: 4px solid #EEBC1D !important;
}

a:hover {
  color: #EEBC1D !important;
}

.router-link-active {
  border: 3px solid #EEBC1D;
  color: #EEBC1D !important;
}
  
</style>