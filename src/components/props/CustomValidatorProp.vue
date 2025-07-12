<template>
  <div>
    <h1>Custom Validator</h1>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ password }}</h2>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    validator: (propValue) => ["anas", "b", "c"].includes(propValue)

  },
  age: {
    type: Number,
    validator: (propValue) => propValue >= 18 ? true : false
  },
  password: {
    type: String,
    validator: (propValue) => propValue.length >= 10


  },
});
</script>
