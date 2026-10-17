/* Tryb offline: zapisuje pliki aplikacji w pamięci przeglądarki.
   Po zmianie plików lub dodaniu tematu zwiększ WERSJA i dopisz nowy plik do PLIKI. */
var WERSJA = "historia5-20260922-1108";
var PLIKI = ["./", "index.html", "manifest.webmanifest", "app/ekrany-inne.js", "app/ekrany-start.js", "app/generator.js", "app/ikony.js", "app/mapa.js", "app/mowa.js", "app/oprawa.js", "app/postepy.js", "app/rdzen.js", "app/sesja.js", "app/start.js", "app/styl-zadania.css", "app/styl.css", "app/zadania-1.js", "app/zadania-2.js", "app/zadania-3.js", "ikony/ikona-192.png", "ikony/ikona-512.png", "tematy/r1-t01-zycie-pierwszych-ludzi.js", "tematy/r1-t02-miasta-panstwa-mezopotamii.js", "tematy/r1-t03-w-egipcie-faraonow.js", "tematy/spis.js"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(WERSJA).then(function (c) { return c.addAll(PLIKI); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (klucze) {
    return Promise.all(klucze.filter(function (k) { return k !== WERSJA; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// najpierw sieć (świeże tematy), a bez internetu – kopia z pamięci
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function (odp) {
      if (odp && odp.ok && new URL(e.request.url).origin === location.origin) {
        var kopia = odp.clone();
        caches.open(WERSJA).then(function (c) { c.put(e.request, kopia); });
      }
      return odp;
    }).catch(function () { return caches.match(e.request, { ignoreSearch: true }); })
  );
});
