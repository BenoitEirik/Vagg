<template>
<div class="absolute top-0 left-0 w-screen h-screen z-[1000]" :class="{ 'hidden': !display }"
  style="backdrop-filter: blur(10px);">
  COucou
</div>
</template>

<script setup lang="ts">
const { $bus } = useNuxtApp()

const display = ref<boolean>(false)

$bus.on('openSearch', (isOpening: boolean) => {
  isOpening ? display.value = true : display.value = false
  console.log(display.value)
})
</script>
