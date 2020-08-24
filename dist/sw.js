let cacheName = 'static-cache-v1';
let filesToCache = [
    '/',
    '/index.html',

//   '/css/styles.css',
//   '/js/scripts.js',
//   '/images/logo.svg',

//   '/offline.html',

//   '/',
];

self.addEventListener('install', function(event) {
  console.log('service worker installed');
  event.waitUntil(caches.open(cacheName)
        .then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
    cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('install', function(event) {
    console.log('service worker installed')
  });

self.addEventListener('activate', function(event) {
    console.log('activate', event)
})

self.addEventListener('fetch', function(event) {
    console.log('fetch', event)
})



