<template>
  <q-page class="flex flex-start relative-position">
      <div v-if="!loading" class="q-pa-md row items-start q-gutter-md home">
        <div v-for="(post, index) in posts" class="col" :key="index">
          <post-list-item :post="post"></post-list-item>
        </div>
      </div>

      <loading-icon :loading="loading"></loading-icon>
  </q-page>
</template>

<script setup>
import PostService from "@/service/PostService";
import {ref} from "vue";
import LoadingIcon from "@/components/LoadingIcon";
import PostListItem from "@/components/PostListItem";

const posts = ref([]);
const loading = ref(true);

PostService.getPosts().then((response) => {
  posts.value = response.data;
  console.log(response.data);
  loading.value = false;
})
    .catch(err => {
      console.log(err);
      loading.value = false;
    })

</script>

<style scoped lang="scss">
  .home {
    padding: 20px;
    flex-wrap: wrap;
  }
</style>