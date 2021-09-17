<template>
  <div class="h-24 flex flex-row justify-between text-gray-400 bg-gray-800 poppins p-4 bottom-0 absolute w-full">
    <div>© Alphase 2019 - {{ currentYear }} | All rights reserved</div>
    <div>We 💜 open source</div>
    <div>Mady by Ilja Busch aka <a href="//github.com/justmedev" class="text-gray-300 underline" target="_blank">justmedev</a></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  private currentYear = (new Date()).getFullYear();
}
</script>

<style scoped>
.poppins {
  font-family: Poppins, sans-serif;
}
</style>
