<template>
  <div class="mx-3">
    <div class="max-w-4xl m-auto my-3">
      <div class="mb-16 mt-6">
        <span class="text-gray-700 font-bold text-4xl">Welcome!</span>
        <hr/>
        <div class="text-lg">
          Alphase is a team of 2, which make games, utilities launchers and much more. We try to
          provide
          value to the open source community with free and fast products, which provide a good user
          experience.
        </div>
      </div>

      <div class="mb-16">
        <span class="text-gray-700 font-bold text-3xl">Our projects</span>
        <hr/>
        <div class="text-lg">
          All of the projects below were made because we here, at Alphase, love developing things.
          One
          downside of doing it just-for-fun is, that most of the projects aren't finished or were
          only
          maintained for a short time.
          <div class="overflow-x-auto">
            <table class="table-auto border-black border border-collapse rounded mt-3">
              <thead>
              <tr>
                <th class="tborder">Project title</th>
                <th class="tborder">Description</th>
                <th class="tborder">Type</th>
                <th class="tborder">State</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="tborder">Website</td>
                <td class="tborder">This website with a blog and some info</td>
                <td class="tborder">Information</td>
                <td class="tborder bg-green-400">Actively supported</td>
              </tr>

              <tr>
                <td class="tborder">DWAG</td>
                <td class="tborder">A 2d platform shooter type game</td>
                <td class="tborder">Game</td>
                <td class="tborder bg-purple-400">Work in progress</td>
              </tr>

              <tr>
                <td class="tborder">Alphabot dashboard</td>
                <td class="tborder">Online dashboard for Alphabot</td>
                <td class="tborder">Information</td>
                <td class="tborder bg-yellow-400">Awaiting shutdown</td>
              </tr>

              <tr>
                <td class="tborder">Alphabot</td>
                <td class="tborder">A small Discord management bot</td>
                <td class="tborder">Utility/Management</td>
                <td class="tborder bg-red-400">No longer maintained</td>
              </tr>
              <tr>
                <td class="tborder">Don't Feed the Hole</td>
                <td class="tborder">2d hypercasual game</td>
                <td class="tborder">Game</td>
                <td class="tborder bg-red-400">No longer maintained</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<style scoped>
.tborder {
  @apply border border-black py-1 px-2;
}
</style>
