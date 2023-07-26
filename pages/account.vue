<template>
<div class="page flex items-stretch">
  <div class="h-full border-r grow-0 shrink-0 flex flex-col justify-between">
    <div class="py-5 flex flex-col gap-2 items-center">
      <AAvatar class="m-1 flex justify-center rounded-[50%] outline outline-1 outline-offset-2 outline-dashed"
        :class="{ 'text-sm': mdAndSmaller, 'text-3xl': !mdAndSmaller }" content="C" />
      <h3 v-if="!mdAndSmaller">User Name</h3>
    </div>
    <div class="grow flex flex-col items-end">
      <ATabs :key="idTabs" :tabs="tabs" v-model="selectedTab" vertical class="grow" />
    </div>
    <div class="grow-0 flex flex-col gap-2 items-stretch" :class="{ 'p-4': !mdAndSmaller, 'p-2': mdAndSmaller }">
      <div class="flex items-center gap-2">
        <ABtn icon="i-ph-arrow-u-down-left" variant="light" icon-only />
        <span v-if="!mdAndSmaller">{{ $t('Quitter') }}</span>
      </div>
      <div class="flex items-center gap-2">
        <ABtn icon="i-ph-sign-out" variant="light" icon-only />
        <span v-if="!mdAndSmaller">{{ $t('Déconnexion') }}</span>
      </div>
    </div>
  </div>

  <div class="grow h-full overflow-y-scroll">

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
