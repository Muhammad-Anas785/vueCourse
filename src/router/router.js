import HomeView from "@/views/HomeView.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ProductsList from "@/views/ProductsList.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: () => import("@/views/AboutView.vue") }, // <-- Lazy Loading = Isse har route ka code separately load hota hai, jisse app fast banta hai = good UX = professional 👨‍💻
  { path: "/products", name: "products", component: ProductsList },
  { path: "/product-detail/:id", name: "product-detail", component: ProductDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
