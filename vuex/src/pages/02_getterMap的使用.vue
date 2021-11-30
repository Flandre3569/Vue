<template>
  <div>
    <h2>{{$store.getters.totalPrice}}</h2>
    <hr>
    <h2>{{nameInfo()}}</h2>
    <h2>{{ageInfo()}}</h2>
    <h2>{{nameInfo()}}</h2>
  </div>
</template>

<script>
  import {useStore,mapGetters} from 'vuex'
  export default {
    setup() {
      const store = useStore();
      const getterMapFns = mapGetters(["nameInfo","ageInfo","heightInfo"]);

      return {
        ...getterMapFns
      }
    }
  }
</script>

<style scoped>

</style>