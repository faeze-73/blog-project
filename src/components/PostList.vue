<template>
  <!--Blog entries-->
  <div class="col-lg-8">
    <!--Featured blog post-->
    <post></post>

    <!-- Nested row for non-featured blog post -->
    <div class="row">
      <div class="col-lg-6">
        <!-- Blog post -->
        <post></post>
        <post></post>
      </div>

      <div class="col-lg-6">
        <!-- Blog post -->
        <post></post>
        <post></post>
      </div>
    </div>

    <!-- Pagination -->
    <nav aria-label="Pagination">
      <hr class="my-0" />
      <ul class="pagination justify-content-center my-4">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >Previous</a
          >
        </li>
        <li class="page-item active" aria-current="page">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item disabled">
          <a class="page-link" href="#">...</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">15</a></li>
        <li class="page-item"><a class="page-link" href="#">Older</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  components: {
    Post
  }
}
</script>

