<template>
  <div>
    <h2>About组件</h2>
    <span>{{name}}---{{age}}</span>
    <button @click="pageClick">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name:"about",
    props: {
      name: {
        type:String,
        default:""
      },
      age: {
        type:Number,
        default:0
      }
    },
    data() {
      return {
        counter:0
      }
    },
    methods: {
      pageClick() {
        this.counter++;
      }
    }
  }
</script>

<style scoped>

</style>