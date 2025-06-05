// Service Worker para optimizar el cache de recursos críticos
const CACHE_NAME = 'jamcam-2025-v1';
const BANNER_CACHE = 'jamcam-banners-v1';

// Recursos críticos para cachear inmediatamente
const CRITICAL_RESOURCES = [
  '/images/banner-home-mobile.webp',
  '/images/banner-home-desktop.webp',
  '/images/logo-jamcam-white.svg',
  '/fonts/noto-sans-v36-latin-300.woff2',
  '/fonts/noto-sans-v36-latin-regular.woff2',
  '/fonts/noto-sans-v36-latin-600.woff2',
  '/fonts/noto-sans-v36-latin-700.woff2'
];

// Banners de otras páginas para pre-cache
const BANNER_RESOURCES = [
  '/images/banner-about-mobile-es.webp',
  '/images/banner-about-desktop-es.webp',
  '/images/banner-program-mobile-es.webp',
  '/images/banner-program-desktop-es.webp',
  '/images/banner-resources-mobile-es.webp',
  '/images/banner-resources-desktop-es.webp',
  '/images/banner-contacts-mobile-es.webp',
  '/images/banner-contacts-desktop-es.webp'
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      // Cache recursos críticos
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(CRITICAL_RESOURCES);
      }),
      // Cache banners con estrategia diferente
      caches.open(BANNER_CACHE).then((cache) => {
        return cache.addAll(BANNER_RESOURCES.slice(0, 4)); // Cache solo los primeros 4
      })
    ])
  );
  self.skipWaiting();
});

// Activación del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== BANNER_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia de fetch
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Solo interceptar requests del mismo origen
  if (url.origin !== location.origin) {
    return;
  }

  // Estrategia especial para banners
  if (url.pathname.includes('/images/banner-')) {
    event.respondWith(
      caches.open(BANNER_CACHE).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            // Actualizar cache en background si el recurso ya existe
            fetch(event.request).then((fetchResponse) => {
              if (fetchResponse.ok) {
                cache.put(event.request, fetchResponse.clone());
              }
            }).catch(() => {
              // Ignorar errores de red en background
            });
            return response;
          }
          
          // Si no está en cache, hacer fetch y cachear
          return fetch(event.request).then((fetchResponse) => {
            if (fetchResponse.ok) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        });
      })
    );
    return;
  }

  // Estrategia cache-first para recursos críticos
  if (CRITICAL_RESOURCES.some(resource => url.pathname === resource)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
    return;
  }

  // Para todo lo demás, usar network-first
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});

// Pre-cache banners adicionales cuando el navegador esté idle
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PRECACHE_BANNERS') {
    const locale = event.data.locale || 'es';
    const additionalBanners = [
      `/images/banner-about-mobile-${locale}.webp`,
      `/images/banner-about-desktop-${locale}.webp`,
      `/images/banner-program-mobile-${locale}.webp`,
      `/images/banner-program-desktop-${locale}.webp`,
      `/images/banner-resources-mobile-${locale}.webp`,
      `/images/banner-resources-desktop-${locale}.webp`
    ];

    caches.open(BANNER_CACHE).then((cache) => {
      additionalBanners.forEach((banner) => {
        fetch(banner).then((response) => {
          if (response.ok) {
            cache.put(banner, response);
          }
        }).catch(() => {
          // Ignorar errores de red
        });
      });
    });
  }
}); 