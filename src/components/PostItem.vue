<template>
  <q-card class="post-card relative-position">
    <big-image :image-bytes="props.post.file"></big-image>

  <q-card-section>
    <div class="text-h6">{{ props.post.title }}</div>
    <div class="text-subtitle2">Date: {{ props.post.date }}</div>
  </q-card-section>

    <q-card-section class="q-pt-none" v-html="props.post.text">

    </q-card-section>

    <q-card-actions>
      <q-btn @click="deletePost">Delete review</q-btn>
    </q-card-actions>
</q-card>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";
import BigImage from "@/components/BigImage";
const props = defineProps(['post']);

const emit = defineEmits(['delete']);

function deletePost() {
  emit("delete", props.post.rowKey);
}

</script>

<style scoped lang="scss">
  .post-card {
    height: 100%;
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>