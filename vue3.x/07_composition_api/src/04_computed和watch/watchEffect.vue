<template>
  <div>
    <h2>{{name}}---{{age}}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
  import {ref,watchEffect} from 'vue'
  export default {
    setup() {
      const name = ref("MxXuan");
      const age = ref(18);
      // 使用watchEffect监听数据 自动收集依赖，每次加载自动调用一次
      const stop = watchEffect((onInvalidate) => {
        
        // 通过name和age两个变量发送网络请求
        onInvalidate(() => {
          // 在这个函数中清除额外的副作用
          // request.cancel();
          console.log("onInvalidate");
        })

        console.log("name:",name.value,"age:",age.value);
      });

      const changeName = () => name.value = "james";
      const changeAge = () => {
        age.value++
        if(age.value>25){
          stop();
        }  
      };

      return {
        changeName,
        changeAge,
        name,
        age
      }
    }
  }
</script>

<style scoped>

</style>