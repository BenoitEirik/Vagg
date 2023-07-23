<template>
<ADialog v-model="isDialogShown">
  <div class="pt-1">
    <ATabs class="a-tabs-bordered" :tabs="tabs">
      <template #sign_in>
        <div class="p-5 flex flex-col items-center justify-center min-h-fit">
          <div class="p-4 grow flex flex-col items-center">
            <img src="/android-chrome-512x512.png" class="w-14">
            <h3 to="/" class="mt-2 vagg-logo text-xl text-center">Connectez-vous avec votre compte utilisateur</h3>
          </div>
          <div class="flex flex-col items-stretch">
            <AInput type="text" placeholder="Email" prepend-inner-icon="i-bx-at" class="mb-4 grow-0" />
            <AInput type="password" placeholder="Mot de passe" prepend-inner-icon="i-bx-lock" class="mb-4 grow-0" />
            <ABtn icon="i-ph-sign-in" class="my-4">
              Connection
            </ABtn>
          </div>
        </div>
      </template>
      <template #sign_up>
        <div class="p-5 flex flex-col items-center justify-center min-h-fit">
          <div class="p-4 grow flex flex-col items-center">
            <img src="/android-chrome-512x512.png" class="w-14">
            <h3 to="/" class="mt-2 vagg-logo text-xl text-center">Créer un compte pour créer ou suivre vos créateur</h3>
          </div>
          <div class="flex flex-col items-stretch">
            <AInput type="text" placeholder="Email" prepend-inner-icon="i-bx-at" class="mb-4 grow-0" />
            <AInput type="password" placeholder="Mot de passe" prepend-inner-icon="i-bx-lock" class="mb-4 grow-0" />
            <AInput type="password" placeholder="Confirmez le mot de passe" prepend-inner-icon="i-bx-lock"
              class="mb-4 grow-0" />
            <h2 class="my-2">Type de compte
              <span>
                <ATooltip text="Vous pourrez toujours modifier plus tard" />
                <Icon name="ph:info" size="16px" />
              </span>
            </h2>
            <div class="px-4 py-2 flex flex-col items-stretch border-1 rounded-lg mb-4">
              <ARadio v-model="viewerAccount" name="viewer" value="viewer" label="Compte spectateur" />
              <ARadio v-model="viewerAccount" name="creator" value="creator" label="Compte créateur" />
            </div>
            <ABtn icon="i-ph-user-plus" class="my-4">
              Créer le compte
            </ABtn>
          </div>
        </div>
      </template>
    </ATabs>
  </div>
</ADialog>
</template>

<script setup lang="ts">
const isDialogShown = ref<boolean>(true)
const tabs = [
  {
    title: 'Se connecter',
    value: 'sign_in',
    icon: 'i-ph-user-circle'
  },
  {
    title: 'Créer un compte',
    value: 'sign_up',
    icon: 'i-ph-user-circle-plus'
  }
]
const viewerAccount = ref<string>('viewer')
</script>
