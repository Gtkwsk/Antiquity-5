/* Postępy: pudełka powtórek (Leitner), opanowanie faktów, gotowość, XP, rangi, seria dni, odznaki. */
H5.postepy = (function () {
  var PUSTY = { zadania: {}, xp: 0, seria: { dni: 0, ostatni: "" }, odznaki: {}, historia: [], wyzwanie: {}, dzis: { data: "", liczba: 0 } };
  var stan = H5.pamiec.czytaj("postepy", null) || JSON.parse(JSON.stringify(PUSTY));
  Object.keys(PUSTY).forEach(function (k) { if (stan[k] === undefined) stan[k] = JSON.parse(JSON.stringify(PUSTY[k])); });
  function zapisz() { H5.pamiec.zapisz("postepy", stan); }

  var RANGI = [
    { nr: 1, nazwa: "Zbieracz", od: 0, opis: "Zbierasz pierwsze wiadomości o przeszłości." },
    { nr: 2, nazwa: "Łowca", od: 150, opis: "Tropisz odpowiedzi jak myśliwy zwierzynę." },
    { nr: 3, nazwa: "Rolnik", od: 400, opis: "Twoja wiedza rośnie jak zboże na polu." },
    { nr: 4, nazwa: "Garncarz", od: 800, opis: "Lepisz wiedzę w solidne naczynia." },
    { nr: 5, nazwa: "Kowal", od: 1400, opis: "Wykuwasz odpowiedzi twarde jak żelazo." },
    { nr: 6, nazwa: "Skryba", od: 2200, opis: "Zapisujesz historię bez jednego błędu." },
    { nr: 7, nazwa: "Kapłan", od: 3300, opis: "Znasz tajemnice starożytnych świątyń." },
    { nr: 8, nazwa: "Faraon", od: 4700, opis: "Rządzisz historią jak władca Egiptu." },
    { nr: 9, nazwa: "Mędrzec", od: 6500, opis: "Wiesz więcej niż niejeden uczony." }
  ];
  function ranga(xp) {
    xp = xp === undefined ? stan.xp : xp;
    var r = RANGI[0];
    RANGI.forEach(function (x) { if (xp >= x.od) r = x; });
    var nast = RANGI[r.nr] || null;
    return { nr: r.nr, nazwa: r.nazwa, opis: r.opis, od: r.od, do: nast ? nast.od : null, nastepna: nast ? nast.nazwa : null };
  }

  var ODZNAKI = [
    { id: "pierwszy", nazwa: "Pierwszy krok", opis: "Pierwszy trening za tobą" },
    { id: "bez-bledu", nazwa: "Bez błędu", opis: "Runda bez żadnej pomyłki" },
    { id: "seria-3", nazwa: "3 dni z rzędu", opis: "Trzy dni nauki bez przerwy" },
    { id: "seria-7", nazwa: "7 dni z rzędu", opis: "Tydzień nauki bez przerwy" },
    { id: "mistrz", nazwa: "Mistrz tematu", opis: "Temat opanowany w 90%" },
    { id: "probny-90", nazwa: "Gotowy!", opis: "Sprawdzian próbny na min. 90%" },
    { id: "kartograf", nazwa: "Kartograf", opis: "Wszystkie zadania z mapą opanowane" },
    { id: "znawca-dat", nazwa: "Znawca dat", opis: "Wszystkie zadania z datami opanowane" },
    { id: "krzyzowka", nazwa: "Szaradzista", opis: "Krzyżówka rozwiązana bezbłędnie" }
  ];

  /* ----- pudełka powtórek ----- */
  var ODSTEPY = [0, 1, 2, 4, 7, 14];
  function odstep(poz) {
    var d = ODSTEPY[poz] || 1, spr = H5.ust.sprawdzian.data;
    if (spr) {
      var zostalo = H5.u.dniMiedzy(H5.u.dzis(), spr);
      if (zostalo > 0) d = Math.min(d, Math.max(1, Math.floor(zostalo / 2)));
    }
    return d;
  }
  function rekord(klucz) { return stan.zadania[klucz] || null; }
  function poziom(klucz) { var r = rekord(klucz); return r ? r.poz : 0; }

  /* wynik: "ok" | "pol" | "zle" */
  function odpowiedz(klucz, wynik) {
    var dzis = H5.u.dzis();
    var r = stan.zadania[klucz] || (stan.zadania[klucz] = { poz: 0, ok: 0, zle: 0, nast: dzis, ost: "" });
    if (wynik === "ok") { r.poz = Math.min(5, r.poz + 1); r.ok++; }
    else if (wynik === "pol") { r.poz = Math.max(1, r.poz); r.zle++; }
    else { r.poz = 1; r.zle++; }
    r.nast = wynik === "ok" ? H5.u.dodajDni(dzis, odstep(r.poz)) : dzis;
    r.ost = dzis;
    if (stan.dzis.data !== dzis) stan.dzis = { data: dzis, liczba: 0 };
    stan.dzis.liczba++;
    odnotujDzien();
    zapisz();
  }
  function doPowtorki(klucz) { var r = rekord(klucz); return !!(r && r.nast <= H5.u.dzis()); }
  function opanowane(klucz) { return poziom(klucz) >= 3; }
  /* Ostatnia odpowiedź: po dobrej następna powtórka jest najwcześniej jutro (nast > ost),
     po błędnej lub połowicznej – jeszcze dziś (nast = ost). */
  function dobrze(klucz) { var r = rekord(klucz); return !!(r && r.nast > r.ost); }
  function bladDoPoprawy(klucz) { var r = rekord(klucz); return !!(r && r.nast <= r.ost); }
  function dzisZrobione() { return stan.dzis.data === H5.u.dzis() ? stan.dzis.liczba : 0; }

  /* ----- opanowanie faktów i gotowość ----- */
  // liczą się tylko zadania, które pojawiają się w treningu (bez fiszek, krzyżówek i ukrytych ciekawostek C)
  function faktOpanowanie(tematId, wId) {
    var zad = H5.gen.zadaniaTematu(tematId).filter(function (z) { return z.wiedza && z.wiedza.indexOf(wId) >= 0 && H5.gen.doNauki(z); });
    if (!zad.length) return 0;
    var s = 0;
    zad.forEach(function (z) { s += Math.min(poziom(z.klucz), 3) / 3; });
    return s / zad.length;
  }
  function stanFaktu(tematId, wId) {
    var m = faktOpanowanie(tematId, wId);
    if (m >= 0.9) return "umie";
    var probowal = H5.gen.zadaniaTematu(tematId).some(function (z) { return z.wiedza && z.wiedza.indexOf(wId) >= 0 && rekord(z.klucz); });
    return probowal ? "uczy" : "nowy";
  }
  var WAGI = { A: 3, B: 2, C: 1 };
  function gotowosc(tematyIds) {
    var suma = 0, wagi = 0;
    (tematyIds || H5.zakres()).forEach(function (id) {
      var t = H5.tematy[id];
      if (!t) return;
      t.wiedza.forEach(function (w) {
        if (w.priorytet === "C" && !H5.ust.pokazC) return;
        suma += WAGI[w.priorytet] * faktOpanowanie(id, w.id);
        wagi += WAGI[w.priorytet];
      });
    });
    return wagi ? suma / wagi : 0;
  }

  /* ----- XP, seria, odznaki, historia ----- */
  function dodajXP(n) {
    var przed = ranga().nr;
    stan.xp += n;
    zapisz();
    var po = ranga();
    H5.emit("xp", stan.xp);
    return po.nr > przed ? po : null;
  }
  function odnotujDzien() {
    var dzis = H5.u.dzis();
    if (stan.seria.ostatni === dzis) return;
    stan.seria.dni = stan.seria.ostatni === H5.u.dodajDni(dzis, -1) ? stan.seria.dni + 1 : 1;
    stan.seria.ostatni = dzis;
    if (stan.seria.dni >= 3) przyznaj("seria-3");
    if (stan.seria.dni >= 7) przyznaj("seria-7");
  }
  function seria() {
    var dzis = H5.u.dzis();
    return (stan.seria.ostatni === dzis || stan.seria.ostatni === H5.u.dodajDni(dzis, -1)) ? stan.seria.dni : 0;
  }
  function przyznaj(id) {
    if (stan.odznaki[id]) return false;
    stan.odznaki[id] = H5.u.dzis();
    zapisz();
    return true;
  }
  function dodajHistorie(wpis) {
    wpis.data = H5.u.dzis();
    stan.historia.unshift(wpis);
    stan.historia = stan.historia.slice(0, 60);
    zapisz();
  }

  /* ----- kopia zapasowa ----- */
  function eksport() { return JSON.stringify({ wersja: 1, postepy: stan, ustawienia: H5.ust }); }
  function importuj(tekst) {
    var d = JSON.parse(tekst);
    if (!d || !d.postepy || !d.postepy.zadania) throw new Error("To nie jest kopia postępów z tej aplikacji.");
    stan = d.postepy; zapisz();
    if (d.ustawienia) { H5.ust = d.ustawienia; H5.zapiszUstawienia(); }
  }
  function wyczysc() { stan = JSON.parse(JSON.stringify(PUSTY)); zapisz(); }

  return {
    get stan() { return stan; },
    RANGI: RANGI, ODZNAKI: ODZNAKI,
    zapisz: zapisz, ranga: ranga, poziom: poziom, rekord: rekord, odpowiedz: odpowiedz,
    doPowtorki: doPowtorki, opanowane: opanowane, dobrze: dobrze, bladDoPoprawy: bladDoPoprawy, dzisZrobione: dzisZrobione,
    faktOpanowanie: faktOpanowanie, stanFaktu: stanFaktu, gotowosc: gotowosc,
    dodajXP: dodajXP, seria: seria, przyznaj: przyznaj, dodajHistorie: dodajHistorie,
    eksport: eksport, importuj: importuj, wyczysc: wyczysc
  };
})();
