<template>
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
      <a class="navbar-brand fs-3 ms-4" href="#">Kustom Kulture</a>
      <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link fs-5" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-5" href="#">Admin</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src

export default {};
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
  background-color: #EEBC1D;
  color: black;
  border: 2
}
</style>
