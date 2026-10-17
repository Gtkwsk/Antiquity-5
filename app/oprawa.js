/* Oprawa: dźwięki generowane w przeglądarce (bez plików) i efekty wizualne. */
(function () {
  var ctx = null;
  function kontekst() {
    if (!ctx) {
      var A = window.AudioContext || window.webkitAudioContext;
      if (!A) return null;
      ctx = new A();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function ton(c, f, start, dl, typ, glosnosc, fKoniec) {
    var o = c.createOscillator(), g = c.createGain(), t = c.currentTime + start;
    o.type = typ || "triangle";
    o.frequency.setValueAtTime(f, t);
    if (fKoniec) o.frequency.exponentialRampToValueAtTime(fKoniec, t + dl);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(glosnosc, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dl);
    o.connect(g); g.connect(c.destination);
    o.start(t); o.stop(t + dl + 0.02);
  }

  var DZWIEKI = {
    dobrze: function (c, v) { ton(c, 660, 0, 0.13, "triangle", v); ton(c, 988, 0.1, 0.22, "triangle", v); },
    zle: function (c, v) { ton(c, 200, 0, 0.28, "sine", v * 0.9, 120); ton(c, 150, 0.05, 0.3, "triangle", v * 0.4, 100); },
    pol: function (c, v) { ton(c, 587, 0, 0.14, "triangle", v); ton(c, 659, 0.12, 0.2, "triangle", v * 0.8); },
    seria: function (c, v) { [523, 659, 784, 1047].forEach(function (f, i) { ton(c, f, i * 0.07, 0.16, "square", v * 0.35); }); },
    klik: function (c, v) { ton(c, 1400, 0, 0.035, "sine", v * 0.35); },
    koniec: function (c, v) {
      [392, 523, 659].forEach(function (f, i) { ton(c, f, i * 0.12, 0.18, "triangle", v); });
      [523, 659, 784].forEach(function (f) { ton(c, f, 0.38, 0.6, "triangle", v * 0.55); });
    },
    ranga: function (c, v) {
      [392, 392, 523, 659, 784].forEach(function (f, i) { ton(c, f, i * 0.13, 0.2, "square", v * 0.35); });
      [523, 659, 784, 1047].forEach(function (f) { ton(c, f, 0.7, 0.9, "triangle", v * 0.45); });
    },
    stempel: function (c, v) { ton(c, 90, 0, 0.18, "square", v * 0.6, 50); ton(c, 1800, 0, 0.03, "sine", v * 0.3); },
    odwroc: function (c, v) { ton(c, 300, 0, 0.18, "sine", v * 0.3, 900); }
  };

  H5.dzwiek = function (nazwa) {
    if (!H5.ust.dzwieki || !DZWIEKI[nazwa]) return;
    try { var c = kontekst(); if (c) DZWIEKI[nazwa](c, 0.35 * (H5.ust.glosnosc || 0.7)); } catch (e) { /* bez dźwięku */ }
  };

  /* ---------- efekty ---------- */
  function spokojnie() {
    return H5.ust.spokojneEfekty || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  function klasaNaChwile(el, klasa) {
    if (!el || spokojnie()) return;
    el.classList.remove(klasa);
    void el.offsetWidth;
    el.classList.add(klasa);
    el.addEventListener("animationend", function f() { el.classList.remove(klasa); el.removeEventListener("animationend", f); });
  }

  function konfetti(ile) {
    if (spokojnie()) return;
    var cv = document.getElementById("konfetti");
    if (!cv || !cv.getContext) return;
    var g = cv.getContext("2d"), W = cv.width = window.innerWidth, Hh = cv.height = window.innerHeight;
    var styl = getComputedStyle(document.documentElement);
    var kolory = ["--lapis", "--braz", "--ok", "--zle", "--lapis-2"].map(function (k) { return styl.getPropertyValue(k).trim() || "#2352A8"; });
    var czastki = [];
    for (var i = 0; i < (ile || 140); i++) {
      czastki.push({
        x: W / 2 + (Math.random() - 0.5) * W * 0.3, y: Hh * 0.35,
        vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 15 - 5,
        w: 6 + Math.random() * 8, h: 4 + Math.random() * 6,
        r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.4,
        k: kolory[i % kolory.length]
      });
    }
    var start = performance.now();
    (function klatka(t) {
      var czas = t - start;
      g.clearRect(0, 0, W, Hh);
      czastki.forEach(function (p) {
        p.vy += 0.45; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        g.save(); g.translate(p.x, p.y); g.rotate(p.r);
        g.globalAlpha = Math.max(0, 1 - czas / 2200);
        g.fillStyle = p.k; g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        g.restore();
      });
      if (czas < 2200) requestAnimationFrame(klatka); else g.clearRect(0, 0, W, Hh);
    })(start);
  }

  function plusXP(el, n) {
    if (!n) return;
    var r = el ? el.getBoundingClientRect() : { left: window.innerWidth / 2, width: 0, top: window.innerHeight / 2 };
    var d = H5.u.el("div", { klasa: "xp-plus", tekst: "+" + n + " XP" });
    d.style.left = Math.max(8, r.left + r.width / 2 - 50) + "px";
    d.style.top = Math.max(8, r.top - 10) + "px";
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 1200);
  }

  function nowaRanga(ranga) {
    H5.dzwiek("ranga");
    konfetti(180);
    var nak = H5.u.el("div", { klasa: "nowa-ranga", role: "dialog", "aria-label": "Nowa ranga" },
      H5.u.el("div", { klasa: "nowa-ranga-karta" },
        H5.u.el("div", { html: H5.herb(ranga.nr) }),
        H5.u.el("p", { klasa: "hero-etykieta", tekst: "Nowa ranga" }),
        H5.u.el("h1", { tekst: ranga.nazwa }),
        H5.u.el("p", { tekst: ranga.opis }),
        H5.u.el("button", { klasa: "btn btn-glowny btn-pelny", type: "button", tekst: "Super!", na: { click: function () { nak.remove(); } } })));
    document.body.appendChild(nak);
    H5.mowa.mow("Brawo, " + H5.ust.imie + "! Nowa ranga: " + ranga.nazwa + ".");
  }

  H5.efekty = {
    konfetti: konfetti,
    plusXP: plusXP,
    potrzasnij: function (el) { klasaNaChwile(el, "potrzasnij"); },
    blysk: function (el) { klasaNaChwile(el, "blysk"); },
    skok: function (el) { klasaNaChwile(el, "skok"); },
    nowaRanga: nowaRanga
  };
})();
