<template>
  <div>
    <h1>Props Validation</h1>
    <h2>{{ props.fullName }}</h2>
    <h2>{{ props.age }}</h2>
  </div>
</template>

<script setup>
//basic validation
// const props = defineProps({
//   fullName: String,
//   age: Number,
// });

//complex validations
const props = defineProps({
  fullName: {
    type: String,
    required: true,
    default: "Other",
  },
  age: {
    type: Number,
    required: true,
    default: 20,
  },
});
</script>
