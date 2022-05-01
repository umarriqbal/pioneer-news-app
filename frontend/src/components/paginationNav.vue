<template>
  <nav aria-label="...">
    <ul class="pagination justify-content-center">
      <li :class="this.currentPage - 1 === 0 ? 'page-item disabled' : 'page-item'">
        <span class="page-link">Previous</span>
      </li>
      <div
        v-for="page in totalPages"
        :key="page"
      >
        <li
          @click="this.handlePageClick(page)"
          :class="page === this.currentPage ? 'page-item disabled' : 'page-item'"
        >
          <span class="page-link"> {{ page }}</span>
        </li>
      </div>

      <li :class="this.currentPage === this.totalPages ? 'page-item disabled' : 'page-item'">
        <span class="page-link">Next</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NoResultsTicker",
  props: ["currentPage", "totalPages"],
  emits: ["page-clicked"],
  methods: {
    handlePageClick(pg: number) {
      this.$emit("page-clicked", pg);
    },
  },
});
</script>