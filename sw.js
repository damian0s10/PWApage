self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('store').then(function(cache) {
        return cache.addAll([
          './',
          './index.html',
          './index.js',
          './style.css'
          
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         console.log("response", response);
         return response || fetch(e.request);
       })
     );
   });