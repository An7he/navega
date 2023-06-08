<template>
  <div class="container pt-100">
    <h2 class="font-weight-bold text-center py-3">- Bienvenido -</h2>
    <div class="block">
      <Columnas :reverse="false" :center2="true">
        <template #col1>
          <div class="pb-5 text-left">Bienvenido a la pagina web de los temas de los Submodulos, el objetivo es facilitar la rapidez de como se ven los temas y dar mayor accesibilidad a estos mismos</div>
          <div class="text-left">El objetivo de la pagina es dar a conocer la informacion vista en el submodulo 1 dentro de los 3 parciales diferentes que hubo, de manera ordenada, clasificada; para guiarse o aprender de estos temas que son tan importantes.</div>        
        </template>
        <template #col2>
          <div class="wrapper-img">
            <img src="../assets/aprender2.png" alt="">
          </div>
        </template>
    </Columnas>
    </div>
    <div class="block">
      <Columnas :reverse="true">
      <template #col1>
        <div class="text-center">Podras encontrar imagenes de los temas de los parciales, informacion sobre estos mismos, actualmente te encuentras en el inicio pero; ¡hay mucha informacion que puedes ver!</div>
      </template>
      <template #col2>
        <div class="wrapper-img">
          <img src="../assets/temas.png" alt="">
        </div>
      </template>
    </Columnas>      
    </div>

    <div class="block carousel">
      <carousel-3d :height="225" :width="340">
        <slide :index="0" >
          <img src="../assets/partespc.png" alt="">
        </slide>
        <slide :index="1">
          <img src="../assets/panel.jpg" alt="">
        </slide>
        <slide :index="2">
          <img src="../assets/mant.jpg" alt="">
        </slide>
      </carousel-3d>
    </div> 
    <div class="block d-flex justify-content-between pb-4">
      <div>
        <span class="font-weight-bold pb-2">Integrantes:</span>
      <ul>
        <li>
          Hernandez Martinez Jorge Emiliano
        </li>
        <li>
          Agustin Antonio Alfaro Ballinas
        </li>
      </ul>
      </div>
      <div class="wrapper-mini">
          <img src="../assets/cetis.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Columnas from '@/components/Columnas.vue'
import { Carousel3d, Slide } from 'vue-carousel-3d'

  export default {
    name: 'Welcome',
    components: {
      Columnas,
      Carousel3d,
      Slide      
    }
  }
</script>

<style lang="scss">
.pt-100 {
  padding-top: 120px;
}
.block {
  padding: 25px 0;
}
</style>
