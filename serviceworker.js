importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
AMP_SW.init();

AMP_SW.init({
    offlinePageOptions: {
        url: '/offline.html',
        assets: ['/images/offline-header.jpg']
    }
  });
  AMP_SW.init({
    assetCachingOptions: [{
         regexp: /\.(png|jpg)/,
         cachingStrategy: 'CACHE_FIRST'
     }],
    });
