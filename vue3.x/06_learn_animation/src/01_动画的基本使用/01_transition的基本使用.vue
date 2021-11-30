<template>
  <div>
    <button @click="isShow = !isShow">toggle</button>
    <transition name="btn">
      <h2 v-if="isShow">hello world</h2>
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
/* 实现淡入淡出动画 */
  .btn-enter-from,
  .btn-leave-to {
    opacity: 0;
  }

  .btn-enter-to,
  .btn-leave-from {
    opacity: 1;
  }

  .btn-enter-active,
  .btn-leave-active {
    transition: opacity 2s ease;
  }
</style>