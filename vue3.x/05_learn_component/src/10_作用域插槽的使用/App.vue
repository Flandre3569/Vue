<template>
  <div>
    <show-name :names="names">
      <template v-slot="slotProps">
        <button>
          {{slotProps.item}}---{{slotProps.index}}
        </button>
      </template>
    </show-name>
  </div>
</template>

<script>
  import ShowName from './ShowName.vue';
  export default {
    components: {
      ShowName
    },
    data() {
      return {
        names: ["MxXuan","james","MaYun","Uzi"]
      }
    }
  }
</script>

<style scoped>

</style>