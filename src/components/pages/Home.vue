<template>
  <the-header></the-header>
    <!-- Page content -->
  <div class="container">
    <div class="row">
      <!-- Blog entries -->
      <post-list></post-list>
      <the-sidebar></the-sidebar>
    </div>
  </div>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import PostList from "./../PostList.vue";
import TheSidebar from "../layouts/TheSidebar.vue";
export default {
  components: {
    TheHeader,
    TheSidebar,
    PostList
  } 
}
</script>

<style>

</style>