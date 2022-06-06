<template>
 <q-page class="add-review-form">
   <div style="text-align: center" class="row">
     <h4 class="col">Add a new review</h4>
   </div>
   <div class="row">
     <q-input
         class="col"
         standout
         ref="inputRef"
         v-model="title"
         label="Title"
         :rules="[val => !!val || 'Field is required']"
     />
     <q-file clearable class="col" style="margin-left: 15px" color="teal" filled v-model="image" label="Add photo">
       <template v-slot:prepend>
         <q-icon name="cloud_upload"/>
       </template>
     </q-file>
   </div>

   <div class="row" style="margin-top: 20px">
     <div class="col">
       Text:
     </div>
   </div>

   <div class="row" style="margin-top: 20px">
     <q-editor class="col" v-model="text" min-height="6rem" />
   </div>


   <div class="row" style="margin-top: 15px">
     <q-btn @click="addPost">Add post</q-btn>
   </div>

   <div class="row" style="margin-top: 15px">
     <q-linear-progress class="col" size="25px" :value="progress" color="accent">
       <div class="absolute-full flex flex-center">
         <q-badge color="white" text-color="accent" :label="progressLabel" />
       </div>
     </q-linear-progress>
   </div>

   <div v-if="successMessage.length !== 0" class="row" style="margin-top: 15px">
     <div class="row">
       {{successMessage}}
     </div>
   </div>
 </q-page>
</template>

<script setup>


import {computed, ref} from "vue";
import PostService from "@/service/PostService";

const title = ref('');
const text = ref('');

const image = ref(null);
const inputRef = ref(null)
const progress = ref(0);
const successMessage = ref('');

const progressLabel = computed(() => (progress.value).toFixed(2) + '%');

function addPost() {
  progress.value = 0;
  // if (inputRef.value || text.value.length === 0) {
  //   console.log(inputRef.value);
  //   return
  // }
  PostService.addPost(image.value, title.value, text.value, (event) => {
    progress.value = Math.round((100 * event.loaded) / event.total);
  })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        progress.value = 0;
        console.log(err);
      })
}

</script>

<style scoped lang="scss">
  .add-review-form {
    margin-left: 20px;
    margin-right: 20px;
  }
</style>