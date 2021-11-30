<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  import {title} from './mixins/title.js'
  export default {
    mixins:[title]
  }
</script>

<style scoped>

</style>