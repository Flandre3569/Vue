<template>
  <div>
    <!-- 传数据给子组件 -->
    <tab-control :title="titles" @tabClick="changeContent"></tab-control>
    <h2>{{contents[contentIndex]}}</h2>
  </div>
</template>

<script>
  import TabControl from './TabControl.vue';
  export default {
    components: {
      TabControl
    },
    data() {
      return {
        titles:["衣服","鞋子","裤子"],
        contents:["衣服页面","鞋子页面","裤子页面"],
        contentIndex: 0
      }
    },
    methods: {
      changeContent(index) {
        this.contentIndex = index;
      }
    }
  }
</script>

<style scoped>

</style>