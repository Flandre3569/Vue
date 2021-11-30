<template>
  <div>
    <home></home>
    <h2>{{age}}</h2>
    <button @click="changeAge">app中修改年龄</button>
  </div>
</template>

<script>
  import {ref,provide,readonly} from 'vue';
  import Home from './Home.vue'
  export default {
    components: {
      Home
    },
    setup() {
      const name = ref("MxXuan");
      const age = ref("18");

      // 配合readonly使子孙组件不能修改传过去的数据
      provide("name",readonly(name));
      provide("age",readonly(age));
      
      const changeAge = () => {
        age.value++;
      }

      return {
        age,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>