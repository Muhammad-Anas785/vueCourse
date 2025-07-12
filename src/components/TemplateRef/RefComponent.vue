<template>
  <div>
    <ChildRef ref="myRef" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ChildRef from "./ChildRef.vue";

const myRef = ref(null);

onMounted(() => {
  console.log(myRef.value);
});
//Yahan onMounted mein child comp k refs arhy hain jo defineExpose se send kren hain
</script>
