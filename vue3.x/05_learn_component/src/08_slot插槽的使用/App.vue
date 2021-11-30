<template>
  <div>
    <my-slot-cpn>
      <my-btn-cpn></my-btn-cpn>
    </my-slot-cpn>
  </div>
</template>

<script>
  import MySlotCpn from './MySlotCpn.vue';
  import MyBtnCpn from './MyBtnCpn.vue';
  export default {
    components: {
      MySlotCpn,
      MyBtnCpn
    }
  }
</script>

<style scoped>

</style>