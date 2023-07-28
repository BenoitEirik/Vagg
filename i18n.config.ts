export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      title: 'Vagg',
      subtitle: 'A video aggregation platform',
      welcome: 'Welcome',
      description: 'Gather your videos hosted anywhere on a single channel!',
      tab_dashboard: 'Dashboard',
      tab_channel: 'My channel',
      tab_add_video: 'Add',
      tab_statistics: 'Statistics',
      tab_support: 'Support',
      tab_settings: 'Settings',
      quit: 'Quit',
      logout: 'Log out'
    },
    fr: {
      title: 'Vagg',
      subtitle: 'Une plateforme d\'agrégation de vidéos',
      welcome: 'Bienvenue',
      description: 'Rassemblez vos vidéos hébergées n\'importe où sur une seule et unique chaîne !',
      tab_dashboard: 'Tableau de bord',
      tab_channel: 'Ma chaîne',
      tab_add_video: 'Ajouter',
      tab_statistics: 'Statistiques',
      tab_support: 'Support',
      tab_settings: 'Paramètres',
      quit: 'Quitter',
      logout: 'Déconnexion'
    }
  }
}))
