let CACHE_NAME = 'website';

let urlsToCache = [
  '/static/js/bundle.js',
  '/static/js/main.chunk.js',
  '/static/js/1.chunk.js',
  'inex.html',

  'https://opentdb.com/api_category.php',
  '/',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
