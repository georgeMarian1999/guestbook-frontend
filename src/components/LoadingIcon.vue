<template>
  <q-circular-progress
      v-if="props.loading"
      indeterminate
      size="45px"
      :thickness="1"
      color="grey-8"
      track-color="lime"
      class="q-ma-md loading-icon"
  />
</template>

<script setup>
import {defineProps} from "vue";
const props = defineProps(['loading'])
</script>

<style scoped>
  .loading-icon {
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100px;
  }
</style>