<template>
  <div class="container">
    <h2>Contact Page</h2>
    <form @submit.prevent="submitHandler">
      <div class="mb-3">
        <label for="title" class="form-label">title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
          v-model="form.title"
        />
        {{ title }}
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">content</label>
        <textarea
          id="content"
          class="form-control"
          name="content"
          cols="30"
          rows="10"
          v-model="form.content"
        >
        </textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</template>

<script>
import { ref, reactive, computed, toRefs, watch } from "vue";

export default {
  setup() {
    const form = reactive({
      title: "",
      content: "",
    });

    const { title, content } = toRefs(form);

    watch([title, content], function(newVal, oldVal) {
      console.log(newVal, oldVal)
    })

    function submitHandler() {
      console.log(form);
    }

    // const title = computed(() => form.title)

    return {
      form,
      title,
      submitHandler,
    };
  },
};
</script>
