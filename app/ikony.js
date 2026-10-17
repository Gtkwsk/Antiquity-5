/* Ikony SVG (obrys 24×24, kolor z currentColor) i herby rang. */
(function () {
  var I = {
    glosnik: '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/>',
    zamknij: '<path d="M6 6l12 12M18 6L6 18"/>',
    wstecz: '<path d="M15 5l-7 7 7 7"/>',
    dalej: '<path d="M9 5l7 7-7 7"/>',
    ustawienia: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    ogien: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-4 2.5-5 .3 2 1.3 3 2.5 3.2C11 9 11.5 6 12 3z"/>',
    gwiazda: '<path fill="currentColor" stroke="none" d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/>',
    ok: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7 5.5-5.7"/>',
    zle: '<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
    pol: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8"/>',
    quiz: '<rect x="3.5" y="4" width="17" height="16" rx="3"/><circle cx="8" cy="9" r="1.3"/><path d="M11 9h6"/><circle cx="8" cy="15" r="1.3"/><path d="M11 15h6"/>',
    pf: '<path d="M3.5 8.5l2.5 2.5 4.5-5"/><path d="M14 14l6 6M20 14l-6 6"/>',
    pary: '<rect x="3" y="4" width="7" height="6" rx="2"/><rect x="14" y="14" width="7" height="6" rx="2"/><path d="M10 7c4 0 4 7 4 10"/>',
    os: '<path d="M3 12h17"/><path d="M18 9l3 3-3 3"/><path d="M6 8v8M11 8v8M16 8v8"/>',
    mapa: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    luki: '<path d="M4 8h5M4 16h16"/><rect x="11" y="5" width="9" height="6" rx="1.5"/>',
    tabela: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16M3 9h18"/>',
    kolejnosc: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="5" cy="6" r="1.5"/><circle cx="5" cy="12" r="1.5"/><circle cx="5" cy="18" r="1.5"/>',
    intruz: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/>',
    wyjasnij: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12.5h5"/>',
    krzyzowka: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>',
    fiszki: '<rect x="3" y="7" width="14" height="12" rx="2"/><path d="M7 7V5h14v12h-4"/>',
    daty: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    kto: '<circle cx="12" cy="8" r="4"/><path d="M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    trening: '<path d="M13 2L5 13h6l-1 9 8-12h-6z"/>',
    bledy: '<path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
    sprawdzian: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2.5h6V4"/><path d="M8.5 13l2.5 2.5 4.5-5"/>',
    wiedza: '<path d="M4 5.5C6.5 4 9.5 4 12 5.5v14C9.5 18 6.5 18 4 19.5z"/><path d="M20 5.5C17.5 4 14.5 4 12 5.5v14c2.5-1.5 5.5-1.5 8 0z"/>',
    kartkowka: '<path d="M5 19l1-4L16 5l3 3L9 18z"/><path d="M14 7l3 3"/>',
    rodzic: '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="10" r="2.3"/><path d="M2.5 20c.8-3.5 3-5.5 5.5-5.5s4.7 2 5.5 5.5M14 20c.4-2.5 1.6-4 3-4s2.6 1.5 3 4"/>',
    wyzwanie: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
    graj: '<path d="M7 5l12 7-12 7z"/>',
    kosz: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    eksport: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    import: '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>',
    piramida: '<path d="M12 4l9 16H3z"/><path d="M12 4l3 16"/>',
    zigurat: '<path d="M4 20h16M6 20v-4h12v4M8 16v-4h8v4M10 12V8h4v4"/>',
    zwoj: '<path d="M7 4h10a3 3 0 0 1 0 6H9"/><path d="M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 0-6H7"/>',
    mur: '<path d="M3 20V10l3-2 3 2v10M9 14h6M15 20V10l3-2 3 2v10"/>',
    pioro: '<path d="M20 4C12 5 7 10 5 20"/><path d="M9 12c3 0 6-1 8-4"/>'
  };

  H5.ikona = function (nazwa, klasa) {
    return '<svg class="' + (klasa || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (I[nazwa] || I.quiz) + "</svg>";
  };
  H5.ikonaEl = function (nazwa) {
    var s = document.createElement("span");
    s.innerHTML = H5.ikona(nazwa);
    return s.firstChild;
  };

  /* Herby rang: moneta z brązu, na niej znak epoki. */
  var ZNAKI = [
    '<circle cx="26" cy="35" r="5"/><circle cx="36" cy="31" r="5"/><circle cx="33" cy="41" r="4"/><path d="M31 26c2-5 6-6 9-6-1 4-4 6-9 6z"/>',
    '<path d="M20 45L42 23"/><path d="M42 23l4-8-8 4z"/>',
    '<path d="M32 47V19"/><path d="M32 24c-4-1-5-4-5-6 3 0 5 2 5 6zM32 24c4-1 5-4 5-6-3 0-5 2-5 6zM32 32c-4-1-5-4-5-6 3 0 5 2 5 6zM32 32c4-1 5-4 5-6-3 0-5 2-5 6zM32 40c-4-1-5-4-5-6 3 0 5 2 5 6zM32 40c4-1 5-4 5-6-3 0-5 2-5 6z"/>',
    '<path d="M25 21h14M27 21c-6 6-6 17 0 24h10c6-7 6-18 0-24"/><path d="M24 31h16"/>',
    '<path d="M22 24h14v8H22z"/><path d="M36 28h6M30 32l-8 14"/>',
    '<rect x="22" y="19" width="20" height="26" rx="2"/><path d="M26 25h12M26 30h12M26 35h8M26 40h10"/>',
    '<path d="M18 45h28M21 45v-6h22v6M25 39v-6h14v6M29 33v-6h6v6"/>',
    '<path d="M32 18l15 27H17z"/><path d="M32 18l4 27"/>',
    '<circle cx="32" cy="32" r="6"/><path d="M32 18v5M32 41v5M18 32h5M41 32h5M22 22l3.5 3.5M38.5 38.5L42 42M22 42l3.5-3.5M38.5 25.5L42 22"/>'
  ];
  H5.herb = function (nr) {
    var z = ZNAKI[Math.max(0, Math.min(ZNAKI.length - 1, (nr || 1) - 1))];
    return '<svg class="herb" viewBox="0 0 64 64" aria-hidden="true">' +
      '<circle cx="32" cy="32" r="30" style="fill:var(--braz)"/>' +
      '<circle cx="32" cy="32" r="24.5" style="fill:var(--karta)"/>' +
      '<g fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--lapis)">' + z + "</g></svg>";
  };
})();
