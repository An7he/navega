<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
body {
  ul {
    list-style-type: none !important;
  }
  text-decoration: none;
}

#app {
  h2, h3, h4, h5{
    font-family: College, sans-serif;
  }
  font-family: Sunshine, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #100a21;
}

.container{
  padding-top: 70px;
  z-index: 1;
}
.inner-container {
  padding-top: 30px;
}
.dropdown-menu.show {
  margin-top:-2px !important;
}
.centrar {
  display: flex;
  align-items: center;
}

.wrapper-img {
  max-width: 250px;
  height: auto;
  position: relative;
  overflow: hidden;  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.wrapper-mini {
  max-width: 100px;
  height: auto;
  position: relative;
  overflow: hidden;  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.btn:focus, .btn.focus {
    outline: 0;
    box-shadow: none !important;
}
</style>
