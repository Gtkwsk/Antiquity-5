/* Typy zadań, część 1: wybór ABCD, ilustracja, prawda/fałsz, co nie pasuje, liczenie, nawiasy.

   Każdy typ: H5.typy[typ] = { polecenie, rysuj(z, api) } → obiekt:
     { pytanie, el, natychmiast, wynik(), ujawnij(), poprawna(), warianty }
   api: { tryb: "nauka" | "test", gotowe(bool), odpowiedziano() }
   wynik() → { dobre, wszystkie, pelne } */
H5.typy = {};
H5.zad = {};
(function () {
  var u = H5.u, el = u.el, LITERY = "ABCDEFGH";

  /* Wspólny blok odpowiedzi do wyboru (ABCD, intruz, mapa z odpowiedziami). */
  H5.zad.opcje = function (teksty, poprawna, api, opcje) {
    opcje = opcje || {};
    var kolej = u.tasuj(teksty.map(function (t, i) { return i; }));
    var wybrana = null, przyciski = {};
    var lista = el("div", { klasa: "opcje" + (opcje.dwieKolumny ? " opcje-2" : ""), role: "group" });
    kolej.forEach(function (i, poz) {
      var b = el("button", { klasa: "opcja", type: "button" },
        el("span", { klasa: "opcja-litera", tekst: LITERY[poz] }),
        el("span", { klasa: "opcja-tekst", tekst: teksty[i] }));
      b.appendChild(H5.mowa.przycisk(LITERY[poz] + ". " + teksty[i], "Przeczytaj odpowiedź " + LITERY[poz]));
      b.addEventListener("click", function () {
        if (lista.classList.contains("zablokowane")) return;
        H5.dzwiek("klik");
        if (wybrana !== null) przyciski[wybrana].classList.remove("wybrana");
        wybrana = i;
        b.classList.add("wybrana");
        if (api.tryb === "nauka") { lista.classList.add("zablokowane"); api.odpowiedziano(); }
        else api.gotowe(true);
      });
      przyciski[i] = b;
      lista.appendChild(b);
    });
    return {
      el: lista,
      warianty: kolej.map(function (i, poz) { return LITERY[poz] + ". " + teksty[i]; }),
      wynik: function () { var ok = wybrana === poprawna; return { dobre: ok ? 1 : 0, wszystkie: 1, pelne: ok }; },
      ujawnij: function () {
        lista.classList.add("zablokowane");
        Object.keys(przyciski).forEach(function (k) {
          var i = +k, b = przyciski[k];
          b.classList.remove("wybrana");
          if (i === poprawna) b.classList.add("dobra");
          else if (i === wybrana) b.classList.add("zla");
          else b.classList.add("wygaszona");
        });
      }
    };
  };

  /* ----- wybór ABCD ----- */
  H5.typy.wybor = {
    polecenie: "Wybierz poprawną odpowiedź.",
    rysuj: function (z, api) {
      var o = H5.zad.opcje(z.odpowiedzi, z.poprawna, api);
      return {
        pytanie: z.pytanie, el: o.el, natychmiast: true, warianty: o.warianty,
        wynik: o.wynik, ujawnij: o.ujawnij,
        poprawna: function () { return z.odpowiedzi[z.poprawna]; }
      };
    }
  };

  /* ----- ilustracja: jak wybór, z obrazkiem ----- */
  H5.typy.ilustracja = {
    polecenie: "Przyjrzyj się ilustracji i wybierz odpowiedź.",
    rysuj: function (z, api) {
      var o = H5.zad.opcje(z.odpowiedzi, z.poprawna, api);
      var box = el("div", { klasa: "opcje" },
        el("img", { src: z.obraz, alt: z.opisObrazu || "", styl: "border-radius:14px;max-width:100%" }), o.el);
      return {
        pytanie: z.pytanie, el: box, natychmiast: true, warianty: o.warianty,
        wynik: o.wynik, ujawnij: o.ujawnij,
        poprawna: function () { return z.odpowiedzi[z.poprawna]; }
      };
    }
  };

  /* ----- co nie pasuje ----- */
  H5.typy.intruz = {
    polecenie: "Wskaż element, który nie pasuje do pozostałych.",
    rysuj: function (z, api) {
      var o = H5.zad.opcje(z.elementy, z.intruz, api, { dwieKolumny: true });
      return {
        pytanie: "", el: o.el, natychmiast: true, warianty: o.warianty,
        wynik: o.wynik, ujawnij: o.ujawnij,
        poprawna: function () { return "Nie pasuje: " + z.elementy[z.intruz]; }
      };
    }
  };

  /* ----- prawda / fałsz ----- */
  H5.typy.pf = {
    polecenie: "Oceń, czy zdania są prawdziwe (P), czy fałszywe (F).",
    rysuj: function (z, api) {
      var odp = z.zdania.map(function () { return null; }), wiersze = [];
      var lista = el("div", { klasa: "pf-lista" });
      // zdania za każdym razem w innej kolejności – bez schematu „pierwsze jest prawdziwe”
      var kolej = u.tasuj(z.zdania.map(function (s, i) { return i; }));
      kolej.forEach(function (i, poz) {
        var s = z.zdania[i];
        var bP = el("button", { klasa: "pf-btn", type: "button", tekst: "P", "aria-label": "Prawda" });
        var bF = el("button", { klasa: "pf-btn", type: "button", tekst: "F", "aria-label": "Fałsz" });
        function wybierz(wart) {
          if (lista.classList.contains("zablokowane")) return;
          H5.dzwiek("klik");
          odp[i] = wart;
          bP.classList.toggle("wybrana", wart === true);
          bF.classList.toggle("wybrana", wart === false);
          api.gotowe(odp.every(function (x) { return x !== null; }));
        }
        bP.addEventListener("click", function () { wybierz(true); });
        bF.addEventListener("click", function () { wybierz(false); });
        var w = el("div", { klasa: "pf-zdanie" },
          el("div", { klasa: "zadanie-gora" }, el("div", null, el("span", { tekst: (poz + 1) + ". " + s.tekst })), H5.mowa.przycisk(s.tekst)),
          el("div", { klasa: "pf-przyciski" }, bP, bF));
        wiersze[i] = w;
        lista.appendChild(w);
      });
      return {
        pytanie: "", el: lista, natychmiast: false,
        warianty: kolej.map(function (i, poz) { return (poz + 1) + ". " + z.zdania[i].tekst; }),
        wynik: function () {
          var d = 0;
          z.zdania.forEach(function (s, i) { if (odp[i] === s.prawda) d++; });
          return { dobre: d, wszystkie: z.zdania.length, pelne: d === z.zdania.length };
        },
        ujawnij: function () {
          lista.classList.add("zablokowane");
          z.zdania.forEach(function (s, i) {
            var ok = odp[i] === s.prawda;
            wiersze[i].classList.add(ok ? "dobra" : "zla");
            if (!ok) wiersze[i].appendChild(el("p", { klasa: "pf-uwaga", tekst: (s.prawda ? "To zdanie jest prawdziwe." : "To zdanie jest fałszywe.") + (s.wyjasnienie ? " " + s.wyjasnienie : "") }));
          });
        },
        // po odpowiedzi – tylko zdania z błędem; w podsumowaniu (bez odpowiedzi) – wszystkie, z treścią
        poprawna: function () {
          var zle = kolej.filter(function (i) { return odp[i] !== null && odp[i] !== z.zdania[i].prawda; });
          return (zle.length ? zle : kolej).map(function (i) { return "„" + z.zdania[i].tekst + "” – " + (z.zdania[i].prawda ? "prawda" : "fałsz"); }).join("; ");
        }
      };
    }
  };

  /* ----- liczenie ----- */
  H5.typy.liczenie = {
    polecenie: "Oblicz.",
    rysuj: function (z, api) {
      var wartosc = "";
      var ekran = el("div", { klasa: "wyswietlacz", "aria-live": "polite", tekst: "?" });
      var jedn = el("span", { klasa: "wskazowka", tekst: z.jednostka || "" });
      var klaw = el("div", { klasa: "klawiatura" });
      function pokaz() { ekran.textContent = wartosc ? Number(wartosc).toLocaleString("pl-PL") : "?"; api.gotowe(wartosc.length > 0); }
      function wcisnij(k) {
        if (klaw.classList.contains("zablokowane")) return;
        H5.dzwiek("klik");
        if (k === "⌫") wartosc = wartosc.slice(0, -1);
        else if (k === "C") wartosc = "";
        else if (wartosc.length < 9) wartosc = (wartosc + k).replace(/^0+(?=\d)/, "");
        pokaz();
      }
      ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "⌫"].forEach(function (k) {
        klaw.appendChild(el("button", { type: "button", tekst: k, "aria-label": k === "⌫" ? "Usuń cyfrę" : (k === "C" ? "Wyczyść" : k), na: { click: function () { wcisnij(k); } } }));
      });
      var box = el("div", { klasa: "liczenie" }, ekran, jedn, klaw);
      function klawisz(e) {
        if (!document.body.contains(box)) { window.removeEventListener("keydown", klawisz); return; }
        if (/^\d$/.test(e.key)) wcisnij(e.key);
        else if (e.key === "Backspace") wcisnij("⌫");
      }
      window.addEventListener("keydown", klawisz);
      return {
        pytanie: z.pytanie, el: box, natychmiast: false, warianty: [],
        wynik: function () { var ok = parseInt(wartosc, 10) === z.odpowiedz; return { dobre: ok ? 1 : 0, wszystkie: 1, pelne: ok }; },
        ujawnij: function () {
          klaw.classList.add("zablokowane");
          var ok = parseInt(wartosc, 10) === z.odpowiedz;
          ekran.classList.add(ok ? "dobra" : "zla");
          if (!ok) jedn.textContent = "Poprawnie: " + z.odpowiedz.toLocaleString("pl-PL") + " " + (z.jednostka || "");
        },
        poprawna: function () { return z.odpowiedz.toLocaleString("pl-PL") + " " + (z.jednostka || ""); }
      };
    }
  };

  /* ----- nawiasy: podkreśl właściwe określenie ----- */
  function czesciNawiasow(tekst) {
    var czesci = [], re = /\[([^\]]+)\]/g, ost = 0, m;
    while ((m = re.exec(tekst))) {
      if (m.index > ost) czesci.push({ tekst: tekst.slice(ost, m.index) });
      var opcje = m[1].split("|"), poprawna = 0;
      opcje = opcje.map(function (o, i) { if (o.indexOf("*") >= 0) poprawna = i; return o.replace("*", "").trim(); });
      czesci.push({ opcje: opcje, poprawna: poprawna });
      ost = re.lastIndex;
    }
    if (ost < tekst.length) czesci.push({ tekst: tekst.slice(ost) });
    return czesci;
  }
  H5.zad.czesciNawiasow = czesciNawiasow;

  H5.typy.nawiasy = {
    polecenie: "Podkreśl w nawiasach właściwe określenia.",
    rysuj: function (z, api) {
      var czesci = czesciNawiasow(z.tekst), grupy = [];
      var akapit = el("p", { klasa: "tekst-luki" });
      czesci.forEach(function (c) {
        if (c.tekst !== undefined) { akapit.appendChild(document.createTextNode(c.tekst)); return; }
        var g = { c: c, wybor: null, przyciski: [] };
        var span = el("span", { klasa: "nawias", role: "group" });
        c.kolej = u.tasuj(c.opcje.map(function (o, i) { return i; }));   // ta sama kolejność na ekranie i w czytaniu
        c.kolej.forEach(function (i) {
          var b = el("button", { type: "button", tekst: c.opcje[i] });
          b.addEventListener("click", function () {
            if (akapit.classList.contains("zablokowane")) return;
            H5.dzwiek("klik");
            g.wybor = i;
            g.przyciski.forEach(function (x) { x.b.classList.toggle("wybrana", x.i === i); });
            api.gotowe(grupy.every(function (x) { return x.wybor !== null; }));
          });
          g.przyciski.push({ b: b, i: i });
          span.appendChild(b);
        });
        g.span = span;
        grupy.push(g);
        akapit.appendChild(span);
      });
      function zdanie(zWyborem) {
        return czesci.map(function (c) {
          if (c.tekst !== undefined) return c.tekst;
          return zWyborem ? c.opcje[c.poprawna] : "(" + c.kolej.map(function (i) { return c.opcje[i]; }).join(" czy ") + ")";
        }).join("");
      }
      return {
        pytanie: "", el: akapit, natychmiast: false, mowa: zdanie(false), warianty: [],
        wynik: function () {
          var d = grupy.filter(function (g) { return g.wybor === g.c.poprawna; }).length;
          return { dobre: d, wszystkie: grupy.length, pelne: d === grupy.length };
        },
        ujawnij: function () {
          akapit.classList.add("zablokowane");
          grupy.forEach(function (g) {
            g.przyciski.forEach(function (x) {
              x.b.classList.remove("wybrana");
              if (x.i === g.c.poprawna) x.b.classList.add("dobra");
              else if (x.i === g.wybor) x.b.classList.add("zla");
            });
          });
        },
        poprawna: function () { return zdanie(true); }
      };
    }
  };
})();
