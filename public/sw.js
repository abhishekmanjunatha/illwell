// illwell Service Worker - Optimized for Lightning Performance
// Version 2.0 - Production Ready for Namecheap Hosting

const CACHE_NAME = 'illwell-v2.0.0';
const STATIC_CACHE_NAME = 'illwell-static-v2.0.0';
const DYNAMIC_CACHE_NAME = 'illwell-dynamic-v2.0.0';

// Critical resources to cache immediately (Cache First Strategy)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/sitemap.xml',
  '/robots.txt'
];

// Install event - Aggressive caching
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      console.log('[SW] Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      console.log('[SW] Installation complete');
      return self.skipWaiting(); // Activate immediately
    })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old caches
          if (cacheName !== CACHE_NAME && 
              cacheName !== STATIC_CACHE_NAME && 
              cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Activation complete');
      return self.clients.claim(); // Take control immediately
    })
  );
});

// Fetch event - Intelligent caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Cache First strategy for maximum speed
  event.respondWith(cacheFirst(request, CACHE_NAME));
});

// Cache First - Fastest strategy
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      // Update cache in background
      fetch(request).then((response) => {
        if (response.status === 200) {
          cache.put(request, response.clone());
        }
      }).catch(() => {}); // Silent fail
      
      return cachedResponse;
    }
    
    // Not in cache, fetch and cache
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
    
  } catch (error) {
    console.error('[SW] Cache First failed:', error);
    return fetch(request);
  }
}