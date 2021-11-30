<template>
  <div>
    <home></home>
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import Home from './pages/Home.vue'
  export default {
    components: {
      Home
    },
    methods: {
      increment() {
        this.$store.commit("increment");
      },
      decrement() {
        this.$store.commit("decrement");
      }
    }
  }
</script>

<style scoped>

</style>
