const EN_DESC = 'Vue.js Frankfurt is a meetup community for anyone interested in Vue.js. Join us at one of our events to get to know our community.';
const DE_DESC = 'German Vue.js Frankfurt';
const TITLE = 'Vue.js Frankfurt';

module.exports = {
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      popupComponent: 'MySWUpdateReload',
      updatePopup: true
    }
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: TITLE,
      description: EN_DESC,
    },
    '/de/': {
      lang: 'de-DE',
      title: TITLE,
      description: DE_DESC,
    }
   },
  themeConfig: {
    logo: '/logo.svg',
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Meetup', link: 'https://meetup.com/vuejsfrankfurt/' },
          { text: 'GitHub', link: 'https://github.com/vuejsfrankfurt/vuejsfrankfurt.de/' }
        ],
        sidebar: [
          '/',
          {
            title: 'About',
            collapsable: false,
            children: [
              '/about/mission',
              '/about/team',
              '/about/sponsors',
              '/about/coc',
              '/about/reporting',
              '/about/contact'
            ]
          },
          {
            title: 'Events',
            collapsable: false,
            children: [
              '/events/speaking',
              '/events/upcoming',
              '/events/past',
              '/events/learningvue',
              '/events/locations',
              '/events/conferences'
            ]
          },
          {
            title: 'Community',
            collapsable: false,
            children: [
              '/community/community'
            ]
          },
          {
            title: 'Legal',
            collapsable: false,
            children: [
              '/legal/impressum',
              '/legal/privacypolicy'
            ]
          }
        ]
      },
      '/de/': {
        selectText: 'Sprachen',
        label: 'Deutsch',
        editLinkText: 'Bearbeite diese Seite auf GitHub',
        serviceWorker: {
          updatePopup: {
            message: "Neuer Inhalt verfügbar.",
            buttonText: "Aktualisieren"
          }
        },
        algolia: {},
        displayAllHeaders: true,
        sidebarDepth: 2,
        nav: [
          { text: 'Meetup', link: 'https://meetup.com/vuejsfrankfurt' },
          { text: 'GitHub', link: 'https://github.com/vuejsfrankfurt/vuejsfrankfurt.de/' }
        ],
        sidebar: [
          '/de/',
          {
            title: 'Über',
            collapsable: false,
            children: [
              '/de/about/mission',
              '/de/about/team',
              '/de/about/sponsors',
              '/de/about/coc',
              '/de/about/reporting',
              '/de/about/contact'
            ]
          },
          {
            title: 'Veranstaltungen',
            collapsable: false,
            children: [
              '/de/events/upcoming',
              '/de/events/past',
              '/de/events/learningvue',
              '/de/events/locations',
              '/de/events/conferences'
            ]
          },
          {
            title: 'Community',
            collapsable: false,
            children: [
              '/de/community/community'
            ]
          },
          {
            title: 'Rechtliches',
            collapsable: false,
            children: [
              '/legal/impressum',
              '/legal/privacypolicy'
            ]
          }
        ]
      }
    }
  },
  head: [
    ['link', { rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#292a2e' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#292a2e' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: TITLE }],
    ['meta', { name: 'application-name', content: TITLE }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@vuejsfrankfurt' }],
  ],
};
