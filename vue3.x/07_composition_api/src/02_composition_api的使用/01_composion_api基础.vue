<template>
  <div>
    <ref :info="message"></ref>
  </div>
</template>

<script>
  import ref from './ref.vue'
  export default {
    components: {
      ref
    },
    data() {
      return {
        message: "hello world"
      }
    }

  }
</script>

<style scoped>

</style>