<template>
  <div>
    <h2>{{fullName}}</h2>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<script>
  import {ref,computed} from 'vue'
  export default {
    setup() {
      const firstName = ref("kobe");
      const lastName = ref("bryant");
      //传入一个getter函数
      // computed的返回值是一个ref对象 
      // const fullName = computed(() => firstName.value + " " + lastName.value);

      // 用法2：传入一个对象，对象包含getter/setter
      const fullName = computed({
        get: () => firstName.value + " " + lastName.value,
        set(newValue) {
          const names = newValue.split(" ");
          firstName.value = names[0];
          lastName.value = names[1];
        }
      });

      const changeName = () => {
        fullName.value = "Mx Xuan";
      }

      return {
        fullName,
        changeName
      }
    }
  }
</script>

<style scoped>

</style>