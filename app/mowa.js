/* Czytanie na głos: synteza mowy przeglądarki, polski głos, słownik wymowy, kolejka zdań. */
H5.mowa = (function () {
  var synt = window.speechSynthesis;
  var dostepna = !!(synt && window.SpeechSynthesisUtterance);
  var aktywnyPrzycisk = null, numer = 0;

  /* ----- liczebniki w dopełniaczu (po „około”) ----- */
  var JED = ["", "jednego", "dwóch", "trzech", "czterech", "pięciu", "sześciu", "siedmiu", "ośmiu", "dziewięciu",
    "dziesięciu", "jedenastu", "dwunastu", "trzynastu", "czternastu", "piętnastu", "szesnastu", "siedemnastu", "osiemnastu", "dziewiętnastu"];
  var DZIES = ["", "", "dwudziestu", "trzydziestu", "czterdziestu", "pięćdziesięciu", "sześćdziesięciu", "siedemdziesięciu", "osiemdziesięciu", "dziewięćdziesięciu"];
  var SETKI = ["", "stu", "dwustu", "trzystu", "czterystu", "pięciuset", "sześciuset", "siedmiuset", "ośmiuset", "dziewięciuset"];
  function doTysiaca(n) {
    var s = Math.floor(n / 100), r = n % 100, w = [];
    if (s) w.push(SETKI[s]);
    if (r < 20) { if (r) w.push(JED[r]); }
    else { w.push(DZIES[Math.floor(r / 10)]); if (r % 10) w.push(JED[r % 10]); }
    return w.join(" ");
  }
  function dopelniacz(n) {
    if (n === 0) return "zera";
    var tys = Math.floor(n / 1000), reszta = n % 1000, w = [];
    if (tys === 1) w.push("tysiąca");
    else if (tys > 1) w.push(doTysiaca(tys) + " tysięcy");
    if (reszta) w.push(doTysiaca(reszta));
    return w.join(" ");
  }
  // „40 tysięcy” → „czterdziestu tysięcy”; null, gdy liczba jest za duża
  function liczbaDop(liczba, jedn) {
    var n = parseInt(liczba, 10);
    if (n > 999999) return null;
    if (!jedn) return dopelniacz(n);
    if (/^tys/.test(jedn)) return dopelniacz(n) + " tysięcy";
    return n === 1 ? "jednego miliona" : dopelniacz(n) + " milionów";
  }
  // liczba po „około”: całość, ułamek („1,5 mln”), jednostka i zakres („15 000–13 000”);
  // przecinek z wyliczenia („około 200 000, Bliski Wschód”) nie jest ułamkiem
  var LICZBA = "(\\d+)(?:,(\\d+))?(?!\\d|,\\d)(?:\\s*(tys\\.|tysięcy|mln|milionów|miliona))?(?:\\s*–\\s*(\\d+)(?!\\d|,\\d))?";
  function frazaDop(calosc, ulamek, jedn, doLiczby) {
    if (ulamek) {
      if (!jedn || /^tys/.test(jedn)) return null;
      if (ulamek === "5" && +calosc < 20) return calosc === "1" ? "półtora miliona" : JED[+calosc] + " i pół miliona";
      return calosc + "," + ulamek + " miliona";
    }
    var d = liczbaDop(calosc, jedn);
    if (d === null) return null;
    var d2 = doLiczby ? liczbaDop(doLiczby, jedn) : null;
    return d2 ? d + " do " + d2 : d;
  }
  var MIAN = ["zero", "jeden", "dwa", "trzy", "cztery", "pięć", "sześć", "siedem", "osiem", "dziewięć"];

  /* ----- wieki zapisane cyframi rzymskimi ----- */
  var PORZ = ["", "pierwszy", "drugi", "trzeci", "czwarty", "piąty", "szósty", "siódmy", "ósmy", "dziewiąty", "dziesiąty",
    "jedenasty", "dwunasty", "trzynasty", "czternasty", "piętnasty", "szesnasty", "siedemnasty", "osiemnasty", "dziewiętnasty",
    "dwudziesty", "dwudziesty pierwszy"];
  function rzymskie(r) {
    var w = { I: 1, V: 5, X: 10, L: 50 }, s = 0;
    for (var i = 0; i < r.length; i++) {
      var a = w[r[i]], b = w[r[i + 1]] || 0;
      s += a < b ? -a : a;
    }
    return s;
  }
  function porzDopelniacz(slowo) {   // drugi → drugiego, czwarty → czwartego
    return slowo.split(" ").map(function (x) { return /i$/.test(x) ? x + "ego" : x.replace(/y$/, "ego"); }).join(" ");
  }
  function porzMiejscownik(slowo) {  // drugi → drugim, czwarty → czwartym
    return slowo.split(" ").map(function (x) { return x + "m"; }).join(" ");
  }
  function porzNijaki(slowo) {       // drugi → drugie, czwarty → czwarte
    return slowo.split(" ").map(function (x) { return /i$/.test(x) ? x + "e" : x.replace(/y$/, "e"); }).join(" ");
  }

  function normalizuj(t) {
    t = String(t || "");
    t = t.replace(/Ötzi/g, "Eci").replace(/★/g, "").replace(/\s\([PF]\)/g, "");
    t = t.replace(/(\d) (?=\d{3}\b)/g, "$1");                 // 10 000 → 10000
    // „ok.” tylko jako osobny wyraz („zwłok.” zostaje) – \b nie zna polskich liter
    t = t.replace(/(^|[\s(„"])ok\.\s/g, "$1około ").replace(/(^|[\s(„"])Ok\.\s/g, "$1Około ");
    t = t.replace(new RegExp("([Oo])koło (\\(?)" + LICZBA, "g"), function (m, o, nawias, c, ul, jedn, doL) {
      var f = frazaDop(c, ul, jedn, doL);
      return f === null ? m : o + "koło " + nawias + f;
    });
    // w nawiasie po „około” także drugi wariant: „około (40 tysięcy czy 4 milionów)”
    t = t.replace(/([Oo])koło \(([^)]*)\)/g, function (m, o, wnetrze) {
      return o + "koło (" + wnetrze.replace(new RegExp("(czy )" + LICZBA, "g"), function (m2, czy, c, ul, jedn, doL) {
        var f = frazaDop(c, ul, jedn, doL);
        return f === null ? m2 : czy + f;
      }) + ")";
    });
    // bez „około”: „2,5 mln” → „dwa i pół miliona”, „1,9 mln” → „1,9 miliona”
    t = t.replace(/\b(\d),5\s*(mln|milionów|miliona)(?![a-ząćęłńóśźż])/g, function (m, c) { return c === "1" ? "półtora miliona" : MIAN[+c] + " i pół miliona"; });
    t = t.replace(/\b(\d+,\d+)\s*(mln|milionów)(?![a-ząćęłńóśźż])/g, "$1 miliona");
    // „4 mln” → „4 miliony”, „2 tys.” → „2 tysiące”, „200 tys.” → „200 tysięcy”
    function odmiana(n, f1, f2, f5) { var j = n % 10, d = n % 100; return n === 1 ? f1 : (j >= 2 && j <= 4 && (d < 12 || d > 14)) ? f2 : f5; }
    t = t.replace(/\b(\d+)\s*mln\b/g, function (m, c) { return c + " " + odmiana(+c, "milion", "miliony", "milionów"); });
    t = t.replace(/\b(\d+)\s*tys\./g, function (m, c) { return c + " " + odmiana(+c, "tysiąc", "tysiące", "tysięcy"); });
    // zapis w dopełniaczu („sprzed 3 tysięcy lat”, „4 milionów lat temu”) → „trzech tysięcy”, „czterech milionów”
    t = t.replace(/\b(\d*[234])\s+(tysięcy|milionów)(?![a-ząćęłńóśźż])/g, function (m, c, slowo) {
      var n = +c;
      return n % 100 >= 12 && n % 100 <= 14 ? m : dopelniacz(n) + " " + slowo;
    });
    t = t.replace(/Howard Carter/g, "Hołard Karter").replace(/Ramzesa II\b/g, "Ramzesa Drugiego").replace(/Ramzes II\b/g, "Ramzes Drugi");
    // „w XVIII wieku” → „w osiemnastym wieku”, „do XII wieku” → „do dwunastego wieku”, „XVIII w.” → „osiemnasty wiek”
    t = t.replace(/(^|[^\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ])([wW]e?\s+)?([IVXL]+)\s*(w\.|wieku|wiek)(?![a-ząćęłńóśźż])/g, function (m, przed, w, r, slowo) {
      var n = rzymskie(r);
      if (!PORZ[n]) return m;
      if (w) return przed + w + porzMiejscownik(PORZ[n]) + " wieku";
      return przed + (slowo === "wieku" ? porzDopelniacz(PORZ[n]) + " wieku" : PORZ[n] + " wiek");
    });
    // „II tysiąclecie” → „drugie tysiąclecie”, „IV tysiąclecia” → „czwartego…”, „w III tysiącleciu” → „w trzecim…”
    t = t.replace(/\b([IVX]+)\s+tysiącleci(e|a|u|em)(?![a-ząćęłńóśźż])/g, function (m, r, konc) {
      var n = rzymskie(r);
      if (!PORZ[n]) return m;
      return (konc === "e" ? porzNijaki(PORZ[n]) : konc === "a" ? porzDopelniacz(PORZ[n]) : porzMiejscownik(PORZ[n])) + " tysiącleci" + konc;
    });
    // na końcu zdania kropka zostaje – lektor robi pauzę; „W XV wieku p.n.e. Egiptem rządziła…” to jeszcze nie koniec
    t = t.replace(/p\.n\.e\.(?=\s+[A-ZĄĆĘŁŃÓŚŹŻ]|\s*$)/g, function (m, poz, calosc) {
      return /(^|[.!?]\s+)[Ww]e?\s+(\S+\s+){1,2}(wieku|tysiącleciu|roku)\s+$/.test(calosc.slice(0, poz)) ? "przed naszą erą" : "przed naszą erą.";
    }).replace(/p\.n\.e\./g, "przed naszą erą");
    t = t.replace(/\bn\.e\.(?=\s+[A-ZĄĆĘŁŃÓŚŹŻ]|\s*$)/g, "naszej ery.").replace(/\bn\.e\./g, "naszej ery");
    t = t.replace(/\btys\./g, "tysięcy").replace(/\bmln\b/g, "milionów");
    t = t.replace(/m\.in\./g, "między innymi").replace(/\bnp\./g, "na przykład");
    t = t.replace(/°C/g, " stopni Celsjusza");
    t = t.replace(/podr\./g, "podręcznik").replace(/ćw\./g, "ćwiczenia").replace(/zad\./g, "zadanie");
    t = t.replace(/\bs\. (\d)/g, "strona $1");
    t = t.replace(/\s*→\s*/g, ", potem ").replace(/\s[–—]\s/g, ", ").replace(/…/g, "...");
    t = t.replace(/\s+\/\s+/g, " lub ");
    return t.replace(/\s{2,}/g, " ").trim();
  }

  /* ----- głosy ----- */
  function glosy() {
    if (!dostepna) return [];
    return synt.getVoices().filter(function (g) { return /^pl/i.test(g.lang.replace("_", "-")); });
  }
  function najlepszyGlos() {
    var pl = glosy();
    if (H5.ust.glos) {
      var wybrany = pl.filter(function (g) { return g.voiceURI === H5.ust.glos; })[0];
      if (wybrany) return wybrany;
    }
    function ocena(g) {
      var s = 0;
      if (/natural|online/i.test(g.name)) s += 3;
      if (/google/i.test(g.name)) s += 2;
      if (/zofia|marek|zosia|paulina/i.test(g.name)) s += 1;
      return s;
    }
    return pl.sort(function (a, b) { return ocena(b) - ocena(a); })[0] || null;
  }
  if (dostepna && typeof synt.onvoiceschanged !== "undefined") synt.onvoiceschanged = function () { H5.emit("glosy"); };

  /* ----- kolejka ----- */
  function podziel(tekst) {
    var zdania = normalizuj(tekst).match(/[^.!?;:]+[.!?;:]*\s*/g) || [];
    var kawalki = [], biezacy = "";
    zdania.forEach(function (z) {
      if ((biezacy + z).length > 190 && biezacy) { kawalki.push(biezacy); biezacy = ""; }
      biezacy += z;
    });
    if (biezacy.trim()) kawalki.push(biezacy);
    return kawalki;
  }
  function oznacz(przycisk) {
    if (aktywnyPrzycisk) aktywnyPrzycisk.classList.remove("mowi");
    aktywnyPrzycisk = przycisk || null;
    if (aktywnyPrzycisk) aktywnyPrzycisk.classList.add("mowi");
  }

  function mow(teksty, opcje) {
    opcje = opcje || {};
    if (!dostepna) { if (opcje.poKoncu) opcje.poKoncu(); return; }
    stop();
    var moj = ++numer;
    var kawalki = [];
    [].concat(teksty).forEach(function (t) { if (t) kawalki = kawalki.concat(podziel(t)); });
    if (!kawalki.length) return;
    var glos = najlepszyGlos();
    oznacz(opcje.przycisk);
    (function nastepny(i) {
      if (moj !== numer) return;
      if (i >= kawalki.length) { oznacz(null); if (opcje.poKoncu) opcje.poKoncu(); return; }
      var u = new SpeechSynthesisUtterance(kawalki[i]);
      u.lang = "pl-PL";
      if (glos) u.voice = glos;
      u.rate = H5.ust.tempo || 1;
      u.onend = function () { nastepny(i + 1); };
      u.onerror = function () { if (moj === numer) oznacz(null); };
      synt.speak(u);
    })(0);
  }

  function stop() {
    numer++;
    oznacz(null);
    if (dostepna) { try { synt.cancel(); } catch (e) { /* nic */ } }
  }

  /* Przycisk 🔊: czyta tekst (lub wynik funkcji); drugie dotknięcie przerywa. */
  function przycisk(tresc, etykieta) {
    var b = H5.u.el("button", { klasa: "ikona-btn glosnik", type: "button", "aria-label": etykieta || "Przeczytaj na głos", html: H5.ikona("glosnik") });
    if (!dostepna) b.hidden = true;
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      if (aktywnyPrzycisk === b) { stop(); return; }
      mow(typeof tresc === "function" ? tresc() : tresc, { przycisk: b });
    });
    return b;
  }

  return { dostepna: dostepna, mow: mow, stop: stop, przycisk: przycisk, glosy: glosy, najlepszyGlos: najlepszyGlos, normalizuj: normalizuj };
})();
