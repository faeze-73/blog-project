<template>
  <the-header></the-header>
    <!-- Page content -->
  <div class="container">
    <div class="row">
      <!-- Blog entries -->
      <button @click="showModal">show Modal</button>
      <message-modal :active="activeModal" @close-modal="hideModal"></message-modal>
      <post-list></post-list>
      <the-sidebar></the-sidebar>
    </div>
  </div>
</template>

<script>
import TheHeader from "../layouts/TheHeader.vue";
import PostList from "../PostList.vue";
import TheSidebar from "../layouts/TheSidebar.vue";
import ModalMixin from "../../mixins/ModalMixin.js";

export default {
  components: {
    TheHeader,
    TheSidebar,
    PostList,
  },
  mixins: [ ModalMixin ]
}
</script>

<style>

</style>