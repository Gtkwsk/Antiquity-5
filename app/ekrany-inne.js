/* Ekrany: sprawdzian próbny, ustawienia, dla rodzica. */
(function () {
  var u = H5.u, el = u.el, P = H5.postepy, G = H5.gen;

  function naglowek(tytul, podtytul) {
    return el("div", { klasa: "naglowek" },
      el("button", { klasa: "ikona-btn", type: "button", "aria-label": "Wróć", html: H5.ikona("wstecz"), na: { click: H5.wstecz } }),
      el("div", { styl: "flex:1;min-width:0" }, el("h1", { tekst: tytul }), podtytul ? el("p", { klasa: "podtytul", tekst: podtytul }) : null));
  }

  /* ----- sprawdzian próbny ----- */
  H5.ekrany.probny = function () {
    var zakres = H5.zakres();
    var numer = P.stan.historia.filter(function (h) { return h.rodzaj === "probny"; }).length + 1;
    function uruchom(grupa) {
      var z = G.probny(zakres, grupa, numer);
      var max = z.reduce(function (s, x) { return s + G.punkty(x); }, 0);
      H5.sesja.start({ zadania: z, tryb: "test", rodzaj: "probny", tytul: "Sprawdzian próbny – grupa " + grupa + " (" + max + " pkt)" });
    }
    var poprzednie = P.stan.historia.filter(function (h) { return h.rodzaj === "probny"; }).slice(0, 5);
    return el("div", { klasa: "ekran" },
      naglowek("Sprawdzian próbny", "Jak w szkole: bez podpowiedzi, wynik na końcu"),
      el("div", { klasa: "karta" },
        el("div", { klasa: "opcje" },
          el("p", { tekst: "Około 14 zadań w różnych formach: oś czasu, pojęcia, prawda/fałsz, mapa, tabela, uzupełnianie i pytania „wyjaśnij”. Po każdym zadaniu dotknij „Dalej”. Omówienie błędów dostaniesz na końcu." }),
          el("p", null, el("strong", { tekst: "Zakres: " }), zakres.map(function (id) { return "temat " + H5.tematy[id].nr + ". " + H5.tematy[id].tytul; }).join(", ")),
          zakres.length < 2 ? el("p", { klasa: "wskazowka", tekst: "Sprawdzian zwykle obejmuje cały rozdział. Gdy przybędą kolejne tematy, zakres ustawisz w ustawieniach." }) : null,
          el("div", { klasa: "przyciski-koniec" },
            el("button", { klasa: "btn btn-glowny btn-duzy", type: "button", tekst: "Grupa A", na: { click: function () { uruchom("A"); } } }),
            el("button", { klasa: "btn btn-glowny btn-duzy", type: "button", tekst: "Grupa B", na: { click: function () { uruchom("B"); } } })))),
      poprzednie.length ? el("section", { klasa: "sekcja" }, el("h2", { tekst: "Poprzednie wyniki" }),
        el("div", { klasa: "tabela-wrap" }, el("table", { klasa: "wyniki" },
          el("thead", null, el("tr", null, el("th", { tekst: "Data" }), el("th", { tekst: "Sprawdzian" }), el("th", { klasa: "liczba", tekst: "Wynik" }))),
          el("tbody", null, poprzednie.map(function (h) {
            return el("tr", null, el("td", { tekst: u.dataCzytelna(h.data) }), el("td", { tekst: h.tytul }),
              el("td", { klasa: "liczba", tekst: h.dobre + "/" + h.wszystkie + " pkt (" + (h.wszystkie ? u.proc(h.dobre / h.wszystkie) : 0) + "%)" }));
          }))))) : null);
  };

  /* ----- ustawienia ----- */
  function przelacznik(id, nazwa, opis, klucz) {
    var cb = el("input", { type: "checkbox", id: id });
    cb.checked = !!H5.ust[klucz];
    cb.addEventListener("change", function () { H5.ust[klucz] = cb.checked; H5.zapiszUstawienia(); });
    return el("div", { klasa: "pole" },
      el("label", { "for": id }, nazwa, opis ? el("small", { tekst: opis }) : null),
      el("span", { klasa: "przelacznik" }, cb, el("span")));
  }

  H5.ekrany.ustawienia = function () {
    var imie = el("input", { type: "text", id: "ust-imie", value: H5.ust.imie, maxlength: "30" });
    imie.addEventListener("change", function () { H5.ust.imie = imie.value.trim() || "Mikołaj"; H5.zapiszUstawienia(); });

    var glos = el("select", { id: "ust-glos" });
    function wypelnijGlosy() {
      u.wyczysc(glos);
      glos.appendChild(el("option", { value: "", tekst: "automatycznie (najlepszy polski)" }));
      H5.mowa.glosy().forEach(function (g) {
        var o = el("option", { value: g.voiceURI, tekst: g.name });
        if (g.voiceURI === H5.ust.glos) o.selected = true;
        glos.appendChild(o);
      });
    }
    wypelnijGlosy();
    H5.on("glosy", wypelnijGlosy);
    glos.addEventListener("change", function () { H5.ust.glos = glos.value; H5.zapiszUstawienia(); });

    var tempo = el("input", { type: "range", id: "ust-tempo", min: "0.7", max: "1.3", step: "0.05", value: String(H5.ust.tempo) });
    tempo.addEventListener("change", function () { H5.ust.tempo = parseFloat(tempo.value); H5.zapiszUstawienia(); });
    var glosnosc = el("input", { type: "range", id: "ust-glosnosc", min: "0", max: "1", step: "0.1", value: String(H5.ust.glosnosc) });
    glosnosc.addEventListener("change", function () { H5.ust.glosnosc = parseFloat(glosnosc.value); H5.zapiszUstawienia(); H5.dzwiek("dobrze"); });

    var data = el("input", { type: "date", id: "ust-data", value: H5.ust.sprawdzian.data || "" });
    data.addEventListener("change", function () { H5.ust.sprawdzian.data = data.value; H5.zapiszUstawienia(); });
    var zakres = el("div", { klasa: "zakres-tematow" });
    H5.listaTematow().forEach(function (t) {
      var cb = el("input", { type: "checkbox", id: "zakres-" + t.id });
      cb.checked = H5.ust.sprawdzian.tematy.indexOf(t.id) >= 0;
      cb.addEventListener("change", function () {
        var l = H5.ust.sprawdzian.tematy.filter(function (x) { return x !== t.id; });
        if (cb.checked) l.push(t.id);
        H5.ust.sprawdzian.tematy = l; H5.zapiszUstawienia();
      });
      zakres.appendChild(el("label", { "for": cb.id }, cb, "Temat " + t.nr + ". " + t.tytul));
    });

    var kopia = el("textarea", { id: "ust-kopia", readonly: true, "aria-label": "Kopia postępów" });
    var wklej = el("textarea", { id: "ust-wklej", placeholder: "Wklej tu kopię postępów…", "aria-label": "Wklej kopię postępów" });
    var komunikat = el("p", { klasa: "wskazowka", role: "status" });

    return el("div", { klasa: "ekran" },
      naglowek("Ustawienia"),
      el("section", { klasa: "sekcja" }, el("h2", { tekst: "Uczeń" }),
        el("div", { klasa: "pola" }, el("div", { klasa: "pole" }, el("label", { "for": "ust-imie" }, "Imię"), imie))),
      el("section", { klasa: "sekcja" }, el("h2", { tekst: "Sprawdzian" }),
        el("div", { klasa: "pola" },
          el("div", { klasa: "pole" }, el("label", { "for": "ust-data" }, "Data sprawdzianu", el("small", { tekst: "Na tej podstawie powstaje cel na każdy dzień" })), data),
          el("div", { klasa: "pole" }, el("span", { klasa: "pole-nazwa" }, "Zakres", el("small", { tekst: "Nic nie zaznaczone = wszystkie tematy" })), zakres))),
      el("section", { klasa: "sekcja" }, el("h2", { tekst: "Czytanie na głos" }),
        el("div", { klasa: "pola" },
          H5.mowa.dostepna ? null : el("p", { klasa: "wskazowka", tekst: "Ta przeglądarka nie obsługuje czytania na głos. Na tablecie z Androidem użyj Chrome." }),
          przelacznik("ust-czytaj", "Czytaj samo", "Polecenie i pytanie, a po odpowiedzi – wyjaśnienie", "czytajSamo"),
          przelacznik("ust-warianty", "Czytaj też odpowiedzi A–D", "Wyłączone: odpowiedzi czyta 🔊 przy wariancie", "czytajWarianty"),
          el("div", { klasa: "pole" }, el("label", { "for": "ust-glos" }, "Głos"), glos),
          el("div", { klasa: "pole" }, el("label", { "for": "ust-tempo" }, "Tempo mowy"), tempo),
          el("div", { klasa: "pole" }, el("span", { klasa: "pole-nazwa" }, "Wypróbuj"),
            H5.mowa.przycisk(function () { return "Cześć, " + H5.ust.imie + "! Rolnictwo narodziło się ok. 10 tys. lat p.n.e., a epoka żelaza – ok. 1200 lat p.n.e."; }, "Wypróbuj głos")))),
      el("section", { klasa: "sekcja" }, el("h2", { tekst: "Dźwięki i efekty" }),
        el("div", { klasa: "pola" },
          przelacznik("ust-dzwieki", "Dźwięki", null, "dzwieki"),
          el("div", { klasa: "pole" }, el("label", { "for": "ust-glosnosc" }, "Głośność dźwięków"), glosnosc),
          przelacznik("ust-spokojnie", "Spokojne efekty", "Bez konfetti i potrząsania", "spokojneEfekty"),
          przelacznik("ust-c", "Ciekawostki w treningu", "Zadania C (np. „Współcześnie”) zwykle nie są na sprawdzianie", "pokazC"))),
      el("section", { klasa: "sekcja" }, el("h2", { tekst: "Kopia postępów" }),
        el("div", { klasa: "pola" },
          el("div", { klasa: "pole" }, el("span", { klasa: "pole-nazwa" }, "Zapisz kopię", el("small", { tekst: "Skopiuj tekst i zachowaj go, np. w notatkach" })),
            el("button", { klasa: "btn btn-drugi", type: "button", html: H5.ikona("eksport") + "<span>Pokaż i skopiuj</span>", na: {
              click: function () {
                kopia.value = P.eksport();
                kopia.select();
                try { navigator.clipboard.writeText(kopia.value).then(function () { komunikat.textContent = "Skopiowano do schowka."; }); } catch (e) { komunikat.textContent = "Zaznacz tekst i skopiuj go ręcznie."; }
              }
            } }), kopia),
          el("div", { klasa: "pole" }, el("span", { klasa: "pole-nazwa" }, "Wczytaj kopię", el("small", { tekst: "Zastąpi obecne postępy" })),
            el("button", { klasa: "btn btn-drugi", type: "button", html: H5.ikona("import") + "<span>Wczytaj</span>", na: {
              click: function () {
                try { P.importuj(wklej.value); komunikat.textContent = "Wczytano postępy."; } catch (e) { komunikat.textContent = "Nie udało się wczytać: " + e.message; }
              }
            } }), wklej),
          komunikat,
          el("div", { klasa: "pole" }, el("span", { klasa: "pole-nazwa" }, "Zacznij od nowa", el("small", { tekst: "Usuwa XP, odznaki i historię odpowiedzi" })),
            el("button", { klasa: "btn btn-drugi", type: "button", html: H5.ikona("kosz") + "<span>Wyczyść postępy</span>", na: {
              click: function () { H5.potwierdz("Na pewno usunąć wszystkie postępy? Tego nie da się cofnąć.", function () { P.wyczysc(); H5.domowy(); }, "Usuń"); }
            } })))));
  };

  /* ----- dla rodzica ----- */
  H5.ekrany.rodzic = function () {
    var tematy = H5.listaTematow();
    var odpowiedzi = 0, bledy = 0;
    Object.keys(P.stan.zadania).forEach(function (k) { odpowiedzi += P.stan.zadania[k].ok + P.stan.zadania[k].zle; bledy += P.stan.zadania[k].zle; });

    var wiersze = tematy.map(function (t) {
      var s = H5.liczPostep(G.zadaniaTematu(t.id).filter(G.doNauki));
      return el("tr", null, el("td", { tekst: t.nr + ". " + t.tytul }), el("td", { klasa: "liczba", tekst: u.proc(P.gotowosc([t.id])) + "%" }),
        el("td", { klasa: "liczba", tekst: s.dobrze + " / " + s.razem }), el("td", { klasa: "liczba", tekst: s.opanowane + " / " + s.razem }));
    });

    var slabe = [];
    tematy.forEach(function (t) {
      t.wiedza.forEach(function (w) {
        if (w.priorytet === "C") return;
        var m = P.faktOpanowanie(t.id, w.id), st = P.stanFaktu(t.id, w.id);
        if (st === "uczy") slabe.push({ w: w, m: m, t: t });
      });
    });
    slabe.sort(function (a, b) { return a.m - b.m || (a.w.priorytet < b.w.priorytet ? -1 : 1); });

    var historia = P.stan.historia.slice(0, 12);
    var zdobyte = P.stan.odznaki;

    return el("div", { klasa: "ekran" },
      naglowek("Dla rodzica", "Postępy " + H5.ust.imie + (H5.ust.imie.slice(-1) === "j" ? "a" : "")),
      el("section", { klasa: "hero" },
        el("div", null, el("div", { klasa: "hero-liczba", html: u.proc(P.gotowosc()) + "<small>%</small>" }), el("div", { klasa: "hero-etykieta", tekst: "gotowości" })),
        el("div", { klasa: "hero-info" }, H5.warstwy(P.gotowosc()),
          el("p", { tekst: "Odpowiedzi: " + odpowiedzi + " · błędne: " + bledy + " · XP: " + P.stan.xp + " · seria: " + P.seria() + " " + u.odmiana(P.seria(), "dzień", "dni", "dni") }),
          el("p", { tekst: "Gotowość rośnie z każdą dobrą odpowiedzią. Zadanie liczy się w pełni, gdy jest opanowane – rozwiązane dobrze 3 razy. Najważniejsze fakty liczą się potrójnie." }))),
      el("section", { klasa: "sekcja" }, el("h2", { tekst: "Tematy" }),
        el("div", { klasa: "tabela-wrap karta" }, el("table", { klasa: "wyniki" },
          el("thead", null, el("tr", null, el("th", { tekst: "Temat" }), el("th", { klasa: "liczba", tekst: "Gotowość" }), el("th", { klasa: "liczba", tekst: "Dobrze" }), el("th", { klasa: "liczba", tekst: "Opanowane" }))),
          el("tbody", null, wiersze)))),
      el("section", { klasa: "sekcja" }, el("h2", { tekst: "Do powtórki" }),
        slabe.length ? el("div", { klasa: "fakty" }, slabe.slice(0, 10).map(function (x) {
          return el("div", { klasa: "fakt" }, el("span", { klasa: "prio prio-" + x.w.priorytet, tekst: x.w.priorytet }),
            el("p", null, x.w.tekst, el("span", { klasa: "fakt-zrodlo", tekst: "Temat " + x.t.nr + " · " + u.zrodlo(x.w.zrodlo) + " · opanowanie " + u.proc(x.m) + "%" })),
            el("span"));
        })) : el("p", { klasa: "puste", tekst: "Na razie nic – fakty pojawią się tu, gdy " + H5.ust.imie + " zacznie ćwiczyć i coś sprawi mu trudność." })),
      el("section", { klasa: "sekcja" }, el("h2", { tekst: "Ostatnie sesje" }),
        historia.length ? el("div", { klasa: "tabela-wrap karta" }, el("table", { klasa: "wyniki" },
          el("thead", null, el("tr", null, el("th", { tekst: "Data" }), el("th", { tekst: "Rodzaj" }), el("th", { klasa: "liczba", tekst: "Wynik" }))),
          el("tbody", null, historia.map(function (h) {
            return el("tr", null, el("td", { tekst: u.dataCzytelna(h.data) }), el("td", { tekst: h.tytul }),
              el("td", { klasa: "liczba", tekst: h.dobre + "/" + h.wszystkie + (h.punkty ? " pkt" : "") }));
          })))) : el("p", { klasa: "puste", tekst: "Jeszcze nie było żadnej sesji." })),
      el("section", { klasa: "sekcja" }, el("h2", { tekst: "Odznaki" }),
        el("div", { klasa: "odznaki" }, P.ODZNAKI.map(function (o) {
          var ma = !!zdobyte[o.id];
          return el("div", { klasa: "odznaka" + (ma ? "" : " brak"), title: o.opis }, H5.ikonaEl("gwiazda"), el("strong", { tekst: o.nazwa }), el("span", { tekst: ma ? u.dataCzytelna(zdobyte[o.id]) : o.opis }));
        }))));
  };
})();
