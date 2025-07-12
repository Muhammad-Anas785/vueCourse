<template>
  <div>
    <button @click="currentTab = 'HTMLcomp'">HTML</button>
    <button @click="currentTab = 'CSScomp'">CSS</button>
    <button @click="currentTab = 'JScomp'">JavaScript</button>
    <component :is="tabs[currentTab]"></component>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CSScomp from "./CSScomp.vue";
import HTMLcomp from "./HTMLcomp.vue";
import JScomp from "./JScomp.vue";

const tabs = {HTMLcomp, CSScomp, JScomp};
const currentTab = ref('HTMLcomp');
</script>
