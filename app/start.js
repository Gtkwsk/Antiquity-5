/* Start aplikacji – wywoływany przez tematy/spis.js, gdy wszystkie tematy są wczytane. */
H5.uruchom = function () {
  if (H5.uruchomiona) return;
  H5.uruchomiona = true;

  // wstępne wczytanie głosów (Chrome ładuje je asynchronicznie)
  if (H5.mowa.dostepna) H5.mowa.glosy();

  // tryb offline: działa tylko pod adresem http(s), nie z pliku ani w podglądzie
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol) && !window.H5_PAKIET) {
    try { navigator.serviceWorker.register("sw.js").catch(function () { /* bez trybu offline */ }); } catch (e) { /* nic */ }
  }

  H5.domowy();
};
