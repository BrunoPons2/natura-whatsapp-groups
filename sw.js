const CACHE_PREFIX = "natura-whatsapp-groups-";
const CACHE_NAME = CACHE_PREFIX + "mobile-v19";
const APP_FILES = ["./", "./index.html", "./styles.css?v=19", "./app.js?v=19", "./data/groups.js?v=19", "./data/administrator-contacts.json", "./manifest.webmanifest", "./icons/favicon.svg", "./icons/app-icon-192.png", "./icons/app-icon-512.png"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope) || url.pathname.includes("/api/")) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(event.request, { cache: "no-cache" });
      if (response.ok) await cache.put(event.request, response.clone());
      return response;
    } catch {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      if (event.request.mode === "navigate") return (await cache.match("./index.html")) || Response.error();
      return Response.error();
    }
  })());
});
