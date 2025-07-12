<script setup>
import { ref } from "vue";
import LifeCycleHooks from "./lifeCycleHooks.vue";
let showHide = ref(true);
</script>

<template>
  <div>
    <LifeCycleHooks v-if="showHide" />
    <button @click="showHide = !showHide">Show/Hide</button>
  </div>
</template>
