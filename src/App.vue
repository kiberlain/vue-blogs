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

<template>
  <Header />
  <Nav />
  <main>
    <router-view />
  </main>
  <Aside />
  <Footer />
</template>
