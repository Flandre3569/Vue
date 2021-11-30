<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <button @click="changeAge">home中修改年龄</button>
  </div>
</template>

<script>
  import {inject} from 'vue'
  export default {
    setup() {
      // 接收高阶组件传递的信息,一般情况下如果是父组件传递的数据,使用props接收,
      // 这里演示inject和provide的用法,所以用inject接收      const name = inject("name");
      const age = inject("age");

      const changeAge = () => age.value++;
      return {
        name,
        age,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>