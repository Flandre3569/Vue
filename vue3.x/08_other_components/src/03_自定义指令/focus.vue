<template>
  <div>
    <input type="text" v-focus>
  </div>
</template>

<script>
  export default {
    // 自定义focus指令，使input一加载遍获取焦点
    directives: {
      focus: {
        mounted(el,bindings,vnode,preVnode) {
          console.log("focus mounted");
          console.log(el,bindings,vnode,preVnode)
          el.focus();
        }
      }
    }
  }
</script>

<style scoped>

</style>