<template>
  <div>
    <h2 v-format-div="{ color: 'red', size: 44 }">Custom Directive Text</h2>
    <h2 v-style-heading:orange>This is switch cases div</h2>
    <h2 v-style-heading:pink>This is switch cases div</h2>
    <h2 v-style-heading>This is switch cases div</h2>
  </div>
</template>

<script setup>
const vFormatDiv = {
  mounted: (el, binding) => {
    el.style.color = binding.value.color;
    el.style.fontSize = `${binding.value.size}px`;
  },
};
const vStyleHeading = {
  mounted: (el, binding) => {
    switch (binding.arg) {
      case "orange":
        el.style.color = "orange";
        break;
      case "pink":
        el.style.color = "pink";
        break;
      default:
        el.style.color = "brown";
        break;
    }
  },
};
</script>
