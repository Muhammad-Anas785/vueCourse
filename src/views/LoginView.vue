<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToHome = ()=>{
  router.push('/')
}

</script>


<template>
  <div>
    <h2>Login Page</h2>
    <button @click="goToHome">Login</button>
  </div>
</template>
