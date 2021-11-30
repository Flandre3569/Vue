<template>
  <div>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  import emitter from './utils/EventBus.js';

  export default {
    data() {
      return {
        message: "hello world"
      }
    },
    created() {
      emitter.on("info",(info) => {
        console.log(info);
      }),
      emitter.on("*",(type,info) => {
        console.log("* listener:" ,type ,info)
      })
    }
  }
</script>

<style scoped>

</style>