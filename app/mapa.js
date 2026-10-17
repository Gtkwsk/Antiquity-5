/* Mapy: świat (podkład „swiat”, kontynenty) i starożytny Bliski Wschód (podkład „wschod”: Mezopotamia,
   Egipt, Lewant). Współrzędne [długość, szerokość geograficzna], rzut walcowy.
   Kontury narysowane ręcznie w uproszczeniu – do zadań szkolnych, nie do nawigacji. */
H5.mapa = (function () {
  var NS = "http://www.w3.org/2000/svg";
  var LON0 = -172, LAT0 = 84, S = 1000 / 354, W = 1000, H = Math.round(140 * S);

  var LADY = {
    "ameryka-pln": [
      [[-168,66],[-162,70],[-150,71],[-140,70],[-128,70],[-115,68],[-100,68],[-95,72],[-85,70],[-82,66],[-88,64],[-93,60],[-92,57],[-85,55],[-80,52],[-78,58],[-78,62],[-72,62],[-65,60],[-61,56],[-56,52],[-60,48],[-66,45],[-70,42],[-74,40],[-76,37],[-76,35],[-81,31],[-80,26],[-81,25],[-83,29],[-86,30],[-90,29],[-95,29],[-97,26],[-97,22],[-95,19],[-91,19],[-90,21],[-87,21],[-88,16],[-84,15],[-83,11],[-80,9],[-77,8],[-78,7],[-82,8],[-86,12],[-92,15],[-96,16],[-101,17],[-105,20],[-106,23],[-109,26],[-112,29],[-114,31],[-112,27],[-110,23],[-112,25],[-115,28],[-117,32],[-121,35],[-124,40],[-124,46],[-123,49],[-127,51],[-132,55],[-138,59],[-146,61],[-152,59],[-158,57],[-164,55],[-160,59],[-165,61],[-166,64]],
      [[-73,78],[-60,82],[-35,83],[-20,81],[-18,76],[-22,70],[-32,68],[-42,60],[-48,61],[-52,65],[-55,70],[-58,75],[-66,77]]
    ],
    "ameryka-pld": [
      [[-77,8],[-72,12],[-66,11],[-61,10],[-57,6],[-52,5],[-50,1],[-44,-2],[-38,-4],[-35,-6],[-35,-9],[-39,-14],[-40,-20],[-42,-23],[-48,-26],[-49,-29],[-53,-33],[-57,-36],[-58,-38],[-62,-39],[-63,-42],[-65,-45],[-67,-47],[-68,-50],[-69,-53],[-72,-54],[-75,-51],[-74,-46],[-73,-42],[-73,-37],[-71,-32],[-71,-25],[-70,-18],[-76,-14],[-78,-10],[-80,-6],[-81,-3],[-80,0],[-79,2],[-78,4]]
    ],
    "afryka": [
      [[-17,21],[-16,24],[-13,28],[-10,30],[-9,33],[-6,36],[0,36],[5,37],[10,37],[11,34],[15,32],[20,31],[22,33],[25,32],[29,31],[32,31],[34,28],[35,24],[37,20],[39,16],[43,12],[45,11],[51,12],[51,10],[48,5],[46,2],[42,-1],[40,-5],[39,-8],[40,-11],[40,-15],[37,-18],[35,-22],[35,-25],[33,-28],[30,-31],[27,-34],[22,-34],[18,-34],[18,-31],[16,-28],[15,-25],[14,-22],[12,-18],[12,-13],[13,-10],[12,-6],[9,-2],[9,1],[9,4],[6,4],[4,6],[1,6],[-3,5],[-8,4],[-11,6],[-13,8],[-15,11],[-17,14],[-17,18]],
      [[44,-25],[47,-25],[50,-16],[49,-12],[47,-13],[44,-17]]
    ],
    "europa": [
      [[-9,37],[-9,43],[-2,43.5],[-1,46],[-4,48],[-1,49],[2,51],[4,52],[5,53],[8,54],[8,57],[10,57],[11,56],[12,54],[14,54],[19,55],[21,57],[24,59],[30,60],[25,60.3],[22,60.5],[21,62],[24,65],[21,64],[18,62],[17,60],[19,59],[16,56],[13,56],[11,59],[8,58],[5,59],[5,62],[10,64],[14,67],[17,69],[21,70],[28,71],[33,69],[41,67],[44,68],[53,68],[60,69],[60,55],[56,51],[52,47],[48,46],[47,43],[42,43],[39,44],[37,45],[35,45],[33,45],[31,46],[30,45],[29,43],[28,41],[26,40],[24,40],[23,38],[22,37],[21,39],[20,40],[19,42],[16,43],[13.5,45.5],[12.5,44],[16,41],[18,40],[16,38],[15,38],[12,42],[10,44],[7,44],[4,43],[3,42],[0,40],[0,38],[-2,37],[-5,36],[-7,37]],
      [[-5,50],[1,51],[2,53],[0,54],[-2,56],[-2,58],[-5,58.5],[-6,57],[-5,55],[-3,54.5],[-4,53],[-5,52],[-4,51]],
      [[-10,52],[-6,52],[-6,54],[-8,55],[-10,54]],
      [[-24,64],[-22,66],[-15,66.5],[-13,65],[-18,63.5]]
    ],
    "azja": [
      [[60,69],[68,69],[73,72],[80,73],[87,75],[100,77],[106,77],[113,74],[125,73],[132,71],[141,72],[150,71],[160,70],[170,70],[180,69],[180,65],[176,64],[172,61],[165,60],[162,58],[163,56],[160,53],[157,51],[156,55],[156,58],[152,59],[143,59],[138,56],[137,54],[140,52],[141,48],[139,46],[136,43],[132,43],[129,41],[129,36],[127,35],[126,37],[125,39],[122,40],[121,39],[118,39],[119,37],[122,37],[120,34],[122,31],[121,28],[119,25],[117,23],[113,22],[110,21],[108,22],[107,20],[106,18],[108,16],[109,12],[107,10],[105,9],[103,10],[101,13],[100,12],[99,9],[100,6],[103,4],[104,1],[102,2],[100,4],[98,8],[98,12],[97,16],[94,17],[94,20],[92,22],[90,22],[87,21],[85,20],[82,17],[80,15],[80,11],[78,8],[77,8],[76,10],[74,14],[73,17],[72,21],[70,22],[68,23],[66,25],[61,25],[57,26],[56,24],[59.5,22.5],[58,20],[55,17],[52,16],[45,13],[43,13],[42,16],[39,21],[37,25],[35,28],[35,29.5],[34.5,31.5],[35,33],[36,35],[36,36.5],[34,36.5],[32,36],[30,36.3],[28,37],[27,38],[26.5,39],[26,40],[27,40.5],[28,41],[31,41],[35,42],[39,41],[41.5,41.5],[42,43],[47,43],[48,46],[52,47],[56,51],[60,55]],
      [[130,31],[131,34],[133,34],[135,34],[137,35],[140,35],[141,38],[142,40],[141,42],[142,43],[145,43.5],[145,44.5],[142,45.5],[140,43],[140,41],[139,38],[137,37],[136,36],[133,35.5],[131,34.5]],
      [[80,10],[82,8],[81,6],[80,6],[79.8,8]],
      [[95,5.5],[98,4],[104,-2],[106,-6],[105,-5.5],[102,-4],[100,-1],[98,2]],
      [[105.5,-6],[110,-6.5],[114,-7],[114.5,-8.5],[110,-8],[106,-7]],
      [[109,1],[111,2.5],[113,4],[116,6],[117.5,7],[119,5],[118,1],[117,-1],[116,-4],[114,-3.5],[111,-3],[110,-2]],
      [[120,18],[122,18],[122,14],[124,12],[126,8],[125,6],[122,7],[121,10],[120,14]]
    ],
    "australia": [
      [[114,-22],[116,-20.5],[120,-19.5],[123,-17],[126,-14],[129,-15],[130,-12.5],[132,-11.5],[136,-12],[136,-15],[139,-17.5],[141,-15],[142,-11],[144,-14.5],[146,-19],[149,-21],[153,-25],[153.5,-28],[153,-31],[151,-34],[150,-37.5],[148,-38],[145,-38.5],[141,-38],[138,-35.5],[136,-35],[135,-34.5],[132,-32],[128,-32],[124,-34],[119,-34.5],[115,-34],[115,-31],[114,-26],[113.5,-24]],
      [[145,-41],[148,-41],[148,-43],[146,-43.5]],
      [[131,-1],[134,-1],[138,-2],[141,-3],[145,-4],[148,-6],[150,-10],[147,-10],[144,-8],[141,-9],[138,-8],[137,-5],[133,-4]],
      [[173,-35],[175,-37],[178,-38],[176,-40],[175,-41.5],[174,-41],[174.5,-39],[173,-37]],
      [[172.5,-40.5],[174,-41.5],[172.5,-43.5],[171,-44.5],[169,-46.5],[166.5,-46],[168,-44],[171,-42]]
    ]
  };

  var NAZWY = {
    "ameryka-pln": { tekst: "AMERYKA PÓŁNOCNA", lon: -104, lat: 50 },
    "ameryka-pld": { tekst: "AMERYKA POŁUDNIOWA", lon: -62, lat: -22 },
    "afryka": { tekst: "AFRYKA", lon: 20, lat: 8 },
    "europa": { tekst: "EUROPA", lon: 32, lat: 56 },
    "azja": { tekst: "AZJA", lon: 98, lat: 50 },
    "australia": { tekst: "AUSTRALIA", lon: 134, lat: -28 }
  };
  var OCEANY = [
    { tekst: "Ocean Atlantycki", lon: -42, lat: 18 },
    { tekst: "Ocean Spokojny", lon: -140, lat: 10 },
    { tekst: "Ocean Indyjski", lon: 76, lat: -22 }
  ];

  function xy(lon, lat) { return [(lon - LON0) * S, (LAT0 - lat) * S]; }
  function el(tag, atr) {
    var e = document.createElementNS(NS, tag);
    Object.keys(atr || {}).forEach(function (k) { e.setAttribute(k, atr[k]); });
    return e;
  }
  function sciezka(wielokat) {
    return wielokat.map(function (p, i) { var q = xy(p[0], p[1]); return (i ? "L" : "M") + q[0].toFixed(1) + " " + q[1].toFixed(1); }).join("") + "Z";
  }
  var licznik = 0;

  /* opcje: { klik: function(id, element), pokazNazwy: true } */
  function rysujSwiat(def, opcje) {
    opcje = opcje || {};
    var uid = "m" + (++licznik);
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, class: "mapa", role: "img", "aria-label": def.tytul || "Mapa świata" });
    var defs = el("defs");
    var marker = el("marker", { id: "grot-" + uid, viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse" });
    marker.appendChild(el("path", { d: "M0 0L10 5L0 10z", class: "grot" }));
    defs.appendChild(marker);
    svg.appendChild(defs);
    svg.appendChild(el("rect", { x: 0, y: 0, width: W, height: H, class: "morze" }));

    var klikalne = (opcje.klik && def.obszary) ? def.obszary : [];
    Object.keys(LADY).forEach(function (id) {
      var g = el("g", { "data-id": id });
      var d = LADY[id].map(sciezka).join("");
      var p = el("path", { d: d, class: "lad" + (klikalne.indexOf(id) >= 0 ? " lad-klik klik" : ""), "data-id": id });
      if (klikalne.indexOf(id) >= 0) {
        p.setAttribute("tabindex", "0");
        p.setAttribute("role", "button");
        p.setAttribute("aria-label", NAZWY[id].tekst.toLowerCase());
        p.addEventListener("click", function () { opcje.klik(id, p); });
        p.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); opcje.klik(id, p); } });
      }
      g.appendChild(p);
      svg.appendChild(g);
    });

    OCEANY.forEach(function (o) {
      var q = xy(o.lon, o.lat);
      var t = el("text", { x: q[0], y: q[1], class: "ocean", "text-anchor": "middle" });
      t.textContent = o.tekst;
      svg.appendChild(t);
    });
    if (opcje.pokazNazwy !== false) {
      Object.keys(NAZWY).forEach(function (id) {
        var n = NAZWY[id], q = xy(n.lon, n.lat);
        var t = el("text", { x: q[0], y: q[1], class: "ocean", "text-anchor": "middle", style: "font-style:normal;fill:var(--tusz-3);font-weight:600" });
        t.textContent = n.tekst;
        svg.appendChild(t);
      });
    }

    var punkty = {};
    (def.punkty || []).forEach(function (p) { punkty[p.id] = xy(p.lon, p.lat); });
    (def.strzalki || []).forEach(function (s) {
      var a = punkty[s[0]], b = punkty[s[1]];
      if (!a || !b) return;
      var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1];
      var dl = Math.sqrt(dx * dx + dy * dy) || 1, k = 0.15;
      var cx = mx - dy / dl * dl * k, cy = my + dx / dl * dl * k;
      var skr = 9 / dl;
      var bx = b[0] - dx * skr, by = b[1] - dy * skr;
      svg.appendChild(el("path", { d: "M" + a[0] + " " + a[1] + "Q" + cx + " " + cy + " " + bx + " " + by, class: "strzalka", "marker-end": "url(#grot-" + uid + ")" }));
    });
    (def.punkty || []).forEach(function (p) {
      var q = punkty[p.id];
      svg.appendChild(el("circle", { cx: q[0], cy: q[1], r: 4.5, class: "punkt" }));
      if (p.etykieta) {
        var t = el("text", { x: q[0] + 7, y: q[1] - 7, class: "etykieta" });
        t.textContent = p.etykieta;
        svg.appendChild(t);
      }
    });
    return svg;
  }

  /* ================= Starożytny Bliski Wschód ================= */
  /* Wybrzeże Zatoki Perskiej jak w starożytności – sięgało okolic Ur. Miasta leżą w rzeczywistych
     miejscach; wyjątek: Dolina Królów odsunięta od Teb, żeby napisy się nie nakładały. */

  var NIL = [[31.33, 21.3], [31.45, 21.95], [31.72, 22.3], [31.95, 22.7], [32.4, 23.1], [32.75, 23.6], [32.88, 23.97], [32.9, 24.2],
    [32.95, 24.47], [32.87, 24.98], [32.72, 25.2], [32.55, 25.3], [32.6, 25.5], [32.66, 25.7], [32.72, 26.0], [32.7, 26.16],
    [32.45, 26.1], [32.24, 26.05], [31.89, 26.33], [31.69, 26.56], [31.4, 26.9], [31.18, 27.18], [30.95, 27.5], [30.84, 27.73],
    [30.75, 28.1], [30.85, 28.5], [31.05, 28.9], [31.1, 29.07], [31.2, 29.5], [31.3, 29.85], [31.23, 30.05], [31.15, 30.18]];
  var NIL_ROSETTA = [[31.15, 30.18], [31.02, 30.45], [30.83, 30.75], [30.62, 31.05], [30.47, 31.3], [30.36, 31.47]];
  var NIL_DAMIETTA = [[31.15, 30.18], [31.2, 30.45], [31.33, 30.8], [31.48, 31.1], [31.68, 31.35], [31.84, 31.52]];

  var MORZA = {
    "morze-srodziemne": { nazwa: "Morze Śródziemne", tekst: "Morze\nŚródziemne", napis: [32.6, 33.3], kontur: [
      [20, 32], [20.6, 32.6], [21.6, 32.9], [22.6, 32.8], [23.1, 32.6], [23.25, 32.2], [24, 32.05], [24.6, 31.95], [25.08, 31.76],
      [25.16, 31.55], [25.93, 31.61], [26.6, 31.5], [27.24, 31.35], [28, 31.1], [28.95, 30.83], [29.5, 30.98], [29.92, 31.2],
      [30.07, 31.32], [30.36, 31.48], [30.8, 31.58], [31.1, 31.6], [31.5, 31.53], [31.84, 31.52], [32.1, 31.33], [32.3, 31.26],
      [32.7, 31.1], [33.1, 31.15], [33.5, 31.13], [33.8, 31.13], [34.24, 31.32], [34.45, 31.52], [34.64, 31.8], [34.75, 32.08],
      [34.87, 32.4], [34.96, 32.83], [35.07, 32.93], [35.12, 33.11], [35.19, 33.27], [35.37, 33.56], [35.47, 33.9], [35.64, 34.12],
      [35.82, 34.45], [35.88, 34.89], [35.94, 35.18], [35.77, 35.52], [35.84, 35.85], [35.93, 36.08], [35.88, 36.41], [36.17, 36.59],
      [36.22, 36.84], [35.98, 36.95], [35.79, 36.77], [35.37, 36.56], [35, 36.72], [34.64, 36.8], [34.3, 36.61], [34.15, 36.46],
      [33.88, 36.32], [33.6, 36.18], [33.32, 36.14], [32.8, 36.02], [32.4, 36.12], [32.31, 36.27], [31.99, 36.54], [31.44, 36.78],
      [30.7, 36.88], [30.57, 36.6], [30.4, 36.2], [30.15, 36.3], [29.64, 36.2], [29.3, 36.26], [29.11, 36.63], [28.8, 36.72],
      [28.27, 36.85], [27.9, 36.75], [27.37, 36.68], [27.8, 36.8], [28.3, 37.03], [27.43, 37.03], [27.23, 37.02], [27.6, 37.24],
      [27.26, 37.37], [27.26, 37.86], [26.8, 38.4], [26.2, 38.6], [26, 40.2], [20, 40.2]] },
    "morze-czerwone": { nazwa: "Morze Czerwone", napis: [36.75, 24.35], obrot: 53, kontur: [
      [32.55, 29.97], [32.35, 29.6], [32.65, 29.12], [33.08, 28.36], [33.55, 27.72], [33.81, 27.26], [33.94, 26.73], [34.28, 26.1],
      [34.6, 25.6], [34.9, 25.07], [35.2, 24.5], [35.47, 23.95], [35.8, 23.9], [35.55, 23.6], [36.2, 22.9], [36.65, 22.2], [37, 21.5],
      [37.15, 20.9], [37.2, 19.4], [40.7, 19.4], [40.27, 20.15], [39.8, 20.8], [39.17, 21.5], [39.03, 22.8], [38.6, 23.6], [38.05, 24.1],
      [37.6, 24.6], [37.25, 25.05], [36.9, 25.6], [36.45, 26.2], [36, 26.8], [35.7, 27.35], [35.2, 27.8], [34.63, 27.93], [34.75, 28.4],
      [34.85, 28.9], [34.93, 29.29], [35, 29.53], [34.89, 29.49], [34.66, 29.03], [34.51, 28.49], [34.33, 27.91], [34.25, 27.73],
      [33.62, 28.24], [33.18, 28.9], [33.1, 29.05], [32.71, 29.59], [32.58, 29.92]] },
    "zatoka-perska": { nazwa: "Zatoka Perska", tekst: "Zatoka\nPerska", napis: [49.85, 28.55], kontur: [
      [46.47, 30.72], [46.9, 30.95], [47.5, 31.05], [48.1, 31], [48.6, 30.75], [48.95, 30.45], [49.4, 30.15], [50.15, 30.05], [50.5, 29.6],
      [50.65, 29.25], [50.85, 28.95], [51.1, 28.5], [51.3, 28], [52.1, 27.8], [52.6, 27.4], [53.5, 26.8], [54.5, 26.55], [55.5, 26.7],
      [56.27, 27.18], [56.6, 27], [56.35, 26.4], [55.95, 25.8], [55.3, 25.27], [54.37, 24.47], [53.5, 24.1], [52.5, 24.2], [51.7, 24.1],
      [51.5, 24.6], [51.6, 25.3], [51.55, 25.9], [51.22, 26.15], [50.95, 25.9], [50.75, 25.45], [50.8, 24.75], [50.55, 25.2], [50.2, 26.25],
      [50.15, 26.65], [49.66, 27], [49.3, 27.4], [48.8, 28], [48.5, 28.4], [48.3, 28.9], [48, 29.3], [47.7, 29.45], [47.3, 29.85], [46.85, 30.3]] },
    "morze-kaspijskie": { nazwa: "Morze Kaspijskie", tekst: "Morze\nKaspijskie", napis: [51.4, 37.85], kontur: [
      [48.95, 41], [49.55, 40.25], [49.1, 39.55], [48.85, 38.9], [48.87, 38.43], [49.05, 37.95], [49.46, 37.47], [50, 37.3], [50.66, 36.9],
      [51.5, 36.65], [52.65, 36.7], [53.5, 36.85], [54.02, 36.95], [53.9, 37.5], [53.85, 38.5], [53.5, 39.5], [53.2, 41]] }
  };
  var JEZIORA = [
    [[42.3, 38.75], [42.9, 38.95], [43.45, 38.85], [43.65, 38.5], [43.35, 38.35], [42.8, 38.35], [42.4, 38.5]],             // Wan
    [[45.05, 38.2], [45.5, 38.3], [45.85, 37.95], [45.95, 37.6], [45.85, 37.25], [45.6, 37.1], [45.3, 37.3], [45.1, 37.7]], // Urmia
    [[35.4, 31.78], [35.57, 31.76], [35.6, 31.45], [35.5, 31.05], [35.38, 31.2], [35.4, 31.5]],                           // Morze Martwe
    [[35.53, 32.9], [35.64, 32.88], [35.65, 32.72], [35.57, 32.7]]                                                         // Jezioro Galilejskie
  ];
  var WYSPY = {
    cypr: { nazwa: "Cypr", napis: [33.25, 35.08], kontur: [[32.27, 35.08], [32.55, 35.16], [32.85, 35.18], [32.93, 35.4], [33.32, 35.34],
      [33.7, 35.37], [34.1, 35.48], [34.59, 35.7], [34.2, 35.4], [33.94, 35.12], [34.08, 34.96], [33.63, 34.92], [33.3, 34.72],
      [33.04, 34.68], [32.97, 34.57], [32.75, 34.64], [32.42, 34.77], [32.35, 34.95]] },
    kreta: { nazwa: "Kreta", napis: [24.95, 35.2], kontur: [[23.52, 35.52], [23.58, 35.62], [23.75, 35.55], [24.02, 35.52], [24.2, 35.55],
      [24.47, 35.37], [24.9, 35.42], [25.13, 35.34], [25.45, 35.33], [25.72, 35.19], [26.1, 35.21], [26.31, 35.31], [26.28, 35.1],
      [26.1, 34.98], [25.74, 35], [25.2, 34.95], [24.9, 34.93], [24.75, 35], [24.69, 35.1], [24.3, 35.18], [24.14, 35.2], [23.68, 35.23],
      [23.53, 35.27]] }
  };
  var MALE_WYSPY = [
    [[28.23, 36.45], [28.12, 36.25], [28.09, 36.09], [27.87, 35.95], [27.76, 35.88], [27.7, 36.05], [27.83, 36.25], [27.99, 36.38]], // Rodos
    [[27.15, 35.87], [27.25, 35.65], [27.2, 35.42], [27.1, 35.42], [27.05, 35.65]], [[26.97, 36.72], [27.3, 36.9], [27.36, 36.84], [27.05, 36.68]],
    [[25.37, 37.18], [25.55, 37.12], [25.58, 36.97], [25.45, 36.95], [25.35, 37.05]], [[25.1, 37.15], [25.25, 37.1], [25.25, 36.99], [25.1, 37]],
    [[24.35, 36.75], [24.55, 36.77], [24.52, 36.67], [24.35, 36.66]], [[25.37, 36.47], [25.48, 36.4], [25.45, 36.35], [25.38, 36.38]],
    [[25.75, 36.9], [25.95, 36.86], [25.98, 36.82], [25.78, 36.84]], [[26.28, 36.6], [26.42, 36.6], [26.4, 36.53], [26.3, 36.54]],
    [[25.25, 36.75], [25.38, 36.72], [25.36, 36.67], [25.26, 36.68]]
  ];
  var RZEKI = {
    eufrat: { nazwa: "Eufrat", napis: [39.72, 35.95], obrot: 36, linie: [[[38.9, 38.8], [38.6, 38.5], [38.49, 38.23], [38.35, 37.8],
      [38.32, 37.48], [38.1, 37.2], [37.98, 37.03], [38.01, 36.82], [38.18, 36.38], [38.1, 36.1], [38.05, 35.98], [38.57, 35.87], [39.01, 35.95],
      [39.6, 35.7], [40.14, 35.33], [40.45, 35.02], [40.95, 34.52], [41.4, 34.4], [41.95, 34.37], [42.35, 34.13], [42.83, 33.64], [43.3, 33.42],
      [43.78, 33.35], [44.1, 33], [44.3, 32.75], [44.45, 32.52], [44.75, 32.3], [45.05, 32], [45.3, 31.72], [45.45, 31.45], [45.55, 31.24],
      [45.85, 31.08], [46.05, 30.86], [46.3, 30.78], [46.47, 30.74]]] },
    tygrys: { nazwa: "Tygrys", napis: [46.4, 32.45], obrot: 28, linie: [[[39.4, 38.45], [39.85, 38.1], [40.23, 37.91], [40.66, 37.85],
      [41.41, 37.71], [41.9, 37.55], [42.19, 37.33], [42.37, 37.08], [42.8, 36.7], [43.08, 36.35], [43.2, 35.9], [43.34, 35.46], [43.5, 35],
      [43.68, 34.61], [43.87, 34.2], [44.2, 33.7], [44.37, 33.34], [44.6, 33.1], [45.07, 32.91], [45.4, 32.75], [45.82, 32.5], [46.3, 32.2],
      [46.8, 32], [47.15, 31.84], [47.35, 31.4], [47.5, 31.07]]] },
    nil: { nazwa: "Nil", napis: [32, 27.4], linie: [NIL, NIL_ROSETTA, NIL_DAMIETTA] }
  };
  var KRAINY = {
    babilonia: { kolor: "roz", kontury: [[[46.47, 30.6], [45.9, 30.6], [45.2, 30.95], [44.3, 31.6], [43.4, 32.4], [42.5, 33.2], [41.6, 33.8],
      [40.6, 34.25], [40.4, 34.7], [40.8, 35], [41.8, 34.95], [42.9, 34.95], [43.6, 34.6], [44.4, 34.4], [45.2, 34], [45.9, 33.3], [46.7, 32.5],
      [47.35, 31.7], [47.6, 31.1], [47, 30.9]]] },
    egipt: { kolor: "pom", kontury: [pas(NIL, 0.42), [[31.2, 30.05], [30.4, 30.6], [29.8, 31.2], [30.36, 31.5], [31.1, 31.65], [31.84, 31.56],
      [32.4, 31.3], [32, 30.6]]] },
    "egipt-xv": { kolor: "pom2", kontury: [[[34.2, 31.2], [34.2, 32.3], [34.8, 33.2], [35.3, 34.3], [35.6, 35.3], [35.7, 36.1], [36.3, 36.6],
      [37.2, 36.85], [38.05, 36.9], [38.35, 36.3], [38.55, 35.8], [38.1, 35], [37.4, 34.2], [36.95, 33.3], [36.55, 32.3], [36.1, 31.3],
      [35.6, 30.4], [35.05, 29.6], [34.85, 29.5], [34.5, 30.2], [34.25, 30.9]]] }
  };
  var UPRAWY = [
    [[34.2, 31], [34, 33.5], [35.3, 36.3], [36.2, 36.9], [37.3, 37.15], [38.3, 37.25], [39.5, 37.3], [40.8, 37.35], [42.3, 37.35], [43.5, 37.15],
      [44.3, 36.5], [45, 35.5], [45.8, 34.5], [46.8, 33.7], [47.7, 32.9], [48.4, 32.2], [48.9, 31.4], [49.2, 30.6], [48.6, 30.6], [47.5, 30.95],
      [46.45, 30.62], [45.6, 30.72], [45, 31.15], [44.3, 31.85], [43.7, 32.55], [43.2, 33.15], [42.6, 33.65], [41.8, 34.05], [41, 34.25],
      [40.4, 34.8], [39.8, 35.45], [39, 35.7], [38.2, 35.65], [37.4, 35.2], [36.9, 34.4], [36.6, 33.4], [36.2, 32.4], [35.8, 31.4], [35.3, 30.9],
      [34.6, 30.9]],                                                                                          // Żyzny Półksiężyc
    pas(NIL, 0.11),
    [[31.15, 30.12], [30.6, 30.7], [30.1, 31.3], [30.36, 31.49], [31.1, 31.62], [31.84, 31.54], [32.2, 31.28], [31.7, 30.6]], // Delta Nilu
    [[30.45, 29.45], [30.85, 29.55], [31.05, 29.3], [30.8, 29.1], [30.5, 29.2]]                                                // Fajum
  ];
  var OAZY = [[25.52, 29.2], [28.86, 28.35], [27.97, 27.06], [28.98, 25.5], [30.55, 25.45]];

  /* poz – gdzie napis względem kropki: p(rawo), l(ewo), g(óra), d(ół), pg, pd, lg, ld */
  var MIASTA = {
    niniwa: { nazwa: "Niniwa", lon: 43.2, lat: 36.37, poz: "p" },
    aszur: { nazwa: "Aszur", lon: 43.22, lat: 35.46, poz: "l" },
    mari: { nazwa: "Mari", lon: 40.89, lat: 34.55, poz: "l" },
    babilon: { nazwa: "Babilon", lon: 44.42, lat: 32.54, poz: "l" },
    suza: { nazwa: "Suza", lon: 48.26, lat: 32.19, poz: "p" },
    tyr: { nazwa: "Tyr", lon: 35.2, lat: 33.27, poz: "p" },
    lagasz: { nazwa: "Lagasz", lon: 46.41, lat: 31.41, poz: "p" },
    larsa: { nazwa: "Larsa", lon: 45.85, lat: 31.29, poz: "g" },
    uruk: { nazwa: "Uruk", lon: 45.64, lat: 31.32, poz: "l" },
    ur: { nazwa: "Ur", lon: 46.1, lat: 30.96, poz: "d" },
    damaszek: { nazwa: "Damaszek", lon: 36.29, lat: 33.51, poz: "p" },
    megiddo: { nazwa: "Megiddo", lon: 35.18, lat: 32.58, poz: "p" },
    jerycho: { nazwa: "Jerycho", lon: 35.44, lat: 31.87, poz: "p" },
    jerozolima: { nazwa: "Jerozolima", lon: 35.23, lat: 31.78, poz: "p" },
    giza: { nazwa: "Giza", lon: 31.13, lat: 29.98, poz: "l" },
    heliopolis: { nazwa: "Heliopolis", lon: 31.31, lat: 30.13, poz: "p" },
    memfis: { nazwa: "Memfis", lon: 31.2, lat: 29.85, poz: "ld" },
    teby: { nazwa: "Teby (Luksor)", lon: 32.72, lat: 25.69, poz: "p" },
    "dolina-krolow": { nazwa: "Dolina Królów", lon: 32.42, lat: 25.8, poz: "l" },
    necheb: { nazwa: "Necheb", lon: 32.87, lat: 25.12, poz: "p" },
    "abu-simbel": { nazwa: "Abu Simbel", lon: 31.63, lat: 22.34, poz: "l" },
    asuan: { nazwa: "Asuan", lon: 32.97, lat: 24.09, poz: "p" }
  };
  /* napisy krain; klasa: kraj (duże litery) albo kraina */
  var NAPISY = {
    mezopotamia: { tekst: "MEZOPOTAMIA", lon: 42.75, lat: 34.5, obrot: 40, klasa: "kraj" },
    sumer: { tekst: "SUMER", lon: 45.95, lat: 31.85, klasa: "kraj" },
    egipt: { tekst: "EGIPT", lon: 29.4, lat: 27.1, klasa: "kraj" },
    "egipt-maly": { tekst: "EGIPT", lon: 31.95, lat: 28.4, klasa: "kraj" },
    synaj: { tekst: "Półwysep\nSynaj", lon: 33.85, lat: 29.35, klasa: "kraina" },
    syria: { tekst: "SYRIA", lon: 37.9, lat: 34.9, klasa: "kraj" },
    fenicja: { tekst: "FENICJA", lon: 36.45, lat: 34.3, klasa: "kraina" },
    kanaan: { tekst: "KANAAN", lon: 34.95, lat: 30.8, klasa: "kraina" }
  };

  /* Pas wokół rzeki (dolina Nilu): punkty odsunięte o w stopni w obie strony. */
  function pas(linia, w) {
    var lewa = [], prawa = [];
    linia.forEach(function (q, i) {
      var a = linia[Math.max(0, i - 1)], b = linia[Math.min(linia.length - 1, i + 1)];
      var c = Math.cos(q[1] * Math.PI / 180), dx = (b[0] - a[0]) * c, dy = b[1] - a[1], dl = Math.sqrt(dx * dx + dy * dy) || 1;
      var nx = -dy / dl, ny = dx / dl;
      lewa.push([q[0] + nx * w / c, q[1] + ny * w]);
      prawa.unshift([q[0] - nx * w / c, q[1] - ny * w]);
    });
    return lewa.concat(prawa);
  }

  var POZ = { p: [7, 0, "start"], l: [-7, 0, "end"], g: [0, -12, "middle"], d: [0, 13, "middle"],
    pg: [6, -9, "start"], pd: [6, 10, "start"], lg: [-6, -9, "end"], ld: [-6, 10, "end"] };

  function tekst(t, q, klasa, o) {
    o = o || {};
    var x = q[0].toFixed(1), y = q[1].toFixed(1);
    var e = el("text", { x: x, y: y, class: klasa, "text-anchor": o.anchor || "middle", "dominant-baseline": "central" });
    if (o.obrot) e.setAttribute("transform", "rotate(" + o.obrot + " " + x + " " + y + ")");
    var linie = String(t).split("\n");
    if (linie.length === 1) e.textContent = t;
    else linie.forEach(function (l, i) {
      var ts = el("tspan", { x: x, dy: i ? "1.1em" : (-(linie.length - 1) * 0.55) + "em" });
      ts.textContent = l;
      e.appendChild(ts);
    });
    return e;
  }
  function numer(q, n) {
    var g = el("g", { class: "wl-numer" });
    g.appendChild(el("circle", { cx: q[0].toFixed(1), cy: q[1].toFixed(1), r: 10 }));
    var t = el("text", { x: q[0].toFixed(1), y: q[1].toFixed(1), "text-anchor": "middle", "dominant-baseline": "central" });
    t.textContent = n;
    g.appendChild(t);
    return g;
  }
  function ramka(q, obrot) {
    var r = el("rect", { x: (q[0] - 34).toFixed(1), y: (q[1] - 12).toFixed(1), width: 68, height: 24, rx: 4, class: "wl-ramka" });
    if (obrot) r.setAttribute("transform", "rotate(" + obrot + " " + q[0].toFixed(1) + " " + q[1].toFixed(1) + ")");
    return r;
  }
  function trojkat(x, y) { return "M" + (x - 7) + " " + (y + 5.5) + "L" + x + " " + (y - 7) + "L" + (x + 7) + " " + (y + 5.5) + "Z"; }
  function palma(x, y) {
    var s = x + " " + (y - 2);
    return el("path", { class: "wl-palma", d: "M" + x + " " + (y + 7) + "L" + s + "M" + s + "q-4 -5 -9 -2M" + s + "q4 -5 9 -2M" + s + "q-1 -6 -6 -8M" + s + "q1 -6 6 -8" });
  }

  /* Mała mapka kontynentów z zaznaczonym obszarem mapy (jak w podręczniku). */
  function wstawka(def, p, uid, defs) {
    var v = def.widok, a = p([def.wstawka.lon, def.wstawka.lat]);
    var L0 = -20, L1 = 65, B0 = -36, B1 = 62, sw = 1.8, w = (L1 - L0) * sw, h = (B1 - B0) * sw;
    function q(t) { return [a[0] + (t[0] - L0) * sw, a[1] + (B1 - t[1]) * sw]; }
    function kontur(wiel) { return wiel.map(function (t, i) { var r = q(t); return (i ? "L" : "M") + r[0].toFixed(1) + " " + r[1].toFixed(1); }).join("") + "Z"; }
    var g = el("g", { class: "wl-wstawka", "aria-hidden": "true" });
    var cp = el("clipPath", { id: "wst-" + uid });
    cp.appendChild(el("rect", { x: a[0].toFixed(1), y: a[1].toFixed(1), width: w, height: h }));
    defs.appendChild(cp);
    g.appendChild(el("rect", { x: a[0].toFixed(1), y: a[1].toFixed(1), width: w, height: h, class: "wl-wst-tlo" }));
    var gc = el("g", { "clip-path": "url(#wst-" + uid + ")" });
    ["europa", "azja", "afryka"].forEach(function (id) { gc.appendChild(el("path", { d: LADY[id].map(kontur).join(""), class: "wl-wst-lad" })); });
    var r0 = q([v[0], v[3]]), r1 = q([v[2], v[1]]);
    gc.appendChild(el("rect", { x: r0[0].toFixed(1), y: r0[1].toFixed(1), width: (r1[0] - r0[0]).toFixed(1), height: (r1[1] - r0[1]).toFixed(1), class: "wl-wst-ramka" }));
    [["EUROPA", 18, 52], ["AZJA", 50, 50], ["AFRYKA", 20, 3]].forEach(function (n) { gc.appendChild(tekst(n[0], q([n[1], n[2]]), "wl-wst-napis")); });
    g.appendChild(gc);
    return g;
  }
  function podzialka(o, p, s) {
    var a = p([o.lon, o.lat]), dl = 250 / 111.2 * s, g = el("g", { class: "wl-podzialka", "aria-hidden": "true" });
    g.appendChild(el("path", { d: "M" + a[0].toFixed(1) + " " + (a[1] - 5).toFixed(1) + "v5h" + dl.toFixed(1) + "v-5" }));
    g.appendChild(tekst("0", [a[0], a[1] - 14], "wl-podzialka-t"));
    g.appendChild(tekst("250 km", [a[0] + dl, a[1] - 14], "wl-podzialka-t", { anchor: "end" }));
    return g;
  }

  /* def: widok [lon0, lat0, lon1, lat1], krainy, uprawy, oazy, napisy, miasta, wyroznione, piramidy,
     numery { id: "1" } (numer zamiast nazwy), ramki [rzeki z pustą ramką], obszary (do klikania), wstawka, podzialka.
     opcje: { klik: function(id, element), tylko: "miasto" | "rzeka" | "morze" | "wyspa" } */
  function rysujWschod(def, opcje) {
    opcje = opcje || {};
    var uid = "m" + (++licznik), v = def.widok;
    var kx = Math.cos((v[1] + v[3]) / 2 * Math.PI / 180), s = 1000 / ((v[2] - v[0]) * kx);
    var Wd = 1000, Hd = Math.round((v[3] - v[1]) * s);
    function p(q) { return [(q[0] - v[0]) * kx * s, (v[3] - q[1]) * s]; }
    function d(lista, zamknij) {
      return lista.map(function (q, i) { var r = p(q); return (i ? "L" : "M") + r[0].toFixed(1) + " " + r[1].toFixed(1); }).join("") + (zamknij ? "Z" : "");
    }
    var svg = el("svg", { viewBox: "0 0 " + Wd + " " + Hd, class: "mapa mapa-wschod", role: "img", "aria-label": def.tytul || "Mapa" });
    var defs = el("defs"), wzor = el("pattern", { id: "kropki-" + uid, width: 7, height: 7, patternUnits: "userSpaceOnUse" });
    wzor.appendChild(el("circle", { cx: 3.5, cy: 3.5, r: 1.1, class: "wl-kropka" }));
    defs.appendChild(wzor);
    svg.appendChild(defs);
    svg.appendChild(el("rect", { x: 0, y: 0, width: Wd, height: Hd, class: "wl-lad" }));

    var napisy = def.napisy || [], numery = def.numery || {}, ramki = def.ramki || [];
    var klik = opcje.klik ? (def.obszary || []) : [];
    function klikalny(id, rodz) { return klik.indexOf(id) >= 0 && (!opcje.tylko || opcje.tylko === rodz); }
    function podepnij(e, id, etykieta) {
      e.classList.add("klik");
      e.setAttribute("data-id", id);
      e.setAttribute("tabindex", "0");
      e.setAttribute("role", "button");
      e.setAttribute("aria-label", etykieta);
      e.addEventListener("click", function (ev) { ev.stopPropagation(); opcje.klik(id, e); });
      e.addEventListener("keydown", function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); opcje.klik(id, e); } });
    }
    napisy.concat(def.krainy || [], def.miasta || []).forEach(function (id) {
      if (!(MORZA[id] || WYSPY[id] || RZEKI[id] || NAPISY[id] || KRAINY[id] || MIASTA[id])) console.warn("Mapa " + def.id + ": nieznany obiekt " + id);
    });

    // krainy i ziemie uprawne – pod morzami, więc mogą wchodzić na wodę
    (def.krainy || []).forEach(function (id) {
      if (KRAINY[id]) KRAINY[id].kontury.forEach(function (k) { svg.appendChild(el("path", { d: d(k, true), class: "wl-kraina k-" + KRAINY[id].kolor })); });
    });
    if (def.uprawy) UPRAWY.forEach(function (k) { svg.appendChild(el("path", { d: d(k, true), class: "wl-uprawy", fill: "url(#kropki-" + uid + ")" })); });

    Object.keys(MORZA).forEach(function (id) {
      var m = el("path", { d: d(MORZA[id].kontur, true), class: "wl-morze" });
      if (klikalny(id, "morze")) podepnij(m, id, numery[id] ? "morze numer " + numery[id] : MORZA[id].nazwa);
      svg.appendChild(m);
    });
    JEZIORA.forEach(function (k) { svg.appendChild(el("path", { d: d(k, true), class: "wl-morze" })); });
    MALE_WYSPY.forEach(function (k) { svg.appendChild(el("path", { d: d(k, true), class: "wl-wyspa" })); });
    Object.keys(WYSPY).forEach(function (id) {
      var w = el("path", { d: d(WYSPY[id].kontur, true), class: "wl-wyspa" });
      if (klikalny(id, "wyspa")) podepnij(w, id, WYSPY[id].nazwa);
      svg.appendChild(w);
    });
    if (def.oazy) OAZY.forEach(function (q) { var r = p(q); svg.appendChild(palma(r[0], r[1])); });

    Object.keys(RZEKI).forEach(function (id) {
      var r = RZEKI[id], g = el("g", { class: "wl-rzeka-g" });
      r.linie.forEach(function (l) { g.appendChild(el("path", { d: d(l), class: "wl-rzeka" })); });
      if (klikalny(id, "rzeka")) {
        r.linie.forEach(function (l) { g.appendChild(el("path", { d: d(l), class: "wl-rzeka-hit" })); });
        podepnij(g, id, napisy.indexOf(id) >= 0 && ramki.indexOf(id) < 0 ? r.nazwa : "rzeka");
      }
      svg.appendChild(g);
    });

    if (def.wstawka) svg.appendChild(wstawka(def, p, uid, defs));
    if (def.podzialka) svg.appendChild(podzialka(def.podzialka, p, s));

    // napisy: morza, wyspy, rzeki, krainy
    Object.keys(MORZA).forEach(function (id) {
      var m = MORZA[id];
      if (numery[id]) svg.appendChild(numer(p(m.napis), numery[id]));
      else if (napisy.indexOf(id) >= 0) svg.appendChild(tekst(m.tekst || m.nazwa, p(m.napis), "wl-nazwa-morza", { obrot: m.obrot }));
    });
    Object.keys(WYSPY).forEach(function (id) {
      if (napisy.indexOf(id) >= 0) svg.appendChild(tekst(WYSPY[id].nazwa, p(WYSPY[id].napis), "wl-nazwa-wyspy"));
    });
    Object.keys(RZEKI).forEach(function (id) {
      var r = RZEKI[id];
      if (ramki.indexOf(id) >= 0) svg.appendChild(ramka(p(r.napis), r.obrot));
      else if (napisy.indexOf(id) >= 0) svg.appendChild(tekst(r.nazwa, p(r.napis), "wl-nazwa-rzeki", { obrot: r.obrot }));
    });
    napisy.forEach(function (id) {
      var n = NAPISY[id];
      if (n) svg.appendChild(tekst(n.tekst, p([n.lon, n.lat]), "wl-nazwa-" + n.klasa, { obrot: n.obrot }));
    });

    // miasta – na wierzchu; pole dotyku nie większe niż połowa odległości do sąsiedniego klikanego miasta
    var wyr = def.wyroznione || [], pir = def.piramidy || [];
    var lista = (def.miasta || []).filter(function (id) { return MIASTA[id]; });
    var miejsca = lista.map(function (id) { return p([MIASTA[id].lon, MIASTA[id].lat]); });
    var doKlikania = [];
    lista.forEach(function (id, i) {
      var m = MIASTA[id], q = miejsca[i], g = el("g", { class: "wl-miasto-g" }), o = POZ[m.poz] || POZ.p;
      if (klikalny(id, "miasto")) {
        var r = 16;
        lista.forEach(function (id2, j) { if (j !== i && klikalny(id2, "miasto")) r = Math.min(r, Math.sqrt(Math.pow(q[0] - miejsca[j][0], 2) + Math.pow(q[1] - miejsca[j][1], 2)) / 2); });
        g.appendChild(el("circle", { cx: q[0].toFixed(1), cy: q[1].toFixed(1), r: Math.max(r, 6).toFixed(1), class: "wl-hit" }));
      }
      if (pir.indexOf(id) >= 0) g.appendChild(el("path", { d: trojkat(+q[0].toFixed(1), +q[1].toFixed(1)), class: "wl-miasto wl-piramida" }));
      else g.appendChild(el("circle", { cx: q[0].toFixed(1), cy: q[1].toFixed(1), r: 4.5, class: "wl-miasto" + (wyr.indexOf(id) >= 0 ? " sumer" : "") }));
      if (numery[id]) g.appendChild(numer([q[0] + (o[0] ? (o[0] > 0 ? 14 : -14) : 0), q[1] + (o[1] ? (o[1] > 0 ? 14 : -14) : 0) + (o[0] || o[1] ? 0 : -14)], numery[id]));
      else g.appendChild(tekst(m.nazwa, [q[0] + o[0], q[1] + o[1]], "wl-nazwa-miasta", { anchor: o[2] }));
      if (klikalny(id, "miasto")) { podepnij(g, id, numery[id] ? "miasto numer " + numery[id] : m.nazwa); doKlikania.push({ id: id, g: g, q: q }); }
      svg.appendChild(g);
    });
    // dotknięcie obok miasta: wybierz najbliższe klikane miasto (do 24 px)
    if (doKlikania.length) svg.addEventListener("click", function (ev) {
      var m = svg.getScreenCTM();
      if (!m) return;
      var pt = svg.createSVGPoint();
      pt.x = ev.clientX; pt.y = ev.clientY;
      var t = pt.matrixTransform(m.inverse()), naj = null, dist = 24;
      doKlikania.forEach(function (c) { var dd = Math.sqrt(Math.pow(c.q[0] - t.x, 2) + Math.pow(c.q[1] - t.y, 2)); if (dd < dist) { dist = dd; naj = c; } });
      if (naj) opcje.klik(naj.id, naj.g);
    });
    return svg;
  }

  /* Znaczek do legendy (małe SVG w stylu mapy). */
  function znak(rodz) {
    var s = el("svg", { viewBox: "0 0 24 16", class: "mapa-wschod mapa-znak", "aria-hidden": "true" });
    if (rodz === "roz" || rodz === "pom" || rodz === "pom2") s.appendChild(el("rect", { x: 1, y: 2, width: 22, height: 12, rx: 2, class: "wl-kraina k-" + rodz }));
    else if (rodz === "uprawy") {
      var id = "kl" + (++licznik), defs = el("defs"), w = el("pattern", { id: id, width: 5, height: 5, patternUnits: "userSpaceOnUse" });
      w.appendChild(el("circle", { cx: 2.5, cy: 2.5, r: 1, class: "wl-kropka" }));
      defs.appendChild(w); s.appendChild(defs);
      s.appendChild(el("rect", { x: 1, y: 2, width: 22, height: 12, rx: 2, class: "wl-lad wl-znak-ramka" }));
      s.appendChild(el("rect", { x: 1, y: 2, width: 22, height: 12, rx: 2, fill: "url(#" + id + ")" }));
    }
    else if (rodz === "pustynia") s.appendChild(el("rect", { x: 1, y: 2, width: 22, height: 12, rx: 2, class: "wl-lad wl-znak-ramka" }));
    else if (rodz === "sumer" || rodz === "miasto") s.appendChild(el("circle", { cx: 12, cy: 8, r: 4.5, class: "wl-miasto" + (rodz === "sumer" ? " sumer" : "") }));
    else if (rodz === "piramida") s.appendChild(el("path", { d: trojkat(12, 9), class: "wl-miasto wl-piramida" }));
    else if (rodz === "oaza") s.appendChild(palma(12, 8));
    else if (rodz === "rzeka") s.appendChild(el("path", { d: "M1 11C7 3 15 13 23 5", class: "wl-rzeka" }));
    return s;
  }
  function legenda(def) {
    var u = H5.u;
    if (!Array.isArray(def.legenda)) return u.el("p", { klasa: "mapa-legenda", tekst: def.legenda || "" });
    return u.el("div", { klasa: "mapa-legenda lista" }, def.legenda.map(function (x) {
      return u.el("span", { klasa: "leg" }, znak(x.znak), u.el("span", { tekst: x.tekst }));
    }));
  }

  function rysuj(def, opcje) { return def.podklad === "wschod" ? rysujWschod(def, opcje) : rysujSwiat(def, opcje); }

  function nazwa(id, def) {
    if (def && def.podklad === "wschod") { var o = MIASTA[id] || RZEKI[id] || MORZA[id] || WYSPY[id]; return o ? o.nazwa : id; }
    if (!NAZWY[id]) return id;
    return NAZWY[id].tekst.split(" ").map(function (s) { return s.charAt(0) + s.slice(1).toLowerCase(); }).join(" ");
  }
  /* rodzaj obiektu do klikania – do podpowiedzi „Dotknij … na mapie” */
  function rodzaj(id, def) {
    if (!def || def.podklad !== "wschod") return "kontynent";
    return MIASTA[id] ? "miasto" : RZEKI[id] ? "rzeka" : MORZA[id] ? "morze" : WYSPY[id] ? "wyspa" : "miejsce";
  }
  /* spis obiektów podkładu – do sprawdzania map tematów */
  function obiekty() {
    return { morza: Object.keys(MORZA), wyspy: Object.keys(WYSPY), rzeki: Object.keys(RZEKI), krainy: Object.keys(KRAINY),
      miasta: Object.keys(MIASTA), napisy: Object.keys(NAPISY) };
  }

  return { rysuj: rysuj, nazwa: nazwa, rodzaj: rodzaj, legenda: legenda, obiekty: obiekty, xy: xy };
})();
