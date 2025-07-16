self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('roleta-cache').then(function(cache) {
      return cache.addAll(['./roleta_feliz_pwa_instalavel.html']);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});