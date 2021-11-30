<template>
  <div>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  import emitter from './utils/EventBus.js';
  export default {
    methods: {
      btnClick() {
        console.log("About按钮的点击");
        emitter.emit("info",{name: "MxXuan",age: 18})
      }
    }
  }
</script>

<style scoped>

</style>