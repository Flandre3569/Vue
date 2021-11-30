<template>
  <div>
    <async-category></async-category>
  </div>
</template>

<script>
// 非异步方式导入组件
  // import Category from './Category.vue';
  import {defineAsyncComponent} from 'vue';
  import loading from './loading.vue';
  // 函数方式导入异步组件（该方式较为常用）
  // const AsyncCategory = defineAsyncComponent(() => import('./Category.vue'));

  // 对象方式导入异步组件
  const AsyncCategory = defineAsyncComponent({
    loader: () => import('./Category.vue'),
    // 设置加载时显示的组件
    loadingComponent: loading,
    // 在加载时显示组件之前等待的时间，也就是如果两秒之内还没加载出来页面，才会显示loading
    delay: 2000
  })
  export default {
    components: {
      AsyncCategory
    }
  }
</script>

<style scoped>

</style>