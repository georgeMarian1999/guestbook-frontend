<template>
 <q-page class="relative-position">
   <q-icon @click="backHome" class="back-icon" size="2rem" name="arrow_back"></q-icon>
   <div v-if="!isLoading" class="row">
     <div class="col">
       <PostItem @delete="deletePost" v-if="post" :post="post"></PostItem>
     </div>
   </div>
   <loading-icon :loading="isLoading"></loading-icon>
 </q-page>
</template>

<script setup>
import {useRouter, useRoute} from "vue-router";
import PostService from "@/service/PostService";
import {ref} from "vue";
import LoadingIcon from "@/components/LoadingIcon";
import PostItem from "@/components/PostItem";

const route = useRoute();
const router = useRouter();
const post = ref();
const rowKey = route.params.rowKey;
const isLoading = ref(true);
PostService.getPost(rowKey)
    .then(response => {
      isLoading.value = false;
      post.value = response.data;
    })
    .catch(err => {
      isLoading.value = false;
      console.log(err);
    })


function backHome() {
  router.push({name: 'Home'});
}

function deletePost(rowKey) {
  console.log(rowKey);
  isLoading.value = true;
  PostService.deletePost(rowKey)
      .then(res => {
        console.log(res)
        router.push({name: 'Home'});
      })
      .catch(err => {
        alert(err);
        console.log(err);
      })
}
</script>

<style scoped lang="scss">
  .back-icon {
    position: absolute;
    top: 15px;
    left: 15px;
    cursor: pointer;
  }
</style>