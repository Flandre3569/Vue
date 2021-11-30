<template>
  <div>
    <home></home>
    <button @click="addName">添加名字</button>
  </div>
</template>

<script>
  import Home from './Home.vue';
  import {computed} from 'vue'; 
  export default {
    provide() {
      return {
        name: "MxXuan",
        age: 20,
        length: computed( ()=> this.names.length )
      }
    },
    components: {
      Home
    },
    data() {
      return {
        names:["abc","cba","def"]
      }
    },
    methods: {
      addName() {
        this.names.push("Xuan");
        console.log(this.names);
      }
    }
  }
</script>

<style scoped>

</style>