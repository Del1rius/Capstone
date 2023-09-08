<template>
  <div>
    <nav-bar-comp/>
   <router-view/>
    <footer-comp/>
  </div>
  
</template>
<script>
import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue';

export default {
  components: { NavBarComp, FooterComp },
  
};
</script>
<style>
::-webkit-scrollbar {
  display: none;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Roboto+Mono:wght@500&display=swap');

* {
  font-family: 'Noto Sans JP', sans-serif;
  font-family: 'Roboto Mono', monospace;
}
</style>
