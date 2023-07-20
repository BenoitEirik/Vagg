<template>
<div class="prose">
  <form>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="fr">fr</option>
    </select>
    <p>{{ $t("welcome") }}</p>
    <p>{{ $t("description") }}</p>
  </form>
  <div>
    <NuxtLink to="/video">Video</NuxtLink>
  </div>
  <br>
  <div>
    <NuxtLink to="/playground">Playground</NuxtLink>
  </div>

</div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
