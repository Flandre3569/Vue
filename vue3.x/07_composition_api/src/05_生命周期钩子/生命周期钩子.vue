<template>
  <div>
    <h2>{{counter}}</h2>
    <button @click="changeNum">修改数据</button>
  </div>
</template>

<script>
  import {onMounted,onUpdated,onUnmounted,ref} from 'vue'
  export default {
    setup() {
      const counter = ref(100);
      const changeNum = () => {
        counter.value++;
      }
      // 在setup函数中编写生命周期函数
      onMounted(() => {
        console.log("onMounted函数")
      });
      onUpdated(() => {
        console.log("onUpdated函数");
      });
      onUnmounted(() => {
        console.log("onUnmounted函数");
      });

      return {
        counter,
        changeNum
      }
    }
  }
</script>

<style scoped>

</style>