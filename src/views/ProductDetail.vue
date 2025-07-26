<script setup>
import { useRoute } from "vue-router";

// defineProps(["id"]);

const route = useRoute();
</script>

<template>
  <div>
    <h2>Product Detail</h2>
    <h3>Id: {{ route.params.id }}</h3>
  </div>
</template>
