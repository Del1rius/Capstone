<template >
    <div class="loader text-center">
        <span>kustom</span>
        <span>kustom</span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.loader {
  position: relative;
}

.loader span {
  position: absolute;
  color: black;
  transform: translate(-50%, -50%);
  font-size: 38px;
  letter-spacing: 5px;
}

.loader span:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 0.3px #eebc1d;
}

.loader span:nth-child(2) {
  color: #eebc1d;
  -webkit-text-stroke: 1px black;
  animation: uiverse723 3s ease-in-out infinite;
}

@keyframes uiverse723 {
  0%, 100% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 
     54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }

  50% {
    clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 
     51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
  }
}
</style>