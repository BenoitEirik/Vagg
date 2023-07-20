<template>
<div class="">
  <div class="video">
    <ASpinner class="spiner w-8" style="color: hsl(var(--a-primary));" />
  </div>

  <div class="p-4 flex flex-wrap gap-2">
    <ABtn icon="i-ph-book-bookmark" color="primary">
      S'abonner
    </ABtn>
    <ABtn icon="i-ph-share-network" color="primary" variant="light">
      Partager
    </ABtn>
    <ABtn icon="i-ph-hand-heart" color="primary" variant="light">
      Intéressant
    </ABtn>
    <ASelect v-model="selectedCritic" prepend-inner-icon="i-bx-heart" :options="critics" placeholder="Feedback"
      class="text-sm" />
  </div>

  <div class="p-4">
    <div class="flex gap-2">
      <span class="text-xl">Titre de la vidéo</span>
      <ABtn icon="i-ph-caret-down" variant="text" class="text-xs rounded-2xl" />
    </div>

    <div class="prose">
      <p><strong>Titre de la description</strong></p>
      <p>Line 1</p>
      <p>Line 2</p>
      <p>Line 3</p>
      <p>Line 4</p>
      <p>...</p>
    </div>
  </div>

  <NuxtLink to="/">Back</NuxtLink>
</div>
</template>

<script setup lang="ts">
const critics = [
  'Analyse approfondie',
  'Feedback technique',
  'Originalité',
  'Structure narrative',
  'Qualité du contenu',
  'Engagement',
  'Créativité',
  'Clarté du message',
  'Durée',
  'Interaction avec l\'audience',
  'Recherche',
  'Humour/Émotion',
  'Ciblage du public',
  'Transitions',
  'Accessibilité'
]
const selectedCritic = ref<[]>();
</script>

<style lang="scss" scoped>
// TODO remove
.video {
  width: auto;
  height: 500px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  .spiner {
    margin-inline: auto;
  }
}
</style>