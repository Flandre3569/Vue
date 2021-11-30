<template>
  <div>
    <button @click="chanegInfo">按钮</button>
  </div>
</template>

<script>
  import {reactive,ref,readonly} from 'vue'
  export default {
    setup() {
      const reactiveInfo = reactive({
        name:"MxXuan"
      })    
      // 使用只读api进行包裹,使其变为不可修改状态
      const readonlyInfo = readonly(reactiveInfo);

      const chanegInfo = () => {
        readonlyInfo.value = "X";
        console.log(reactiveInfo);
      }

      return {
        readonlyInfo,
        chanegInfo
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>