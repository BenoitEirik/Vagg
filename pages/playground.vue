<template>
<div>
  <NuxtLink to="/">Back</NuxtLink>
  <h1>Playground</h1>

  <h2>Icons Phosphor collection</h2>
  <ul>
    <li><a href="https://icones.js.org/collection/ph" target="_blank">Phosphor</a></li>
    <li><a href="https://nuxt.com/modules/icon" target="_blank">Nuxt module</a></li>
  </ul>
  <div>
    <Icon name="ph:play" color="#888888" />
    <Icon name="ph:airplay" color="#888888" />
    <Icon name="ph:pause" color="#888888" />
    <Icon name="ph:stop" color="#888888" />
    <Icon name="ph:medal-military" color="#888888" />
    <Icon name="ph:bell" color="#888888" />
  </div>

  <h2>Offline detection</h2>
  <VOffline ping-url="1.1.1.1" @detected-condition="(value: boolean) => online = value">
    I'm <strong>{{ online ? 'online' : 'offline' }}</strong>
  </VOffline>

  <h2>Language selection with flag</h2>
  <select v-model="locale" style="min-width: 100px;">
    <option value="en">
      <CountryFlag country="en" />
      English
    </option>
    <option value="fr">
      <CountryFlag country="fr" />
      Fançais
    </option>
  </select>
  <CountryFlag country="fr" />

</div>
</template>

<script setup lang="ts">

const { locale } = useI18n();
const online = ref<boolean>(true);
</script>
