/* Przebieg sesji: pytanie → odpowiedź → werdykt (nauka) albo zbieranie wyników (test) → podsumowanie. */
H5.sesja = (function () {
  var u = H5.u, el = u.el;
  var POCHWALY = ["Dobrze", "Świetnie", "Brawo", "Tak jest", "Doskonale", "Super"];
  var NAZWY = { trening: "Trening", bledy: "Moje błędy", kartkowka: "Kartkówka", probny: "Sprawdzian próbny", typ: "Ćwiczenie", wyzwanie: "Wyzwanie dnia", fiszki: "Fiszki", krzyzowka: "Krzyżówka" };

  function start(o) {
    var s = {
      o: o, tryb: o.tryb || "nauka", kolejka: o.zadania.slice(), i: 0, wyniki: [], pierwsze: {},
      combo: 0, maxCombo: 0, xp: 0, powtorzone: {}
    };
    if (!s.kolejka.length) return false;
    // nowa runda z podsumowania (np. „Popraw błędy”) zastępuje je – „Wróć” prowadzi do menu, nie do starego wyniku
    H5.idz("sesja", { s: s }, { zastap: !!(H5.biezacy && H5.biezacy.nazwa === "podsumowanie") });
    return true;
  }

  H5.ekrany.sesja = function (param) {
    var s = param.s;
    var root = el("div", { klasa: "sesja" });
    var kroki = el("div", { klasa: "kroki", "aria-hidden": "true" });
    var combo = el("div", { klasa: "combo", "aria-label": "Seria dobrych odpowiedzi" });
    var gora = el("div", { klasa: "sesja-gora" },
      el("button", { klasa: "ikona-btn", type: "button", "aria-label": "Zakończ", html: H5.ikona("zamknij"), na: { click: zamknij } }),
      kroki, combo);
    var miejsce = el("div");
    var btnWarianty = el("button", { klasa: "btn btn-drugi", type: "button", html: H5.ikona("glosnik") + "<span>Czytaj odpowiedzi</span>" });
    var btnDalej = el("button", { klasa: "btn btn-glowny btn-duzy", type: "button", tekst: "Sprawdź", disabled: true });
    var dol = el("div", { klasa: "sesja-dol" }, el("div", { klasa: "sesja-dol-srodek" }, btnWarianty, btnDalej));
    u.dodaj(root, [gora, miejsce, dol]);

    var obiekt = null, karta = null, werdykt = null, czeka = false;

    function zamknij() {
      H5.mowa.stop();
      if (s.tryb === "test" && s.i > 0 && s.i < s.kolejka.length) {
        H5.potwierdz("Przerwać? Wynik tego sprawdzianu nie zostanie zapisany.", function () { H5.wstecz(); }, "Przerwij");
        return;
      }
      if (s.wyniki.length && s.tryb === "nauka") podsumuj(true);
      else H5.wstecz();
    }
    function rysujKroki() {
      u.wyczysc(kroki);
      s.kolejka.forEach(function (z, i) {
        var w = s.wyniki[i], k = "";
        if (i === s.i && !w) k = "teraz";
        else if (w && s.tryb === "nauka") k = w.ocena === "ok" ? "ok" : (w.ocena === "pol" ? "pol" : "zle");
        else if (w) k = "teraz";
        kroki.appendChild(el("span", { klasa: k }));
      });
      combo.innerHTML = s.combo >= 2 ? H5.ikona("ogien") + s.combo : "";
    }

    function pokaz() {
      H5.mowa.stop();
      if (werdykt) { werdykt.remove(); werdykt = null; }
      var z = s.kolejka[s.i], typ = H5.typy[z.typ];
      czeka = false;
      var api = {
        tryb: s.tryb,
        gotowe: function (b) { btnDalej.disabled = !b; },
        odpowiedziano: function () { if (!czeka) zakoncz(); }
      };
      obiekt = typ.rysuj(z, api);
      var polecenie = z.polecenie || typ.polecenie;
      var temat = H5.tematy[z.tematId];
      // od razu treść: pytanie, a gdy go nie ma – tekst zadania; polecenie tylko wtedy, gdy jest jedyną treścią
      // (z.mow – własny tekst do czytania, gdy zapis różni się od wymowy)
      var tekstMowy = z.mow || obiekt.pytanie || obiekt.mowa || polecenie;
      var naglowekZadania = obiekt.pytanie || (obiekt.mowa ? "" : polecenie);
      karta = el("div", { klasa: "zadanie" },
        el("div", { klasa: "zadanie-gora" },
          el("div", null,
            naglowekZadania ? el("p", { klasa: "pytanie", tekst: naglowekZadania }) : null,
            el("span", { klasa: "temat-chip", tekst: (temat ? "Temat " + temat.nr + ". " + temat.tytul : "") + (z.powtorka ? " · powtórka" : "") })),
          H5.mowa.przycisk(tekstMowy, "Przeczytaj polecenie")),
        obiekt.el);
      u.wyczysc(miejsce);
      miejsce.appendChild(karta);
      btnWarianty.hidden = !(obiekt.warianty && obiekt.warianty.length) || !H5.mowa.dostepna;
      btnWarianty.onclick = function () { H5.mowa.mow(obiekt.warianty, { przycisk: btnWarianty }); };
      var natychmiast = obiekt.natychmiast && s.tryb === "nauka";
      btnDalej.hidden = natychmiast || obiekt.bezWerdyktu;
      btnDalej.disabled = true;
      btnDalej.textContent = s.tryb === "test" ? (s.i === s.kolejka.length - 1 ? "Zakończ" : "Dalej") : "Sprawdź";
      btnDalej.onclick = function () {
        if (btnDalej.disabled) return;
        if (obiekt.samoocena && !obiekt.odkryte) { obiekt.odkryte = true; obiekt.ujawnij(); btnDalej.hidden = true; return; }
        zakoncz();
      };
      rysujKroki();
      window.scrollTo(0, 0);
      if (H5.ust.czytajSamo) {
        var doCzytania = [tekstMowy];
        if (H5.ust.czytajWarianty && obiekt.warianty) doCzytania = doCzytania.concat(obiekt.warianty);
        setTimeout(function () { if (document.body.contains(karta)) H5.mowa.mow(doCzytania); }, 250);
      }
    }

    function zakoncz() {
      czeka = true;
      var z = s.kolejka[s.i];
      var w = obiekt.wynik();
      if (!obiekt.samoocena) obiekt.ujawnij();
      var ocena = H5.gen.ocena(w);
      var wpis = { z: z, w: w, ocena: ocena, punkty: H5.gen.punktyZa(z, w), max: H5.gen.punkty(z) };
      s.wyniki[s.i] = wpis;
      if (!(z.klucz in s.pierwsze)) s.pierwsze[z.klucz] = ocena === "ok";
      H5.postepy.odpowiedz(z.klucz, ocena);
      btnDalej.disabled = true;

      if (s.tryb === "test") { H5.dzwiek("klik"); nastepne(); return; }

      var xp = 0;
      if (ocena === "ok") {
        s.combo++; s.maxCombo = Math.max(s.maxCombo, s.combo);
        xp = s.o.rodzaj === "wyzwanie" ? 30 : 10;
        if (s.combo > 0 && s.combo % 5 === 0) { xp += 10; H5.dzwiek("seria"); H5.efekty.skok(combo); } else H5.dzwiek("dobrze");
        H5.efekty.blysk(karta);
      } else {
        s.combo = 0;
        if (ocena === "pol") { xp = 3; H5.dzwiek("pol"); } else H5.dzwiek("zle");
        H5.efekty.potrzasnij(karta);
        if (!s.powtorzone[z.klucz] && s.o.rodzaj !== "wyzwanie") {
          s.powtorzone[z.klucz] = true;
          var kopia = {}; Object.keys(z).forEach(function (k) { kopia[k] = z[k]; }); kopia.powtorka = true;
          s.kolejka.splice(Math.min(s.i + 4, s.kolejka.length), 0, kopia);
        }
      }
      s.xp += xp;
      var nowa = xp ? H5.postepy.dodajXP(xp) : null;
      if (xp) H5.efekty.plusXP(karta, xp);
      rysujKroki();
      if (s.o.rodzaj === "wyzwanie") { H5.postepy.stan.wyzwanie = { data: u.dzis(), klucz: z.klucz, ok: ocena === "ok" }; H5.postepy.zapisz(); }
      if (obiekt.bezWerdyktu) { setTimeout(nastepne, 350); if (nowa) H5.efekty.nowaRanga(nowa); return; }
      pokazWerdykt(z, ocena, xp);
      if (nowa) H5.efekty.nowaRanga(nowa);
    }

    function pokazWerdykt(z, ocena, xp) {
      var tytul = ocena === "ok" ? POCHWALY[Math.floor(Math.random() * POCHWALY.length)] + ", " + H5.ust.imie + "!" : (ocena === "pol" ? "Prawie!" : "Niestety nie.");
      var ikona = ocena === "ok" ? "ok" : (ocena === "pol" ? "pol" : "zle");
      var poprawna = ocena === "ok" ? "" : obiekt.poprawna();
      var mowa = [tytul];
      if (poprawna) mowa.push("Prawidłowa odpowiedź: " + poprawna + ".");
      if (z.wyjasnienie) mowa.push(z.wyjasnienie);
      var btn = el("button", { klasa: "btn btn-glowny btn-duzy", type: "button", html: "<span>Dalej</span>" + H5.ikona("dalej"), na: { click: nastepne } });
      werdykt = el("div", { klasa: "werdykt werdykt-" + ocena, role: "status" },
        el("div", { klasa: "werdykt-srodek" },
          el("div", { klasa: "werdykt-tytul", html: H5.ikona(ikona) + "<span></span>" + (xp ? '<span class="xp">+' + xp + " XP</span>" : "") }),
          poprawna ? el("p", { klasa: "werdykt-poprawna", tekst: "Prawidłowa odpowiedź: " + poprawna }) : null,
          z.wyjasnienie ? el("p", { klasa: "werdykt-wyjasnienie", tekst: z.wyjasnienie }) : null,
          el("p", { klasa: "werdykt-zrodlo", tekst: "Źródło: " + u.zrodlo(z.zrodlo) }),
          el("div", { klasa: "werdykt-przyciski" }, H5.mowa.przycisk(mowa.join(" "), "Przeczytaj wyjaśnienie"), btn)));
      werdykt.querySelector(".werdykt-tytul span").textContent = tytul;
      root.appendChild(werdykt);
      dol.hidden = true;
      btn.focus({ preventScroll: true });
      if (H5.ust.czytajSamo) H5.mowa.mow(mowa);
    }

    function nastepne() {
      H5.mowa.stop();
      dol.hidden = false;
      s.i++;
      if (s.i >= s.kolejka.length) podsumuj(false); else pokaz();
    }

    function podsumuj(przerwane) {
      H5.mowa.stop();
      if (werdykt) { werdykt.remove(); werdykt = null; }
      H5.idz("podsumowanie", { s: s, przerwane: przerwane }, { zastap: true });
    }

    setTimeout(pokaz, 0);
    return root;
  };

  /* ---------- podsumowanie ---------- */
  H5.ekrany.podsumowanie = function (param) {
    var s = param.s, o = s.o, test = s.tryb === "test";
    var wyniki = s.wyniki.filter(Boolean);
    var klucze = Object.keys(s.pierwsze), dobre = klucze.filter(function (k) { return s.pierwsze[k]; }).length;
    var punkty = 0, max = 0;
    wyniki.forEach(function (w) { if (!w.z.powtorka) { punkty += w.punkty; max += w.max; } });
    var udzial = test ? (max ? punkty / max : 0) : (klucze.length ? dobre / klucze.length : 0);
    var gwiazdki = udzial >= 0.9 ? 3 : udzial >= 0.7 ? 2 : udzial >= 0.5 ? 1 : 0;

    if (!param.zapisane) {
      param.zapisane = true;
      if (test) { var bonus = Math.round(punkty * 3); if (bonus) { s.xp += bonus; var nr = H5.postepy.dodajXP(bonus); if (nr) setTimeout(function () { H5.efekty.nowaRanga(nr); }, 900); } }
      H5.postepy.dodajHistorie({ rodzaj: o.rodzaj, tytul: o.tytul || NAZWY[o.rodzaj], dobre: test ? punkty : dobre, wszystkie: test ? max : klucze.length, punkty: test });
      var nowe = [];
      if (H5.postepy.przyznaj("pierwszy")) nowe.push("pierwszy");
      if (!test && klucze.length >= 5 && dobre === klucze.length && H5.postepy.przyznaj("bez-bledu")) nowe.push("bez-bledu");
      if (o.rodzaj === "probny" && udzial >= 0.9 && H5.postepy.przyznaj("probny-90")) nowe.push("probny-90");
      if (o.rodzaj === "krzyzowka" && udzial === 1 && H5.postepy.przyznaj("krzyzowka")) nowe.push("krzyzowka");
      H5.zakres().forEach(function (id) { if (H5.postepy.gotowosc([id]) >= 0.9 && H5.postepy.przyznaj("mistrz")) nowe.push("mistrz"); });
      var wszystkieZ = H5.gen.wszystkie(H5.listaTematow().map(function (t) { return t.id; }));
      function wszystkieOpanowane(f) { var l = wszystkieZ.filter(f); return l.length && l.every(function (z) { return H5.postepy.opanowane(z.klucz); }); }
      if (wszystkieOpanowane(function (z) { return z.typ === "mapa"; }) && H5.postepy.przyznaj("kartograf")) nowe.push("kartograf");
      if (wszystkieOpanowane(function (z) { return z.typ === "os" || z.rodzaj === "data"; }) && H5.postepy.przyznaj("znawca-dat")) nowe.push("znawca-dat");
      param.noweOdznaki = nowe;
      setTimeout(function () {
        H5.dzwiek(gwiazdki ? "koniec" : "pol");
        if (gwiazdki === 3) H5.efekty.konfetti();
        var zdanie = test ? "Koniec! Masz " + punkty + " na " + max + " punktów." : "Koniec rundy! Za pierwszym razem dobrze: " + dobre + " na " + klucze.length + ".";
        H5.mowa.mow(zdanie + (gwiazdki >= 2 ? " Brawo, " + H5.ust.imie + "!" : " Ćwicz dalej, " + H5.ust.imie + ", idzie ci coraz lepiej."));
      }, 300);
    }

    var gw = el("div", { klasa: "gwiazdki", "aria-label": gwiazdki + " z 3 gwiazdek" });
    for (var i = 0; i < 3; i++) { var g = H5.ikonaEl("gwiazda"); if (i < gwiazdki) g.classList.add("zdobyta"); gw.appendChild(g); }

    var bledne = [];
    var widziane = {};
    wyniki.forEach(function (w) { if (w.ocena !== "ok" && !widziane[w.z.klucz]) { widziane[w.z.klucz] = 1; bledne.push(w); } });
    var listaBledow = el("div", { klasa: "bledy-lista" });
    bledne.forEach(function (w) {
      var typ = H5.typy[w.z.typ];
      var tresc = typ.rysuj(w.z, { tryb: "test", gotowe: function () { }, odpowiedziano: function () { } });
      listaBledow.appendChild(el("div", { klasa: "blad" },
        el("p", { klasa: "blad-pytanie", tekst: tresc.pytanie || tresc.mowa || (w.z.polecenie || typ.polecenie) }),
        el("p", { klasa: "blad-odp", tekst: "Prawidłowo: " + tresc.poprawna() }),
        w.z.wyjasnienie ? el("p", { klasa: "blad-wyj", tekst: w.z.wyjasnienie + " (" + u.zrodlo(w.z.zrodlo) + ")" }) : null));
    });

    var btnPopraw = bledne.length ? el("button", { klasa: "btn btn-glowny btn-duzy", type: "button", html: H5.ikona("bledy") + "<span>Popraw błędy (" + bledne.length + ")</span>", na: {
      click: function () { start({ zadania: bledne.map(function (w) { return w.z; }), tryb: "nauka", rodzaj: "bledy", tytul: "Poprawa błędów" }); }
    } }) : null;
    var btnJeszcze = o.ponow ? el("button", { klasa: "btn btn-drugi btn-duzy", type: "button", html: H5.ikona("trening") + "<span>Jeszcze raz</span>", na: { click: o.ponow } }) : null;
    var btnWroc = el("button", { klasa: "btn btn-drugi btn-duzy", type: "button", tekst: "Wróć", na: { click: function () { H5.wstecz(); } } });

    var odznaki = (param.noweOdznaki || []).map(function (id) {
      var d = H5.postepy.ODZNAKI.filter(function (x) { return x.id === id; })[0];
      return el("span", { klasa: "chip chip-braz", tekst: "Nowa odznaka: " + d.nazwa });
    });

    // postęp po rundzie – te same liczby, które widać na kafelkach i przy tematach w menu
    var linie = [];
    function linia(nazwa, lista) { linie.push(el("p", null, el("strong", { tekst: nazwa + ": " }), H5.tekstPostepu(H5.liczPostep(lista), "zadań"))); }
    if (o.statystyka) linia(o.statystyka.nazwa, o.statystyka.lista());
    else {
      var ids = [];
      wyniki.forEach(function (w) { if (ids.indexOf(w.z.tematId) < 0) ids.push(w.z.tematId); });
      ids.slice(0, 3).forEach(function (id) { linia("Temat " + H5.tematy[id].nr, H5.gen.zadaniaTematu(id).filter(H5.gen.doNauki)); });
    }
    // wynik u góry liczy pierwsze podejścia, a postęp – ostatnią odpowiedź; różnicę robią błędy poprawione w rundzie
    var poprawione = test ? 0 : klucze.filter(function (k) { return !s.pierwsze[k] && H5.postepy.dobrze(k); }).length;
    var postep = linie.length ? el("div", { klasa: "postep-rundy" }, linie,
      poprawione ? el("p", { klasa: "wskazowka", tekst: "Błędy poprawione w tej rundzie (" + poprawione + ") liczą się już jako dobre." }) : null,
      el("p", { klasa: "wskazowka", tekst: "Zadanie jest opanowane, gdy rozwiążesz je dobrze 3 razy." })) : null;

    return el("div", { klasa: "ekran" },
      el("div", { klasa: "podsumowanie" },
        el("p", { klasa: "hero-etykieta", tekst: o.tytul || NAZWY[o.rodzaj] }),
        gw,
        el("div", { klasa: "wynik-liczba", tekst: test ? punkty + " / " + max + " pkt" : dobre + " / " + klucze.length }),
        el("p", { klasa: "wynik-opis", tekst: test ? u.proc(udzial) + "% punktów" : "dobrze za pierwszym razem" }),
        odznaki.length ? el("div", { klasa: "odznaki" }, odznaki) : null,
        el("div", { klasa: "statystyki" },
          el("div", { klasa: "statystyka" }, el("b", { tekst: "+" + s.xp }), el("span", { tekst: "XP" })),
          el("div", { klasa: "statystyka" }, el("b", { tekst: test ? wyniki.length : s.maxCombo }), el("span", { tekst: test ? "zadań" : "najdłuższa seria" })),
          el("div", { klasa: "statystyka" }, el("b", { tekst: bledne.length }), el("span", { tekst: "błędy w rundzie" }))),
        postep,
        el("div", { klasa: "przyciski-koniec" }, btnPopraw, btnJeszcze, btnWroc),
        bledne.length ? el("h2", { tekst: "Zapamiętaj" }) : null,
        listaBledow));
  };

  return { start: start, NAZWY: NAZWY };
})();
