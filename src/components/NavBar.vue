<template>
  <div class="poppins h-14 bg-gray-800 flex flex-row
  items-center justify-between text-gray-200 px-3 shadow-lg">
    <div class="flex-grow">
      <router-link class="font-bold text-lg hover:text-gray-400 transition-all cursor-pointer mr-6"
                   to="/">
        Alphase
      </router-link>
      <span v-for="(item, i) in items" :key="i">
        <router-link class="hover:text-gray-400 transition-all cursor-pointer"
                     :to="item.to">
          {{ item.name }}
        </router-link>
        <span class="text-gray-600 mx-4 select-none" v-show="i !== items.length - 1">|</span>
      </span>
    </div>
<!--    <div class="flex-shrink"></div> Right side-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  private items = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Blog',
      to: '/blog',
    },
    {
      name: 'About us',
      to: '/about',
    },
    {
      name: 'History',
      to: '/history',
    },
  ];
}
</script>

<style scoped>
.poppins {
  font-family: Poppins, sans-serif;
}
</style>
