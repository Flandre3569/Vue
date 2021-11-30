<template>
  <div>
   <nav-bar>
      <template v-slot:left>
        <span>左边的div</span>
      </template>
      <template #center>
        <span>中间的div</span>
      </template>
      <template v-slot:right>
        <span>右边的div</span>
      </template>
   </nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'
  export default {
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>