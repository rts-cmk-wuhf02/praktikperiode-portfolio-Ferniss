importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

//registerRoute(({ request })=> request.destination !== 'script', new NetworkFirst());
const { registerRoute } = workbox.routing;
const { precacheAndRoute } = workbox.precaching;
const { StaleWhileRevalidate } = workbox.strategies;
const { setCatchHandler } = workbox.routing;

precacheAndRoute([
    { url: '/', revision: null },
    { url: '/fallback.html', revision: null },
    { url: '/index.html', revision: null },
    { url: '/assets/images/facebook.jpg', revision: null },
    { url: '/assets/images/hifi.JPG', revision: null },
    { url: '/assets/images/mario.png', revision: null },
    { url: '/assets/images/marioios.png', revision: null },
    { url: '/assets/images/music.JPG', revision: null },
    { url: '/assets/images/newsbox.JPG', revision: null },
    { url: '/assets/images/programming.JPG', revision: null },
    { url: '/assets/images/spil.JPG', revision: null },
    { url: '/assets/css/website-container.css', revision: null },
])

registerRoute(({ url }) => url.pathname.startsWith('/'), new StaleWhileRevalidate());

setCatchHandler(({url, event, params}) => {
    if (event.request.destination === 'document') {
        return caches.match('/fallback.html');
    }else{
        return Response.error();
    }
})


// if (workbox) {
//   console.log(`Yay! Workbox is loaded 🎉`);
// } else {
//   console.log(`Boo! Workbox didn't load 😬`);
// }