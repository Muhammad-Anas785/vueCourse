<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const products = [
  { id: 1, name: "laptop" },
  { id: 2, name: "computer" },
  { id: 3, name: "mouse" },
];

const gotoRoute = (id) => {
  router.push(`/product-detail/${id}`);
};
</script>

<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id" @click="gotoRoute(product.id)">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>
