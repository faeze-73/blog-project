<template>
  <div class="card mb-4">
    <a href="#">
      <img
        class="card-img-top"
        src="https://dummyimage.com/700x350/8f8b8f/ffffff.jpg"
        alt="..."
      />
    </a>
    <div class="card-body">
      <div class="small text-muted">may 1,2022</div>
      <h2 class="card-title h4">{{ post.title }}</h2>
      <p class="card-text">{{ post.body }}</p>
      <p class="btn btn-primary" href="#">Read More -></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>


