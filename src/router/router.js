import AdminLayout from "@/Layouts/AdminLayout.vue";
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import AdminDashboard from "@/views/AdminDashboard.vue";
import AdminUsers from "@/views/AdminUsers.vue";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ProductsList from "@/views/ProductsList.vue";
// import ProductDetail from "@/views/ProductDetail.vue";
// import ProductsList from "@/views/ProductsList.vue";

import { createRouter, createWebHistory } from "vue-router";

// const routes = [
//   { path: "/", name: "home", component: HomeView },
//   { path: "/about", name: "about", component: () => import("@/views/AboutView.vue") }, // <-- Lazy Loading = Isse har route ka code separately load hota hai, jisse app fast banta hai = good UX = professional 👨‍💻
//   { path: "/products", name: "products", component: ProductsList },
//   { path: "/product-detail/:id", name: "product-detail", component: ProductDetail, props: true }, // <- defining params :id in path like this
// ];

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "", component: HomeView },
      {
        path: "/about",
        component: () => import("@/views/AboutView.vue"),
        beforeEnter: (to, from, next) => {
          // ^--- beforeEnter ek specific route k liye hota hai agr hamen use condition ki base pr route krna ho
          const isVIP = true;
          if (isVIP) next();
          else next("/");
        },
        meta: {
          title: "About us",
        },
      },
      { path: "/products", component: ProductsList, meta: { title: "Products" } },
      {
        path: "/product-detail/:id",
        name: "product-detail",
        component: ProductDetail,
        meta: { title: "Product Detail" },
      },
      { path: "/login", component: LoginView, meta: { title: "Login" } },
      { path: "/old-about", redirect: "about" },
      {
        path: "/vip",
        redirect: () => {
          const isVIP = true;
          if (isVIP) {
            return "/admin";
          } else {
            return "/";
          }
        },
      },
    ],
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        component: AdminDashboard,
        meta: {
          requiresAuth: true,
          role: "admin",
          title: "Admin",
          meta: { title: "Admin Dashboard" },
        },
      },
      { path: "users", component: AdminUsers, meta: { title: "User" } },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundView",
    component: () => import("@/views/NotFoundView.vue"),
    meta: { title: "Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// /admin
router.beforeEach((to, from, next) => {
  const isAuthenticated = false;
  const defaultTitle = "Gorelo";
  document.title = to.meta.title || defaultTitle;
  // 🔐 Agar route auth maangta hai aur user login nahi hai
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next("/login");
  }

  // 🛑 Agar login page pe ja rahe ho, lekin already logged in ho
  if (to.path === "/login" && isAuthenticated) {
    return next("/admin");
  }

  next(); // <== allow routes
});

export default router;
