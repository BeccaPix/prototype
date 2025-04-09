self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("dreamie-cache-3").then((cache) => { ////////////////
        return cache.addAll(["./", "./index.html"]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener("activate", (event) => {
    event.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(
          keyList.map((key) => {
            if (key !== "dreamie-cache-3") { ////////////////
              return caches.delete(key);
            }
          })
        );
      })
    );
  });
  

  // ➡️ Tu changes "dreamie-cache-v2" à chaque fois que tu modifies les fichiers.

