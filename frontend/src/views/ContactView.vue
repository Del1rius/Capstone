<template>
    <div class="container-fluid bg-black main">
        <h2 class="display-3 text-center">
                Contact Us
        </h2>
        <div class="row">
            <div class="col-6 ms-5 text-center mt-2 block-1">
                <form action="https://formspree.io/f/mwkdbzqr" method="POST">
                    <div class="col-12 fs-4 mt-4 mb-4">
                        <h3 class="display-6 text-center">Name: </h3>
                        <input type="text" class="form-input" id="fullName" name="fullName" placeholder="Full Name Here" required oninvalid="this.setCustomValidity('Please insert full name')">
                    </div>
                    <div class="col-12 fs-4 mb-4">
                        <h3 class="display-6 text-center">Email: </h3>
                        <input type="text" class="form-input" id="Email" name="Email" placeholder="Email Here" required oninvalid="this.setCustomValidity('Please insert email')">
                    </div>
                    <div class="col-12 fs-4 mb-4">
                        <h3 class="display-6 text-center">Your Thoughts: </h3>
                        <textarea type="text" class="form-input" id="Message" name="Message" placeholder="Your thoughts here..." required oninvalid="this.setCustomValidity('Cannot send empty textarea')"></textarea>
                    </div>
                    <div class="col-12 mb-4">
                        <button type="submit" class="btn" id="submit-btn">Submit!</button>
                    </div>
                </form>
            </div>
            <div class="col-5 ms-5 text-center mt-2 block-2">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.main {
    min-height: 100vh;
}

h2 {
    color: #EEBC1D;
}

.block-1 {
    min-height: 75vh;
    border: 4px solid #EEBC1D;
    border-radius: 25px;
}

.block-2 {
    min-height: 75vh;
    border: 4px solid #EEBC1D;
    border-radius: 25px;
}

.btn {
    border: 2px solid #EEBC1D;
    border-radius: 10px;
    color: #EEBC1D;
    background-color: black;
}

.btn:hover {
    border: 2px solid black;
    border-radius: 10px;
    color: black;
    background-color: #EEBC1D;
    transition: 0.5s ease-out;
}

h3 {
    color: #EEBC1D;
}

input {
    border-radius: 10px;
    text-align: center;
}

textarea {
    border-radius: 10px;
    text-align: center;
}
</style>