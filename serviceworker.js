importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init();
AMP_SW.init({
    offlinePageOptions: {
        url: '/offline.html',
        assets: ['/images/offline-header.jpg']
    }
  })