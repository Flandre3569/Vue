<template>
  <div>
    <button @click="increment">按钮</button>
    <h2>{{info}}</h2>
    <h2>{{counter}}</h2>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  import { ref } from 'vue'
  export default {
    props: {
      info: {
        type: String,
      }
    },
    setup() {
      // 使用ref实现
      const counter = ref(100);

      const increment = () => {
        counter.value++;
      }
      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>