<template>
  <div>
    <h2>Home</h2>

    <router-view></router-view>
    <router-link to="/home/shops">商品</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/movement">动态</router-link>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>