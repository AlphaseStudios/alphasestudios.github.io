<template>
  <div class="mx-2">
    <div class="max-w-4xl m-auto my-3">
      <div class="mb-16 mt-6">
        <span class="text-gray-700 font-bold text-4xl">Our history</span>
        <hr>
        <div class="text-lg">
          On the 17th of August, Elias has posted a recruitment messages in the Brackeys Community
          Discord Server. And a team of 3 was quickly assembled. We were only 3 programmers at the
          beginning but one of us has invited a pixel artist, and Elias has invited a Music
          Designer. We had an idea for a project, a game that is based on the Area 51 raid that was
          supposed to take place in a month. But the game took sometime to make, and the raid was no
          longer relevant, so we abandoned the project. At that time, A programmer and the pixel
          artists have left. But a new artist had joined by that time. So we started working a new
          horror-ish game, and some progress screenshots exist in the Dev Blog page. But the game
          didn't go that far. After that we made a mobile game, Color Changer (Currently
          Unavailable). After publishing v3.0, the team got into an argument and the other
          programmer left. By that time, a programmer joined the team. We made another mobile game,
          Jumper. After that we started working on DWAG. Due to the Area 51 hype being over, we
          decided to rename our team to Alphase and our Discord bot to Alphabot. And now we're here!
        </div>
      </div>

      <div class="mt-6">
        <span class="text-gray-700 font-bold text-4xl">Our people</span>
        <hr>
        <div class="mt-2 ml-2">
          <div class="flex items-center">
            <img src="@/assets/elias.jpg" alt="EliasVal Profile Picture" class="h-10 rounded-full">
            <div class="ml-2">
              EliasVal:
              <span class="text-gray-800">
              {{ ages.elias }}y/o developer currently working on our new game DWAG.
                (<a href="//github.com/EliasVal" target="_blank">visit on Github</a>)
             </span>
            </div>
          </div>

          <div class="flex items-center mt-2">
            <img src="@/assets/ilja.png" alt="justmedev Profile Picture" class="h-10 rounded-full">
            <div class="ml-2">
              justmedev:
              <span class="text-gray-800">
              {{ ages.ilja }}y/o developer currently working on the website and our blog.
                (<a href="//github.com/justmedev" target="_blank">visit on Github</a>)
             </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
  private birtDates = {
    ilja: new Date(2007, 1, 27),
    elias: new Date(2005, 12, 25),
  };
  // noinspection JSUnusedLocalSymbols
  private ages = {
    ilja: (new Date()).getFullYear() - this.birtDates.ilja.getFullYear(),
    elias: (new Date()).getFullYear() - this.birtDates.elias.getFullYear(),
  };
}
</script>

<style scoped>
a {
  @apply text-blue-500 underline hover:text-green-800 transition-all;
}
</style>
