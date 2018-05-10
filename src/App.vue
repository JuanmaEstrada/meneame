<template>
   <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
     <!--<div class="container">
      <pp-menu></pp-menu>
    </div>-->
     <div class="container">
      <pp-footer></pp-footer>
    </div>

  </div>
  
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

export default {
  components:{
  ppHeader: Header,
  //ppHome:Home,
  //ppMenu:Menu,
  ppFooter:Footer,
  } 

 
}
</script>

<style>

</style>
