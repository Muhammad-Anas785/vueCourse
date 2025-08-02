<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToBack = () => {
  router.back();
};
</script>

<template>
  <div>
    <h2>About</h2>
    <button @click="goToBack">Back</button>
  </div>
</template>
