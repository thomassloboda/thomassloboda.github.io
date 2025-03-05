const urlsToCache = [
  "./assets/instagram.svg",
  "./assets/instagram_hover.svg",
  "./assets/linkedin.svg",
  "./assets/linkedin_hover.svg",
  "./assets/github.svg",
  "./assets/github_hover.svg",
  "./assets/sfeir.svg",
  "./assets/sfeir_hover.svg",
  "./assets/profile.png",
];
const CACHE_NAME = "image-cache-v1";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", async (event) => {
  if (event.request.destination === "image") {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          return (
            cachedResponse ||
            fetch(event.request.url).then((fetchedResponse) => {
              cache.put(event.request, fetchedResponse.clone());
              return fetchedResponse;
            })
          );
        });
      })
    );
  } else {
    return;
  }
});
