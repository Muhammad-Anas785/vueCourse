<template>
  <div>
    <div v-if="toggle">
      <RenderFriends />
    </div>
    <button @click="toggleBtn">Toggle Friends</button>
  </div>
</template>

<script setup>
//defineAsyncComponent components ko jab hi load krta hai jab us component ki need hoti hai
//simple import se ham is component ko use kren ya na kren wo lazmi import krdeta hai jisse speed slow hoti hai

import { defineAsyncComponent, ref } from "vue";
// import RenderFriends from "./RenderFriends.vue";
const RenderFriends = defineAsyncComponent(() => import("./RenderFriends.vue"));
let toggle = ref(false);
const toggleBtn = () => {
  toggle.value = !toggle.value;
};
</script>
