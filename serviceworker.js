//importScripts('https://cdn.ampproject.org/sw/amp-sw.js');
//AMP_SW.init();

//AMP_SW.init({
//    offlinePageOptions: {
//        url: './offline.html',
//        assets: ['./images/offline-header.jpg']
//    }
//});
var CACHE_NAME = 'travelamp-v1';
var urlsToCache = [
    '/',
    '/img/',
    '/css/'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate') {
      event.respondWith(fetch('/pwa'));

      // Immediately start downloading the actual resource.
      fetch(event.request.url);
    }

});
 