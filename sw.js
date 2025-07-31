// Service Worker for IllWell Nutrition Website
// Optimized for GitHub Pages deployment

const CACHE_NAME = 'illwell-v1.1.0';
const urlsToCache = [
  '/illwell/',
  '/illwell/assets/index-CjFUrrW5.js',
  '/illwell/assets/index-Cf7nq8eU.css',
  '/illwell/assets/illwell-logo-DQAAfMbo.png',
  '/illwell/assets/gm-CX7yBUqb.png',
  '/illwell/assets/pct-C8Qrhxdp.png',
  '/illwell/assets/jd-B7Q_j7X0.png',
  '/illwell/assets/ll-Bu04P9yJ.png'
];

self.addEventListener('install', function(event) {
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
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

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