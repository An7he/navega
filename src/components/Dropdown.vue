<template>
  <div @mouseover="onOver" @mouseleave="onLeave">
    <b-dropdown ref="dropdown" size="md" variant="link" toggle-class="text-decoration-none" no-caret>
      <template #button-content>
            <router-link :to="enlace" class="nav-link"><span>{{ nombre }}</span></router-link>
      </template> 
      <li>
        <router-link  v-for="(sub, i) in submenu" :key="i" :to="sub.enlace" class="nav-link">{{ sub.label }}</router-link>
      </li>
    </b-dropdown>
  </div>
</template>

<script>
  export default {
    name: "Dropdown",
    props:{
      nombre:  {
        type: String,
        default: ''
      },
      enlace:  {
        type: String,
        default: ''
      },
      submenu:  {
        type: Array,
        default: () => []
      }
    },
    methods: {
      onOver() {
        this.$refs.dropdown.visible = true;
      },
      onLeave() {
        this.$refs.dropdown.visible = false;
      }
    }
  }
</script>

<style>
.nav-link{
  font-weight: 500;
  color: #2c3e50;;
  display: block;
}

.nav-link:hover{
  color: #455463;
  background-color: #F3F3F3;
}
</style>
