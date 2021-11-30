<template>
  <div class="app">
    <button @click="isShow = !isShow">toggle</button><br>
    <transition name="btn" class="title" appear="true" mode="out-in" 
    enter-active-class="animate__animated animate__lightSpeedInLeft"
    leave-active-class="animate__animated animate__lightSpeedOutRight">
      <h2 v-if="isShow">hello world</h2>
      <h2 v-else>你好，MxXuan</h2>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>
  .app {
    width: 300px;
    margin: 0 auto;
  }
  .title {
    display: inline-block;
  }
  /* .btn-enter-active {
    animation:rollIn 1s ease;
  }
  .btn-leave-active {
    animation:rollOut 1s ease;
  } */
</style>