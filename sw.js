const CACHE_NAME = "rural-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/classificacao.html",
  "/noticias.html",
  "/partidas.html",
  "/players.html",
  "/players_data.json",
  
  "/styles/styles.css",
  "/styles/index.css",
  "/styles/noticias.css",
  "/styles/players.css",
  "/styles/stylespart.css",

  "/scripts/index.js",
  "/scripts/noticias.js",
  "/scripts/partidas.js",
  "/scripts/players.js",
  "/scripts/scripts.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
