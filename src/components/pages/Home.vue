<template>
  <my-header></my-header>
    <!-- Page content -->
  <div class="container">
    <div class="row">
      <!-- Blog entries -->
      <post-list></post-list>
      <my-sidebar></my-sidebar>
    </div>
  </div>
</template>

<script>
import Header from "./../layouts/Header.vue";
import PostList from "./../PostList.vue";
import Sidebar from "./../layouts/Sidebar.vue";
export default {
  components: {
    "my-header": Header,
    "my-sidebar": Sidebar,
    PostList
  } 
}
</script>

<style>

</style>