<template>
  <the-nav :page="currentPage" @changePage="currentPage = $event"></the-nav>

  <component :is="currentPage"></component>

  <the-footer></the-footer>
</template>

<script>
import TheNav from "./components/layouts/TheNav.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    TheNav,
    TheFooter,
    'home': defineAsyncComponent(() => import("./components/pages/HomePage.vue")),
    'contact': defineAsyncComponent(() => import("./components/pages/ContactPage.vue")),
    'about': defineAsyncComponent(() => import("./components/pages/AboutPage.vue")),
  },
  data() {
    return {
      currentPage: "home",
    };
  },
};
</script>
