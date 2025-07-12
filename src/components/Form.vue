<template>
  <div>
    <form @submit="submitHandler">
      <input type="text" placeholder="enter name" />
      <input type="text" placeholder="enter father name" />
      <input type="submit" />
    </form>

    <!-- Event With Params -->

    <button @click="showMessage('This is my mesage')">Show Message</button>
  </div>
</template>
<script setup>
const submitHandler = (e) => {
  e.preventDefault();
  alert("Valid Creds");
};
const showMessage = (mesage) => {
  alert(mesage);
};
</script>
