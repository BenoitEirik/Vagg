<template>
<div class="z-50 top-0 sticky flex items-center drop-shadow-md border-b"
  style="background-color: hsl(var(--a-body-bg-c));">
  <div class="p-4">
    <img src="/android-chrome-512x512.png" class="w-10">
  </div>
  <NuxtLink to="/" class="vagg-logo text-xl">Vagg</NuxtLink>
  <div class="grow-1 h-auto" />
  <div class="p-4">
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