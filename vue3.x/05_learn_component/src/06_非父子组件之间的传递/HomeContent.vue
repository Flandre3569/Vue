<template>
  <div>
    <h2>{{message}}--{{name}}--{{age}}--{{length.value}}</h2>
  </div>
</template>

<script>
  export default {
    inject: ["name","age","length"],
    data() {
      return {
        message: "HomeContent",
      }
    }
  }
</script>

<style scoped>

</style>