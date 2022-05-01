<template>
  <div
    @click="followNews(this.articleLink)"
    class="card mb-3"
  >
    <div class="row g-0">
      <div class="col-md-1">
        <img
          :src="imgUrl"
          class="rounded img-fluid"
          alt="..."
        >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ headLine }}</h5>
          <p class="card-text">{{ contentLine }}</p>
          <p class="card-text"><small class="text-muted">{{ published }}</small></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsItem",
  props: ["headLine", "imgUrl", "contentLine", "published", "articleLink"],
  methods: {
    followNews(arLink) {
      window.open(arLink, "_blank").focus();
      return false;
    },
  },
});
</script>
