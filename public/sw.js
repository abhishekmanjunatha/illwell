// Service Worker for IllWell Nutrition Website
// Optimized for fast loading and offline support

const CACHE_NAME = 'illwell-v1.0.0';
const urlsToCache = [
  '/',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/App.css',
  '/src/assets/illwell-logo.png',
  '/src/assets/illwell-logo-simple.svg',
  '/src/assets/gm.png',
  '/src/assets/pct.png',
  '/src/assets/jd.png',
  '/src/assets/Lybrate-logo.png',
  '/src/assets/icon-weight.svg',
  '/src/assets/icon-diabetes.svg',
  '/src/assets/icon-family.svg',
  '/src/assets/icon-sports.svg',
  '/src/assets/icon-check.svg',
  '/src/assets/icon-quote.svg'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
