<template>
<div class="z-50 top-0 sticky h-[60px] flex items-stretch border-b" style="backdrop-filter: blur(10px);">
  <div class="px-4 flex items-center gap-4">
    <img src="/android-chrome-512x512.png" class="w-10">
    <NuxtLink to="/" class="vagg-logo text-xl">{{ $t('Vagg') }}</NuxtLink>
  </div>

  <div class="grow flex items-center" :class="{ 'justify-end': smAndSmaller, 'justify-center': !smAndSmaller }">
    <AInput v-if="!smAndSmaller" type="text" :placeholder="$t('Rechercher')" prepend-inner-icon="i-ph-magnifying-glass"
      class="false-search-box text-sm" @click="openSearchPage" />
    <ABtn v-else icon="i-ph-magnifying-glass" icon-only variant="text" @click="openSearchPage()" />
  </div>

  <div class="px-4 flex items-center">
    <LibBurger />
  </div>
</div>
</template>

<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const { $bus } = useNuxtApp()
const bk = useBreakpoints(breakpointsTailwind)
const smAndSmaller = bk.smallerOrEqual('sm')

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
  max-width: 400px;

  .a-base-input-input-wrapper {
    border-radius: 999em !important;
  }
}
</style>