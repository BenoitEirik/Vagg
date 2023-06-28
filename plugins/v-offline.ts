import { VOffline } from 'v-offline';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VOffline', VOffline);
});
