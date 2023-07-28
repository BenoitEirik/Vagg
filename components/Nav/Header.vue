<template>
<div class="z-50 top-0 sticky h-[60px] flex items-stretch border-b" style="backdrop-filter: blur(10px);">
  <div class="px-4 flex items-center gap-4" :class="{ 'basis-6/12': !mdAndSmaller }">
    <img src="/android-chrome-512x512.png" class="w-10">
    <NuxtLink to="/" class="vagg-logo text-xl">{{ $t('title') }}</NuxtLink>
  </div>

  <div class="relative flex items-center"
    :class="{ 'grow justify-end': mdAndSmaller, 'justify-center': !mdAndSmaller }">
    <AInput v-if="!mdAndSmaller" type="text" :placeholder="$t('Rechercher')" prepend-inner-icon="i-ph-magnifying-glass"
      class="absolute origin-center false-search-box text-sm" @click="openSearchPage" />
    <ABtn v-else icon="i-ph-magnifying-glass" icon-only variant="text" @click="openSearchPage()" />
  </div>

  <div class="px-4 flex items-center justify-end" :class="{ 'basis-6/12': !mdAndSmaller }">
    <LibBurger />
  </div>
</div>
</template>

<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const { $bus } = useNuxtApp()
const bk = useBreakpoints(breakpointsTailwind)
const mdAndSmaller = bk.smallerOrEqual('md')

const openSearchPage = () => {
  $bus.emit('openSearch', true)
}
</script>

/*NOT SCOPED */
<style lang="scss">
.vagg-logo {
  font-family: 'Raleway';
  color: black;
}

.false-search-box {
  width: 400px;
  min-width: 10px;

  .a-base-input-input-wrapper {
    border-radius: 999em !important;
  }
}
</style>