<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Aside from "./components/Aside.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Nav,
    Aside,
    Footer,
  },
};
</script>

<!-- Где-то у тебя шаблон сверху, а здесь снизу. Лучше единый стиль сохранять -->

<template>
  <Header />
  <Nav />
  <main>
    <router-view />
  </main>
  <Aside />
  <Footer />
</template>
