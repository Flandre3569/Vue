<template>
  <div class="tab-control">
    <!-- 遍历传过来的数组，并设定index，每次index等于点击的时候 -->
    <div v-for="(title,index) in title" :key="title" 
         :class="{active: contentIndex === index}"
         class="tab-control-content"
         @click="selectGoods(index)"
         > 
    <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    // 传数据到父组件中
    emits:["tabClick"],
    // 将数据从父组件传过来
    props: {
      title: {
        type:Array,
        default() {
          return []
        }
      }
    },
    // 设定本组件数据
    data() {
      return {
        contentIndex: 0
      }
    },
    // 编写功能实现
    methods: {
      selectGoods(index) {
        this.contentIndex = index;
        this.$emit("tabClick",index);
      },
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
  }
  .tab-control-content {
    flex: 1;
    text-align: center;
    cursor: pointer;
  }
  .tab-control-content.active {
    color:red;
  }
</style>