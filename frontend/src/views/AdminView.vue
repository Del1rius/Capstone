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
export default {
    
}
</script>
<style scoped>
.main {
    min-height: 100vh;
    color: #eebc1d !important;
}    
</style>