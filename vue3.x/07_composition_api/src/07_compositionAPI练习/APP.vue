<template>
  <div class="content">
    <div class="scroll">
      <div class="scrollX">scrollX:{{scrollXRef}}</div>
      <div class="scrollY">scrollY:{{scrollYRef}}</div>
    </div>

    <div class="mousePosition">
      <div class="mousePositionX">mousePositionX:{{mousePositionX}}</div>
      <div class="mousePositionY">mousePositionY:{{mousePositionY}}</div>
    </div>
    <h2>{{data}}</h2>
  </div>
</template>

<script>
  import useTitle from './hooks/useTitle'
  import useScrollPosition from './hooks/useScrollPosition'
  import useMousePosition from './hooks/useMousePosition'
  import useLocalStorage from './hooks/useLocalStorage'
  export default {
    setup() {
      const titleRef = useTitle("mx");
      setTimeout(() => {
        titleRef.value = "xxxxxx";
      },3000)

      const {scrollXRef,scrollYRef} = useScrollPosition();

      const {mousePositionX,mousePositionY} = useMousePosition();
      // 存储到本地内存
      // useLocalStorage("info","MxXuan");
      
      //在本地内存中获取info 
      const data = useLocalStorage("info");

      return {
        scrollXRef,
        scrollYRef,
        mousePositionX,
        mousePositionY,
        data
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 3000px;
    height: 5000px;
  }
  .scroll {
    position: fixed;
    right: 30px;
    bottom: 30px;
  }
  .mousePosition {
    position: fixed;
    right: 30px;
    bottom: 80px;
  }
</style>