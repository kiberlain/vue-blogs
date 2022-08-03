import Home from "./pages/Home.vue";


import AllPosts from "./pages/info-posts/InfoPosts.vue"
import Category from "./pages/category/Category.vue"

import NotFound from "./pages/NotFound.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "Главная" },
  },
  {
    path: "/all-posts",
    component: AllPosts,
    meta: { title: "Лента постов" },
  },
  {
    path: "/category",
    component: Category,
    meta: { title: "Категория" },
  },
  {
    path: "/category/:id",
    component: Category,
    meta: { title: "Категория" },
  }
];

