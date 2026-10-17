/* Typy zadań, część 3: oś czasu, mapa, wyjaśnij (samoocena), krzyżówka, fiszka. */
(function () {
  var u = H5.u, el = u.el;

  /* ----- oś czasu ----- */
  H5.typy.os = {
    polecenie: "Umieść wydarzenia na osi czasu.",
    rysuj: function (z, api) {
      var t = H5.tematy[z.tematId];
      var daty = z.wydarzenia.map(function (id) { return t.daty.filter(function (d) { return d.id === id; })[0]; }).filter(Boolean);
      var sort = daty.slice().sort(function (a, b) { return a.rok - b.rok; });
      var n = sort.length, aktywny = null, sloty = [], karty = {};
      // położenie: liniowe, a gdy daty są zbyt ściśnięte – równe odstępy (jak oś w podręczniku)
      var min = sort[0].rok, max = sort[n - 1].rok, poz = sort.map(function (d) { return max === min ? 0.5 : (d.rok - min) / (max - min); });
      var ciasno = poz.some(function (p, i) { return i > 0 && p - poz[i - 1] < 0.16; });
      if (ciasno) poz = sort.map(function (d, i) { return n === 1 ? 0.5 : i / (n - 1); });
      var os = el("div", { klasa: "os" }, el("div", { klasa: "os-linia" }),
        el("span", { klasa: "os-era", styl: "left:2%", tekst: "← dawniej" }),
        el("span", { klasa: "os-era", styl: "right:3%", tekst: "później →" }));
      var zasob = el("div", { klasa: "zasobnik" });
      var box = el("div", { klasa: "opcje" }, el("div", { klasa: "os-wrap" }, os), el("p", { klasa: "wskazowka", tekst: "Dotknij wydarzenia, a potem miejsca na osi nad właściwą datą." }), zasob);

      sort.forEach(function (d, i) {
        var przycisk = el("button", { klasa: "os-miejsce", type: "button", "aria-label": "Miejsce na osi: " + d.kiedy, tekst: "?" });
        var slot = { d: d, b: przycisk, wstawione: null };
        przycisk.addEventListener("click", function () {
          if (box.classList.contains("zablokowane")) return;
          H5.dzwiek("klik");
          if (aktywny) {
            if (slot.wstawione) zasob.appendChild(karty[slot.wstawione.id]);
            sloty.forEach(function (s) { if (s.wstawione === aktywny) { s.wstawione = null; s.b.textContent = "?"; s.b.classList.remove("pelne"); } });
            slot.wstawione = aktywny;
            przycisk.textContent = aktywny.co;
            przycisk.classList.add("pelne");
            karty[aktywny.id].remove();
            aktywny = null;
            sloty.forEach(function (s) { s.b.classList.remove("cel"); });
          } else if (slot.wstawione) {
            zasob.appendChild(karty[slot.wstawione.id]);
            slot.wstawione = null; przycisk.textContent = "?"; przycisk.classList.remove("pelne");
          }
          api.gotowe(sloty.every(function (s) { return s.wstawione; }));
        });
        var s = el("div", { klasa: "os-slot", styl: "left:" + (8 + poz[i] * 84) + "%" }, przycisk, el("div", { klasa: "os-kreska" }), el("div", { klasa: "os-data", tekst: d.kiedy }));
        sloty.push(slot);
        os.appendChild(s);
      });
      // karty i czytanie w tej samej, losowej kolejności – nigdy już ułożonej według dat
      var wLosowej = u.tasujInaczej(daty, function (t) { return t.every(function (d, i) { return d === sort[i]; }); });
      wLosowej.forEach(function (d) {
        var k = el("button", { klasa: "klocek", type: "button", tekst: d.co });
        k.addEventListener("click", function () {
          if (box.classList.contains("zablokowane")) return;
          H5.dzwiek("klik");
          Array.prototype.slice.call(zasob.children).forEach(function (c) { c.classList.remove("aktywny"); });
          aktywny = aktywny === d ? null : d;
          if (aktywny) k.classList.add("aktywny");
          sloty.forEach(function (s) { s.b.classList.toggle("cel", !!aktywny); });
        });
        karty[d.id] = k;
        zasob.appendChild(k);
      });
      return {
        pytanie: "", el: box, natychmiast: false,
        mowa: "Wydarzenia: " + wLosowej.map(function (d) { return d.co; }).join(", ") + ".",
        warianty: sort.map(function (d) { return d.kiedy; }),
        wynik: function () {
          var d = sloty.filter(function (s) { return s.wstawione === s.d; }).length;
          return { dobre: d, wszystkie: n, pelne: d === n };
        },
        ujawnij: function () {
          box.classList.add("zablokowane");
          sloty.forEach(function (s) {
            var ok = s.wstawione === s.d;
            s.b.classList.add(ok ? "dobra" : "zla");
            if (!ok) s.b.textContent = s.d.co;
          });
        },
        poprawna: function () { return sort.map(function (d) { return d.kiedy + " – " + d.co; }).join("; "); }
      };
    }
  };

  /* ----- mapa ----- */
  var DOTKNIJ = { kontynent: "kontynentu", miasto: "miasta", rzeka: "rzeki", morze: "morza", wyspa: "wyspy" };
  H5.typy.mapa = {
    polecenie: "Przyjrzyj się mapie i wykonaj polecenie.",
    rysuj: function (z, api) {
      var def = H5.tematy[z.tematId].mapy.filter(function (m) { return m.id === z.mapa; })[0];
      var legenda = H5.mapa.legenda(def);
      if (z.kliknij) {
        var wybrany = null, ksztalty = {}, rodzaj = H5.mapa.rodzaj(z.kliknij, def);
        // klikać można tylko obiekty tego samego rodzaju co odpowiedź (np. same miasta)
        var svg = H5.mapa.rysuj(def, {
          tylko: rodzaj,
          klik: function (id, ksztalt) {
            if (box.classList.contains("zablokowane")) return;
            H5.dzwiek("klik");
            Object.keys(ksztalty).forEach(function (k) { ksztalty[k].classList.remove("wybrany"); });
            wybrany = id; ksztalt.classList.add("wybrany");
            if (api.tryb === "nauka") { box.classList.add("zablokowane"); api.odpowiedziano(); } else api.gotowe(true);
          }
        });
        Array.prototype.slice.call(svg.querySelectorAll(".klik")).forEach(function (p) { ksztalty[p.getAttribute("data-id")] = p; });
        var box = el("div", { klasa: "opcje" }, el("div", { klasa: "mapa-wrap" }, svg), legenda, el("p", { klasa: "wskazowka", tekst: "Dotknij " + (DOTKNIJ[rodzaj] || "miejsca") + " na mapie." }));
        return {
          pytanie: z.pytanie, el: box, natychmiast: true, warianty: [],
          wynik: function () { var ok = wybrany === z.kliknij; return { dobre: ok ? 1 : 0, wszystkie: 1, pelne: ok }; },
          ujawnij: function () {
            box.classList.add("zablokowane");
            Object.keys(ksztalty).forEach(function (k) { ksztalty[k].classList.remove("wybrany"); });
            if (ksztalty[z.kliknij]) ksztalty[z.kliknij].classList.add("dobry");
            if (wybrany && wybrany !== z.kliknij) ksztalty[wybrany].classList.add("zly");
          },
          poprawna: function () { return H5.mapa.nazwa(z.kliknij, def); }
        };
      }
      var o = H5.zad.opcje(z.odpowiedzi, z.poprawna, api);
      var box2 = el("div", { klasa: "opcje" }, el("div", { klasa: "mapa-wrap" }, H5.mapa.rysuj(def, {})), legenda, o.el);
      return {
        pytanie: z.pytanie, el: box2, natychmiast: true, warianty: o.warianty,
        wynik: o.wynik, ujawnij: o.ujawnij,
        poprawna: function () { return z.odpowiedzi[z.poprawna]; }
      };
    }
  };

  /* ----- wyjaśnij: odpowiedź, wzór, samoocena ----- */
  H5.typy.otwarte = {
    polecenie: "Odpowiedz pełnymi zdaniami.",
    rysuj: function (z, api) {
      var pole = el("textarea", { klasa: "pole-odpowiedzi", id: "odp-" + z.klucz.replace(/[^a-z0-9]/gi, "-"), placeholder: "Napisz odpowiedź albo powiedz ją na głos, a potem dotknij „Sprawdź”.", "aria-label": "Twoja odpowiedź" });
      var ocena = el("div", { klasa: "opcje", hidden: true });
      var box = el("div", { klasa: "opcje" }, pole, ocena);
      var zaznaczone = z.punkty.map(function () { return false; });
      setTimeout(function () { api.gotowe(true); }, 0);
      return {
        pytanie: z.pytanie, el: box, natychmiast: false, samoocena: true, warianty: [],
        wynik: function () {
          var d = zaznaczone.filter(Boolean).length;
          return { dobre: Math.min(d, z.wymagane), wszystkie: z.wymagane, pelne: d >= z.wymagane };
        },
        ujawnij: function () {
          pole.readOnly = true;
          var lista = el("div", { klasa: "punkty-lista" });
          z.punkty.forEach(function (p, i) {
            var cb = el("input", { type: "checkbox", id: "pkt-" + z.klucz.replace(/[^a-z0-9]/gi, "-") + "-" + i });
            cb.addEventListener("change", function () { zaznaczone[i] = cb.checked; H5.dzwiek("klik"); });
            lista.appendChild(el("label", { "for": cb.id }, cb, el("span", { tekst: p })));
          });
          u.dodaj(ocena, [
            el("div", { klasa: "wzor" }, el("span", { klasa: "wzor-tytul", tekst: "Wzór odpowiedzi" }), el("p", { tekst: z.wzor }), H5.mowa.przycisk(z.wzor)),
            el("p", { klasa: "wskazowka", tekst: "Zaznacz, co było w twojej odpowiedzi. Potrzeba " + z.wymagane + " " + u.odmiana(z.wymagane, "punktu", "punktów", "punktów") + "." }),
            lista,
            el("button", { klasa: "btn btn-glowny btn-pelny", type: "button", tekst: "Zapisz ocenę", na: { click: function () { api.odpowiedziano(); } } })
          ]);
          ocena.hidden = false;
          if (H5.ust.czytajSamo) H5.mowa.mow("Wzór odpowiedzi. " + z.wzor);
        },
        poprawna: function () { return z.wzor; }
      };
    }
  };

  /* ----- krzyżówka ----- */
  var ALFABET = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ".split("");
  function bezOgonkow(s) { return s.replace(/[ĄĆĘŁŃÓŚŹŻ]/g, function (c) { return "ACELNOSZZ"["ĄĆĘŁŃÓŚŹŻ".indexOf(c)]; }); }
  H5.typy.krzyzowka = {
    polecenie: "Rozwiąż krzyżówkę i odczytaj hasło.",
    rysuj: function (z, api) {
      var maxL = Math.max.apply(null, z.wiersze.map(function (w) { return w.litera; }));
      var wpisy = z.wiersze.map(function () { return ""; }), aktywny = 0, wiersze = [];
      var siatka = el("div", { klasa: "krzyzowka" });
      var pytanie = el("div", { klasa: "kw-pytanie" });
      var klaw = el("div", { klasa: "klawiatura-liter" });
      var box = el("div", { klasa: "opcje" }, el("div", { klasa: "krzyzowka-wrap" }, siatka), pytanie, klaw);

      function pokazPytanie() {
        u.wyczysc(pytanie);
        u.dodaj(pytanie, [el("span", { tekst: (aktywny + 1) + ". " + z.wiersze[aktywny].pytanie + " (" + z.wiersze[aktywny].odpowiedz.length + " liter)" }), H5.mowa.przycisk(z.wiersze[aktywny].pytanie)]);
        wiersze.forEach(function (w, i) { w.el.classList.toggle("aktywny", i === aktywny); });
      }
      function rysujWiersz(i) {
        var w = wiersze[i];
        w.kratki.forEach(function (k, j) { k.textContent = wpisy[i][j] || ""; });
      }
      z.wiersze.forEach(function (w, i) {
        var r = el("div", { klasa: "kw-wiersz", role: "button", tabindex: "0", "aria-label": "Wiersz " + (i + 1) });
        r.appendChild(el("span", { klasa: "kw-nr", tekst: i + 1 }));
        for (var p = 0; p < maxL - w.litera; p++) r.appendChild(el("span", { klasa: "kratka pusta" }));
        var kratki = [];
        for (var j = 0; j < w.odpowiedz.length; j++) {
          var k = el("span", { klasa: "kratka" + (j === w.litera ? " haslo" : "") });
          kratki.push(k); r.appendChild(k);
        }
        r.addEventListener("click", function () { if (!box.classList.contains("zablokowane")) { aktywny = i; pokazPytanie(); } });
        wiersze.push({ el: r, kratki: kratki });
        siatka.appendChild(r);
      });
      function wpisz(litera) {
        if (box.classList.contains("zablokowane")) return;
        H5.dzwiek("klik");
        var dl = z.wiersze[aktywny].odpowiedz.length;
        if (litera === "⌫") wpisy[aktywny] = wpisy[aktywny].slice(0, -1);
        else if (wpisy[aktywny].length < dl) wpisy[aktywny] += litera;
        rysujWiersz(aktywny);
        if (wpisy[aktywny].length === dl && litera !== "⌫") {
          var nast = wpisy.findIndex(function (x, i) { return x.length < z.wiersze[i].odpowiedz.length; });
          if (nast >= 0) { aktywny = nast; pokazPytanie(); }
        }
        api.gotowe(wpisy.every(function (x, i) { return x.length === z.wiersze[i].odpowiedz.length; }));
      }
      ALFABET.forEach(function (l) { klaw.appendChild(el("button", { type: "button", tekst: l, na: { click: function () { wpisz(l); } } })); });
      klaw.appendChild(el("button", { klasa: "szeroki", type: "button", tekst: "⌫ Usuń", "aria-label": "Usuń literę", na: { click: function () { wpisz("⌫"); } } }));
      function klawisz(e) {
        if (!document.body.contains(box)) { window.removeEventListener("keydown", klawisz); return; }
        var l = (e.key || "").toUpperCase();
        if (ALFABET.indexOf(l) >= 0) wpisz(l);
        else if (e.key === "Backspace") wpisz("⌫");
      }
      window.addEventListener("keydown", klawisz);
      pokazPytanie();
      function trafny(i) { return wpisy[i] === z.wiersze[i].odpowiedz || bezOgonkow(wpisy[i]) === bezOgonkow(z.wiersze[i].odpowiedz); }
      return {
        pytanie: "", el: box, natychmiast: false, mowa: "Pierwsze hasło: " + z.wiersze[0].pytanie, warianty: [],
        wynik: function () {
          var d = z.wiersze.filter(function (w, i) { return trafny(i); }).length;
          return { dobre: d, wszystkie: z.wiersze.length, pelne: d === z.wiersze.length };
        },
        ujawnij: function () {
          box.classList.add("zablokowane");
          klaw.hidden = true;
          wiersze.forEach(function (w, i) {
            w.el.classList.remove("aktywny");
            w.el.classList.add(trafny(i) ? "dobra" : "zla");
            wpisy[i] = z.wiersze[i].odpowiedz;
            rysujWiersz(i);
          });
          u.wyczysc(pytanie);
          pytanie.appendChild(el("strong", { tekst: "Hasło: " + z.haslo + " – " + (z.opisHasla || "") }));
        },
        poprawna: function () { return "Hasło: " + z.haslo; }
      };
    }
  };

  /* ----- fiszka: odwróć i oceń się ----- */
  H5.typy.fiszka = {
    polecenie: "Przypomnij sobie, potem odwróć kartę.",
    rysuj: function (z, api) {
      var umiem = null;
      var karta = el("div", { klasa: "fiszka", role: "button", tabindex: "0", "aria-label": "Odwróć kartę" },
        el("div", { klasa: "fiszka-srodek" },
          el("div", { klasa: "fiszka-strona fiszka-przod", tekst: z.przod }),
          el("div", { klasa: "fiszka-strona fiszka-tyl", tekst: z.tyl })));
      var ocena = el("div", { klasa: "przyciski-koniec", hidden: true },
        el("button", { klasa: "btn btn-drugi btn-duzy", type: "button", tekst: "Jeszcze nie umiem", na: { click: function () { umiem = false; api.odpowiedziano(); } } }),
        el("button", { klasa: "btn btn-glowny btn-duzy", type: "button", tekst: "Umiem", na: { click: function () { umiem = true; api.odpowiedziano(); } } }));
      function odwroc() {
        if (karta.classList.contains("odwrocona")) return;
        H5.dzwiek("odwroc");
        karta.classList.add("odwrocona");
        ocena.hidden = false;
        if (H5.ust.czytajSamo) H5.mowa.mow(z.tyl);
      }
      karta.addEventListener("click", odwroc);
      karta.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); odwroc(); } });
      return {
        pytanie: "", el: el("div", { klasa: "opcje" }, karta, ocena), natychmiast: true, bezWerdyktu: true,
        mowa: z.przod, warianty: [],
        wynik: function () { return { dobre: umiem ? 1 : 0, wszystkie: 1, pelne: !!umiem }; },
        ujawnij: function () { },
        poprawna: function () { return z.tyl; }
      };
    }
  };
})();
