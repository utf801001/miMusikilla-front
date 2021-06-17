<template>
  <div id="app">
    <Navbar/>

    <router-view/>
    
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import {routes}  from './router'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
   computed:{
    menuItems(){
      return routes
    }
  },
  mounted(){
    const token = localStorage.getItem('jwt-token')
    this.$store.dispatch('login',token)
  }
}

</script>
