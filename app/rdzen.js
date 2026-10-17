/* Rdzeń: przestrzeń nazw, rejestr tematów, narzędzia, pamięć, ustawienia, nawigacja. */
var H5 = window.H5 = window.H5 || {};

/* ---------- rejestr tematów ---------- */
H5.tematy = {};          // id → temat
H5.spisTematow = null;   // { rozdzialy: [...], pliki: [...] }

window.Tematy = {
  dodaj: function (t) { H5.tematy[t.id] = t; },
  spis: function (cfg) {
    H5.spisTematow = cfg;
    var brakujace = cfg.pliki.filter(function (plik) {
      var m = plik.match(/(r\d+-t\d+)/);
      return !(m && H5.tematy[m[1]]);
    });
    (function laduj(i) {
      if (i >= brakujace.length) { H5.uruchom(); return; }
      var s = document.createElement("script");
      s.src = brakujace[i];
      s.onload = function () { laduj(i + 1); };
      s.onerror = function () { console.error("Nie udało się wczytać " + brakujace[i]); laduj(i + 1); };
      document.body.appendChild(s);
    })(0);
  }
};

/* Lista tematów w kolejności ze spisu (tylko wczytane). */
H5.listaTematow = function () {
  var wynik = [];
  (H5.spisTematow ? H5.spisTematow.rozdzialy : []).forEach(function (r) {
    r.tematy.forEach(function (id) { if (H5.tematy[id]) wynik.push(H5.tematy[id]); });
  });
  return wynik;
};

/* ---------- narzędzia ---------- */
H5.u = {
  el: function (tag, atr) {
    var e = document.createElement(tag);
    atr = atr || {};
    Object.keys(atr).forEach(function (k) {
      var v = atr[k];
      if (v === null || v === undefined || v === false) return;
      if (k === "klasa") e.className = v;
      else if (k === "tekst") e.textContent = v;
      else if (k === "html") e.innerHTML = v;
      else if (k === "na") Object.keys(v).forEach(function (ev) { e.addEventListener(ev, v[ev]); });
      else if (k === "styl") e.setAttribute("style", v);
      else e.setAttribute(k, v === true ? "" : v);
    });
    for (var i = 2; i < arguments.length; i++) H5.u.dodaj(e, arguments[i]);
    return e;
  },
  dodaj: function (rodzic, dziecko) {
    if (dziecko === null || dziecko === undefined || dziecko === false) return;
    if (Array.isArray(dziecko)) { dziecko.forEach(function (d) { H5.u.dodaj(rodzic, d); }); return; }
    rodzic.appendChild(typeof dziecko === "string" || typeof dziecko === "number" ? document.createTextNode(String(dziecko)) : dziecko);
  },
  wyczysc: function (e) { while (e.firstChild) e.removeChild(e.firstChild); },
  tasuj: function (tab, los) {
    var t = tab.slice(), r = los || Math.random;
    for (var i = t.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var x = t[i]; t[i] = t[j]; t[j] = x; }
    return t;
  },
  // tasuje, ale nie zostawia układu, który od razu zdradza odpowiedź (np. elementy już po kolei)
  tasujInaczej: function (tab, zdradza) {
    var t = H5.u.tasuj(tab);
    for (var proba = 0; proba < 20 && tab.length > 1 && zdradza(t); proba++) t = H5.u.tasuj(tab);
    return t;
  },
  poKolei: function (t) { return t.every(function (x, i) { return x === i; }); },
  losuj: function (tab, n, los) { return H5.u.tasuj(tab, los).slice(0, n); },
  // powtarzalny generator losowy (sprawdzian A/B, wyzwanie dnia)
  ziarno: function (tekst) {
    var h = 1779033703 ^ tekst.length;
    for (var i = 0; i < tekst.length; i++) { h = Math.imul(h ^ tekst.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
    var a = h >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  },
  dzis: function () { return H5.u.data(new Date()); },
  data: function (d) {
    var m = d.getMonth() + 1, dz = d.getDate();
    return d.getFullYear() + "-" + (m < 10 ? "0" : "") + m + "-" + (dz < 10 ? "0" : "") + dz;
  },
  dodajDni: function (dataTekst, n) {
    var p = dataTekst.split("-"), d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n);
    return H5.u.data(d);
  },
  dniMiedzy: function (od, doD) {
    var a = od.split("-"), b = doD.split("-");
    return Math.round((new Date(+b[0], +b[1] - 1, +b[2]) - new Date(+a[0], +a[1] - 1, +a[2])) / 86400000);
  },
  odmiana: function (n, jeden, kilka, wiele) {
    if (n === 1) return jeden;
    var j = n % 10, d = n % 100;
    return (j >= 2 && j <= 4 && (d < 12 || d > 14)) ? kilka : wiele;
  },
  proc: function (x) { return Math.round(x * 100); },
  dataCzytelna: function (dataTekst) {
    var mies = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];
    var p = dataTekst.split("-");
    return (+p[2]) + " " + mies[+p[1] - 1];
  },
  // "podr. s. 9" → "podręcznik s. 9"
  zrodlo: function (z) {
    return (z || "").replace(/podr\./g, "podręcznik").replace(/ćw\./g, "ćwiczenia").replace(/zad\./g, "zadanie");
  }
};

/* ---------- pamięć (localStorage z bezpiecznym zapasem w pamięci) ---------- */
H5.pamiec = (function () {
  var zapas = {}, PRZED = "h5:";
  return {
    czytaj: function (klucz, domyslna) {
      try {
        var v = window.localStorage.getItem(PRZED + klucz);
        if (v !== null) return JSON.parse(v);
      } catch (e) { if (klucz in zapas) return zapas[klucz]; }
      return klucz in zapas ? zapas[klucz] : domyslna;
    },
    zapisz: function (klucz, wartosc) {
      zapas[klucz] = wartosc;
      try { window.localStorage.setItem(PRZED + klucz, JSON.stringify(wartosc)); } catch (e) { /* tryb prywatny */ }
    },
    usun: function (klucz) {
      delete zapas[klucz];
      try { window.localStorage.removeItem(PRZED + klucz); } catch (e) { /* nic */ }
    }
  };
})();

/* ---------- ustawienia ---------- */
H5.DOMYSLNE = {
  imie: "Mikołaj",
  glos: "",                 // voiceURI; pusty = najlepszy polski
  tempo: 1,
  czytajSamo: true,         // polecenie + pytanie + wyjaśnienie
  czytajWarianty: false,    // warianty A–D tylko po dotknięciu 🔊
  dzwieki: true,
  glosnosc: 0.7,
  spokojneEfekty: false,
  pokazC: false,            // ciekawostki w treningu
  sprawdzian: { data: "", tematy: [] }
};
H5.ust = (function () {
  var z = H5.pamiec.czytaj("ustawienia", {});
  var u = JSON.parse(JSON.stringify(H5.DOMYSLNE));
  Object.keys(z || {}).forEach(function (k) { u[k] = z[k]; });
  return u;
})();
H5.zapiszUstawienia = function () { H5.pamiec.zapisz("ustawienia", H5.ust); };

/* Zakres sprawdzianu: wybrane tematy albo wszystkie. */
H5.zakres = function () {
  var wybrane = (H5.ust.sprawdzian.tematy || []).filter(function (id) { return H5.tematy[id]; });
  return wybrane.length ? wybrane : H5.listaTematow().map(function (t) { return t.id; });
};

/* ---------- zdarzenia ---------- */
H5.sluchacze = {};
H5.on = function (nazwa, fn) { (H5.sluchacze[nazwa] = H5.sluchacze[nazwa] || []).push(fn); };
H5.emit = function (nazwa, dane) { (H5.sluchacze[nazwa] || []).forEach(function (fn) { fn(dane); }); };

/* ---------- okienka (zamiast confirm/alert, które bywają blokowane) ---------- */
H5.okno = function (tekst, przyciski) {
  var el = H5.u.el;
  var tlo = el("div", { klasa: "nowa-ranga", role: "dialog", "aria-modal": "true" });
  var karta = el("div", { klasa: "nowa-ranga-karta" }, el("p", { tekst: tekst, styl: "font-size:18px;font-weight:500" }));
  var rzad = el("div", { klasa: "przyciski-koniec" });
  przyciski.forEach(function (p) {
    rzad.appendChild(el("button", { klasa: "btn " + (p.glowny ? "btn-glowny" : "btn-drugi"), type: "button", tekst: p.tekst, na: {
      click: function () { tlo.remove(); if (p.akcja) p.akcja(); }
    } }));
  });
  karta.appendChild(rzad);
  tlo.appendChild(karta);
  document.body.appendChild(tlo);
  var pierwszy = rzad.querySelector(".btn-glowny") || rzad.querySelector("button");
  if (pierwszy) pierwszy.focus();
};
H5.potwierdz = function (tekst, tak, etykietaTak) {
  H5.okno(tekst, [{ tekst: "Anuluj" }, { tekst: etykietaTak || "Tak", glowny: true, akcja: tak }]);
};
H5.komunikat = function (tekst) { H5.okno(tekst, [{ tekst: "OK", glowny: true }]); };

/* ---------- nawigacja ---------- */
H5.ekrany = {};           // nazwa → function(parametry) zwracająca element
H5.historia = [];
H5.idz = function (nazwa, param, opcje) {
  opcje = opcje || {};
  if (H5.mowa) H5.mowa.stop();
  if (!opcje.zastap && H5.biezacy) H5.historia.push(H5.biezacy);
  H5.biezacy = { nazwa: nazwa, param: param || {} };
  H5.rysuj();
};
H5.wstecz = function () {
  if (H5.mowa) H5.mowa.stop();
  H5.biezacy = H5.historia.pop() || { nazwa: "start", param: {} };
  H5.rysuj();
};
H5.domowy = function () {
  if (H5.mowa) H5.mowa.stop();
  H5.historia = [];
  H5.biezacy = { nazwa: "start", param: {} };
  H5.rysuj();
};
H5.rysuj = function () {
  var app = document.getElementById("app");
  var ekran = H5.ekrany[H5.biezacy.nazwa] || H5.ekrany.start;
  H5.u.wyczysc(app);
  app.appendChild(ekran(H5.biezacy.param));
  window.scrollTo(0, 0);
};
