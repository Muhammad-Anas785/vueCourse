<template>
  <div>
    <h1>{{ message }}</h1>
    <input v-model="inputText" placeholder="Enter the text" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

let message = ref("yellow world");
let inputText = ref("");

watch(inputText, (newVal, oldVal) => {
  message.value = `You typed ${newVal} and old value is ${oldVal} `;
});
</script>
