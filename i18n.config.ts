export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      title: 'Vagg',
      subtitle: 'A video aggregation platform',
      welcome: 'Welcome',
      description: 'Gather your videos hosted anywhere on a single channel!'
    },
    fr: {
      title: 'Vagg',
      subtitle: 'Une plateforme d\'agrégation de vidéos',
      welcome: 'Bienvenue',
      description: 'Rassemblez vos vidéos hébergées n\'importe où sur une seule et unique chaîne !',
    }
  }
}))
