<template>
<div class="">
  <div class="video">
    <ASpinner class="spiner w-8" style="color: hsl(var(--a-primary));" />
  </div>

  <div class="pt-4 px-4">
    <div>
      <ATooltip text="Hello!" placement="bottom-start" :delay="300">
        Titre de la vidéo
      </ATooltip>
      <h1 class="text-xl line-clamp-2">Titre de la vidéo, ellipse si texte trop long</h1>
    </div>
    <div class="my-4 py-2 px-4 rounded-xl border-2">
      <div class="flex gap-2 items-center">
        <h2 class="text-md">Description</h2>
        <ABtn :icon="descriptionAccordion ? 'i-ph-caret-up-bold' : 'i-ph-caret-down-bold'" icon-only variant="text"
          class="text-xs rounded-2xl" @click="descriptionAccordion = !descriptionAccordion" />
      </div>

      <div class="wrapper-description">
        <div>
          <div class="overflow-y-auto description-accordion"
            :class="{ 'max-h-full': descriptionAccordion, 'max-h-0': !descriptionAccordion }">
            <div class="py-2 flex gap-2 flex-wrap">
              <AChip @click="" variant="outline">#tag1</AChip>
              <AChip @click="" variant="outline">#tag2</AChip>
              <AChip @click="" variant="outline">#tag3</AChip>
              <AChip @click="" variant="outline">#tag3</AChip>
              <AChip @click="" variant="outline">#tag4</AChip>
              <AChip @click="" variant="outline">#tag5</AChip>
              <AChip @click="" variant="outline">#tag6</AChip>
            </div>
            <div class="prose text-sm text-justify max-w-full">
              <!-- Start text insertion -->
              <h3>Qu'est-ce que le Lorem Ipsum?</h3>
              <p>Le <strong>Lorem Ipsum</strong> est simplement du faux texte employé dans la composition et la mise en
                page
                avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                quand un
                imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de
                texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique,
                sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de
                feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des
                applications de mise en page de texte, comme Aldus PageMaker.
              </p>
              <!-- End text insertion -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="p-4 flex flex-wrap gap-x-2 gap-y-4">
    <div class="w-full flex gap-2 items-center">
      <div class="flex gap-2 items-center flex-auto overflow-hidden">
        <AAvatar content="A" />
        <div class="flex flex-col overflow-hidden">
          <div>
            <ATooltip text="Hello!" placement="bottom-start" :delay="300">
              Titre de la chaîne
            </ATooltip>
            <h2 class="text-lg truncate">
              Titre de la chaîne, ellipse si texte trop long
            </h2>
          </div>
          <p class="text-sm">1,61 M d'abonnées</p>
        </div>
      </div>
      <div class="flex gap-2 items-center shrink-0 grow-0">
        <ABtn icon="i-ph-plus" color="primary" :icon-only="smAndSmaller"
          :class="{ 'rounded-[50%]': smAndSmaller, 'rounded-2xl': !smAndSmaller }">
          {{ !smAndSmaller ? 'S\'abonner' : '' }}
        </ABtn>
      </div>
    </div>
    <ABtn icon="i-ph-share-network" color="primary" variant="light">
      Partager
    </ABtn>
    <ABtn icon="i-ph-hand-heart" color="primary" variant="light">
      Intéressant
    </ABtn>
    <ABtn icon="i-ph-note-pencil" color="primary" variant="light">
      Commenter
    </ABtn>
    <!-- <ASelect v-model="selectedCritic" prepend-inner-icon="i-bx-heart" :options="critics" placeholder="Feedback"
      class="text-sm" /> -->
  </div>

  <NuxtLink to="/">Back</NuxtLink>
</div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const bk = useBreakpoints(breakpointsTailwind)
const smAndSmaller = bk.smallerOrEqual('sm')
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
const selectedCritic = ref<[]>()
const descriptionAccordion = ref<boolean>(false)

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

.wrapper-description {
  display: flex;

  div .description-accordion {
    overflow-y: hidden;
    transition: max-height 250ms ease-in-out;
  }
}
</style>