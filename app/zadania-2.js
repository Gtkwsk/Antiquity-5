/* Typy zadań, część 2: pary, kolejność, tabela (kategorie), luki. Obsługa dotykiem: dotknij – dotknij. */
(function () {
  var u = H5.u, el = u.el;
  var KOLORY_PAR = ["#3D6FD1", "#C98420", "#2A9D63", "#9B59B6", "#D35445", "#1A9AA6", "#7A8B2E", "#C2527F"];

  /* ----- połącz w pary ----- */
  H5.typy.pary = {
    polecenie: "Połącz w pary.",
    rysuj: function (z, api) {
      var n = z.pary.length, nr = 0;
      var lewe = [], prawe = [], aktywny = null;
      var polaczenie = {};   // indeks lewej → indeks prawej
      var kolL = el("div", { klasa: "pary-kol" }, el("h3", { tekst: (z.naglowki || [])[0] || "" }));
      var kolP = el("div", { klasa: "pary-kol" }, el("h3", { tekst: (z.naglowki || [])[1] || "" }));
      var box = el("div", null, el("div", { klasa: "pary" }, kolL, kolP), el("p", { klasa: "wskazowka", tekst: "Dotknij elementu po lewej, a potem pasującego po prawej." }));

      function odswiez() {
        var numery = {};
        Object.keys(polaczenie).forEach(function (l, k) { numery[l] = k; });
        lewe.forEach(function (x) {
          var p = polaczenie[x.i];
          if (p !== undefined) { var k = Object.keys(polaczenie).indexOf(String(x.i)); x.b.setAttribute("data-para", k + 1); x.b.style.setProperty("--kolor-pary", KOLORY_PAR[k % KOLORY_PAR.length]); }
          else { x.b.removeAttribute("data-para"); }
        });
        prawe.forEach(function (x) {
          var l = Object.keys(polaczenie).filter(function (k) { return polaczenie[k] === x.i; })[0];
          if (l !== undefined) { var k = Object.keys(polaczenie).indexOf(l); x.b.setAttribute("data-para", k + 1); x.b.style.setProperty("--kolor-pary", KOLORY_PAR[k % KOLORY_PAR.length]); }
          else x.b.removeAttribute("data-para");
        });
        api.gotowe(Object.keys(polaczenie).length === n);
      }
      function klik(strona, x) {
        if (box.classList.contains("zablokowane")) return;
        H5.dzwiek("klik");
        // dotknięcie połączonego elementu rozłącza parę
        if (strona === "L" && polaczenie[x.i] !== undefined) { delete polaczenie[x.i]; aktywny = null; wyczyscAktywne(); odswiez(); return; }
        if (strona === "P") {
          var l = Object.keys(polaczenie).filter(function (k) { return polaczenie[k] === x.i; })[0];
          if (l !== undefined && (!aktywny || aktywny.strona === "P")) { delete polaczenie[l]; aktywny = null; wyczyscAktywne(); odswiez(); return; }
        }
        if (!aktywny || aktywny.strona === strona) { wyczyscAktywne(); aktywny = { strona: strona, x: x }; x.b.classList.add("aktywny"); return; }
        var li = strona === "L" ? x.i : aktywny.x.i, pi = strona === "P" ? x.i : aktywny.x.i;
        Object.keys(polaczenie).forEach(function (k) { if (polaczenie[k] === pi) delete polaczenie[k]; });
        polaczenie[li] = pi;
        aktywny = null; wyczyscAktywne(); odswiez();
      }
      function wyczyscAktywne() { lewe.concat(prawe).forEach(function (x) { x.b.classList.remove("aktywny"); }); }

      // prawa kolumna nigdy nie stoi w całości naprzeciw swoich par
      var kolejL = u.tasuj(z.pary.map(function (p, i) { return i; }));
      var kolejP = u.tasujInaczej(z.pary.map(function (p, i) { return i; }), function (t) { return t.every(function (x, k) { return x === kolejL[k]; }); });
      kolejL.forEach(function (i) {
        var x = { i: i, b: el("button", { klasa: "klocek", type: "button", tekst: z.pary[i][0] }) };
        x.b.addEventListener("click", function () { klik("L", x); });
        lewe.push(x); kolL.appendChild(x.b);
      });
      kolejP.forEach(function (i) {
        var x = { i: i, b: el("button", { klasa: "klocek", type: "button", tekst: z.pary[i][1] }) };
        x.b.addEventListener("click", function () { klik("P", x); });
        prawe.push(x); kolP.appendChild(x.b);
      });
      nr = n;
      return {
        pytanie: "", el: box, natychmiast: false,
        // czytanie w kolejności z ekranu – nie zdradza, co jest parą
        warianty: kolejL.map(function (i) { return z.pary[i][0]; }).concat(kolejP.map(function (i) { return z.pary[i][1]; })),
        wynik: function () {
          var d = z.pary.filter(function (p, i) { return polaczenie[i] === i; }).length;
          return { dobre: d, wszystkie: nr, pelne: d === nr };
        },
        ujawnij: function () {
          box.classList.add("zablokowane");
          lewe.forEach(function (x) { x.b.classList.add(polaczenie[x.i] === x.i ? "dobra" : "zla"); });
          prawe.forEach(function (x) {
            var l = Object.keys(polaczenie).filter(function (k) { return polaczenie[k] === x.i; })[0];
            x.b.classList.add(String(l) === String(x.i) ? "dobra" : "zla");
          });
        },
        poprawna: function () { return z.pary.map(function (p) { return p[0] + " – " + p[1]; }).join("; "); }
      };
    }
  };

  /* ----- kolejność ----- */
  H5.typy.kolejnosc = {
    polecenie: "Uporządkuj we właściwej kolejności.",
    rysuj: function (z, api) {
      var n = z.elementy.length, miejsca = [], ulozone = [];
      var lista = el("div", { klasa: "miejsca" });
      var zasob = el("div", { klasa: "zasobnik" });
      var box = el("div", { klasa: "opcje" }, lista, el("p", { klasa: "wskazowka", tekst: "Dotykaj elementów po kolei – od pierwszego do ostatniego. Dotknij ułożonego, żeby go cofnąć." }), zasob);
      for (var i = 0; i < n; i++) { var m = el("div", { klasa: "miejsce" }); miejsca.push(m); lista.appendChild(m); ulozone.push(null); }
      function klocek(idx) {
        var b = el("button", { klasa: "klocek", type: "button", tekst: z.elementy[idx] });
        b.addEventListener("click", function () {
          if (box.classList.contains("zablokowane")) return;
          H5.dzwiek("klik");
          var gdzie = ulozone.indexOf(idx);
          if (gdzie >= 0) { ulozone[gdzie] = null; zasob.appendChild(b); }
          else { var wolne = ulozone.indexOf(null); ulozone[wolne] = idx; miejsca[wolne].appendChild(b); }
          api.gotowe(ulozone.indexOf(null) < 0);
        });
        return b;
      }
      var klocki = {}, kolej = u.tasujInaczej(z.elementy.map(function (e, i) { return i; }), u.poKolei);
      kolej.forEach(function (i) { klocki[i] = klocek(i); zasob.appendChild(klocki[i]); });
      return {
        // czytanie w kolejności z ekranu – nie zdradza właściwej kolejności
        pytanie: "", el: box, natychmiast: false, warianty: kolej.map(function (i) { return z.elementy[i]; }),
        wynik: function () {
          var d = ulozone.filter(function (idx, poz) { return idx === poz; }).length;
          return { dobre: d, wszystkie: n, pelne: d === n };
        },
        ujawnij: function () {
          box.classList.add("zablokowane");
          ulozone.forEach(function (idx, poz) { if (idx !== null) klocki[idx].classList.add(idx === poz ? "dobra" : "zla"); });
        },
        poprawna: function () { return z.elementy.join(" → "); }
      };
    }
  };

  /* ----- tabela: przyporządkuj do kolumn ----- */
  H5.typy.kategorie = {
    polecenie: "Przyporządkuj elementy do właściwych kolumn.",
    rysuj: function (z, api) {
      var aktywny = null, przydzial = z.elementy.map(function () { return []; });
      var kolumny = [], zasobChipy = [];
      var zasob = el("div", { klasa: "zasobnik" });
      var siatka = el("div", { klasa: "kolumny" });
      var wielokrotne = z.elementy.some(function (e) { return e.kolumny.length > 1; });
      var box = el("div", { klasa: "opcje" }, siatka,
        el("p", { klasa: "wskazowka", tekst: "Dotknij wyrażenia, a potem kolumny." + (wielokrotne ? " Jedno wyrażenie pasuje do dwóch kolumn – możesz je wstawić dwa razy." : "") }), zasob);

      function odswiez() {
        kolumny.forEach(function (k, ki) {
          Array.prototype.slice.call(k.lista.querySelectorAll(".klocek")).forEach(function (c) { c.remove(); });
          przydzial.forEach(function (lista, ei) {
            if (lista.indexOf(ki) < 0) return;
            var c = el("button", { klasa: "klocek", type: "button", tekst: z.elementy[ei].tekst, "data-e": ei });
            c.addEventListener("click", function (ev) {
              ev.stopPropagation();
              if (box.classList.contains("zablokowane")) return;
              H5.dzwiek("klik");
              przydzial[ei] = przydzial[ei].filter(function (x) { return x !== ki; });
              odswiez();
            });
            k.lista.appendChild(c);
          });
        });
        zasobChipy.forEach(function (c, ei) {
          var uzyty = przydzial[ei].length > 0;
          c.hidden = uzyty && !wielokrotne;
          c.style.opacity = uzyty ? ".5" : "";
        });
        api.gotowe(przydzial.every(function (l) { return l.length > 0; }));
      }
      z.kategorie.forEach(function (nazwa, ki) {
        var k = { lista: el("div", { klasa: "kolumna", role: "button", tabindex: "0", "aria-label": "Kolumna " + nazwa }, el("h3", { tekst: nazwa })) };
        function wstaw() {
          if (box.classList.contains("zablokowane") || aktywny === null) return;
          H5.dzwiek("klik");
          if (przydzial[aktywny].indexOf(ki) < 0) przydzial[aktywny].push(ki);
          if (!wielokrotne) przydzial[aktywny] = [ki];
          zasobChipy[aktywny].classList.remove("aktywny");
          aktywny = null;
          kolumny.forEach(function (x) { x.lista.classList.remove("cel"); });
          odswiez();
        }
        k.lista.addEventListener("click", wstaw);
        k.lista.addEventListener("keydown", function (e) { if (e.key === "Enter") wstaw(); });
        kolumny.push(k);
        siatka.appendChild(k.lista);
      });
      var kolej = u.tasuj(z.elementy.map(function (e, i) { return i; }));
      z.elementy.forEach(function (e, ei) {
        var c = el("button", { klasa: "klocek", type: "button", tekst: e.tekst });
        c.addEventListener("click", function () {
          if (box.classList.contains("zablokowane")) return;
          H5.dzwiek("klik");
          zasobChipy.forEach(function (x) { x.classList.remove("aktywny"); });
          aktywny = aktywny === ei ? null : ei;
          if (aktywny !== null) c.classList.add("aktywny");
          kolumny.forEach(function (x) { x.lista.classList.toggle("cel", aktywny !== null); });
        });
        zasobChipy[ei] = c;
      });
      kolej.forEach(function (ei) { zasob.appendChild(zasobChipy[ei]); });

      function trafne(ei) {
        var a = przydzial[ei].slice().sort().join(","), b = z.elementy[ei].kolumny.slice().sort().join(",");
        return a === b;
      }
      return {
        pytanie: "", el: box, natychmiast: false, warianty: kolej.map(function (ei) { return z.elementy[ei].tekst; }),
        wynik: function () {
          var d = z.elementy.filter(function (e, ei) { return trafne(ei); }).length;
          return { dobre: d, wszystkie: z.elementy.length, pelne: d === z.elementy.length };
        },
        ujawnij: function () {
          box.classList.add("zablokowane");
          kolumny.forEach(function (k, ki) {
            Array.prototype.slice.call(k.lista.querySelectorAll(".klocek")).forEach(function (c) {
              var ei = +c.getAttribute("data-e");
              c.classList.add(z.elementy[ei].kolumny.indexOf(ki) >= 0 ? "dobra" : "zla");
            });
          });
          zasobChipy.forEach(function (c, ei) {
            if (!trafne(ei) && przydzial[ei].length < z.elementy[ei].kolumny.length) { c.hidden = false; c.style.opacity = ""; c.classList.add("zla"); }
          });
        },
        poprawna: function () {
          return z.kategorie.map(function (nazwa, ki) {
            return nazwa + ": " + z.elementy.filter(function (e) { return e.kolumny.indexOf(ki) >= 0; }).map(function (e) { return e.tekst; }).join(", ");
          }).join(". ");
        }
      };
    }
  };

  /* ----- uzupełnij luki wyrazami z ramki ----- */
  H5.typy.luki = {
    polecenie: "Uzupełnij tekst wyrazami z ramki.",
    rysuj: function (z, api) {
      var czesci = z.tekst.split(/(\{[^}]+\})/).filter(function (x) { return x !== ""; });
      var luki = [], aktywnyWyraz = null, aktywnaLuka = null;
      var akapit = el("p", { klasa: "tekst-luki" });
      var ramka = el("div", { klasa: "zasobnik", "aria-label": "Ramka z wyrazami" });
      var box = el("div", { klasa: "opcje" }, akapit, el("p", { klasa: "wskazowka", tekst: "Dotknij wyrazu z ramki, a potem luki." }), ramka);

      function wyczysc() {
        luki.forEach(function (l) { l.b.classList.remove("cel"); });
        Array.prototype.slice.call(ramka.children).forEach(function (c) { c.classList.remove("aktywny"); });
      }
      function wstaw(luka, chip) {
        if (luka.chip) ramka.appendChild(luka.chip);
        luka.chip = chip;
        luka.b.textContent = chip.textContent;
        chip.remove();
        aktywnyWyraz = null; aktywnaLuka = null; wyczysc();
        api.gotowe(luki.every(function (l) { return l.chip; }));
      }
      czesci.forEach(function (c) {
        var m = c.match(/^\{([^}]+)\}$/);
        if (!m) { akapit.appendChild(document.createTextNode(c)); return; }
        var l = { odp: m[1], chip: null, b: el("button", { klasa: "luka", type: "button", "aria-label": "Luka", tekst: "…" }) };
        l.b.addEventListener("click", function () {
          if (box.classList.contains("zablokowane")) return;
          H5.dzwiek("klik");
          if (aktywnyWyraz) { wstaw(l, aktywnyWyraz); return; }
          if (l.chip) { ramka.appendChild(l.chip); l.chip = null; l.b.textContent = "…"; api.gotowe(false); return; }
          wyczysc(); aktywnaLuka = l; l.b.classList.add("cel");
        });
        luki.push(l);
        akapit.appendChild(l.b);
      });
      // wyrazy w ramce nie mogą stać w kolejności luk
      var wLukach = luki.map(function (l) { return l.odp; });
      u.tasujInaczej(wLukach.concat(z.dodatkowe || []), function (t) {
        return wLukach.length > 1 && t.filter(function (w) { return wLukach.indexOf(w) >= 0; }).join("|") === wLukach.join("|");
      }).forEach(function (w) {
        var chip = el("button", { klasa: "klocek", type: "button", tekst: w });
        chip.addEventListener("click", function () {
          if (box.classList.contains("zablokowane")) return;
          H5.dzwiek("klik");
          if (aktywnaLuka) { wstaw(aktywnaLuka, chip); return; }
          wyczysc();
          aktywnyWyraz = aktywnyWyraz === chip ? null : chip;
          if (aktywnyWyraz) chip.classList.add("aktywny");
        });
        ramka.appendChild(chip);
      });
      function tekst(pelny) { return czesci.map(function (c) { var m = c.match(/^\{([^}]+)\}$/); return m ? (pelny ? m[1] : "…") : c; }).join(""); }
      return {
        pytanie: "", el: box, natychmiast: false, mowa: tekst(false), warianty: [],
        wynik: function () {
          var d = luki.filter(function (l) { return l.chip && l.chip.textContent === l.odp; }).length;
          return { dobre: d, wszystkie: luki.length, pelne: d === luki.length };
        },
        ujawnij: function () {
          box.classList.add("zablokowane");
          luki.forEach(function (l) {
            var ok = l.chip && l.chip.textContent === l.odp;
            l.b.classList.add(ok ? "dobra" : "zla");
            if (!ok) l.b.after(el("span", { klasa: "poprawka", tekst: "(" + l.odp + ")" }));
          });
        },
        poprawna: function () { return tekst(true); }
      };
    }
  };
})();
