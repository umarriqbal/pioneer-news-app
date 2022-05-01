<template>
  <news-item
    v-for="(news, idx) in newsList"
    :key="idx"
    :head-line="news.title"
    :content-line="news.content"
    :published="news.published"
    :imgUrl="news.thumbnailImg"
    :articleLink="news.articleUrl"
  >
  </news-item>
  <pagination-nav
    :total-pages="totalPages"
    :current-page="currentPage"
    @page-clicked="doPaginate"
  />

</template>


<script lang="ts">
import { defineComponent } from "vue";
import NewsItem from "./newsItem.vue";
import PaginationNav from "./paginationNav.vue";

export default defineComponent({
  name: "NewsItems",
  props: ["newsList", "totalPages", "currentPage"],
  emits: ["do-paginate"],
  components: { NewsItem, PaginationNav },
  methods: {
    doPaginate(pg: number) {
      this.$emit("do-paginate", pg);
    },
  },
});
</script>
