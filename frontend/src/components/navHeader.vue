<template>
  <nav class="navbar navbar-light bg-light">
    <form
      class="container-fluid"
      @submit.prevent
    >
      <div class="input-group">
        <span
          class="input-group-text"
          id="search-bar-span"
        >?</span>
        <input
          @change="handleSearch"
          type="text"
          class="form-control"
          placeholder="search"
          aria-label="search"
        >
      </div>
    </form>
  </nav>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavHeader",
  components: {},
  emits: ["item-searched"],
  methods: {
    handleSearch(e: Event) {
      const q = (e.target as HTMLInputElement).value;
      this.$emit("item-searched", q);
    },
  },
});
</script>