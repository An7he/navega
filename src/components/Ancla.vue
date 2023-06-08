<template>
      <div class="d-flex justify-content-center align-items-center">
      <a :href="datos.enlace" target="_blank">
        <div class="wrapper-img text-center">
            <div class="ajuste">
                <img src="../assets/pdf.png" alt="">
            </div>
            <h5 class="titulo">{{ datos.titulo }}</h5>
      </div>

      </a>
    </div>
</template>

<script>
export default {
    props:{
        datos:{
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>
a:hover{
    color: #100a21;
    text-decoration: none !important;
}

.titulo{
    text-decoration: none;
    color: #100a21;
}
.titulo:hover{
    text-decoration: none !important;
}
.ajuste{
    width: 90px;
    height: 90px;
}
</style>