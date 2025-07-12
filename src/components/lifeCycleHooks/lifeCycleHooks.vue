<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  ref,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
} from "vue";

let message = ref("Life Cycle Message");
const changeMessage = () => {
  message.value = "Hey World!";
};

onBeforeMount(() => {
  console.log("On before mount call ");
});
onMounted(() => {
  console.log("on Mounted call");
});
onBeforeUpdate(() => {
  console.log("on before update call");
});
onUpdated(() => {
  console.log("on updated call");
});
onBeforeUnmount(() => {
  console.log("on before unmount call");
});
onUnmounted(() => {
  console.log("on unmounted call");
});
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Change Message</button>
  </div>
</template>
