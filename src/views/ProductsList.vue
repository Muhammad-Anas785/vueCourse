<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const products = [
  { id: 1, name: "laptop" },
  { id: 2, name: "computer" },
  { id: 3, name: "mouse" },
];

const gotoRoute = (id) => {
  // router.push(`/product-detail/${id}`); <== ye URL manually string bnana prh rha hai named route main ye sb nhi krna prega
  router.push({ name: "product-detail", params: { id: id } }); //<--- Jab tumhare paas koi dynamic route ho (jisme :id, :slug, :username ho), to tum pure URL manually string ke roop mein build karne ke bajaye, uska name use karo — aur params pass kar do.
};
</script>

<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id" @click="gotoRoute(product.id)">
        {{ product.name }}
      </li>

      <!-- <li v-for="product in products" :key="product.id">   <=====  2nd way to use routing
        <RouterLink :to='`/products/${product.id}`' >
          {{ product.name }}
        </RouterLink>
      </li> -->
    </ul>
  </div>
</template>
