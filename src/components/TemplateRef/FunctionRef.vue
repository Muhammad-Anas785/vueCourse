<template>
  <div>
    <h1>Function Ref</h1>
    <h2 :ref="myFuncRef">Initial Text Value by Ref</h2>
  </div>
</template>

<script setup>
const myFuncRef = (el) => {
  console.log(el.textContent);
  el.textContent = 'change text content'
  el.style.color = 'red'
};
</script>
