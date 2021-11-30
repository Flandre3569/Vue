<template>
  <div class="app">
    <button @click="isShow = !isShow">toggle</button><br>
    <transition name="btn" class="title">
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
  .app {
    width: 300px;
    margin: 0 auto;
  }
  /* 块级元素转换为行内块元素 */
  .title {
    display: inline-block;
  }
  /* 通过animation实现动画效果 */
  .btn-enter-active {
    animation: animationChange 1s ease;
  }
  .btn-leave-active {
    animation: animationChange 1s ease reverse;
  }

/* 通过帧动画和缩放实现 显隐切换效果 */
  @keyframes animationChange {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>