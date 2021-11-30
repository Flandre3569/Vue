<template>
  <div>
    <h2>当前的数字是：{{counter}}</h2>
    <counter-operation @add="addOne" @sub="subOne" @addNum="addNNum"></counter-operation>
  </div>
</template>

<script>
  import CounterOperation from './CounterOperation.vue';
  export default {
    components: {
      CounterOperation
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      addOne() {
        this.counter++;
      },
      subOne() {
        this.counter--;
      },
      addNNum(num) {
        this.counter += num;
      }
    }
  }
</script>

<style scoped>

</style>