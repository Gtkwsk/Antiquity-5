/* Generator: zadania tematu (ręczne + automatyczne), rundy, wyzwanie dnia, sprawdzian próbny, punktacja. */
H5.gen = (function () {
  var u = H5.u, pamiecTematow = {};

  var TRYBY = [
    { id: "wybor", nazwa: "Quiz ABCD", ikona: "quiz", typy: ["wybor", "ilustracja"] },
    { id: "pf", nazwa: "Prawda czy fałsz", ikona: "pf", typy: ["pf"] },
    { id: "pary", nazwa: "Dopasuj pary", ikona: "pary", typy: ["pary"] },
    { id: "os", nazwa: "Oś czasu", ikona: "os", typy: ["os", "liczenie"] },
    { id: "mapa", nazwa: "Mapa", ikona: "mapa", typy: ["mapa"] },
    { id: "luki", nazwa: "Uzupełnij tekst", ikona: "luki", typy: ["luki", "nawiasy"] },
    { id: "kategorie", nazwa: "Tabela", ikona: "tabela", typy: ["kategorie"] },
    { id: "kolejnosc", nazwa: "Kolejność", ikona: "kolejnosc", typy: ["kolejnosc"] },
    { id: "intruz", nazwa: "Co nie pasuje", ikona: "intruz", typy: ["intruz"] },
    { id: "otwarte", nazwa: "Wyjaśnij", ikona: "wyjasnij", typy: ["otwarte"] },
    { id: "krzyzowka", nazwa: "Krzyżówki", ikona: "krzyzowka", typy: ["krzyzowka"] },
    { id: "pojecia", nazwa: "Pojęcia – fiszki", ikona: "fiszki", typy: ["fiszka"], rodzaj: "pojecie" },
    { id: "daty", nazwa: "Daty – fiszki", ikona: "daty", typy: ["fiszka"], rodzaj: "data" },
    { id: "kto", nazwa: "Kto czym słynie", ikona: "kto", typy: ["wybor", "pary"], rodzaj: "postac" }
  ];

  function najwyzszy(lista) {
    return lista.some(function (x) { return x.priorytet === "A"; }) ? "A" : (lista.some(function (x) { return x.priorytet === "B"; }) ? "B" : "C");
  }
  function sumaWiedzy(lista) {
    var s = {};
    lista.forEach(function (x) { (x.wiedza || []).forEach(function (w) { s[w] = 1; }); });
    return Object.keys(s);
  }
  function grupy(tab, rozmiar) {
    var w = [];
    for (var i = 0; i + rozmiar <= tab.length; i += rozmiar) w.push(tab.slice(i, i + rozmiar));
    var reszta = tab.length % rozmiar;
    if (reszta >= 3) w.push(tab.slice(tab.length - reszta));
    return w;
  }

  /* ----- zadania automatyczne ----- */
  function automatyczne(t) {
    var wynik = [], los = u.ziarno(t.id);
    var poj = t.pojecia || [], daty = t.daty || [], post = t.postacie || [];

    poj.forEach(function (p) {
      var inne = u.losuj(poj.filter(function (x) { return x !== p; }), 3, u.ziarno(p.id));
      if (inne.length < 2) return;
      wynik.push({ id: "auto-pd-" + p.id, typ: "wybor", priorytet: p.priorytet, wiedza: p.wiedza, zrodlo: p.zrodlo, rodzaj: "pojecie",
        pytanie: "Co oznacza pojęcie „" + p.termin + "”?",
        odpowiedzi: [p.definicja].concat(inne.map(function (x) { return x.definicja; })), poprawna: 0,
        wyjasnienie: p.termin + " – " + p.definicja + "." });
      wynik.push({ id: "auto-pt-" + p.id, typ: "wybor", priorytet: p.priorytet, wiedza: p.wiedza, zrodlo: p.zrodlo, rodzaj: "pojecie",
        pytanie: "Jak nazywa się: " + p.definicja + "?",
        odpowiedzi: [p.termin].concat(inne.map(function (x) { return x.termin; })), poprawna: 0,
        wyjasnienie: "To " + p.termin + "." });
      wynik.push({ id: "auto-fp-" + p.id, typ: "fiszka", priorytet: p.priorytet, wiedza: p.wiedza, zrodlo: p.zrodlo, rodzaj: "pojecie",
        przod: p.termin, tyl: p.definicja, wyjasnienie: p.termin + " – " + p.definicja + "." });
    });
    grupy(u.tasuj(poj.filter(function (p) { return p.priorytet !== "C"; }), los), 4).forEach(function (g, i) {
      wynik.push({ id: "auto-pp-" + i, typ: "pary", priorytet: najwyzszy(g), wiedza: sumaWiedzy(g), zrodlo: g[0].zrodlo, rodzaj: "pojecie",
        polecenie: "Połącz pojęcia z ich wyjaśnieniami.", naglowki: ["Pojęcie", "Wyjaśnienie"],
        pary: g.map(function (p) { return [p.termin, p.definicja]; }),
        wyjasnienie: g.map(function (p) { return p.termin + " – " + p.definicja; }).join(". ") + "." });
    });

    daty.forEach(function (d) {
      wynik.push({ id: "auto-fd-" + d.id, typ: "fiszka", priorytet: d.priorytet, wiedza: d.wiedza, zrodlo: d.zrodlo, rodzaj: "data",
        przod: d.co, tyl: d.kiedy, wyjasnienie: d.co + ": " + d.kiedy + "." });
      var inne = u.losuj(daty.filter(function (x) { return x !== d && x.kiedy !== d.kiedy; }), 3, u.ziarno(d.id));
      if (inne.length < 3) return;
      wynik.push({ id: "auto-dk-" + d.id, typ: "wybor", priorytet: d.priorytet, wiedza: d.wiedza, zrodlo: d.zrodlo, rodzaj: "data",
        pytanie: "Kiedy? " + d.co.charAt(0).toUpperCase() + d.co.slice(1) + ".",
        odpowiedzi: [d.kiedy].concat(inne.map(function (x) { return x.kiedy; })), poprawna: 0,
        wyjasnienie: d.co.charAt(0).toUpperCase() + d.co.slice(1) + " – " + d.kiedy + "." });
    });
    var naOsi = u.tasuj(daty.filter(function (d) { return d.naOsi && d.priorytet !== "C"; }), los);
    grupy(naOsi, 4).slice(0, 3).forEach(function (g, i) {
      var posort = g.slice().sort(function (a, b) { return a.rok - b.rok; });
      wynik.push({ id: "auto-do-" + i, typ: "os", priorytet: najwyzszy(g), wiedza: sumaWiedzy(g), zrodlo: g[0].zrodlo, rodzaj: "data",
        wydarzenia: g.map(function (d) { return d.id; }),
        wyjasnienie: posort.map(function (d) { return d.co + " (" + d.kiedy + ")"; }).join(" → ") + "." });
    });

    post.forEach(function (o) {
      var inne = u.losuj(post.filter(function (x) { return x !== o; }), 3, u.ziarno(o.id));
      if (inne.length < 2) return;
      // mnoga: true – lud, np. Sumerowie („Z czego słyną…?”)
      wynik.push({ id: "auto-ks-" + o.id, typ: "wybor", priorytet: o.priorytet, wiedza: o.wiedza, zrodlo: o.zrodlo, rodzaj: "postac",
        pytanie: "Z czego " + (o.mnoga ? "słyną " : "słynie ") + o.kto + "?", odpowiedzi: [o.slynie].concat(inne.map(function (x) { return x.slynie; })), poprawna: 0,
        wyjasnienie: o.kto + " – " + o.slynie + "." });
    });
    grupy(u.tasuj(post, los), 4).forEach(function (g, i) {
      wynik.push({ id: "auto-kp-" + i, typ: "pary", priorytet: najwyzszy(g), wiedza: sumaWiedzy(g), zrodlo: g[0].zrodlo, rodzaj: "postac",
        polecenie: "Połącz postać z tym, z czego słynie.", naglowki: ["Kto?", "Z czego słynie?"],
        pary: g.map(function (o) { return [o.kto, o.slynie]; }),
        wyjasnienie: g.map(function (o) { return o.kto + " – " + o.slynie; }).join(". ") + "." });
    });
    return wynik;
  }

  function zadaniaTematu(id) {
    if (pamiecTematow[id]) return pamiecTematow[id];
    var t = H5.tematy[id];
    if (!t) return [];
    var lista = t.zadania.concat(automatyczne(t)).map(function (z) {
      var k = {};
      Object.keys(z).forEach(function (x) { k[x] = z[x]; });
      k.tematId = id;
      k.klucz = id + "/" + z.id;
      return k;
    });
    pamiecTematow[id] = lista;
    return lista;
  }
  function wszystkie(tematy) {
    var w = [];
    (tematy || H5.zakres()).forEach(function (id) { w = w.concat(zadaniaTematu(id)); });
    return w;
  }
  function doNauki(z) { return z.typ !== "fiszka" && z.typ !== "krzyzowka" && (z.priorytet !== "C" || H5.ust.pokazC); }
  function pasujeDoTrybu(z, tryb) {
    if (tryb.typy.indexOf(z.typ) < 0) return false;
    if (tryb.rodzaj) return z.rodzaj === tryb.rodzaj;
    if (z.rodzaj === "postac") return false;
    return z.priorytet !== "C" || H5.ust.pokazC;
  }
  function trybPoId(id) { return TRYBY.filter(function (t) { return t.id === id; })[0]; }

  var P = H5.postepy, WAGA_PRIO = { A: 0, B: 1, C: 2 };

  /* ----- runda ----- */
  function ulozRozmaicie(kandydaci, liczba, limitTypu, limitOtwartych) {
    var wybrane = [], ile = {}, uzyte = {};
    [limitTypu, 99].forEach(function (limit) {
      kandydaci.forEach(function (z) {
        if (wybrane.length >= liczba || uzyte[z.klucz]) return;
        var n = ile[z.typ] || 0;
        if (n >= limit) return;
        if (z.typ === "otwarte" && n >= limitOtwartych) return;
        wybrane.push(z); uzyte[z.klucz] = 1; ile[z.typ] = n + 1;
      });
    });
    return wybrane;
  }
  function przeplataj(lista, los) {
    var t = u.tasuj(lista, los);
    var i = t.findIndex(function (z) { return z.typ === "wybor" || z.typ === "pf"; });
    if (i > 0) { var x = t.splice(i, 1)[0]; t.unshift(x); }
    return t;
  }

  function runda(o) {
    o = o || {};
    var liczba = o.liczba || 10, tryb = o.tryb ? trybPoId(o.tryb) : null;
    var pula = wszystkie(o.tematy).filter(function (z) { return tryb ? pasujeDoTrybu(z, tryb) : doNauki(z); });
    if (o.bledy) {
      // zadania, w których ostatnia odpowiedź była błędna – znikają z listy po dobrej odpowiedzi
      return u.tasuj(pula.filter(function (z) { return P.bladDoPoprawy(z.klucz); })).slice(0, liczba);
    }
    if (o.kartkowka) {
      var los = Math.random;
      var a = u.tasuj(pula.filter(function (z) { return z.priorytet === "A"; }), los);
      var b = u.tasuj(pula.filter(function (z) { return z.priorytet !== "A"; }), los);
      return przeplataj(ulozRozmaicie(a.slice(0, 7).concat(b.slice(0, 3), a.slice(7), b.slice(3)), liczba, 3, 1));
    }
    var zalegle = pula.filter(function (z) { return P.doPowtorki(z.klucz); })
      .sort(function (x, y) { return P.rekord(x.klucz).nast < P.rekord(y.klucz).nast ? -1 : 1; });
    var nowe = u.tasuj(pula.filter(function (z) { return !P.rekord(z.klucz); }))
      .sort(function (x, y) { return WAGA_PRIO[x.priorytet] - WAGA_PRIO[y.priorytet]; });
    var slabe = pula.filter(function (z) { var r = P.rekord(z.klucz); return r && !P.doPowtorki(z.klucz) && r.poz < 3; })
      .sort(function (x, y) { return P.poziom(x.klucz) - P.poziom(y.klucz); });
    var reszta = u.tasuj(pula.filter(function (z) { var r = P.rekord(z.klucz); return r && !P.doPowtorki(z.klucz) && r.poz >= 3; }));
    var kolejka = zalegle.concat(nowe, slabe, reszta);
    if (tryb) return kolejka.slice(0, liczba);
    return przeplataj(ulozRozmaicie(kolejka, liczba, Math.max(3, Math.ceil(liczba / 3)), 1));
  }

  /* ----- wyzwanie dnia ----- */
  function wyzwanieDnia() {
    var pula = wszystkie().filter(function (z) { return z.priorytet === "A" && (z.typ === "wybor" || z.typ === "nawiasy"); });
    if (!pula.length) return null;
    return pula[Math.floor(u.ziarno("wyzwanie" + u.dzis())() * pula.length)];
  }

  /* ----- sprawdzian próbny ----- */
  function probny(tematy, grupa, numer) {
    var los = u.ziarno(grupa + "|" + numer + "|" + tematy.join(","));
    var pula = wszystkie(tematy).filter(function (z) { return z.typ !== "fiszka" && z.typ !== "krzyzowka" && z.priorytet !== "C"; });
    var uzyte = {}, wybrane = [], kolejTematu = 0;
    function wez(typy, warunek) {
      var kand = pula.filter(function (z) { return !uzyte[z.klucz] && typy.indexOf(z.typ) >= 0 && (!warunek || warunek(z)); });
      if (!kand.length) return null;
      var temat = tematy[kolejTematu++ % tematy.length];
      var zTematu = kand.filter(function (z) { return z.tematId === temat; });
      if (zTematu.length) kand = zTematu;
      var a = kand.filter(function (z) { return z.priorytet === "A"; });
      var zbior = (a.length && los() < 0.8) ? a : kand;
      var z = zbior[Math.floor(los() * zbior.length)];
      uzyte[z.klucz] = 1;
      return z;
    }
    var poczatek = [wez(["pf"]), wez(["wybor"]), wez(["wybor"]), wez(["pary"], function (z) { return z.rodzaj === "pojecie"; }) || wez(["pary"])];
    var srodek = [wez(["os"]), wez(["mapa"]), wez(["kategorie"]), wez(["luki", "nawiasy"]), wez(["kolejnosc"]), wez(["intruz"])];
    var koniec = [wez(["otwarte"]), wez(["otwarte"])];
    wybrane = poczatek.concat(srodek).filter(Boolean);
    var brakuje = 14 - wybrane.length - koniec.filter(Boolean).length;
    for (var i = 0; i < brakuje; i++) { var z = wez(["wybor", "nawiasy", "liczenie"]); if (z) wybrane.splice(4 + Math.floor(los() * (wybrane.length - 3)), 0, z); }
    return wybrane.concat(koniec.filter(Boolean));
  }

  /* ----- punktacja ----- */
  function punkty(z) {
    switch (z.typ) {
      case "pf": return z.zdania.length;
      case "pary": return z.pary.length;
      case "os": return z.wydarzenia.length;
      case "luki": return (z.tekst.match(/\{[^}]+\}/g) || []).length;
      case "nawiasy": return (z.tekst.match(/\[[^\]]+\]/g) || []).length;
      case "kategorie": return Math.ceil(z.elementy.length / 2);
      case "kolejnosc": return 2;
      case "otwarte": return z.wymagane;
      case "krzyzowka": return z.wiersze.length;
      default: return 1;
    }
  }
  function punktyZa(z, w) {
    switch (z.typ) {
      case "pf": case "pary": case "os": case "luki": case "nawiasy": case "krzyzowka": return w.dobre;
      case "kategorie": return w.pelne ? punkty(z) : Math.floor(w.dobre / 2);
      case "kolejnosc": return w.pelne ? 2 : (w.dobre >= w.wszystkie - 2 ? 1 : 0);
      case "otwarte": return Math.min(w.dobre, z.wymagane);
      default: return w.pelne ? 1 : 0;
    }
  }
  function ocena(w) { return w.pelne ? "ok" : (w.dobre > 0 && w.wszystkie > 1 ? "pol" : "zle"); }

  return {
    TRYBY: TRYBY, trybPoId: trybPoId, pasujeDoTrybu: pasujeDoTrybu,
    zadaniaTematu: zadaniaTematu, wszystkie: wszystkie, doNauki: doNauki,
    runda: runda, wyzwanieDnia: wyzwanieDnia, probny: probny,
    punkty: punkty, punktyZa: punktyZa, ocena: ocena
  };
})();
