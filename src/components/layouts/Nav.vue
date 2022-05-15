<template>
  <!--Responsive-navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              :class="{ active: page === 'home' }"
              @click="$emit('changePage', 'home')"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              :class="{ active: page === 'about' }"
              @click="$emit('changePage', 'about')"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              :class="{ active: page === 'contact' }"
              @click="$emit('changePage', 'contact')"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["page"],
};
</script>
