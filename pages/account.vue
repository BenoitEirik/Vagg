<template>
<div class="p-4">
  <ADrawer v-if="bk.smallerOrEqual('sm')" v-model="isDrawerShown" anchor="bottom" title="Navigation"
    class="pb-5 !h-auto">
    <ATabs class="" :tabs="tabs" v-model="selectedTab"></ATabs>
  </ADrawer>

  <div v-if="bk.smallerOrEqual('sm')" class="p-2 flex justify-center">
    <ABtn variant="light" icon="i-ph-text-align-justify" @click="isDrawerShown = true">Navigation</ABtn>
  </div>

  <ATabs v-if="bk.greater('sm')" class="a-tabs-bordered" :tabs="tabs" v-model="selectedTab" vertical></ATabs>
</div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const bk = useBreakpoints(breakpointsTailwind)
const isDrawerShown = ref(false)
const tabs = [
  {
    title: 'Chaîne',
    value: 'channel',
    icon: 'i-ph-user-list'
  },
  {
    title: 'Ajouter',
    value: 'add_video',
    icon: 'i-ph-upload'
  },
  {
    title: 'Statistiques',
    value: 'statistics',
    icon: 'i-ph-presentation-chart'
  },
  {
    title: 'Support',
    value: 'support',
    icon: 'i-ph-circle-wavy-question'
  },
  {
    title: 'Paramètre',
    value: 'settings',
    icon: 'i-ph-gear'
  }
]
const selectedTab = ref<string>(tabs[0].value)

watch(bk.smallerOrEqual('sm'), (sm) => {
  console.log("isDrawerShown:", isDrawerShown)
  sm ? isDrawerShown.value = false : isDrawerShown.value = true
})
</script>
