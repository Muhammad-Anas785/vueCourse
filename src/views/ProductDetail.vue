<script setup>
import { useRoute, useRouter } from "vue-router";

// defineProps(["id"]); <---  option 1 to fetching params

const route = useRoute(); //<---- option 2 to fetching params
const router = useRouter(); // <-- useRouter is for programmatic routing and useRoute is for fetching params
const goToBack = () => {
  router.back();
};
</script>

<template>
  <div>
    <h2>Product Detail</h2>
    <h3>Id: {{ route.params.id }}</h3>
    <button @click="goToBack">Back</button>
  </div>
</template>
