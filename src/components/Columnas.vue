<template>
  <div class="table" :class="{ 'reverse': reverse }">
    <div class="column column-1" :class="{ 'centrar': center1 }">
      <slot name="col1"></slot>
    </div>
    <div class="column column-2" :class="{ 'centrar': center2 }">
      <slot name="col2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      dafault: false
    },
    center1: {
      type: Boolean,
      dafault: false
    },
    center2: {
      type: Boolean,
      dafault: false
    }    
  }
};
</script>

<style lang="scss">

.table {
  display: flex;
  background-color: #f5f5;
}

.column {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  background-color: #f5f5;
}

.column-1 {
  flex-basis: 95%;
  background-color: #FFFFFF;
  margin: 0 10px;
}

.column-2 {
  flex-basis: 25%;
  background-color: #FFFFFF;
  margin: 0 10px;
}

.reverse {
  flex-direction: row-reverse;
}


</style>
