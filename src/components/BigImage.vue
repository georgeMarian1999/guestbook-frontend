<template>
  <q-img
      :src="src"
      style="height: 200px; max-width: 100%"
  >
    <template v-slot:error>
      <div class="absolute-full flex flex-center bg-negative text-white">
        Post has no image
      </div>
    </template>
  </q-img>
</template>

<script setup>
  import {defineProps} from "vue";
  import {ref} from "vue";

  const props = defineProps(['imageBytes']);
  const src = ref("");
  function convertBytesToSrc(bytes) {
    src.value = "data:image/jpg;base64," + bytes;
  }
  convertBytesToSrc(props.imageBytes)
</script>

<style scoped lang="scss">

</style>