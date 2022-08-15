import Home from "./pages/home/Home.vue";


import AllPosts from "./pages/posts/Posts.vue"
import Users from "./pages/users/Users.vue"
import SingleUser from "./pages/single-user/SingleUser.vue"
import Category from "./pages/category/Category.vue"
import CreateCategory from "./pages/create-category/CreateCategory.vue"
import CreatePost from "./pages/create-post/CreatePost.vue"

import Account from "./pages/account/Account.vue";
import NotFound from "./pages/not-found/NotFound.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "Главная" },
  },
  {
    path: "/posts",
    component: AllPosts,
    meta: { title: "Лента постов" },
  },
  {
    path: "/posts/:id",
    component: Category,
    meta: { title: "Категория" },
  },
  {
    path: "/users",
    component: Users,
    meta: { title: "Список пользователей" },
  },
  {
    path: "/account",
    component: Account,
    meta: { title: "Мой профиль" },
  },
  {
    path: "/users/me",
    component: SingleUser,
    meta: { title: "Описание пользователя" },
  },
  {
    path: "/category/:id",
    component: Category,
    meta: { title: "Список постов из категории" },
  },
  {
    path: "/create-category",
    component: CreateCategory,
    meta: { title: "Новая категория" },
  },
  {
    path: "/create-post",
    component: CreatePost,
    meta: { title: "Новый пост" },
  }
];

