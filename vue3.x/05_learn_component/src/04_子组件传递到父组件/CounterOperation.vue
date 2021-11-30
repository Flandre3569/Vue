<template>
  <div>
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <input type="text" v-model.number="num">
    <button @click="incrementN()">+N</button>
  </div>
</template>

<script>
  export default {
    emit:["add","sub","addNum"],
    data() {
      return {
        num:0
      }
    },
    methods: {
      increment() {
        this.$emit("add");
      },
      decrement() {
        this.$emit("sub");
      },
      incrementN() {
        this.$emit("addNum",this.num);
      }
    }
  }
</script>

<style scoped>

</style>