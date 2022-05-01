<template>
  <div class="add-margin">
    <nav-header @item-searched="handleSearch" />
    <loading-spinner v-if="isLoading" />
    <div v-else-if="!isLoading && newsArticles && newsArticles.length > 0">
      <news-items
        :news-list="newsArticles"
        :total-pages="totalPages"
        :current-page="currentPage"
        @do-paginate="handlePageClick"
      >
      </news-items>
    </div>
    <no-results-ticker v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NewsItem from "./interfaces/newsItem";
import NewsItemAPI from "./interfaces/newsItemAPI";
import NavHeader from "./components/navHeader.vue";
import LoadingSpinner from "./components/loadingSpinner.vue";
import NewsItems from "./components/newsItemList.vue";
import { getHeadlines, getNews } from "./xhr/apiRequest";
import { getTimeFrom } from "./utils";
import NoResultsTicker from "./components/noResultsTicker.vue";

export default defineComponent({
  name: "App",
  components: { NavHeader, NewsItems, LoadingSpinner, NoResultsTicker },
  setup() {
    const isLoading = ref<boolean>(true);
    const newsArticles = ref<NewsItem[]>([]);
    const currentPage = ref<number>(1);
    const totalPages = ref<number>(1);
    const query = ref<string>("");

    return { isLoading, newsArticles, currentPage, totalPages, query };
  },
  methods: {
    async loadNewsItems(pg: number) {
      this.isLoading = true;
      this.newsArticles = [];
      const newsResponse = await getHeadlines(pg);
      this.isLoading = false;
      if (newsResponse) {
        this.totalPages = newsResponse.totalPages;
        const news = newsResponse?.articles;
        await news.forEach((newsElement: NewsItemAPI, idx: number) => {
          this.newsArticles.push({
            id: `${idx}`,
            title: newsElement.title,
            content: newsElement.description,
            thumbnailImg: newsElement.urlToImage,
            published: getTimeFrom(newsElement.publishedAt),
            articleUrl: newsElement.url,
          });
        });
      }
      return this.newsArticles;
    },
    async searchNewsItems(q: string, pg: number) {
      this.isLoading = true;
      this.newsArticles = [];
      const newsResponse = await getNews(q, pg);
      this.isLoading = false;
      if (newsResponse) {
        this.totalPages = newsResponse.totalPages;
        const news = newsResponse?.articles;
        await news.forEach((newsElement: NewsItemAPI, idx: number) => {
          this.newsArticles.push({
            id: `${idx}`,
            title: newsElement.title,
            content: newsElement.description,
            thumbnailImg: newsElement.urlToImage,
            published: getTimeFrom(newsElement.publishedAt),
            articleUrl: newsElement.url,
          });
        });
      }
      return this.newsArticles;
    },
    async handlePageClick(pg: number) {
      this.currentPage = pg;
      if (!this.query) {
        this.loadNewsItems(pg);
      } else {
        this.searchNewsItems(this.query, this.currentPage);
      }
    },
    async handleSearch(query: string) {
      this.currentPage = 1;
      this.query = query;
      this.searchNewsItems(this.query, this.currentPage);
    },
  },
  mounted() {
    this.loadNewsItems(1);
  },
});
</script>

