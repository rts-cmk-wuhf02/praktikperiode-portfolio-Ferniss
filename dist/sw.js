let cacheName = 'static-cache-v1';
let filesToCache = [
    '/',
    '/fallback.html',
    '/index.html',
    '/assets/images/facebook.jpg',
    '/assets/images/hifi.JPG',
    '/assets/images/mario.png',
    '/assets/images/marioios.png',
    '/assets/images/music.JPG',
    '/assets/images/newsbox.JPG',
    '/assets/images/programming.JPG',
    '/assets/images/spil.JPG',
    '/assets/css/website-container.css',

//   '/css/styles.css',
//   '/js/scripts.js',
//   '/images/logo.svg',

  

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
    event.waitUntil(
        caches.keys().then(function(keys){
            console.log(keys);
            if(event === cacheName) caches.delete(event)
            // return Promise.all(keys.filter((key) => key === cacheName).map(key => caches.delete(key)))
        })
    )
})

self.addEventListener('fetch', function(event) {
    console.log('fetch', event)
    event.respondWith(
        caches.open(cacheName).then(function(cache){
            return cache.match(event.request).then(function(response){
                return (
                    response || fetch(event.request)
                    .then(function(response) {
                        cache.put(event.request, response.clone())
                        return response;
                    })
                );
            })
            .catch(function(){
                return caches.match('/fallback.html')
            })
         
        })
    )
})
