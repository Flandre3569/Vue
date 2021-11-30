<template>
  <div>
    <!-- 第一种传递过去的方式 -->
    <show-message title="我是标题" content="我是内容"></show-message>
    <!-- 利用v-bind进行传递的方式，利用data -->
    <show-message :title="title" :content="content"></show-message>
    <!-- 第三种传递方式，利用data中的对象 -->
    <show-message :title="message.title" :content="message.content"></show-message>
    <!-- 语法糖写法 -->
    <show-message v-bind="message"></show-message>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue'
  export default {
    components: {
      ShowMessage,
    },
    data() {
      return {
        title: "我是标题2",
        content: "我是内容2",
        message: {
          title: "我是标题3",
          content: "我是内容3",
        }
      }
    }
  }
</script>

<style scoped>

</style>