<template>
  <div class="flex flex-col bg-bg-1 h-screen">
    <header class="flex flex-col items-center justify-center bg-bg-2 h-12 flex-shrink-0">
      <div class="w-10/12 text-lg text-alt-2">Aniapp</div>
    </header>
    <div class="flex flex-col items-center flex-grow bg-bg-1 px-4">
      <div class="w-11/12 text-left text-primary text-lg mt-4">
        AniChrono
        <div class="text-sm">
          Find anime series by  release date or story timeline order
        </div>
        <div class="flex flex-col w-11/12 bg-bg-2 rounded pt-1 pb-4 px-4 mt-4">
          <span class="text-alt-2 items-center px-2 text-base">
            Please type an anime title
          </span>
          <div class="relative w-full flex flex-col">
            <input class="text-lg bg-bg-1 text-primary w-full px-2 h-8" />
          </div>
        </div>
      </div>
    </div>
    <div class="h-12 flex-shrink-0 bg-bg-2 flex flex-col items-center justify-center text-alt-2 text-xs mt-4">
      <span>
        Data provided by <a href="https://anilist.co">Anilist</a> Color theme <a href="https://ethanschoonover.com/solarized/">solarized</a>
      </span>
      <span>
        <a href="https://github.com/detikpw/ani-app">Site Source</a> © 2020 <a href="https://twitter.com/2nd_frozenheart">2nd_frozenheart</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
