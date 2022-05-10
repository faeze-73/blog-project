<template>
  <my-nav></my-nav>
  <my-header></my-header>

  <!-- Page content -->
  <div class="container">
    <div class="row">
      <!-- Blog entries -->
      <post-list></post-list>
      <my-sidebar></my-sidebar>
    </div>
  </div>

  <my-footer></my-footer>
</template>

<script>
import Header from "./components/layouts/Header.vue";
import Nav from "./components/layouts/Nav.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import Footer from "./components/layouts/Footer.vue";
import PostList from "./components/PostList.vue";

export default {
  components: {
    "my-nav": Nav,
    "my-header": Header,
    "my-sidebar": Sidebar,
    "my-footer": Footer,
    PostList,
  },
};
</script>
