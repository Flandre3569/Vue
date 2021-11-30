<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="changeMessage" ref="title" value="按钮">按钮</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "hello world"
      }
    },
    methods: {
      changeMessage() {
        this.message = "你好，世界";
      }
    },
    beforeCreate() {
      console.log("home beforeCreated");
    },
    created() {
      console.log("home created");
    },
    beforeUpdate() {
      console.log("home beforeUpdated");
    },
    updated() {
      console.log(this.$refs.title.value);
      console.log("home updated");
    },
    beforeUnmount() {
      console.log("home beforeUnmount");
    },
    unmounted() {
      console.log("home unmounted");
    }
  }
</script>

<style scoped>

</style>