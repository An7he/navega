<template>
    <header>
      <!-- <div class="logo">
        <img src="../assets/cetis.jpg" alt="">
      </div> -->
      <ul class="navbar">
        <li class="nav-item"><router-link to="/" class="nav-link">Inicio</router-link></li>
        <li>
          <Dropdown :nombre="menu1.nombre" :enlace="menu1.enlace" :submenu="menu1.submenu">
          </Dropdown>
        </li>
      </ul>
    </header>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'

export default {
  components : {
    Dropdown
  },
  data(){
    return {
      menu1: {
        nombre: 'Submodulo I',
        enlace: '/',
        submenu: [
          {
            label: "1er Parcial",
            enlace: "/sub1/parcial1"
          },
          {
            label: "2ndo Parcial",
            enlace: "/sub1/parcial2"
          },
          {
            label: "3er Parcial",
            enlace: "/sub1/parcial3"
          }
        ]
      }
    }
  },
  name: 'Navbar',
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
body{
  min-height: 200vh;
}

.logo{
  width: 60px;
  height: auto;
  display:flex;
  justify-content:center;
  align-items:center;
}

.logo img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s;
  padding: 0px 100px;
  z-index: 100000;
  background-color: #ffffff;
  -webkit-box-shadow: 2px -6px 50px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 2px -6px 10px 0px rgba(0,0,0,0.75);
box-shadow: 2px -6px 50px 0px rgba(0,0,0,0.75);
}

header ul{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
header ul li{
  position: relative;
  list-style: none;
}

.navbar{
  padding:0;
  z-index: 1000 !important;
}

.dropdown-toggle {
  margin-left: 12px;
  margin-right: 12px;
}

.navbar .nav-item .nav-link{
  font-weight: 550;
  padding-top: 25px;
  padding-bottom: 25px;
  color: #2c3e50;;
}

.navbar .nav-item .nav-link:hover{
  color: #455463;
}
</style>
