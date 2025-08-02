<script setup>
import NavBar from "@/routerComponents/NavBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div>
    <NavBar />
    <main>
      <RouterView/>
    </main>
  </div>
</template>
