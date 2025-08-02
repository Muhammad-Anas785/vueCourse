<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToRoute = () => {
  router.push("/");
};
</script>

<template>
  <div>
    <h2>404 Page</h2>
    <h1>Not Found</h1>
    <button @click="goToRoute">Go To Route</button>
  </div>
</template>
