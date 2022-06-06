<template>
  <q-card class="my-card relative-position">
    <thumbnail-image :image-bytes="props.post.file"></thumbnail-image>

    <q-card-section>
      <div class="text-h6">{{ props.post.title }}</div>
      <div class="text-subtitle2">{{ props.post.date }}</div>
    </q-card-section>

    <q-card-actions class="navigation-button">
      <q-btn flat class="button" @click="navigateToPostDetails">Go to post details</q-btn>
    </q-card-actions>

  </q-card>
</template>

<script setup>
import ThumbnailImage from "@/components/ThumbnailImage";
import {defineProps} from "vue";
import {useRouter} from 'vue-router';

const props = defineProps(['post']);
const router = useRouter();

function navigateToPostDetails() {
  router.push({name: 'Post', params: {rowKey: props.post.rowKey}})
}


</script>

<style scoped>
.my-card {
  width: 240px;
  height: auto;
  min-height: 400px;
}
.navigation-button {
  position: absolute;
  width: 240px;
  bottom: 10px;
}
.button {
  width: 100%;
  color: #027BE3;
}
</style>