<template>
  <div>
    <input type="text" v-model="currentShow">
    <transition-group tag="ul" name="screenList" :css="false"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @leave="leave">
                      <!--使index可以通过dataset调用 -->
      <li v-for="(item,index) in showName" :key="item" class="numList" :data-index="index">
        {{item}}
      </li>
    </transition-group>
  </div>
</template>

<script>
  import gsap from 'gsap';
  export default {
    data() {
      return {
        names: ['acb','cac','jff','odj','mma','oaksdo'],
        currentShow:""
      }
    },
    computed: {
      showName() {
        return this.names.filter(item => item.indexOf(this.currentShow) !== -1)
      }
    },
    // 利用钩子函数配合js实现动画
    methods: {
      beforeEnter(el) {
        el.style.opacity=0;
        el.style.height=0;
      },
      enter(el,done) {
        gsap.to(el,{
          opacity: 1,
          height: "1.5em",
          delay:el.dataset.index * 0.2,
          onComplete: done
        })
      },
      leave(el,done) {
        gsap.to(el,{
          opacity: 0,
          height: 0,
          delay:el.dataset.index * 0.2,
          onComplete: done
        })
      }
    }
  }
</script>

<style scoped>
  /* css实现筛选效果
  .screenList-enter-from,
  .screenList-leave-to {
    animation: fadeInLeft;
  }
  .screenList-enter-to,
  .screenList-leave-from {
    animation: fadeOutRight;
  }
  .screenList-enter-active {
    animation: fadeInLeft 1s ease;
  }
  .screenList-leave-active {
    animation: fadeOutRight 1s ease;
  }
  .screenList-move {
    transition: transform 1s ease;
  } */
</style>