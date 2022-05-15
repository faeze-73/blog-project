<template>
  <my-nav :page="currentPage" @changePage="currentPage = $event"></my-nav>

  <component :is="currentPage"></component>

  <my-footer></my-footer>
</template>

<script>
import Nav from "./components/layouts/Nav.vue";
import Footer from "./components/layouts/Footer.vue";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    "my-nav": Nav,
    "my-footer": Footer,
    'home': defineAsyncComponent(() => import("./components/Pages/Home.vue")),
    'contact': defineAsyncComponent(() => import("./components/Pages/contact.vue")),
    'about': defineAsyncComponent(() => import("./components/Pages/about.vue")),
  },
  data() {
    return {
      currentPage: "home",
    };
  },
};
</script>
