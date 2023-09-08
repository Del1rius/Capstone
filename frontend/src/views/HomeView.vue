<template>
 <div class="container-fluid bg-black text-white">
    <div class="p-2">
        <div class="hero">
            <div class="row d-flex justify-content-center">
                <div class="col-5 block-1 p-5 m-5">
                    <h2 class="display-1 test-1">
                        へようこそ
                    </h2>
                </div>
                <div class="col-5 block-2 p-5 m-5">
                    <h2 class="display-1 test-2">
                    Kustom <br> Kulture
                    </h2>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src

</script>

<style scoped>
.hero {
    min-height: 100vh;
    border: 3px solid #EEBC1D;
    border-radius: 25px;
}

.hero div{
    margin-top: 25vh;
}


.block-1 {
    border: 3px solid #EEBC1D;
    border-radius: 25px;
    min-height: 40vh;
    transform: rotate(-35deg);
    color: #EEBC1D !important;
}



.block-1:hover{
    background-color: #EEBC1D;
    color: black !important;
    transition: 1s ease-out;
}

.test-1 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
}

.test-2 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
}

.block-2 {
    border: 3px solid #EEBC1D;
    border-radius: 25px;
    min-height: 40vh;
    transform: rotate(35deg);
    color: #EEBC1D !important;
}
.block-2:hover{
    background-color: #EEBC1D;
    color: black !important;
    transition: 1s ease-out;
}

</style>
