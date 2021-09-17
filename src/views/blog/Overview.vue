<template>
  <div class="max-w-4xl m-auto my-3">
    <span class="text-gray-700 font-bold text-3xl">Our articles</span>
    <hr/>

    <div class="overflow-x-auto max-h-full">
      <div v-for="(article, i) in articles" :key="i"
           class="border border-gray-300 rounded-lg p-2 mt-3 flex flex-row justify-between hover:border-blue-500 hover:border hover:bg-blue-100 cursor-pointer"
           @click="$router.push(`/blog/${article.id}`)"
      >
        <div class="flex flex-col">
          <div class="text-xl font-semibold">{{ article.name }}</div>
          <div class="text-gray-600">{{ article.description }}</div>
        </div>
        <div class="flex flex-col text-gray-600">
          <div class="text-right">{{ article.author }}</div>
          <div>{{ article.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import { Article } from '@/interfaces';

@Component
export default class Overview extends Vue {
  private articles: Article[] = [];
  private baseBlogURI = '/articles';

  async mounted (): Promise<void> {
    const res = await axios.get(`${this.baseBlogURI}/overview.json`);
    if (res.status !== 200) return;

    this.articles = res.data.articles;
  }
}
</script>

<style scoped>
hr {
  border-width: 0.135rem;
  margin: 2px 0 2px;
  max-width: 80%;
}
</style>
