import Home from "./pages/Home.vue";
import Posts from "./pages/Posts.vue";
import Post from "./pages/Post.vue";
import Users from "./pages/Users.vue";
import CreateCategory from "./pages/CreateCategory.vue";
import Category from "./pages/Category.vue";
import CreatePost from "./pages/CreatePost.vue";
import EditPost from "./pages/EditPost.vue";
import NotFound from "./pages/NotFound.vue";

export const routes = [
  {
    path: "/",
    component: Home,
    meta: { title: "Главная" },
  },
  {
    path: "/user",
    component: Home,
    meta: { title: "Страница юзера" },
  },
  {
    path: "/all",
    component: Posts,
    meta: { title: "Блог" },
  },
  {
    path: "/category",
    component: Category,
    meta: { title: "Категория" },
  },
  {
    path: "/post",
    component: Post,
    meta: { title: "Пост" },
  },
  {
    path: "/users",
    component: Users,
    meta: { title: "Список мользователей" },
  },
  {
    path: "/create-category",
    component: CreateCategory,
    meta: { title: "Создание новой категории" },
  },
  {
    path: "/create-post",
    component: CreatePost,
    meta: { title: "Новый пост" },
  },
  {
    path: "/edit-post",
    component: EditPost,
    meta: { title: "Изменение поста" },
  },
  {
    path: "/:path(.*)",
    component: NotFound,
    meta: { title: "Упс!" },
  },
];
