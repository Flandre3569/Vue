<template>
  <div>
    <h2>{{name}}---{{age}}</h2>
    <button @click="changeName">改变姓名</button>
    <button @click="changeAge">改变年龄</button>
  </div>
</template>

<script>
  import {watch,ref,reactive} from 'vue'
  export default {
    setup() {
      const name = ref("xiaobai");
      const age = ref(18);

      const changeName = () => name.value = "xiaolan";
      const changeAge = () => age.value++;

      // 只监听名字(监听也称为侦听)
      // watch(name,(newValue,oldValue) => {
      //   console.log("newValue:",newValue,"oldValue:",oldValue);
      // },{
      //   deep:true,
      //   immediate:true
      // });

      //监听数组,传入改变前的值和改变后的值
      watch([name,age],([newName,newAge],[oldName,oldAge]) => {
        console.log(newName,newAge,oldName,oldAge);
      },{
        // 设置深度监听和立即监听
        deep: true,
        immediate: true
      })

      return {
        name,
        age,
        changeName,
        changeAge
      }
    }
  }
</script>

<style scoped>

</style>