<template>
<div class="prose p-4">
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

  <div>
    <h2>Language selection with flag</h2>
    <ASelect v-model="locale" placeholder="Sélection de la langue" :options="languages">
      <template #default="{ handleListItemClick }">
        <AListItem v-for="language in languages" :key="JSON.stringify(language)"
          @click="handleListItemClick(language.value)">
          <div :class="language.icon" />
          <span>{{ language.text }}</span>
        </AListItem>
      </template>
    </ASelect>
  </div>

  <div class="flex py-2 gap-2">
    <ABtn icon="i-bx-dollar-circle">
      Primary
    </ABtn>
    <ABtn color="secondary" icon="i-bx-dollar-circle">
      Secondary
    </ABtn>
    <ABtn color="success" icon="i-bx-dollar-circle">
      Success
    </ABtn>
    <ABtn color="info" icon="i-bx-dollar-circle">
      Info
    </ABtn>
    <ABtn color="warning" icon="i-bx-dollar-circle">
      Warning
    </ABtn>
    <ABtn color="danger" icon="i-bx-dollar-circle">
      Danger
    </ABtn>
  </div>

  <div class="flex py-2 gap-2">
    <ABtn variant="outline" icon="i-bx-dollar-circle">
      Primary
    </ABtn>
    <ABtn color="secondary" variant="outline" icon="i-bx-dollar-circle">
      Secondary
    </ABtn>
    <ABtn color="success" variant="outline" icon="i-bx-dollar-circle">
      Success
    </ABtn>
    <ABtn color="info" variant="outline" icon="i-bx-dollar-circle">
      Info
    </ABtn>
    <ABtn color="warning" variant="outline" icon="i-bx-dollar-circle">
      Warning
    </ABtn>
    <ABtn color="danger" variant="outline" icon="i-bx-dollar-circle">
      Danger
    </ABtn>
  </div>

  <div class="flex py-2 gap-2">
    <ABtn variant="light" icon="i-bx-dollar-circle">
      Primary
    </ABtn>
    <ABtn color="secondary" variant="light" icon="i-bx-dollar-circle">
      Secondary
    </ABtn>
    <ABtn color="success" variant="light" icon="i-bx-dollar-circle">
      Success
    </ABtn>
    <ABtn color="info" variant="light" icon="i-bx-dollar-circle">
      Info
    </ABtn>
    <ABtn color="warning" variant="light" icon="i-bx-dollar-circle">
      Warning
    </ABtn>
    <ABtn color="danger" variant="light" icon="i-bx-dollar-circle">
      Danger
    </ABtn>
  </div>
</div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const online = ref<boolean>(true);
const languages = [
  { text: 'Français', value: 'fr', icon: 'i-flag-gf-4x3' },
  { text: 'English', value: 'en', icon: 'i-flag-gb-4x3' }
];
</script>
