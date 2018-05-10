<template>
   <div id="app">
    <div class="container-fluid">
      <pp-header></pp-header>
      <pp-menu></pp-menu>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
     <!--<div class="container">
      <pp-menu></pp-menu>
    </div>-->
     <div class="container-fluid">
      <pp-footer></pp-footer>
    </div>

  </div>
  
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Menu from './components/Menu.vue'

export default {
  components:{
  ppHeader: Header,
  ppMenu:Menu,
  //ppHome:Home,
  //ppMenu:Menu,
  ppFooter:Footer,
  } 

 
}
</script>

<style>

</style>
