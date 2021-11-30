<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    methods: {
      increment() {
        this.$store.dispatch("incrementAction")
      }
    },
    // mounted() {
    //   axios.get("")
    // }
  }
</script>

<style scoped>

</style>