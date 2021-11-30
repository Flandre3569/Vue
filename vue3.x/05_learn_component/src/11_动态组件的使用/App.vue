<template>
  <div>
    <button v-for="item in tabs" :key="item"
            :class="{active:Contents === item}"
            @click="changeClick(item)"
            >{{item}}</button>

<!-- 用动态组件的方式实现切换 -->
<!-- 用keep-alive包裹后,会产生缓存,被切换的组件就不会自动销毁了 -->
<keep-alive include="home,content,about">
  <component :is="Contents" name="MxXuan" :age="18"></component>
</keep-alive>
    


<!-- 用if和esle if的方法实现切换 -->
    <!-- <template v-if="Contents === 'Home'">
      <home></home>
    </template>
    <template v-else-if="Contents === 'About'">
      <about></about>
    </template>
    <template v-else>
      <content></content>
    </template> -->
    
    
  </div>
</template>

<script>
  import Home from './Home.vue';
  import About from './About.vue';
  import Content from './Content.vue';

  export default {
    components: {
      Home,
      About,
      Content
    },
    data() {
      return {
        tabs:["Home","About","Content"],
        Contents:"Home",
      }
    },
    methods: {
      changeClick(item) {
        this.Contents = item;
      },
    }  
  }
</script>

<style scoped>
  .active {
    color: red;
  }
</style>