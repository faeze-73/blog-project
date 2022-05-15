<template>
  <nav aria-label="Pagination">
    <hr class="my-0" />
    <ul class="pagination justify-content-center my-4">
      <li class="page-item" :class="{ disabled: isInFirstPage }">
        <button type="button" class="page-link" :disabled="isInFirstPage">
          Newer
        </button>
      </li>
      <li
        class="page-item"
        v-for="page in pages"
        :key="page.name"
        :class="{ active: page.isActive }"
      >
        <button
          class="page-link"
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isActive"
        >
          {{ page.name }}
        </button>
      </li>
      <li class="page-item" :class="{ disabled: isInLastPage }">
        <button type="button" class="page-link" :disabled="isInLastPage">
          Older
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    // prePage: {
    //   type: Number,
    //   required: true,
    // },
    currentPage: {
      type: Number,
      required: true,
    },
    maxVisibleButtons : {
      type: Number,
      required: false,
      default: 5
    }
  },
  computed: {
    startPage() {
      if(this.currentPage === 1) return 1;
      if(this.currentPage === this.totalPage) return this.totalPage-4;
      if(this.currentPage === 2) {
        return 1;
      } else {
          return this.currentPage-2;
      }
    },
    endPage() {
      return Math.min(this.startPage + this.maxVisibleButtons-1, this.totalPage);
    },
    pages() {
      let range = [];

      for (let i = this.startPage; i <= this.endPage; i++) {
        range.push({
          name: i,
          isActive: i === this.currentPage,
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPage;
    },
  },
  methods: {
    onClickPage(page) {
      this.$emit("pageChanged", page);
    },
  },
};
</script>
