<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
  }
  .left,.right {
    width: 80px;
    height: 44px;
    background-color: aqua;
  }
  .center {
    flex: 1;
    height: 44px;
    background-color: bisque;
  }

</style>