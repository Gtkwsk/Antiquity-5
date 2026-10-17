/* Ekrany: pasek górny, start, temat, „Musisz wiedzieć”. */
(function () {
  var u = H5.u, el = u.el, P = H5.postepy, G = H5.gen;

  /* ----- pasek górny ----- */
  H5.pasek = function () {
    var r = P.ranga(), xp = P.stan.xp;
    var postep = r.do ? (xp - r.od) / (r.do - r.od) : 1;
    var seria = P.seria();
    return el("header", { klasa: "pasek" },
      el("div", { klasa: "pasek-ranga" },
        el("div", { html: H5.herb(r.nr) }),
        el("div", { klasa: "pasek-ranga-tekst" },
          el("div", { klasa: "pasek-ranga-nazwa", tekst: r.nazwa }),
          el("div", { klasa: "pasek-xp", tekst: xp + " XP" + (r.do ? " · do rangi " + r.nastepna + ": " + (r.do - xp) : "") }),
          el("div", { klasa: "pasek-xp-bar" }, el("span", { styl: "width:" + Math.round(postep * 100) + "%" })))),
      seria ? el("div", { klasa: "seria", title: "Dni nauki z rzędu", html: H5.ikona("ogien") + "<span>" + seria + "</span>" }) : null,
      el("button", { klasa: "ikona-btn", type: "button", "aria-label": "Ustawienia", html: H5.ikona("ustawienia"), na: { click: function () { H5.idz("ustawienia"); } } }));
  };

  function warstwy(udzial) {
    return el("div", { klasa: "warstwy", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": u.proc(udzial) },
      el("span", { styl: "width:" + u.proc(udzial) + "%" }),
      el("i", { styl: "left:50%" }), el("i", { styl: "left:75%" }), el("i", { styl: "left:90%" }));
  }
  H5.warstwy = warstwy;

  function akcja(ikona, tytul, opis, klik, licznik) {
    return el("button", { klasa: "akcja", type: "button", na: { click: klik } },
      H5.ikonaEl(ikona),
      el("span", { klasa: "akcja-tekst" }, el("span", { klasa: "akcja-tytul", tekst: tytul }), opis ? el("span", { klasa: "akcja-opis", tekst: opis }) : null),
      licznik ? el("span", { klasa: "licznik", tekst: licznik }) : null);
  }
  H5.akcja = akcja;

  function bledyDoPoprawy(tematy) {
    return G.wszystkie(tematy).filter(function (z) { return G.doNauki(z) && P.bladDoPoprawy(z.klucz); });
  }

  /* Postęp listy zadań: dobrze = ostatnia odpowiedź dobra, opanowane = 3 dobre odpowiedzi. */
  function licz(lista) {
    var s = { razem: lista.length, dobrze: 0, opanowane: 0, tylkoDobrze: 0 };
    lista.forEach(function (z) {
      var d = P.dobrze(z.klucz), o = P.opanowane(z.klucz);
      if (d) s.dobrze++;
      if (o) s.opanowane++; else if (d) s.tylkoDobrze++;
    });
    return s;
  }
  H5.liczPostep = licz;
  function tekstPostepu(s, jednostka) {
    return "dobrze " + s.dobrze + " z " + s.razem + (jednostka ? " " + jednostka : "") + (s.opanowane ? " · opanowane " + s.opanowane : "");
  }
  H5.tekstPostepu = tekstPostepu;
  /* pasek w dwóch odcieniach: opanowane (ciemny) i rozwiązane dobrze (jasny) */
  function pasekZadan(s) {
    function proc(n) { return (s.razem ? Math.round(1000 * n / s.razem) / 10 : 0) + "%"; }
    return el("span", { klasa: "pasek-zadan", "aria-hidden": "true" },
      el("i", { klasa: "opan", styl: "width:" + proc(s.opanowane) }), el("i", { klasa: "dobrze", styl: "width:" + proc(s.tylkoDobrze) }));
  }

  /* Kafelki „jeden rodzaj zadań” – te same w każdym temacie i dla wszystkich tematów razem. */
  function kafleTrybow(tematy, podpis, pusty) {
    var kafle = el("div", { klasa: "kafle" });
    G.TRYBY.forEach(function (tr) {
      var lista = G.wszystkie(tematy).filter(function (z) { return G.pasujeDoTrybu(z, tr); }), s = licz(lista);
      kafle.appendChild(el("button", { klasa: "kafel", type: "button", disabled: lista.length ? null : true, na: { click: function () { H5.uruchomTryb(tr, tematy, podpis); } } },
        el("span", { klasa: "kafel-ikona", html: H5.ikona(tr.ikona) }),
        el("span", { klasa: "kafel-nazwa", tekst: tr.nazwa }),
        el("span", { klasa: "kafel-postep", tekst: lista.length ? tekstPostepu(s) : pusty }),
        lista.length ? pasekZadan(s) : null));
    });
    return kafle;
  }

  /* Trening dnia albo tematu: runda z podanych tematów. */
  H5.trening = function (tematy, tytul) {
    var nazwa = tematy.length === 1 ? "Temat " + H5.tematy[tematy[0]].nr : "Wszystkie tematy z zakresu";
    function uruchom() {
      var z = G.runda({ tematy: tematy, liczba: 10 });
      if (!H5.sesja.start({ zadania: z, tryb: "nauka", rodzaj: "trening", tytul: tytul || "Trening", ponow: function () { H5.wstecz(); uruchom(); },
        statystyka: { nazwa: nazwa, lista: function () { return G.wszystkie(tematy).filter(G.doNauki); } } }))
        H5.komunikat("Brak zadań w tym zakresie.");
    }
    uruchom();
  };

  /* ----- start ----- */
  H5.ekrany.start = function () {
    var zakres = H5.zakres(), got = P.gotowosc(zakres), spr = H5.ust.sprawdzian.data, dzis = u.dzis();
    var pula = G.wszystkie(zakres).filter(G.doNauki), postep = licz(pula);
    var doOpanowania = postep.razem - postep.opanowane;
    var zalegle = pula.filter(function (z) { return P.doPowtorki(z.klucz); }).length;
    var zostalo = spr ? u.dniMiedzy(dzis, spr) : null;
    var cel = zostalo && zostalo > 0 ? Math.max(10, Math.min(60, Math.ceil(doOpanowania * 2 / zostalo) + zalegle)) : 20;
    var zrobione = P.dzisZrobione();

    var info = [];
    if (spr && zostalo >= 0) info.push(el("p", null, "Sprawdzian: ", el("strong", { tekst: u.dataCzytelna(spr) }), zostalo === 0 ? " – dziś!" : " (za " + zostalo + " " + u.odmiana(zostalo, "dzień", "dni", "dni") + ")"));
    else info.push(el("p", null, el("button", { klasa: "btn btn-cichy", type: "button", tekst: "Ustaw datę sprawdzianu", na: { click: function () { H5.idz("ustawienia"); } } }), " – ułożę plan na każdy dzień."));
    // cel liczy każdą odpowiedź, także powtórki błędów w rundzie
    info.push(el("p", null, "Cel na dziś: ", el("strong", { tekst: Math.min(zrobione, cel) + " z " + cel }), " " + u.odmiana(cel, "odpowiedź", "odpowiedzi", "odpowiedzi") + (zrobione >= cel ? " – zrobione!" : "")));
    info.push(el("p", { tekst: "Zakres: " + zakres.length + " " + u.odmiana(zakres.length, "temat", "tematy", "tematów") + " · " + tekstPostepu(postep, "zadań") }));

    var hero = el("section", { klasa: "hero", "aria-label": "Gotowość do sprawdzianu" },
      el("div", null, el("div", { klasa: "hero-liczba", html: u.proc(got) + "<small>%</small>" }), el("div", { klasa: "hero-etykieta", tekst: "gotowości" })),
      el("div", { klasa: "hero-info" }, warstwy(got), info),
      el("button", { klasa: "btn btn-glowny btn-duzy", type: "button", html: H5.ikona("trening") + "<span>Trening dnia – 10 zadań</span>", na: { click: function () { H5.trening(zakres, "Trening dnia"); } } }));

    // wyzwanie dnia
    var wyz = P.stan.wyzwanie, zadanieW = G.wyzwanieDnia(), wyzwanie = null;
    if (zadanieW) {
      var zrobioneW = wyz && wyz.data === dzis;
      wyzwanie = el("button", { klasa: "wyzwanie akcja", type: "button", disabled: zrobioneW ? true : null, na: {
        click: function () { H5.sesja.start({ zadania: [zadanieW], tryb: "nauka", rodzaj: "wyzwanie", tytul: "Wyzwanie dnia" }); }
      } },
        H5.ikonaEl("wyzwanie"),
        el("span", { klasa: "wyzwanie-tekst" },
          el("span", { klasa: "wyzwanie-tytul", tekst: "Wyzwanie dnia" }),
          el("span", { klasa: "wyzwanie-opis", tekst: zrobioneW ? (wyz.ok ? "Zaliczone! Jutro nowe pytanie." : "Tym razem nie wyszło. Jutro nowe pytanie.") : "Jedno pytanie, jedna próba, +30 XP." })));
    }

    var bledy = bledyDoPoprawy(zakres);
    var akcje = el("div", { klasa: "akcje" },
      akcja("bledy", "Moje błędy", bledy.length ? "Popraw to, co nie wyszło" : "Na razie nie ma czego poprawiać", function () {
        if (!H5.sesja.start({ zadania: G.runda({ tematy: zakres, bledy: true, liczba: 10 }), tryb: "nauka", rodzaj: "bledy", tytul: "Moje błędy" })) H5.komunikat("Brak błędów do poprawy. Tak trzymaj!");
      }, bledy.length || null),
      akcja("sprawdzian", "Sprawdzian próbny", "Jak prawdziwy, z punktami", function () { H5.idz("probny"); }));

    // rozdziały i tematy (każdy temat ma własne zakładki), a na końcu wszystkie tematy razem
    var rozdzialy = (H5.spisTematow ? H5.spisTematow.rozdzialy : []).map(function (r) {
      var lista = el("div", { klasa: "tematy" });
      r.tematy.forEach(function (id) {
        var t = H5.tematy[id];
        if (!t) return;
        var g = P.gotowosc([id]), s = licz(G.zadaniaTematu(id).filter(G.doNauki));
        lista.appendChild(el("button", { klasa: "temat", type: "button", na: { click: function () { H5.idz("temat", { id: id }); } } },
          el("span", { klasa: "temat-ikona", html: H5.ikona(t.ikona) }),
          el("span", null,
            el("span", { klasa: "temat-nr", tekst: "Temat " + t.nr }),
            el("span", { klasa: "temat-tytul", styl: "display:block", tekst: t.tytul }),
            el("span", { klasa: "pasek-postepu", styl: "display:block" }, el("span", { styl: "width:" + u.proc(g) + "%" })),
            el("span", { klasa: "temat-zadania", tekst: tekstPostepu(s, "zadań") })),
          el("span", { klasa: "temat-proc" }, u.proc(g) + "%", el("small", { tekst: "gotowość" }))));
      });
      return el("section", { klasa: "sekcja" }, el("div", { klasa: "sekcja-tytul" }, el("h2", { tekst: "Rozdział " + ["", "I", "II", "III", "IV", "V", "VI"][r.nr] + ". " + r.tytul })), lista);
    });

    return el("div", { klasa: "ekran" },
      H5.pasek(),
      el("h1", { tekst: "Cześć, " + H5.ust.imie + "!" }),
      hero, wyzwanie, akcje,
      rozdzialy,
      zakres.length > 1 ? el("section", { klasa: "sekcja" },
        el("div", { klasa: "sekcja-tytul" }, el("h2", { tekst: "Wszystkie tematy razem" }), el("span", { klasa: "opis", tekst: "jeden rodzaj zadań z całego zakresu" })),
        kafleTrybow(zakres, "wszystkie tematy", "brak zadań")) : null,
      el("div", { klasa: "stopka" },
        el("button", { klasa: "btn btn-cichy", type: "button", html: H5.ikona("rodzic") + "<span>Dla rodzica</span>", na: { click: function () { H5.idz("rodzic"); } } })));
  };

  /* Uruchom tryb z kafelka (temat albo wszystkie tematy razem). */
  H5.uruchomTryb = function (tr, tematy, podpis) {
    var lista, tytul = tr.nazwa + (podpis ? " – " + podpis : "");
    // w podsumowaniu te same liczby co na kafelku
    var statystyka = { nazwa: tytul, lista: function () { return G.wszystkie(tematy).filter(function (z) { return G.pasujeDoTrybu(z, tr); }); } };
    if (tr.id === "krzyzowka") {
      lista = G.wszystkie(tematy).filter(function (z) { return z.typ === "krzyzowka"; });
      H5.sesja.start({ zadania: lista, tryb: "nauka", rodzaj: "krzyzowka", tytul: tytul, statystyka: statystyka });
      return;
    }
    function uruchom() {
      lista = G.runda({ tematy: tematy, tryb: tr.id, liczba: tr.typy[0] === "fiszka" ? 12 : 10 });
      H5.sesja.start({ zadania: lista, tryb: "nauka", rodzaj: tr.typy[0] === "fiszka" ? "fiszki" : "typ", tytul: tytul, ponow: function () { H5.wstecz(); uruchom(); }, statystyka: statystyka });
    }
    uruchom();
  };

  /* ----- temat ----- */
  H5.ekrany.temat = function (param) {
    var t = H5.tematy[param.id], got = P.gotowosc([t.id]);
    var stany = { umie: 0, uczy: 0, nowy: 0 };
    var fakty = el("div", { klasa: "fakty" });
    t.wiedza.forEach(function (w) {
      if (w.priorytet === "C" && !H5.ust.pokazC) return;
      var st = P.stanFaktu(t.id, w.id);
      stany[st]++;
      fakty.appendChild(el("div", { klasa: "fakt" },
        el("span", { klasa: "stan" + (st === "umie" ? " stan-umie" : st === "uczy" ? " stan-uczy" : ""), title: st === "umie" ? "umiesz" : st === "uczy" ? "w trakcie" : "nowe" }),
        el("p", null, w.tekst, el("span", { klasa: "fakt-zrodlo", tekst: u.zrodlo(w.zrodlo) })),
        H5.mowa.przycisk(w.tekst)));
    });
    var akcje = el("div", { klasa: "akcje" },
      akcja("wiedza", "Musisz wiedzieć", "Fakty, pojęcia, daty i mapy – do czytania i słuchania", function () { H5.idz("wiedza", { id: t.id }); }),
      akcja("trening", "Trening tematu", "10 zadań, błędy wracają", function () { H5.trening([t.id], "Trening: " + t.tytul); }),
      akcja("kartkowka", "Kartkówka", "10 zadań bez podpowiedzi, z punktami", function () {
        H5.sesja.start({ zadania: G.runda({ tematy: [t.id], kartkowka: true, liczba: 10 }), tryb: "test", rodzaj: "kartkowka", tytul: "Kartkówka: " + t.tytul });
      }));

    return el("div", { klasa: "ekran" },
      el("div", { klasa: "naglowek" },
        el("button", { klasa: "ikona-btn", type: "button", "aria-label": "Wróć", html: H5.ikona("wstecz"), na: { click: H5.wstecz } }),
        el("div", { styl: "flex:1;min-width:0" }, el("h1", { tekst: "Temat " + t.nr + ". " + t.tytul }),
          el("p", { klasa: "podtytul", tekst: "podręcznik " + t.zrodla.podrecznik + " · ćwiczenia " + t.zrodla.cwiczenia }))),
      el("section", { klasa: "hero" },
        el("div", null, el("div", { klasa: "hero-liczba", html: u.proc(got) + "<small>%</small>" }), el("div", { klasa: "hero-etykieta", tekst: "gotowości" })),
        el("div", { klasa: "hero-info" }, warstwy(got),
          el("p", null, "Zadania: ", el("strong", { tekst: tekstPostepu(licz(G.zadaniaTematu(t.id).filter(G.doNauki))) })),
          el("p", { tekst: "Fakty: umiesz " + stany.umie + " · w trakcie " + stany.uczy + " · nowe " + stany.nowy }),
          el("p", { tekst: "Zadanie jest opanowane, gdy rozwiążesz je dobrze 3 razy." }))),
      akcje,
      el("section", { klasa: "sekcja" },
        el("div", { klasa: "sekcja-tytul" }, el("h2", { tekst: "Ćwicz jeden rodzaj zadań" }), el("span", { klasa: "opis", tekst: "tylko z tego tematu" })),
        kafleTrybow([t.id], "temat " + t.nr, "brak w tym temacie")),
      el("section", { klasa: "sekcja" },
        el("div", { klasa: "sekcja-tytul" }, el("h2", { tekst: "Co już umiesz" })),
        el("div", { klasa: "legenda" },
          el("span", null, el("i", { klasa: "stan stan-umie" }), "umiesz"),
          el("span", null, el("i", { klasa: "stan stan-uczy" }), "w trakcie"),
          el("span", null, el("i", { klasa: "stan" }), "nowe")),
        fakty));
  };

  /* ----- Musisz wiedzieć ----- */
  H5.ekrany.wiedza = function (param) {
    var t = H5.tematy[param.id];
    function wiersz(prio, tresc, doCzytania, zrodlo) {
      return el("div", { klasa: "fakt" },
        el("span", { klasa: "prio prio-" + prio, tekst: prio, title: prio === "A" ? "najważniejsze" : prio === "B" ? "szczegół" : "ciekawostka" }),
        el("p", null, tresc, zrodlo ? el("span", { klasa: "fakt-zrodlo", tekst: u.zrodlo(zrodlo) }) : null),
        H5.mowa.przycisk(doCzytania));
    }
    var grupy = [["A", "Najważniejsze – to będzie na sprawdzianie"], ["B", "Ważne szczegóły"], ["C", "Ciekawostki"]].map(function (g) {
      var lista = t.wiedza.filter(function (w) { return w.priorytet === g[0]; });
      if (!lista.length) return null;
      return el("section", { klasa: "sekcja" }, el("h2", { tekst: g[1] }),
        el("div", { klasa: "fakty" }, lista.map(function (w) { return wiersz(w.priorytet, w.tekst, w.tekst, w.zrodlo); })));
    });
    var pojecia = el("section", { klasa: "sekcja" }, el("h2", { tekst: "Pojęcia" }),
      el("div", { klasa: "fakty" }, t.pojecia.map(function (p) {
        return wiersz(p.priorytet, [el("dfn", { tekst: p.termin }), " – " + p.definicja], p.termin + " – " + p.definicja, p.zrodlo);
      })));
    var daty = el("section", { klasa: "sekcja" }, el("h2", { tekst: "Daty" }),
      el("div", { klasa: "fakty" }, t.daty.slice().sort(function (a, b) { return a.rok - b.rok; }).map(function (d) {
        return wiersz(d.priorytet, [el("dfn", { tekst: d.kiedy }), " – " + d.co], d.kiedy + " – " + d.co, d.zrodlo);
      })));
    var postacie = (t.postacie || []).length ? el("section", { klasa: "sekcja" }, el("h2", { tekst: "Kto czym słynie" }),
      el("div", { klasa: "fakty" }, t.postacie.map(function (o) {
        return wiersz(o.priorytet, [el("dfn", { tekst: o.kto }), " – " + o.slynie], o.kto + " – " + o.slynie, o.zrodlo);
      }))) : null;
    // mapy do oglądania (bez wersji z ćwiczeń, gdzie zamiast nazw są numery)
    var mapy = (t.mapy || []).filter(function (m) { return !m.cwiczenie; });
    var sekcjaMap = mapy.length ? el("section", { klasa: "sekcja" }, el("h2", { tekst: mapy.length > 1 ? "Mapy" : "Mapa" }),
      mapy.map(function (m) {
        return el("div", { klasa: "opcje" }, el("h3", { tekst: m.tytul }),
          el("div", { klasa: "mapa-wrap" }, H5.mapa.rysuj(m, {})), H5.mapa.legenda(m),
          el("span", { klasa: "fakt-zrodlo", tekst: u.zrodlo(m.zrodlo) }));
      })) : null;
    var calosc = t.wiedza.filter(function (w) { return w.priorytet !== "C"; }).map(function (w) { return w.tekst; })
      .concat(["Pojęcia."], t.pojecia.filter(function (p) { return p.priorytet !== "C"; }).map(function (p) { return p.termin + " – " + p.definicja + "."; }));
    var btn = el("button", { klasa: "btn btn-glowny", type: "button", html: H5.ikona("graj") + "<span>Odsłuchaj najważniejsze</span>" });
    btn.addEventListener("click", function () { if (btn.classList.contains("mowi")) H5.mowa.stop(); else H5.mowa.mow(calosc, { przycisk: btn }); });
    return el("div", { klasa: "ekran" },
      el("div", { klasa: "naglowek" },
        el("button", { klasa: "ikona-btn", type: "button", "aria-label": "Wróć", html: H5.ikona("wstecz"), na: { click: H5.wstecz } }),
        el("div", { styl: "flex:1;min-width:0" }, el("h1", { tekst: "Musisz wiedzieć" }), el("p", { klasa: "podtytul", tekst: "Temat " + t.nr + ". " + t.tytul }))),
      H5.mowa.dostepna ? btn : null,
      grupy, pojecia, daty, postacie, sekcjaMap);
  };
})();
