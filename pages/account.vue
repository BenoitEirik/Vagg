<template>
<div class="page flex items-stretch">
  <div class="h-full border-r grow-0 shrink-0 flex flex-col items-end justify-between">
    <ATabs :key="idTabs" :tabs="tabs" v-model="selectedTab" vertical class="grow" />
    <div class="p-2 grow-0 flex flex-col gap-2 items-stretch">
      <ABtn icon="i-ph-arrow-u-down-left" variant="outline" :icon-only="mdAndSmaller" class="">
        {{ !mdAndSmaller ? 'Quitter' : '' }}
      </ABtn>
      <ABtn icon="i-ph-sign-out" variant="light" :icon-only="mdAndSmaller">
        {{ !mdAndSmaller ? 'Déconnexion' : '' }}
      </ABtn>
    </div>
  </div>

  <div class="h-full">

  </div>
</div>
</template>

<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { Tab } from '../main/types/account'

const bk = useBreakpoints(breakpointsTailwind)
const mdAndSmaller = bk.smallerOrEqual('md')
const selectedTab = ref<string>()
const idTabs = ref<number>(0)

const tabs = computed(() => {
  let defaultTabs: Array<Tab> = [
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
  return mdAndSmaller.value ? defaultTabs.map(tab => {
    tab.title = ''
    idTabs.value++
    return tab
  }) : (() => {
    idTabs.value++
    return defaultTabs
  })()
})
</script>

<style lang="scss">
.page {
  height: calc(100vh - 60px);
}
</style>
