<template>
<div class="z-50 top-0 sticky h-[60px] flex items-center border-b" style="backdrop-filter: blur(10px);">
  <div class="px-4">
    <img src="/android-chrome-512x512.png" class="w-10">
  </div>
  <NuxtLink to="/" class="vagg-logo text-xl">Vagg</NuxtLink>
  <div class="grow-1 h-auto" />
  <div class="px-4">
    <LibBurger />
  </div>
</div>
</template>

<style lang="scss" scoped>
.vagg-logo {
  font-family: 'Raleway';
  color: black;
}
</style>