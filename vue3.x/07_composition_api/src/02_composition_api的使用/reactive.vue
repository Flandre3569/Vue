<template>
  <div>
    <button @click="increment">按钮</button>
    <h2>{{info}}</h2>
    <h2>{{state.counter}}</h2>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    props: {
      info: {
        type: String,
      }
    },
    setup() {
      const state = reactive({
        counter: 100
      });
      // 局部函数
      const increment = () => {
        state.counter++;
        console.log(state.counter);
      }

      return {
        state,
        increment
      }
    }
  }
</script>

<style scoped>

</style>