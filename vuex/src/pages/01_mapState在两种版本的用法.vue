<template>
  <div>
    <!-- 数组方式的展示 -->
    <h2>{{counter}}</h2>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{height}}</h2>

    <!-- 对象方式的展示 -->
    <!-- <h2>{{sCounter}}</h2>
    <h2>{{sName}}</h2> -->
  </div>
</template>

<script>
  import {computed} from 'vue'
  import {mapState,useStore} from 'vuex'
  import {useState} from '../hooks/useState'
  export default {
    //computed{
      // 数组写法
      // ...mapState(["counter","name","age","height"])
      
      // 对象写法,可以自定义名字
      // ...mapState({
      //   sCounter: state => state.counter,
      //   sName: state => state.name
      // })
    //}
      
      // compositionAPI写法
      setup() {
        // 使用了封装的useState的hook
        // const storeState = useState(["counter","name","age","height"]);

        // return {
        //   ...storeState
        // }
        
        // 正常写法:利用computed解析即可
        const store = useStore();
        const counter = computed(() => store.state.counter);
        const name = computed(() => store.state.name);
        const age = computed(() => store.state.age);
        const height = computed(() => store.state.height);

        return {
          counter,
          name,
          age,
          height
        }

      }


  }
</script>

<style scoped>

</style>