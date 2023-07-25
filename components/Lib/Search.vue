<template>
<div class="absolute top-0 left-0 w-screen h-screen z-[1000] flex flex-col items-stretch"
  :class="{ '!hidden': !display }" style="backdrop-filter: blur(10px);" @click="escape">
  <div class="p-4 grow-0 flex justify-center">
    <AInput ref="searchRef" type="text" :placeholder="$t('Rechercher')" prepend-inner-icon="i-ph-magnifying-glass"
      class="custom-search-box text-sm" @click.stop="" />
  </div>

  <div class="grow shrink">

  </div>
</div>
</template>

<script setup lang="ts">
const { $bus } = useNuxtApp()

const display = ref<boolean>(false)
const searchRef = ref(null)

$bus.on('openSearch', (isOpening: boolean) => {
  isOpening ? display.value = true : display.value = false
})

const escape = () => {
  display.value = false
}
</script>

/* NOT SCOPED */
<style lang="scss">
.custom-search-box {
  max-width: 400px;

  .a-base-input-input-wrapper {
    background-color: hsl(var(--a-body-bg-c));
    border-radius: 999em !important;
  }
}
</style>