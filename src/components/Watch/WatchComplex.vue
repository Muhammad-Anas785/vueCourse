<template>
  <div>
    <h1>Watcher Object</h1>
    <h2>{{ state.username }}</h2>
    <button @click="state.username = 'anas taimoori'">Change Name</button>
  </div>
</template>

<script setup>
//watcher mein koi specifix value nhi jaati pura object pass hota hai
//watcher mein new value aur old value ko separate krny k liye getter function pass hota hai
//

import { reactive, watch } from "vue";

let state = reactive({
  username: "anas",
});

watch(
  () => state.username,
  (newVal, oldVal) => {
    console.log("new value: ", newVal);
    console.log("old value: ", oldVal);
  }
);
</script>
