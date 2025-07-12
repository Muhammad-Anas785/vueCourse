<template>
  <div>
    <h1>{{ props.name }}</h1>
    <h1>{{ props.age }}</h1>
  </div>
</template>

<script setup>
let props = defineProps(["name", "age"]);
</script>
