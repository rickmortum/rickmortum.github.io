//v3.56 update 7
//bytefigg
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
'/sw.js',
'/index.html',
'/gfx/1A.png',
'/gfx/1.png',
'/gfx/1_v2.png',
'/gfx/4.png',
'/gfx/8.png',
'/gfx/back.png',
'/gfx/down.png',
'/gfx/startup.png',
'/gfx/ico.png',
'/gfx/4_v2.png',
'/gfx/bottom.PNG',
'/gfx/QRs/QG1.PNG',
'/gfx/QRs/QG2.PNG',
'/gfx/QRs/QG3.PNG',
'/gfx/QRs/QG4.PNG',
'/gfx/QRs/QG5.PNG',
'/gfx/QRs/QG6.PNG',
'/gfx/QRs/QG7.PNG',
'/js/settime.js',
'/js/colors.js',
'/js/cookies.js',
'/css/roboto.woff',
'/css/Roboto-Bold.woff2',
'/css/Roboto-Regular.woff2',
'/css/Roboto-Medium.woff2',
'/css/jquery.min.js',
'/js/jquery2.min.js',
'/js/jquerymobile.min.js',
'/css/jquerymobile.min.css',
'/css/bootstrap.min.css',
'/css/bootstrap.min.js',
'/css/index.css',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('returned cache');
          console.log(event.request);
          return response;
          
        }
        console.log('fetched');
        return fetch(event.request);
      }
    )
  );
});


/*
self.addEventListener('fetch', function(event) {
 // console.log(event.request);
  event.respondWith(caches.match(event.request));
});*/
