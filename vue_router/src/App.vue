<template>
  <div>
    <router-link to="/home" v-slot="props">
      <button>首页</button>
      <!-- 获取props的各项属性值 -->
      <p>{{props.href}}</p>
      <p>{{props.navigate}}</p>
      <p>{{props.route}}</p>
      <p>{{props.isActive}}</p>
      <p>{{props.isExactActive}}</p>
    </router-link>
    <router-link to="/about"><button>关于</button></router-link>
    <router-link to="/User/MxXuan"><button>用户</button></router-link>
    <router-link to="/Category"><button>目录</button></router-link>
    <router-link to="/login"><button>登录</button></router-link>

    <button @click="jumpToAbout">关于</button>
  

<!-- 给切换添加动画效果，配合transition和获取props完成 -->
    <router-view v-slot="props">
      <transition name="toggleAnimation" mode="out-in">
        <!-- 对显示过的设置缓存 -->
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
  import {useRouter} from 'vue-router'
  import Home from './pages/Home.vue'
  export default {
    components: {
      Home
    },
    setup() {
      const router = useRouter();
      const jumpToAbout = () => {
        router.push("/about")
      };

      return {
        jumpToAbout
      }
    }
  }
</script>

<style scoped>
  .toggleAnimation-enter-from,
  .toggleAnimation-leave-to {
    opacity: 0;
  }

  .toggleAnimation-enter-to,
  .toggleAnimation-leave-from {
    opacity: 1;
  }
  .toggleAnimation-enter-active,
  .toggleAnimation-leave-active {
    transition: all 0.5s ease;
  }
</style>