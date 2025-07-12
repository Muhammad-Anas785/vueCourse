<template>
  <div>
    <h1>Basic Ref</h1>
    <input type="text" placeholder="Enter Your Name" ref="myRef" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const myRef = ref("");
console.log(myRef.value);
onMounted(() => {
  console.log(myRef.value);
  myRef.value.focus();
  myRef.value.value = "anas";
});
</script>
