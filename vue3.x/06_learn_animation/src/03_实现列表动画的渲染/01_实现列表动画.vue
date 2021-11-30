<template>
  <div>
    <button @click="addNum">增加数字</button>
    <button @click="delNum">删除数字</button>
    <button @click="shuffleNum">数字洗牌</button>
    <!-- 使用列表动画组件 -->
    <transition-group tag="p" name="numList">
      <span v-for="item in nums" :key="item" class="nums">{{item}}</span>
    </transition-group> 
  </div>
</template>

<script>
  import _ from 'lodash';
  export default {
    data() {
      return {
        nums: [0,1,2,3,4,5,6,7,8,9],
        currentNum: 10
      }
    },
    methods: {
      randomIndex() {
        return Math.floor(Math.random()*this.nums.length)
      },
      addNum() {
        this.nums.splice(this.randomIndex(),0,this.currentNum++)
      },
      delNum() {
        this.nums.splice(this.randomIndex(),1)
      },
      shuffleNum() {
        this.nums = _.shuffle(this.nums);
      }
    }
  }
</script>

<style scoped>
  .nums {
    margin-right: 10px;
    display: inline-block;
  }
  .numList-enter-from,
  .numList-leave-to {
    animation: fadeInUp;
  }
  .numList-enter-to,
  .numList-leave-from {
    animation: fadeInUp reverse;
  }
  /* 设置将消除元素脱离数据流，使其不再占位置，动画变可循序进行 */
  .numList-leave-active {
    position: absolute;
  }
  .numList-enter-active {
    animation: fadeInUp 1s ease;
  }
  .numList-leave-active {
    animation: fadeInUp 1s ease reverse;
  }
  /* 设置其他数字在移动时以动画形式循序进行 */
  .numList-move {
    transition: transform 1s ease;
  }
</style>