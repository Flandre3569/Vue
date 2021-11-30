<template>
  <div class="app">
    <button @click="isShow = !isShow">按钮</button><br>
    <transition name="title" class="title" 
                @enter="enter"
                @leave="leave"
                
    appear="true">
      <h2 v-if="isShow">hello world</h2>
    </transition>
    
  </div>
</template>

<script>
  import gsap from 'gsap';
  export default {
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      enter(el,done) {
        gsap.from(el,{
          scale:0,
          x:200,
          onComplete: done
        })
      },
      leave(el,done) {
        gsap.to(el,{
          scale:0,
          x:200,
          onComplete:done
        })
      }
    }
  }
</script>

<style scoped>
  .app {
    width:300px;
    margin: 0 auto;
  }
  .title {
    display: inline-block;
  }
</style>