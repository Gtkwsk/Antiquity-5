/* ================================================================
   Rozdział I. Pierwsze cywilizacje
   Temat 1. Życie pierwszych ludzi
   Źródło: „Wczoraj i dziś 5” (Nowa Era) – podręcznik s. 8–13, zeszyt ćwiczeń s. 4–6
   Notatki z materiału: materialy/temat-01-zycie-pierwszych-ludzi.md
   Opis formatu: FORMAT-TEMATU.md

   priorytet: A – pewniak na sprawdzian
              B – ważny szczegół z tekstu lub infografiki
              C – ciekawostka, „Współcześnie” (poza sprawdzianem próbnym)
   ================================================================ */

Tematy.dodaj({
  id: "r1-t01",
  rozdzial: 1,
  nr: 1,
  tytul: "Życie pierwszych ludzi",
  ikona: "ogien",
  opis: "Od praludzi do epoki żelaza",
  zrodla: { podrecznik: "s. 8–13", cwiczenia: "s. 4–6" },

  /* ---------- MUSISZ WIEDZIEĆ: fakty z materiału ---------- */
  wiedza: [
    { id: "w01", priorytet: "A", zrodlo: "podr. s. 8", tekst: "Praludzie, czyli najstarsi przodkowie człowieka, żyli około 4 milionów lat temu w Afryce." },
    { id: "w02", priorytet: "B", zrodlo: "podr. s. 8", tekst: "Praludzie mieli gęste owłosienie, chodzili pochyleni, mieli dłuższe ręce i mniejszy mózg niż współczesny człowiek." },
    { id: "w03", priorytet: "B", zrodlo: "podr. s. 8", tekst: "Z czasem przodkowie człowieka stawali się wyżsi, mniej owłosieni i bardziej wyprostowani." },
    { id: "w04", priorytet: "B", zrodlo: "podr. s. 8", tekst: "Kolejni przodkowie: australopitek (ok. 4 mln lat temu), człowiek zręczny (ok. 2,5 mln), człowiek wyprostowany (ok. 1,9 mln), człowiek rozumny (ok. 200 tys. lat temu)." },
    { id: "w05", priorytet: "A", zrodlo: "podr. s. 8; ćw. s. 4 zad. 1", tekst: "Człowiek rozumny (Homo sapiens) pojawił się około 200 tysięcy lat temu." },
    { id: "w06", priorytet: "A", zrodlo: "podr. s. 8, 13", tekst: "Praludzie nauczyli się posługiwać prostymi narzędziami (kamienie, kije), rozpalać ogień i mówić. Najważniejsze umiejętności to rozpalanie ognia i mowa." },
    { id: "w07", priorytet: "A", zrodlo: "podr. s. 8, 10; ćw. s. 5 zad. 3", tekst: "Ogień dawał ciepło (ludzie mogli żyć w chłodniejszych rejonach), pozwalał piec mięso, chronił przed dzikimi zwierzętami i dawał światło." },
    { id: "w08", priorytet: "A", zrodlo: "podr. s. 8", tekst: "Dzięki mowie praludzie szybciej wymieniali się informacjami i przekazywali doświadczenia kolejnym pokoleniom." },
    { id: "w09", priorytet: "A", zrodlo: "podr. s. 8", tekst: "Pięściak to kamienne narzędzie o ostrych krawędziach, dopasowane do dłoni, używane np. do cięcia skór. Najstarsze mają ok. 1,5 mln lat." },
    { id: "w10", priorytet: "A", zrodlo: "podr. s. 9–10", tekst: "Pierwsi ludzie zdobywali pożywienie przez zbieractwo (leśne owoce, korzonki, ślimaki, ptasie jaja) i myślistwo." },
    { id: "w11", priorytet: "B", zrodlo: "podr. s. 10", tekst: "Praludzie polowali w grupach: urządzali zasadzki i osaczali zwierzęta odłączone od stada. Używali włóczni z kamiennymi grotami." },
    { id: "w12", priorytet: "A", zrodlo: "podr. s. 9", tekst: "Koczowniczy tryb życia to wędrowanie z miejsca na miejsce w poszukiwaniu pożywienia. Koczownicy nie mieli stałych domów – mieszkali w szałasach z gałęzi i w jaskiniach." },
    { id: "w13", priorytet: "B", zrodlo: "podr. s. 10", tekst: "Pierwsi ludzie żyli w grupach liczących kilkadziesiąt osób." },
    { id: "w14", priorytet: "B", zrodlo: "podr. s. 10", tekst: "Jaskinie chroniły ludzi przed deszczem, chłodem i dzikimi zwierzętami." },
    { id: "w15", priorytet: "A", zrodlo: "podr. s. 8–9", tekst: "Około 10 tysięcy lat p.n.e. narodziło się rolnictwo: ludzie zauważyli, że z ziaren wyrastają nowe rośliny, i nauczyli się je wysiewać." },
    { id: "w16", priorytet: "A", zrodlo: "podr. s. 9", tekst: "Rolnicy musieli mieszkać przy swoich polach, dlatego przeszli na osiadły tryb życia – mieszkali na stałe w jednym miejscu." },
    { id: "w17", priorytet: "A", zrodlo: "podr. s. 9, 13", tekst: "Rewolucja neolityczna to proces przejścia człowieka z koczowniczego na osiadły tryb życia. Dokonała się dzięki rolnictwu i hodowli zwierząt." },
    { id: "w18", priorytet: "B", zrodlo: "podr. s. 9", tekst: "Najstarsze osiedla składały się z kilku chat i powstawały najczęściej nad jeziorami i rzekami." },
    { id: "w19", priorytet: "B", zrodlo: "podr. s. 9, 11", tekst: "Około 9–10 tysięcy lat temu ludzie oswoili m.in. owce, kozy i świnie. Hodowano też osły, bydło i konie." },
    { id: "w20", priorytet: "A", zrodlo: "podr. s. 11", tekst: "Ziemianki to pierwsze chaty, częściowo wykopane w ziemi, zbudowane z drewna i gliny, kryte słomą lub trzciną." },
    { id: "w21", priorytet: "B", zrodlo: "podr. s. 11", tekst: "Pierwsi rolnicy siali proso, pszenicę i jęczmień. Mieli więcej pożywienia, więc osady się rozrastały." },
    { id: "w22", priorytet: "B", zrodlo: "podr. s. 11", tekst: "Ziarno rozcierano dwoma kamieniami – to były pierwsze żarna. Z mąki i wody robiono placek pieczony na rozgrzanym w ognisku głazie." },
    { id: "w23", priorytet: "A", zrodlo: "podr. s. 11", tekst: "Uprawa zbóż i hodowla zwierząt dawały pożywienie przez cały rok, więc ludzie nie musieli wędrować i mogli zakładać stałe osiedla." },
    { id: "w24", priorytet: "A", zrodlo: "podr. s. 12–13; ćw. s. 6 zad. 7", tekst: "Kolejne epoki to epoka kamienia, brązu i żelaza. Nazwa każdej pochodzi od materiału, z którego robiono wtedy narzędzia i broń." },
    { id: "w25", priorytet: "A", zrodlo: "podr. s. 12", tekst: "Narzędzia z kamienia były trudne w obróbce, a ich ostrza łatwo się tępiły." },
    { id: "w26", priorytet: "B", zrodlo: "podr. s. 12", tekst: "Najpierw ludzie wykorzystali miedź, ale jest ona dość miękka." },
    { id: "w27", priorytet: "A", zrodlo: "podr. s. 12", tekst: "Brąz to stop miedzi i cyny. Jest twardszy od miedzi i lepiej nadaje się na broń, narzędzia i ozdoby." },
    { id: "w28", priorytet: "A", zrodlo: "podr. s. 8, 12", tekst: "Około 1200 lat p.n.e. ludzie opanowali wytop żelaza, bardziej wytrzymałego niż brąz. Epoka żelaza trwa do dziś." },
    { id: "w29", priorytet: "A", zrodlo: "podr. s. 12; ćw. s. 6 zad. 6", tekst: "Dymarka to dawny piec z kamienia i gliny, w którym wytapiano żelazo z rudy żelaza." },
    { id: "w30", priorytet: "B", zrodlo: "podr. s. 12", tekst: "Dymarkę wypełniano rudą i węglem drzewnym. W 1200°C powstawała bryła żelaza, a piec trzeba było rozbić. Kowal wykuwał z żelaza przedmioty." },
    { id: "w31", priorytet: "A", zrodlo: "podr. s. 9; ćw. s. 5 zad. 4", tekst: "Człowiek rozumny wyruszył z Afryki na inne kontynenty. Do Australii dotarł ok. 40 000 lat p.n.e., a jako ostatnią zasiedlił Amerykę Południową (ok. 10 000 lat p.n.e.)." },
    { id: "w32", priorytet: "C", zrodlo: "podr. s. 13", tekst: "Dziś metale wytapia się w hutach: piece mają ok. 1500°C, powstaje płynny metal, piec służy wiele razy i jest zasilany prądem. W Polsce huty są głównie na Śląsku i w świętokrzyskiem." },
    { id: "w33", priorytet: "C", zrodlo: "podr. s. 9", tekst: "Najstarszy bumerang (z kła mamuta, sprzed ok. 30 tysięcy lat) znaleziono w jaskini niedaleko Nowego Targu." },
    { id: "w34", priorytet: "B", zrodlo: "podr. s. 8", tekst: "Epoki w dziejach ludzi: prehistoria, starożytność, średniowiecze, nowożytność, współczesność." }
  ],

  /* ---------- POJĘCIA ---------- */
  pojecia: [
    { id: "p01", priorytet: "A", wiedza: ["w01"], zrodlo: "podr. s. 8", termin: "praludzie", definicja: "najstarsi przodkowie człowieka; żyli ok. 4 mln lat temu w Afryce" },
    { id: "p02", priorytet: "A", wiedza: ["w09"], zrodlo: "podr. s. 8", termin: "pięściak", definicja: "kamienne narzędzie o ostrych krawędziach, dopasowane do dłoni" },
    { id: "p03", priorytet: "A", wiedza: ["w10"], zrodlo: "podr. s. 10", termin: "zbieractwo", definicja: "zdobywanie pożywienia przez zbieranie owoców, korzonków, ślimaków i ptasich jaj" },
    { id: "p04", priorytet: "A", wiedza: ["w10"], zrodlo: "podr. s. 10", termin: "myślistwo", definicja: "zdobywanie pożywienia przez polowanie na dzikie zwierzęta" },
    { id: "p05", priorytet: "A", wiedza: ["w12"], zrodlo: "podr. s. 9", termin: "koczowniczy tryb życia", definicja: "wędrowny tryb życia – przenoszenie się z miejsca na miejsce w poszukiwaniu pożywienia" },
    { id: "p06", priorytet: "A", wiedza: ["w16"], zrodlo: "podr. s. 9", termin: "osiadły tryb życia", definicja: "mieszkanie na stałe w jednym miejscu, w pobliżu uprawianych pól" },
    { id: "p07", priorytet: "A", wiedza: ["w17"], zrodlo: "podr. s. 9", termin: "rewolucja neolityczna", definicja: "proces przejścia człowieka z koczowniczego na osiadły tryb życia" },
    { id: "p08", priorytet: "A", wiedza: ["w15"], zrodlo: "podr. s. 9", termin: "rolnictwo", definicja: "uprawa ziemi – wysiewanie zbóż i zbieranie plonów" },
    { id: "p09", priorytet: "A", wiedza: ["w19"], zrodlo: "podr. s. 11", termin: "hodowla zwierząt", definicja: "oswajanie dzikich zwierząt, np. kóz i owiec, i chowanie ich przy domostwach" },
    { id: "p10", priorytet: "A", wiedza: ["w20"], zrodlo: "podr. s. 11", termin: "ziemianka", definicja: "chata częściowo wykopana w ziemi, z drewna i gliny, kryta słomą lub trzciną" },
    { id: "p11", priorytet: "B", wiedza: ["w22"], zrodlo: "podr. s. 11", termin: "żarna", definicja: "dwa kamienie do rozcierania ziaren zbóż na mąkę" },
    { id: "p12", priorytet: "A", wiedza: ["w24", "w25"], zrodlo: "podr. s. 12", termin: "epoka kamienia", definicja: "okres, w którym narzędzia i broń robiono głównie z kamienia" },
    { id: "p13", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 12", termin: "brąz", definicja: "twardy stop miedzi i cyny" },
    { id: "p14", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 12", termin: "epoka brązu", definicja: "okres, w którym z brązu powszechnie wyrabiano broń, narzędzia i ozdoby" },
    { id: "p15", priorytet: "A", wiedza: ["w28"], zrodlo: "podr. s. 12", termin: "epoka żelaza", definicja: "okres od ok. 1200 lat p.n.e., gdy zaczęto używać żelaznych narzędzi i broni; trwa do dziś" },
    { id: "p16", priorytet: "A", wiedza: ["w29"], zrodlo: "podr. s. 12", termin: "dymarka", definicja: "dawny piec z kamienia i gliny do wytapiania żelaza z rudy" },
    { id: "p17", priorytet: "B", wiedza: ["w29"], zrodlo: "podr. s. 12", termin: "ruda żelaza", definicja: "surowiec spod ziemi, z którego otrzymuje się żelazo" },
    { id: "p18", priorytet: "C", wiedza: ["w32"], zrodlo: "podr. s. 13", termin: "huta", definicja: "duży zakład, w którym wytapia się metale, np. żelazo" },
    { id: "p19", priorytet: "B", wiedza: ["w34"], zrodlo: "podr. s. 8", termin: "prehistoria", definicja: "najdawniejszy okres dziejów ludzi, przed starożytnością" },
    { id: "p20", priorytet: "A", wiedza: ["w05", "w31"], zrodlo: "podr. s. 8–9", termin: "człowiek rozumny (Homo sapiens)", definicja: "gatunek człowieka, który pojawił się ok. 200 tys. lat temu w Afryce i zasiedlił wszystkie kontynenty" }
  ],

  /* ---------- DATY (rok ujemny = p.n.e., wartości przybliżone) ---------- */
  daty: [
    { id: "d01", priorytet: "A", wiedza: ["w01"], zrodlo: "podr. s. 8", kiedy: "ok. 4 mln lat temu", rok: -4000000, co: "praludzie (australopitek) w Afryce", naOsi: true },
    { id: "d02", priorytet: "B", wiedza: ["w04"], zrodlo: "podr. s. 8", kiedy: "ok. 2,5 mln lat temu", rok: -2500000, co: "człowiek zręczny (Homo habilis)", naOsi: true },
    { id: "d03", priorytet: "B", wiedza: ["w04"], zrodlo: "podr. s. 8", kiedy: "ok. 1,9 mln lat temu", rok: -1900000, co: "człowiek wyprostowany (Homo erectus)", naOsi: true },
    { id: "d04", priorytet: "B", wiedza: ["w09"], zrodlo: "podr. s. 8", kiedy: "ok. 1,5 mln lat temu", rok: -1500000, co: "najstarsze znane pięściaki", naOsi: true },
    { id: "d05", priorytet: "A", wiedza: ["w05"], zrodlo: "podr. s. 8", kiedy: "ok. 200 tys. lat temu", rok: -200000, co: "pojawienie się człowieka rozumnego", naOsi: true },
    { id: "d06", priorytet: "C", wiedza: ["w33"], zrodlo: "podr. s. 9", kiedy: "ok. 30 tys. lat temu", rok: -30000, co: "najstarszy bumerang (jaskinia koło Nowego Targu)", naOsi: true },
    { id: "d07", priorytet: "A", wiedza: ["w15"], zrodlo: "podr. s. 8–9", kiedy: "ok. 10 tys. lat p.n.e.", rok: -10000, co: "początki rolnictwa", naOsi: true },
    /* 9–10 tys. lat temu = ok. 8–7 tys. p.n.e.; nie łączyć z d07 w zadaniach na kolejność */
    { id: "d08", priorytet: "B", wiedza: ["w19"], zrodlo: "podr. s. 9", kiedy: "ok. 9–10 tys. lat temu", rok: -7500, co: "oswojenie owiec, kóz i świń", naOsi: false },
    { id: "d09", priorytet: "A", wiedza: ["w28"], zrodlo: "podr. s. 8, 12", kiedy: "ok. 1200 lat p.n.e.", rok: -1200, co: "początek epoki żelaza", naOsi: true }
  ],

  /* ---------- POSTACIE (w tym temacie brak) ---------- */
  postacie: [],

  /* ---------- MAPY ---------- */
  mapy: [
    {
      id: "m01",
      tytul: "Kierunki wędrówek człowieka rozumnego",
      zrodlo: "podr. s. 9; ćw. s. 5 zad. 4",
      podklad: "swiat",
      legenda: "Daty osiedlania się człowieka rozumnego (lata p.n.e.)",
      obszary: ["afryka", "europa", "azja", "australia", "ameryka-pln", "ameryka-pld"],
      /* położenia przybliżone – do dopracowania przy rysowaniu mapy */
      punkty: [
        { id: "afryka-wsch", lat: 0, lon: 36, etykieta: "200 000" },
        { id: "afryka-pln-zach", lat: 28, lon: -2, etykieta: "100 000" },
        { id: "bliski-wschod", lat: 32, lon: 38, etykieta: "120 000" },
        { id: "europa-pld", lat: 42, lon: 20, etykieta: "40 000" },
        { id: "europa-zach", lat: 47, lon: 2, etykieta: "35 000" },
        { id: "azja-indie", lat: 30, lon: 75, etykieta: "60 000" },
        { id: "azja-pld-wsch", lat: 0, lon: 110, etykieta: "60 000" },
        { id: "japonia", lat: 36, lon: 138, etykieta: "40 000" },
        { id: "azja-pln", lat: 60, lon: 90, etykieta: "35 000" },
        { id: "azja-pln-wsch", lat: 65, lon: 140, etykieta: "25 000" },
        { id: "australia", lat: -25, lon: 134, etykieta: "40 000" },
        { id: "wyspy-pln-wsch", lat: -6, lon: 150, etykieta: "30 000" },
        { id: "alaska", lat: 64, lon: -150, etykieta: "15 000" },
        { id: "ameryka-pln", lat: 40, lon: -100, etykieta: "13 000" },
        { id: "ameryka-pld", lat: -15, lon: -60, etykieta: "10 000" }
      ],
      strzalki: [
        ["afryka-wsch", "afryka-pln-zach"], ["afryka-wsch", "bliski-wschod"],
        ["bliski-wschod", "europa-pld"], ["europa-pld", "europa-zach"],
        ["bliski-wschod", "azja-indie"], ["azja-indie", "azja-pld-wsch"],
        ["azja-pld-wsch", "australia"], ["azja-pld-wsch", "wyspy-pln-wsch"],
        ["azja-indie", "azja-pln"], ["azja-pln", "azja-pln-wsch"], ["azja-indie", "japonia"],
        ["azja-pln-wsch", "alaska"], ["alaska", "ameryka-pln"], ["ameryka-pln", "ameryka-pld"]
      ]
    }
  ],

  /* ---------- ZADANIA ---------- */
  zadania: [

    /* ===== Praludzie ===== */
    { id: "z001", typ: "wybor", priorytet: "A", wiedza: ["w01"], zrodlo: "podr. s. 8",
      pytanie: "Najdawniejsi przodkowie człowieka, nazywani praludźmi, żyli około:",
      odpowiedzi: ["4 milionów lat temu", "200 tysięcy lat temu", "10 tysięcy lat p.n.e.", "1200 lat p.n.e."], poprawna: 0,
      wyjasnienie: "Praludzie żyli około 4 milionów lat temu. 200 tysięcy lat temu pojawił się dopiero człowiek rozumny." },

    { id: "z002", typ: "wybor", priorytet: "A", wiedza: ["w01"], zrodlo: "podr. s. 8",
      pytanie: "Najdawniejsi przodkowie człowieka żyli w:",
      odpowiedzi: ["Afryce", "Europie", "Azji", "Australii"], poprawna: 0,
      wyjasnienie: "Praludzie żyli w Afryce. Stamtąd ludzie wędrowali później na inne kontynenty." },

    { id: "z003", typ: "nawiasy", priorytet: "A", wiedza: ["w01", "w05"], zrodlo: "podr. s. 8",
      tekst: "Praludzie żyli około [4 milionów*|40 tysięcy] lat temu w [Afryce*|Europie]. Człowiek rozumny pojawił się około [200 tysięcy*|2 milionów] lat temu.",
      wyjasnienie: "Praludzie – ok. 4 mln lat temu w Afryce. Człowiek rozumny – ok. 200 tys. lat temu." },

    { id: "z004", typ: "wybor", priorytet: "A", wiedza: ["w05"], zrodlo: "podr. s. 8; ćw. s. 4 zad. 1",
      pytanie: "Człowiek rozumny (Homo sapiens) pojawił się na świecie około:",
      odpowiedzi: ["200 tysięcy lat temu", "4 milionów lat temu", "2,5 miliona lat temu", "10 tysięcy lat temu"], poprawna: 0,
      wyjasnienie: "Człowiek rozumny pojawił się około 200 tysięcy lat temu. 2,5 miliona lat temu żył człowiek zręczny." },

    { id: "z005", typ: "kolejnosc", priorytet: "B", wiedza: ["w04"], zrodlo: "podr. s. 8",
      polecenie: "Uporządkuj przodków człowieka od najstarszego do najmłodszego.",
      elementy: ["australopitek", "człowiek zręczny (Homo habilis)", "człowiek wyprostowany (Homo erectus)", "człowiek rozumny (Homo sapiens)"],
      wyjasnienie: "Australopitek – 4 mln lat temu, człowiek zręczny – 2,5 mln, człowiek wyprostowany – 1,9 mln, człowiek rozumny – 200 tys. lat temu." },

    { id: "z006", typ: "pary", priorytet: "B", wiedza: ["w04"], zrodlo: "podr. s. 8",
      polecenie: "Połącz przodka człowieka z czasem, w którym żył.",
      naglowki: ["Przodek człowieka", "Kiedy?"],
      pary: [
        ["australopitek", "ok. 4 mln lat temu"],
        ["człowiek zręczny", "ok. 2,5 mln lat temu"],
        ["człowiek wyprostowany", "ok. 1,9 mln lat temu"],
        ["człowiek rozumny", "ok. 200 tys. lat temu"]
      ],
      wyjasnienie: "Najstarszy jest australopitek, najmłodszy – człowiek rozumny." },

    { id: "z007", typ: "pf", priorytet: "B", wiedza: ["w02", "w03"], zrodlo: "podr. s. 8",
      zdania: [
        { tekst: "Ciało praludzi pokrywało gęste owłosienie.", prawda: true },
        { tekst: "Praludzie mieli większy mózg niż współczesny człowiek.", prawda: false, wyjasnienie: "Praludzie mieli mniejszy mózg." },
        { tekst: "Praludzie chodzili wyprostowani i mieli krótsze ręce niż my.", prawda: false, wyjasnienie: "Praludzie chodzili pochyleni i mieli dłuższe ręce." },
        { tekst: "Z czasem przodkowie człowieka stawali się coraz niżsi.", prawda: false, wyjasnienie: "Stawali się coraz wyżsi." }
      ],
      wyjasnienie: "Praludzie: gęste owłosienie, pochylona sylwetka, dłuższe ręce, mniejszy mózg. Z czasem stawali się wyżsi, mniej owłosieni i bardziej wyprostowani." },

    { id: "z008", typ: "wybor", priorytet: "B", wiedza: ["w02"], zrodlo: "podr. s. 8",
      pytanie: "Który opis pasuje do praludzi?",
      odpowiedzi: ["gęste owłosienie, pochylona sylwetka, mniejszy mózg niż u nas", "brak owłosienia, wyprostowana sylwetka, większy mózg niż u nas", "gęste owłosienie, wyprostowana sylwetka, krótsze ręce niż u nas"], poprawna: 0,
      wyjasnienie: "Praludzie byli owłosieni, chodzili pochyleni, mieli dłuższe ręce i mniejszy mózg niż my." },

    { id: "z009", typ: "wybor", priorytet: "B", wiedza: ["w03"], zrodlo: "podr. s. 8",
      pytanie: "Jak zmieniali się przodkowie człowieka w ciągu milionów lat?",
      odpowiedzi: ["stawali się wyżsi, mniej owłosieni i bardziej wyprostowani", "stawali się niżsi, bardziej owłosieni i bardziej pochyleni", "stawali się wyżsi, ale bardziej owłosieni i pochyleni", "stawali się niżsi, mniej owłosieni i mieli mniejszy mózg"], poprawna: 0,
      wyjasnienie: "Przodkowie człowieka stawali się coraz wyżsi, mniej owłosieni, a ich sylwetka była coraz bardziej wyprostowana." },

    { id: "z010", typ: "intruz", priorytet: "B", wiedza: ["w04", "w09"], zrodlo: "podr. s. 8",
      elementy: ["australopitek", "człowiek zręczny", "człowiek wyprostowany", "pięściak"], intruz: 3,
      wyjasnienie: "Pięściak to kamienne narzędzie. Pozostałe nazwy to przodkowie człowieka." },

    /* ===== Umiejętności: narzędzia, ogień, mowa ===== */
    { id: "z011", typ: "wybor", priorytet: "A", wiedza: ["w06"], zrodlo: "podr. s. 8, 13",
      pytanie: "Do najważniejszych umiejętności opanowanych przez praludzi należało:",
      odpowiedzi: ["rozpalanie ognia i porozumiewanie się za pomocą mowy", "wytapianie żelaza i wyrabianie ozdób z brązu", "pisanie, czytanie i budowanie pierwszych miast", "uprawa zbóż i budowanie domów z wypalanej cegły w miastach"], poprawna: 0,
      wyjasnienie: "Najważniejsze umiejętności praludzi to rozpalanie ognia i mowa." },

    { id: "z012", typ: "pary", priorytet: "A", wiedza: ["w07"], zrodlo: "ćw. s. 5 zad. 3",
      polecenie: "Połącz scenę z ilustracji z korzyścią, jaką dawał ogień.",
      naglowki: ["Co widać na ilustracji?", "Korzyść z ognia"],
      pary: [
        ["Pochodnia oświetla malowidło na ścianie jaskini", "światło"],
        ["Ludzie wyciągają dłonie do ogniska", "ciepło"],
        ["Przy wejściu do jaskini człowiek stoi naprzeciw niedźwiedzia", "ochrona przed dzikimi zwierzętami"],
        ["Ludzie trzymają kije nad ogniskiem", "pieczenie mięsa"]
      ],
      wyjasnienie: "Ogień dawał światło i ciepło, chronił przed zwierzętami i pozwalał piec mięso." },

    { id: "z013", typ: "otwarte", priorytet: "A", wiedza: ["w07"], zrodlo: "podr. s. 13 – Sprawdź się 1",
      pytanie: "Wyjaśnij, jakie korzyści dała człowiekowi umiejętność wykorzystania ognia. Podaj trzy.",
      punkty: ["ciepło – ludzie mogli zamieszkać w chłodniejszych rejonach", "pieczenie mięsa", "ochrona przed dzikimi zwierzętami", "światło"], wymagane: 3,
      wzor: "Ogień dawał ciepło, dzięki czemu ludzie mogli żyć w chłodniejszych rejonach świata. Pozwalał piec mięso upolowanych zwierząt. Chronił przed dzikimi zwierzętami i dawał światło.",
      wyjasnienie: "Wystarczą trzy z czterech: ciepło, pieczenie mięsa, ochrona przed zwierzętami, światło." },

    { id: "z014", typ: "wybor", priorytet: "A", wiedza: ["w07"], zrodlo: "podr. s. 10",
      pytanie: "Dzięki możliwości ogrzania się przy ognisku ludzie mogli:",
      odpowiedzi: ["zamieszkać w chłodniejszych rejonach świata", "przestać polować i żywić się tylko roślinami", "wytapiać żelazo w piecach z kamienia i gliny", "budować pierwsze miasta nad wielkimi rzekami"], poprawna: 0,
      wyjasnienie: "Ogień dawał ciepło, więc ludzie mogli żyć tam, gdzie było zimniej." },

    { id: "z015", typ: "pf", priorytet: "A", wiedza: ["w07"], zrodlo: "podr. s. 8, 10",
      zdania: [
        { tekst: "Ogień chronił ludzi przed dzikimi zwierzętami.", prawda: true },
        { tekst: "Przy ognisku można było upiec mięso upolowanych zwierząt.", prawda: true },
        { tekst: "Praludzie wykorzystywali ogień do wytapiania żelaza w hutach.", prawda: false, wyjasnienie: "Huty są współczesne, a żelazo zaczęto wytapiać dopiero ok. 1200 lat p.n.e." },
        { tekst: "Ciepło ogniska zmusiło ludzi do przeniesienia się w cieplejsze rejony świata.", prawda: false, wyjasnienie: "Odwrotnie – dzięki ciepłu ognia ludzie mogli zamieszkać w chłodniejszych rejonach." }
      ],
      wyjasnienie: "Ogień dawał ciepło i światło, chronił przed zwierzętami i pozwalał piec mięso." },

    { id: "z016", typ: "wybor", priorytet: "A", wiedza: ["w06", "w08"], zrodlo: "podr. s. 8",
      pytanie: "Wykształcenie się mowy pozwoliło praludziom:",
      odpowiedzi: ["wymieniać informacje i przekazywać doświadczenia pokoleniom", "wytapiać metale i wyrabiać z nich narzędzia oraz broń", "uprawiać zboża i hodować zwierzęta w stałych osadach", "rozpalać ogień i piec na nim mięso upolowanych zwierząt"], poprawna: 0,
      wyjasnienie: "Dzięki mowie praludzie szybciej wymieniali się informacjami i mogli przekazywać swoje doświadczenia kolejnym pokoleniom." },

    { id: "z017", typ: "luki", priorytet: "A", wiedza: ["w06", "w08"], zrodlo: "podr. s. 8",
      tekst: "Praludzie nauczyli się posługiwać prostymi {narzędziami}, na przykład kamieniami i kijami. Później nauczyli się rozpalać {ogień}. Ważną umiejętnością było też wykształcenie się {mowy}, dzięki której mogli przekazywać doświadczenia kolejnym {pokoleniom}.",
      dodatkowe: ["pisma", "metalami", "zwierzętom"],
      wyjasnienie: "Kolejne umiejętności praludzi: proste narzędzia, ogień i mowa." },

    { id: "z018", typ: "wybor", priorytet: "A", wiedza: ["w09"], zrodlo: "podr. s. 8",
      pytanie: "Pięściak to:",
      odpowiedzi: ["kamienne narzędzie o ostrych krawędziach, dopasowane do dłoni", "dawny piec z kamienia i gliny do wytapiania żelaza", "chata częściowo wykopana w ziemi, kryta słomą", "broń do polowania na ptaki i ryby, wykonana z długiego kła mamuta"], poprawna: 0,
      wyjasnienie: "Pięściak to kamienne narzędzie o ostrych krawędziach i kształcie dopasowanym do dłoni." },

    { id: "z019", typ: "wybor", priorytet: "B", wiedza: ["w09"], zrodlo: "podr. s. 8",
      pytanie: "Praludzie używali pięściaka między innymi do:",
      odpowiedzi: ["cięcia skór", "mielenia zboża", "wytapiania metali", "orania pól"], poprawna: 0,
      wyjasnienie: "Pięściakiem cięto m.in. skóry. Do mielenia zboża służyły żarna." },

    { id: "z020", typ: "nawiasy", priorytet: "B", wiedza: ["w09"], zrodlo: "podr. s. 8",
      tekst: "Pięściak wykonywano z [kamienia*|brązu]. Najstarsze znane pięściaki mają około [1,5 miliona*|15 tysięcy] lat.",
      wyjasnienie: "Pięściak to narzędzie kamienne. Najstarsze mają około 1,5 miliona lat." },

    /* ===== Koczowniczy tryb życia ===== */
    { id: "z021", typ: "wybor", priorytet: "A", wiedza: ["w12"], zrodlo: "podr. s. 9",
      pytanie: "Koczowniczy tryb życia polegał na:",
      odpowiedzi: ["przenoszeniu się z miejsca na miejsce w poszukiwaniu pożywienia", "mieszkaniu na stałe w jednym miejscu, w pobliżu swoich pól", "uprawie zbóż i hodowli zwierząt w stałych osadach nad rzekami", "budowaniu ziemianek krytych słomą i zakładaniu osiedli"], poprawna: 0,
      wyjasnienie: "Koczownicy wędrowali za pożywieniem i nie mieli stałych domów." },

    { id: "z022", typ: "wybor", priorytet: "A", wiedza: ["w12"], zrodlo: "podr. s. 9",
      pytanie: "Dawni ludzie wciąż przenosili się z miejsca na miejsce, ponieważ:",
      odpowiedzi: ["szukali zwierząt do upolowania i jadalnych roślin", "uciekali przed powodziami i trzęsieniami ziemi", "szukali rudy żelaza i miejsc na budowę dymarek", "chcieli poznać inne kontynenty i nowych ludzi"], poprawna: 0,
      wyjasnienie: "Zatrzymywali się tam, gdzie mogli coś upolować lub zebrać. Wędrowali w poszukiwaniu pożywienia." },

    { id: "z023", typ: "wybor", priorytet: "A", wiedza: ["w12", "w14"], zrodlo: "podr. s. 9–10",
      pytanie: "Koczownicy nie budowali stałych domów. Gdzie mieszkali?",
      odpowiedzi: ["w szałasach z gałęzi i w jaskiniach", "w ziemiankach krytych słomą", "w domach z cegły", "w chatach w osiedlach nad jeziorami"], poprawna: 0,
      wyjasnienie: "Koczownicy budowali tymczasowe szałasy z gałęzi lub korzystali z jaskiń. Ziemianki i osiedla budowali dopiero rolnicy." },

    { id: "z024", typ: "wybor", priorytet: "A", wiedza: ["w10"], zrodlo: "podr. s. 10",
      pytanie: "Zbieractwo to zdobywanie pożywienia przez:",
      odpowiedzi: ["zbieranie leśnych owoców, korzonków, ślimaków i ptasich jaj", "polowanie w grupach na dzikie zwierzęta, na przykład z zasadzki", "wysiewanie zbóż i zbieranie plonów z własnych pól", "oswajanie i hodowanie kóz, owiec oraz świń"], poprawna: 0,
      wyjasnienie: "Zbieracze zbierali leśne owoce, korzonki i ślimaki, a z gniazd wybierali ptasie jaja." },

    { id: "z025", typ: "pary", priorytet: "A", wiedza: ["w10", "w15", "w19"], zrodlo: "podr. s. 9–11",
      polecenie: "Połącz sposób zdobywania pożywienia z jego opisem.",
      naglowki: ["Sposób", "Na czym polegał?"],
      pary: [
        ["zbieractwo", "zbieranie owoców, korzonków, ślimaków i ptasich jaj"],
        ["myślistwo", "polowanie na dzikie zwierzęta"],
        ["rolnictwo", "wysiewanie zbóż i zbieranie plonów"],
        ["hodowla", "oswajanie i chowanie kóz, owiec czy świń"]
      ],
      wyjasnienie: "Zbieractwo i myślistwo to zajęcia koczowników. Rolnictwo i hodowla to zajęcia ludzi osiadłych." },

    { id: "z026", typ: "pf", priorytet: "B", wiedza: ["w10", "w11", "w13"], zrodlo: "podr. s. 10",
      zdania: [
        { tekst: "Praludzie polowali w grupach i urządzali zasadzki na zwierzęta.", prawda: true },
        { tekst: "Grupy pierwszych ludzi liczyły kilkadziesiąt osób.", prawda: true },
        { tekst: "Pierwsi ludzie wybierali z gniazd ptasie jaja.", prawda: true },
        { tekst: "Jako broni praludzie używali włóczni z żelaznymi grotami.", prawda: false, wyjasnienie: "Groty włóczni były kamienne." }
      ],
      wyjasnienie: "Praludzie żyli w grupach po kilkadziesiąt osób, polowali wspólnie, używali włóczni z kamiennymi grotami." },

    { id: "z027", typ: "nawiasy", priorytet: "B", wiedza: ["w11", "w13"], zrodlo: "podr. s. 10",
      tekst: "Pierwsi ludzie żyli w grupach liczących [kilkadziesiąt*|kilka tysięcy] osób. Polowali [w grupach*|pojedynczo] i osaczali zwierzęta, które [odłączyły się od stada*|spały w jaskiniach]. Używali włóczni z [kamiennymi*|żelaznymi] grotami.",
      wyjasnienie: "Grupy po kilkadziesiąt osób, wspólne polowania, zasadzki i osaczanie zwierząt odłączonych od stada, włócznie z kamiennymi grotami." },

    { id: "z028", typ: "wybor", priorytet: "B", wiedza: ["w11"], zrodlo: "podr. s. 10",
      pytanie: "Jak polowali praludzie?",
      odpowiedzi: ["w grupach – urządzali zasadzki i osaczali zwierzęta odłączone od stada", "pojedynczo – każdy łowca polował sam, z żelazną siekierą", "nocą – wypędzali niedźwiedzie z jaskiń płonącymi pochodniami i kamieniami", "konno – ścigali całe stada na oswojonych koniach"], poprawna: 0,
      wyjasnienie: "Praludzie polowali w grupach: urządzali zasadzki i osaczali zwierzęta, które odłączyły się od stada." },

    { id: "z029", typ: "wybor", priorytet: "B", wiedza: ["w14"], zrodlo: "podr. s. 10",
      pytanie: "Przed czym chroniły ludzi jaskinie?",
      odpowiedzi: ["przed deszczem, chłodem i dzikimi zwierzętami", "przed powodziami, pożarami i trzęsieniami ziemi", "przed upałem, suszą i burzami piaskowymi", "przed hałasem, dymem i ciemnością nocy"], poprawna: 0,
      wyjasnienie: "Jaskinie chroniły przed deszczem i chłodem oraz przed dzikimi zwierzętami." },

    { id: "z030", typ: "intruz", priorytet: "A", wiedza: ["w12", "w20"], zrodlo: "ćw. s. 6 zad. 5",
      polecenie: "Wskaż element, który nie pasuje do koczowniczego trybu życia.",
      elementy: ["zbieractwo", "myślistwo", "zamieszkiwanie jaskiń", "budowa ziemianek"], intruz: 3,
      wyjasnienie: "Ziemianki budowali ludzie osiadli, którzy mieszkali na stałe przy swoich polach." },

    /* ===== Rolnictwo, osiadły tryb życia, rewolucja neolityczna ===== */
    { id: "z031", typ: "wybor", priorytet: "A", wiedza: ["w17"], zrodlo: "podr. s. 9",
      pytanie: "Rewolucja neolityczna to:",
      odpowiedzi: ["proces przejścia człowieka z koczowniczego na osiadły tryb życia", "proces przejścia człowieka z osiadłego na koczowniczy tryb życia", "opanowanie wytopu żelaza", "pojawienie się człowieka rozumnego"], poprawna: 0,
      wyjasnienie: "Rewolucja neolityczna to proces przejścia człowieka z koczowniczego na osiadły tryb życia. Tę definicję trzeba znać na pamięć." },

    { id: "z032", typ: "luki", priorytet: "A", wiedza: ["w17"], zrodlo: "podr. s. 9, 13",
      tekst: "Rewolucja neolityczna to proces przejścia człowieka z {koczowniczego} na {osiadły} tryb życia. Dokonał się on dzięki {rolnictwu} i {hodowli} zwierząt.",
      dodatkowe: ["myślistwu", "zbieractwu"],
      wyjasnienie: "Z koczowniczego na osiadły – dzięki rolnictwu i hodowli zwierząt." },

    { id: "z033", typ: "nawiasy", priorytet: "A", wiedza: ["w15", "w16"], zrodlo: "podr. s. 9",
      tekst: "Około 10 tysięcy lat [p.n.e.*|n.e.] narodziło się [rolnictwo*|myślistwo]. Aby uprawiać ziemię, ludzie musieli zamieszkać [na stałe*|tylko na zimę] w pobliżu swoich pól. Tak zaczął się [osiadły*|koczowniczy] tryb życia.",
      wyjasnienie: "Rolnictwo narodziło się ok. 10 tysięcy lat p.n.e. Rolnicy zamieszkali na stałe przy polach – to osiadły tryb życia." },

    { id: "z034", typ: "wybor", priorytet: "A", wiedza: ["w15"], zrodlo: "podr. s. 8–9",
      pytanie: "Rolnictwo narodziło się około:",
      odpowiedzi: ["10 tysięcy lat p.n.e.", "1200 lat p.n.e.", "4 milionów lat temu", "200 tysięcy lat temu"], poprawna: 0,
      wyjasnienie: "Początki rolnictwa to około 10 tysięcy lat p.n.e. Rok 1200 p.n.e. to początek epoki żelaza." },

    { id: "z035", typ: "wybor", priorytet: "A", wiedza: ["w15"], zrodlo: "podr. s. 9",
      pytanie: "Rolnictwo zaczęło się od tego, że ludzie zauważyli, iż:",
      odpowiedzi: ["z ziaren dziko rosnących zbóż wyrastają nowe rośliny", "ogień ogrzewa jaskinie i odstrasza dzikie zwierzęta", "zwierzęta wędrują w stadach zawsze w te same miejsca", "po dodaniu cyny do miedzi powstaje twardszy brąz"], poprawna: 0,
      wyjasnienie: "Ludzie zaobserwowali, że z ziaren wyrastają nowe rośliny, i nauczyli się je wysiewać i zbierać plony." },

    { id: "z036", typ: "wybor", priorytet: "A", wiedza: ["w16"], zrodlo: "podr. s. 9",
      pytanie: "Dlaczego pierwsi rolnicy osiedlili się na stałe w jednym miejscu?",
      odpowiedzi: ["musieli mieszkać w pobliżu swoich pól", "bali się dzikich zwierząt w lasach", "zapomnieli, jak się poluje na zwierzęta", "w okolicy zabrakło wolnych jaskiń"], poprawna: 0,
      wyjasnienie: "Aby uprawiać ziemię, rolnicy musieli mieszkać blisko swoich pól." },

    { id: "z037", typ: "otwarte", priorytet: "A", wiedza: ["w16", "w17", "w23"], zrodlo: "podr. s. 13 – Sprawdź się 2",
      pytanie: "Wyjaśnij, dzięki czemu ludzie zaczęli prowadzić osiadły tryb życia.",
      punkty: ["dzięki rolnictwu – uprawie ziemi", "dzięki hodowli zwierząt", "mieli pożywienie przez cały rok, więc nie musieli wędrować", "musieli mieszkać w pobliżu swoich pól"], wymagane: 2,
      wzor: "Ludzie nauczyli się uprawiać ziemię i hodować zwierzęta. Musieli mieszkać przy swoich polach, a uprawy i hodowla dawały im pożywienie przez cały rok, więc nie musieli już wędrować.",
      wyjasnienie: "Najważniejsze: rolnictwo i hodowla zwierząt." },

    { id: "z038", typ: "kategorie", priorytet: "A", wiedza: ["w10", "w12", "w14", "w16", "w19", "w20"], zrodlo: "ćw. s. 6 zad. 5",
      polecenie: "Przyporządkuj wyrażenia do właściwych kolumn. Jedno wyrażenie pasuje do obu kolumn.",
      kategorie: ["Koczowniczy tryb życia", "Osiadły tryb życia"],
      elementy: [
        { tekst: "zbieractwo", kolumny: [0] },
        { tekst: "myślistwo", kolumny: [0] },
        { tekst: "zamieszkiwanie jaskiń", kolumny: [0] },
        { tekst: "uprawa ziemi", kolumny: [1] },
        { tekst: "hodowla zwierząt", kolumny: [1] },
        { tekst: "budowa ziemianek", kolumny: [1] },
        { tekst: "wzniecanie ognia", kolumny: [0, 1] }
      ],
      wyjasnienie: "Ogień wykorzystywali i koczownicy, i ludzie osiadli – dlatego pasuje do obu kolumn." },

    { id: "z039", typ: "kategorie", priorytet: "A", wiedza: ["w11", "w12", "w16", "w18", "w21", "w22"], zrodlo: "podr. s. 10–11",
      polecenie: "Przyporządkuj elementy do właściwego trybu życia.",
      kategorie: ["Koczowniczy tryb życia", "Osiadły tryb życia"],
      elementy: [
        { tekst: "szałasy z gałęzi", kolumny: [0] },
        { tekst: "wędrówki w poszukiwaniu pożywienia", kolumny: [0] },
        { tekst: "zbieranie korzonków i ślimaków", kolumny: [0] },
        { tekst: "polowanie z włóczniami o kamiennych grotach", kolumny: [0] },
        { tekst: "pola prosa, pszenicy i jęczmienia", kolumny: [1] },
        { tekst: "oswojone kozy i owce", kolumny: [1] },
        { tekst: "stałe osiedla nad jeziorami i rzekami", kolumny: [1] },
        { tekst: "rozcieranie ziarna w żarnach", kolumny: [1] }
      ],
      wyjasnienie: "Koczownicy: wędrówki, szałasy, zbieractwo, myślistwo. Ludzie osiadli: pola, zwierzęta hodowlane, stałe osiedla, żarna." },

    { id: "z040", typ: "pf", priorytet: "A", wiedza: ["w15", "w16", "w17", "w18"], zrodlo: "podr. s. 9; ćw. s. 6 zad. 6",
      zdania: [
        { tekst: "Rewolucja neolityczna polegała na przejściu z koczowniczego na osiadły tryb życia.", prawda: true },
        { tekst: "Rolnictwo narodziło się około 1200 lat p.n.e.", prawda: false, wyjasnienie: "Rolnictwo narodziło się ok. 10 tysięcy lat p.n.e. Rok 1200 p.n.e. to początek epoki żelaza." },
        { tekst: "Najstarsze osiedla powstawały najczęściej nad jeziorami i rzekami.", prawda: true },
        { tekst: "Rolnicy budowali stałe domy w pobliżu swoich pól.", prawda: true }
      ],
      wyjasnienie: "Rewolucja neolityczna: z koczowniczego na osiadły tryb życia, ok. 10 tysięcy lat p.n.e." },

    { id: "z041", typ: "wybor", priorytet: "B", wiedza: ["w18"], zrodlo: "podr. s. 9",
      pytanie: "Najstarsze ludzkie osiedla powstawały najczęściej:",
      odpowiedzi: ["nad jeziorami i rzekami", "na szczytach wysokich gór", "na suchych pustyniach", "w głębi ciemnych jaskiń"], poprawna: 0,
      wyjasnienie: "Najstarsze osiedla składały się z kilku chat i powstawały najczęściej nad jeziorami i rzekami." },

    { id: "z042", typ: "wybor", priorytet: "B", wiedza: ["w19"], zrodlo: "podr. s. 9",
      pytanie: "Około 9–10 tysięcy lat temu ludzie oswoili między innymi:",
      odpowiedzi: ["owce, kozy i świnie", "mamuty i niedźwiedzie", "lwy i tygrysy", "wieloryby i foki"], poprawna: 0,
      wyjasnienie: "Ludzie oswoili m.in. owce, kozy i świnie, a z czasem także osły, bydło i konie." },

    { id: "z043", typ: "wybor", priorytet: "A", wiedza: ["w23"], zrodlo: "podr. s. 11",
      pytanie: "Co dała ludziom uprawa zbóż i hodowla zwierząt?",
      odpowiedzi: ["pożywienie przez cały rok – nie musieli już wędrować za pokarmem", "umiejętność rozpalania ognia i pieczenia mięsa na ognisku", "możliwość wytapiania żelaza w dymarkach i kucia z niego mocnych narzędzi", "ochronę przed chłodem i deszczem w głębokich jaskiniach"], poprawna: 0,
      wyjasnienie: "Uprawa zbóż i hodowla zapewniały pożywienie przez cały rok, więc ludzie mogli zakładać stałe osiedla." },

    { id: "z044", typ: "wybor", priorytet: "A", wiedza: ["w20"], zrodlo: "podr. s. 11",
      pytanie: "Ziemianka to:",
      odpowiedzi: ["chata częściowo wykopana w ziemi, zbudowana z drewna i gliny", "tymczasowy szałas z gałęzi, budowany przez koczowników", "naturalna jaskinia, w której chroniono się przed deszczem", "dawny piec z kamienia i gliny do wytapiania żelaza"], poprawna: 0,
      wyjasnienie: "Ziemianka to chata częściowo wykopana w ziemi, z drewna i gliny, kryta słomą lub trzciną." },

    { id: "z045", typ: "nawiasy", priorytet: "B", wiedza: ["w20"], zrodlo: "podr. s. 11",
      tekst: "Ziemianki budowano z [drewna i gliny*|kamienia i brązu], a ich dachy kryto [słomą lub trzciną*|skórami mamutów]. Były częściowo [wykopane w ziemi*|zawieszone na drzewach].",
      wyjasnienie: "Ziemianki: częściowo w ziemi, z drewna i gliny, dach ze słomy lub trzciny." },

    { id: "z046", typ: "wybor", priorytet: "B", wiedza: ["w21"], zrodlo: "podr. s. 11",
      pytanie: "Jakie zboża siali pierwsi rolnicy?",
      odpowiedzi: ["proso, pszenicę i jęczmień", "ziemniaki i kukurydzę", "pomidory i ogórki", "słonecznik i rzepak"], poprawna: 0,
      wyjasnienie: "Wokół swoich domostw ludzie siali proso, pszenicę i jęczmień." },

    { id: "z047", typ: "kolejnosc", priorytet: "B", wiedza: ["w22"], zrodlo: "podr. s. 11",
      polecenie: "Ułóż czynności w kolejności – od ziarna do placka.",
      elementy: ["rozcieranie ziaren między dwoma kamieniami (żarnami)", "mieszanie mąki z wodą", "formowanie placka", "pieczenie placka na rozgrzanym w ognisku głazie"],
      wyjasnienie: "Ziarno → mąka (żarna) → mąka z wodą → placek → pieczenie na gorącym kamieniu." },

    { id: "z048", typ: "wybor", priorytet: "B", wiedza: ["w22"], zrodlo: "podr. s. 11",
      pytanie: "Pierwsze prymitywne żarna to:",
      odpowiedzi: ["dwa kamienie do rozcierania ziaren zbóż", "gliniany piec do pieczenia chleba", "drewniane narzędzie do orania", "naczynie do przechowywania mąki"], poprawna: 0,
      wyjasnienie: "Ziarna rozcierano między dwoma kamieniami – to były pierwsze żarna." },

    { id: "z049", typ: "intruz", priorytet: "B", wiedza: ["w19", "w21"], zrodlo: "podr. s. 11",
      elementy: ["proso", "pszenica", "jęczmień", "koza"], intruz: 3,
      wyjasnienie: "Proso, pszenica i jęczmień to zboża. Koza to zwierzę hodowlane." },

    { id: "z050", typ: "pf", priorytet: "B", wiedza: ["w21", "w22", "w23"], zrodlo: "podr. s. 11",
      zdania: [
        { tekst: "Ziarna zbóż rozcierano w żelaznych młynkach.", prawda: false, wyjasnienie: "Ziarna rozcierano między dwoma kamieniami – to były pierwsze żarna. Żelaza jeszcze wtedy nie znano." },
        { tekst: "Placek z mąki i wody pieczono na rozgrzanym w ognisku głazie.", prawda: true },
        { tekst: "Dzięki uprawie zbóż osady zaczęły się zmniejszać.", prawda: false, wyjasnienie: "Osady się rozrastały, bo było więcej pożywienia i przybywało mieszkańców." },
        { tekst: "Uprawa zbóż i hodowla zwierząt zapewniały pożywienie przez cały rok.", prawda: true }
      ],
      wyjasnienie: "Więcej pożywienia przez cały rok, więc osady się rozrastały." },

    { id: "z051", typ: "otwarte", priorytet: "B", wiedza: ["w21", "w23"], zrodlo: "podr. s. 11 – Praca z infografiką 2",
      pytanie: "Oceń, który sposób zdobywania pożywienia – zbieractwo czy rolnictwo – był korzystniejszy dla naszych przodków. Uzasadnij.",
      punkty: ["korzystniejsze było rolnictwo", "dawało pożywienie przez cały rok", "nie trzeba było wędrować – można było mieszkać w stałej osadzie", "było więcej pożywienia, więc osady się rozrastały"], wymagane: 2,
      wzor: "Korzystniejsze było rolnictwo, ponieważ dawało pożywienie przez cały rok. Ludzie nie musieli już wędrować i mogli zakładać stałe osiedla, które się rozrastały.",
      wyjasnienie: "Wybór (rolnictwo) + co najmniej jeden powód." },

    { id: "z052", typ: "otwarte", priorytet: "B", wiedza: ["w12", "w16"], zrodlo: "podr. s. 11 – Praca z infografiką 1",
      pytanie: "Wyjaśnij, na czym polegały różnice między koczowniczym a osiadłym trybem życia.",
      punkty: ["koczownicy wędrowali, a ludzie osiadli mieszkali na stałe w jednym miejscu", "koczownicy żyli ze zbieractwa i myślistwa, a osiadli z uprawy ziemi i hodowli", "koczownicy mieszkali w szałasach i jaskiniach, a osiadli w ziemiankach"], wymagane: 2,
      wzor: "Koczownicy wędrowali w poszukiwaniu pożywienia, zbierali rośliny i polowali, mieszkali w szałasach i jaskiniach. Ludzie osiadli mieszkali na stałe w jednym miejscu, uprawiali ziemię, hodowali zwierzęta i budowali ziemianki.",
      wyjasnienie: "Porównuj parami: wędrówka – stałe miejsce; zbieractwo i myślistwo – rolnictwo i hodowla; szałasy i jaskinie – ziemianki." },

    { id: "z053", typ: "otwarte", priorytet: "B", wiedza: ["w19", "w23"], zrodlo: "podr. s. 11 – Praca z infografiką ★",
      pytanie: "Wyjaśnij, jakie korzyści przyniosło ludziom udomowienie zwierząt.",
      punkty: ["stały dostęp do pożywienia przez cały rok", "nie trzeba było wędrować w poszukiwaniu pokarmu – można było mieszkać w stałej osadzie"], wymagane: 2,
      wzor: "Hodowla zwierząt, razem z uprawą zbóż, zapewniała ludziom pożywienie przez cały rok. Nie musieli już wędrować w poszukiwaniu pokarmu i mogli zakładać stałe osiedla.",
      wyjasnienie: "Hodowla = pożywienie przez cały rok = nie trzeba wędrować." },

    /* ===== Epoki kamienia, brązu i żelaza ===== */
    { id: "z054", typ: "kolejnosc", priorytet: "A", wiedza: ["w24"], zrodlo: "ćw. s. 6 zad. 7",
      polecenie: "Uporządkuj epoki w kolejności chronologicznej – od najdawniejszej.",
      elementy: ["epoka kamienia", "epoka brązu", "epoka żelaza"],
      wyjasnienie: "Najpierw kamień, potem brąz, na końcu żelazo. Epoka żelaza trwa do dziś." },

    { id: "z055", typ: "wybor", priorytet: "A", wiedza: ["w24"], zrodlo: "podr. s. 13 – To już wiem",
      pytanie: "Nazwy epoki kamienia, brązu i żelaza pochodzą od:",
      odpowiedzi: ["materiału, z którego w danym okresie wytwarzano narzędzia i broń", "nazwisk uczonych, którzy pierwsi opisali te okresy", "miejsc, w których znaleziono najstarsze ślady ludzi", "kolorów farb, którymi pierwsi ludzie malowali zwierzęta na ścianach jaskiń"], poprawna: 0,
      wyjasnienie: "Nazwa każdej epoki pochodzi od materiału, z którego wtedy robiono narzędzia i broń." },

    { id: "z056", typ: "wybor", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 12",
      pytanie: "Brąz to:",
      odpowiedzi: ["stop miedzi i cyny", "czysta miedź", "rodzaj twardego kamienia", "stop żelaza i gliny"], poprawna: 0,
      wyjasnienie: "Po dodaniu cyny do miedzi powstaje twardszy stop – brąz." },

    { id: "z057", typ: "wybor", priorytet: "B", wiedza: ["w26"], zrodlo: "podr. s. 12",
      pytanie: "Który metal ludzie wykorzystali jako pierwszy?",
      odpowiedzi: ["miedź", "żelazo", "brąz", "srebro"], poprawna: 0,
      wyjasnienie: "Najpierw ludzie wykorzystali miedź, ale była dość miękka. Później odkryli brąz, a potem żelazo." },

    { id: "z058", typ: "pf", priorytet: "A", wiedza: ["w25", "w27", "w28", "w29"], zrodlo: "ćw. s. 6 zad. 6",
      zdania: [
        { tekst: "Kamień był trwalszym materiałem do wyrabiania narzędzi niż brąz.", prawda: false, wyjasnienie: "Brąz był trwalszy – kamienne ostrza łatwo się tępiły." },
        { tekst: "Dymarki służyły do wytapiania przez ludzi żelaza.", prawda: true },
        { tekst: "Brąz powstaje po dodaniu cyny do miedzi.", prawda: true },
        { tekst: "Żelazo jest mniej wytrzymałe niż brąz.", prawda: false, wyjasnienie: "Żelazo jest bardziej wytrzymałe niż brąz." }
      ],
      wyjasnienie: "Od najsłabszego do najtrwalszego: kamień, brąz, żelazo. Żelazo wytapiano w dymarkach." },

    { id: "z059", typ: "pary", priorytet: "A", wiedza: ["w24", "w25", "w27", "w28"], zrodlo: "podr. s. 12",
      polecenie: "Połącz epokę z jej opisem.",
      naglowki: ["Epoka", "Opis"],
      pary: [
        ["epoka kamienia", "narzędzia trudne w obróbce, ostrza łatwo się tępiły"],
        ["epoka brązu", "narzędzia i broń ze stopu miedzi i cyny"],
        ["epoka żelaza", "zaczęła się ok. 1200 lat p.n.e. i trwa do dziś"]
      ],
      wyjasnienie: "Kamień – tępił się. Brąz – miedź z cyną. Żelazo – od ok. 1200 lat p.n.e. do dziś." },

    { id: "z060", typ: "wybor", priorytet: "A", wiedza: ["w28"], zrodlo: "podr. s. 8, 12",
      pytanie: "Epoka żelaza rozpoczęła się około:",
      odpowiedzi: ["1200 lat p.n.e.", "10 tysięcy lat p.n.e.", "200 tysięcy lat temu", "1 roku n.e."], poprawna: 0,
      wyjasnienie: "Około 1200 lat p.n.e. ludzie opanowali wytop żelaza. 10 tysięcy lat p.n.e. to początki rolnictwa." },

    { id: "z061", typ: "wybor", priorytet: "A", wiedza: ["w25"], zrodlo: "podr. s. 12",
      pytanie: "Jaką wadę miały narzędzia z kamienia?",
      odpowiedzi: ["były trudne w obróbce, a ich ostrza łatwo się tępiły", "szybko rdzewiały na deszczu i trzeba je było czyścić", "były zbyt lekkie, by polować na duże zwierzęta", "topiły się przy ognisku, gdy robiło się gorąco"], poprawna: 0,
      wyjasnienie: "Kamień był trudny w obróbce, a kamienne ostrza szybko się tępiły. Dlatego ludzie szukali trwalszych materiałów." },

    { id: "z062", typ: "kategorie", priorytet: "A", wiedza: ["w09", "w25", "w27", "w28", "w29"], zrodlo: "podr. s. 8, 12",
      polecenie: "Przyporządkuj opisy do właściwego materiału.",
      kategorie: ["kamień", "brąz", "żelazo"],
      elementy: [
        { tekst: "trudny w obróbce, ostrza łatwo się tępiły", kolumny: [0] },
        { tekst: "z tego materiału zrobiony jest pięściak", kolumny: [0] },
        { tekst: "stop miedzi i cyny", kolumny: [1] },
        { tekst: "twardszy od samej miedzi", kolumny: [1] },
        { tekst: "wytapiany w dymarkach z rudy", kolumny: [2] },
        { tekst: "używany od ok. 1200 lat p.n.e.", kolumny: [2] },
        { tekst: "bardziej wytrzymały niż brąz", kolumny: [2] }
      ],
      wyjasnienie: "Kamień – pięściak, tępiące się ostrza. Brąz – miedź z cyną. Żelazo – dymarki, od ok. 1200 lat p.n.e., najtrwalsze." },

    { id: "z063", typ: "intruz", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 12",
      elementy: ["miedź", "cyna", "brąz", "kamień"], intruz: 3,
      wyjasnienie: "Miedź, cyna i brąz to metale – brąz powstaje z miedzi i cyny. Kamień nie jest metalem." },

    { id: "z064", typ: "otwarte", priorytet: "A", wiedza: ["w24"], zrodlo: "podr. s. 13 – Sprawdź się 3",
      pytanie: "Wytłumacz, dlaczego kolejne okresy w dziejach nazywa się epoką kamienia, brązu i żelaza.",
      punkty: ["nazwa epoki pochodzi od materiału", "z tego materiału wytwarzano wtedy narzędzia i broń"], wymagane: 2,
      wzor: "Nazwa każdej epoki pochodzi od materiału, z którego w danym okresie wytwarzano narzędzia i broń: najpierw z kamienia, potem z brązu, a potem z żelaza.",
      wyjasnienie: "Materiał + narzędzia i broń – oba elementy muszą się pojawić." },

    { id: "z065", typ: "otwarte", priorytet: "B", wiedza: ["w25", "w26", "w27", "w28"], zrodlo: "podr. s. 13 – Sprawdź się 4",
      pytanie: "Określ, jakie zalety i wady miało wyrabianie narzędzi z kamienia, brązu i żelaza.",
      punkty: ["kamień – trudny w obróbce, ostrza łatwo się tępiły", "brąz – twardszy od miedzi, dobry na broń, narzędzia i ozdoby", "żelazo – najbardziej wytrzymałe, bardziej niż brąz"], wymagane: 3,
      wzor: "Narzędzia z kamienia były trudne w obróbce, a ich ostrza łatwo się tępiły. Brąz był twardszy od miedzi i dobrze nadawał się na broń, narzędzia i ozdoby. Żelazo było jeszcze bardziej wytrzymałe niż brąz.",
      wyjasnienie: "Po jednym zdaniu o każdym materiale." },

    { id: "z066", typ: "luki", priorytet: "A", wiedza: ["w26", "w27", "w28"], zrodlo: "podr. s. 12",
      tekst: "Początkowo ludzie wykorzystywali {miedź}, która jest dość miękka. Po dodaniu do niej {cyny} powstał twardszy stop – {brąz}. Około 1200 lat p.n.e. ludzie opanowali wytop {żelaza}, które było jeszcze bardziej wytrzymałe.",
      dodatkowe: ["kamień", "srebra"],
      wyjasnienie: "Miedź (miękka) + cyna = brąz. Potem żelazo – najtrwalsze." },

    { id: "z067", typ: "wybor", priorytet: "B", wiedza: ["w28"], zrodlo: "podr. s. 12",
      pytanie: "Z żelaza wykuwano między innymi:",
      odpowiedzi: ["siekiery, ostrza włóczni i haczyki do łowienia ryb", "pięściaki, kamienne groty i ostrza oszczepów", "dachy ziemianek i ściany chat w osadach", "żarna do mielenia zboża i piece do chleba"], poprawna: 0,
      wyjasnienie: "Z żelaza wykuwano siekiery, ostrza włóczni, haczyki do łowienia ryb i ozdoby." },

    /* ===== Dymarka i huta ===== */
    { id: "z068", typ: "wybor", priorytet: "A", wiedza: ["w29"], zrodlo: "podr. s. 12",
      pytanie: "Dymarka to:",
      odpowiedzi: ["dawny piec do wytapiania żelaza z rudy", "chata częściowo wykopana w ziemi", "kamienne narzędzie do cięcia skór", "współczesny zakład, w którym wytapia się metale"], poprawna: 0,
      wyjasnienie: "Dymarka to dawny piec z kamienia i gliny. Współczesny zakład to huta." },

    { id: "z069", typ: "wybor", priorytet: "A", wiedza: ["w29", "w30"], zrodlo: "podr. s. 12",
      pytanie: "Czym wypełniano dymarkę przed wytopem żelaza?",
      odpowiedzi: ["rudą żelaza i węglem drzewnym", "miedzią i cyną z pobliskiej kopalni", "gliną, słomą i suchą trzciną", "ziarnem zbóż i czystą wodą"], poprawna: 0,
      wyjasnienie: "Piec wypełniano rudą żelaza i węglem drzewnym." },

    { id: "z070", typ: "kolejnosc", priorytet: "B", wiedza: ["w30"], zrodlo: "podr. s. 12",
      polecenie: "Ułóż etapy wytwarzania żelaznych przedmiotów we właściwej kolejności.",
      elementy: ["budowa pieca z kamienia i gliny", "wypełnienie pieca rudą żelaza i węglem drzewnym", "wytop – z rudy powstaje bryła żelaza", "rozbicie pieca i wyjęcie bryły", "wykucie przedmiotu przez kowala"],
      wyjasnienie: "Budowa pieca → wypełnienie → wytop → rozbicie pieca → kucie." },

    { id: "z071", typ: "pf", priorytet: "B", wiedza: ["w30"], zrodlo: "podr. s. 12",
      zdania: [
        { tekst: "Dymarki budowano z brązu, żeby wytrzymały wysoką temperaturę.", prawda: false, wyjasnienie: "Dymarki budowano z kamienia i gliny." },
        { tekst: "W dymarce powstawał płynny metal w temperaturze 1500 stopni Celsjusza.", prawda: false, wyjasnienie: "W dymarce w 1200°C powstawała bryła żelaza. 1500°C i płynny metal to współczesna huta." },
        { tekst: "Aby wyjąć bryłę żelaza, trzeba było rozbić piec.", prawda: true },
        { tekst: "Z bryły żelaza kowal wykuwał np. ostrze noża lub siekiery.", prawda: true }
      ],
      wyjasnienie: "Dymarka: kamień i glina, ruda i węgiel drzewny, 1200°C, bryła żelaza, rozbicie pieca, kowal." },

    { id: "z072", typ: "nawiasy", priorytet: "B", wiedza: ["w30"], zrodlo: "podr. s. 12",
      tekst: "W dymarce w temperaturze [1200*|120] stopni Celsjusza z rudy powstawała [bryła*|płynna struga] żelaza. Następnie [kowal*|rolnik] wykuwał z niej na przykład ostrze siekiery.",
      wyjasnienie: "1200°C, bryła żelaza, kowal." },

    { id: "z073", typ: "kategorie", priorytet: "C", wiedza: ["w30", "w32"], zrodlo: "podr. s. 12–13",
      polecenie: "Czym różni się dymarka od współczesnego pieca hutniczego? Przyporządkuj cechy.",
      kategorie: ["dymarka", "piec hutniczy"],
      elementy: [
        { tekst: "temperatura ok. 1200°C", kolumny: [0] },
        { tekst: "temperatura ok. 1500°C", kolumny: [1] },
        { tekst: "po wytopie piec trzeba rozbić", kolumny: [0] },
        { tekst: "piec można używać wielokrotnie", kolumny: [1] },
        { tekst: "rozgrzewany węglem drzewnym", kolumny: [0] },
        { tekst: "zasilany energią elektryczną", kolumny: [1] },
        { tekst: "powstaje bryła żelaza", kolumny: [0] },
        { tekst: "powstaje płynny metal", kolumny: [1] }
      ],
      wyjasnienie: "Piec hutniczy jest gorętszy, nie trzeba go rozbijać, działa na prąd i daje płynny metal." },

    { id: "z074", typ: "wybor", priorytet: "C", wiedza: ["w32"], zrodlo: "podr. s. 13",
      pytanie: "Jak nazywa się duży współczesny zakład, w którym wytapia się metale?",
      odpowiedzi: ["huta", "dymarka", "kopalnia", "kuźnia"], poprawna: 0,
      wyjasnienie: "Metale wytapia się dziś w hutach. Dymarka to dawny piec." },

    { id: "z075", typ: "wybor", priorytet: "C", wiedza: ["w32"], zrodlo: "podr. s. 13",
      pytanie: "W Polsce huty budowano głównie:",
      odpowiedzi: ["na Śląsku i w obecnym województwie świętokrzyskim", "na Pomorzu i w obecnym województwie warmińsko-mazurskim", "na Podlasiu i w obecnym województwie lubelskim", "nad Morzem Bałtyckim, w pobliżu dużych portów"], poprawna: 0,
      wyjasnienie: "Huty budowano blisko kopalni – w Polsce głównie na Śląsku i w obecnym województwie świętokrzyskim." },

    { id: "z076", typ: "nawiasy", priorytet: "C", wiedza: ["w33"], zrodlo: "podr. s. 9 – Ciekawostka",
      tekst: "Najstarszy znany bumerang znaleziono w jaskini niedaleko [Nowego Targu*|Gdańska]. Wykonano go z [kła mamuta*|brązu]. Pochodzi sprzed około [30 tysięcy*|300] lat.",
      wyjasnienie: "Bumerang z kła mamuta, sprzed ok. 30 tysięcy lat, z jaskini koło Nowego Targu." },

    /* ===== Mapa: wędrówki człowieka rozumnego ===== */
    { id: "z077", typ: "mapa", priorytet: "A", wiedza: ["w31"], zrodlo: "podr. s. 9 – Praca z mapą 1",
      mapa: "m01",
      pytanie: "Określ na podstawie mapy, kiedy człowiek rozumny dotarł do Australii.",
      odpowiedzi: ["ok. 40 000 lat p.n.e.", "ok. 10 000 lat p.n.e.", "ok. 120 000 lat p.n.e.", "ok. 15 000 lat p.n.e."], poprawna: 0,
      wyjasnienie: "Przy Australii na mapie jest data 40 000 – czyli ok. 40 000 lat p.n.e." },

    { id: "z078", typ: "mapa", priorytet: "A", wiedza: ["w31"], zrodlo: "podr. s. 9 – Praca z mapą 2",
      mapa: "m01",
      pytanie: "Wskaż na mapie kontynent, który człowiek rozumny zasiedlił jako ostatni.",
      kliknij: "ameryka-pld",
      wyjasnienie: "Ameryka Południowa – ok. 10 000 lat p.n.e. To najpóźniejsza data na mapie." },

    { id: "z079", typ: "mapa", priorytet: "A", wiedza: ["w31"], zrodlo: "ćw. s. 5 zad. 4a",
      mapa: "m01",
      pytanie: "Człowiek rozumny osiedlił się na terenie Ameryki Południowej:",
      odpowiedzi: ["10 tysięcy lat p.n.e.", "13 tysięcy lat p.n.e.", "40 tysięcy lat p.n.e.", "60 tysięcy lat p.n.e."], poprawna: 0,
      wyjasnienie: "W Ameryce Południowej na mapie jest 10 000. 13 000 to Ameryka Północna." },

    { id: "z080", typ: "mapa", priorytet: "A", wiedza: ["w31"], zrodlo: "podr. s. 9",
      mapa: "m01",
      pytanie: "Wskaż na mapie kontynent, z którego człowiek rozumny wyruszył na inne kontynenty.",
      kliknij: "afryka",
      wyjasnienie: "Wszystkie strzałki na mapie wychodzą z Afryki – tam pojawił się człowiek rozumny (ok. 200 000 lat p.n.e.)." },

    { id: "z081", typ: "mapa", priorytet: "B", wiedza: ["w31"], zrodlo: "ćw. s. 5 zad. 4b",
      mapa: "m01",
      pytanie: "Którędy człowiek rozumny przywędrował z Afryki do Australii?",
      odpowiedzi: ["przez Bliski Wschód i południową Azję", "przez Europę i Amerykę Północną", "przez Amerykę Południową", "prosto przez Ocean Atlantycki"], poprawna: 0,
      wyjasnienie: "Z Afryki przez Bliski Wschód, dalej przez południe Azji i wyspy do Australii." },

    { id: "z082", typ: "wybor", priorytet: "A", wiedza: ["w31"], zrodlo: "podr. s. 9",
      pytanie: "Który kontynent człowiek rozumny zasiedlił jako ostatni?",
      odpowiedzi: ["Amerykę Południową", "Amerykę Północną", "Australię", "Europę"], poprawna: 0,
      wyjasnienie: "Jako ostatnią człowiek zasiedlił Amerykę Południową – ok. 10 000 lat p.n.e. Do Ameryki Północnej dotarł wcześniej, ok. 15 000–13 000 lat p.n.e." },

    { id: "z083", typ: "kolejnosc", priorytet: "B", wiedza: ["w31"], zrodlo: "podr. s. 9 – mapa",
      polecenie: "Ułóż obszary w kolejności, w jakiej docierał do nich człowiek rozumny.",
      elementy: ["Afryka", "Bliski Wschód", "Ameryka Północna", "Ameryka Południowa"],
      wyjasnienie: "Afryka ok. 200 000, Bliski Wschód ok. 120 000, Ameryka Północna ok. 15 000–13 000, Ameryka Południowa ok. 10 000 lat p.n.e." },

    { id: "z084", typ: "mapa", priorytet: "B", wiedza: ["w31"], zrodlo: "podr. s. 9 – mapa",
      mapa: "m01",
      pytanie: "Z którego kontynentu człowiek rozumny przywędrował do Ameryki Północnej?",
      odpowiedzi: ["z Azji – przez Alaskę", "z Europy – przez Ocean Atlantycki", "z Afryki – przez Ocean Atlantycki", "z Australii – przez Ocean Spokojny"], poprawna: 0,
      wyjasnienie: "Strzałka prowadzi z północno-wschodniej Azji na Alaskę (ok. 15 000 lat p.n.e.)." },

    /* ===== Chronologia ===== */
    { id: "z085", typ: "os", priorytet: "A", wiedza: ["w01", "w05", "w15", "w28"], zrodlo: "podr. s. 8 – oś czasu",
      wydarzenia: ["d01", "d05", "d07", "d09"],
      wyjasnienie: "Praludzie (4 mln lat temu) → człowiek rozumny (200 tys. lat temu) → rolnictwo (10 tys. lat p.n.e.) → epoka żelaza (1200 lat p.n.e.)." },

    { id: "z086", typ: "os", priorytet: "B", wiedza: ["w04", "w05", "w09"], zrodlo: "podr. s. 8",
      wydarzenia: ["d02", "d03", "d04", "d05"],
      wyjasnienie: "Człowiek zręczny (2,5 mln) → człowiek wyprostowany (1,9 mln) → pięściaki (1,5 mln) → człowiek rozumny (200 tys. lat temu)." },

    { id: "z087", typ: "pf", priorytet: "A", wiedza: ["w01", "w05", "w15", "w28"], zrodlo: "podr. s. 8",
      zdania: [
        { tekst: "Praludzie żyli w Afryce około 4 tysięcy lat temu.", prawda: false, wyjasnienie: "Praludzie żyli około 4 milionów lat temu, a nie 4 tysięcy." },
        { tekst: "Człowiek rozumny pojawił się około 200 tysięcy lat temu.", prawda: true },
        { tekst: "Epoka żelaza rozpoczęła się około 10 tysięcy lat p.n.e.", prawda: false, wyjasnienie: "Około 10 tysięcy lat p.n.e. narodziło się rolnictwo. Epoka żelaza zaczęła się ok. 1200 lat p.n.e." },
        { tekst: "Epoka żelaza zaczęła się wcześniej niż rolnictwo.", prawda: false, wyjasnienie: "Najpierw narodziło się rolnictwo (ok. 10 tysięcy lat p.n.e.), a epoka żelaza zaczęła się ok. 1200 lat p.n.e." }
      ],
      wyjasnienie: "Cztery daty z osi: 4 mln lat temu, 200 tys. lat temu, 10 tys. lat p.n.e., 1200 lat p.n.e." },

    { id: "z088", typ: "kolejnosc", priorytet: "A", wiedza: ["w05", "w15", "w28"], zrodlo: "podr. s. 8 – oś czasu",
      polecenie: "Uporządkuj wydarzenia od najdawniejszego.",
      elementy: ["pojawienie się człowieka rozumnego", "początki rolnictwa", "początek epoki żelaza"],
      wyjasnienie: "200 tys. lat temu → ok. 10 tys. lat p.n.e. → ok. 1200 lat p.n.e." },

    { id: "z089", typ: "liczenie", priorytet: "B", wiedza: ["w15", "w28"], zrodlo: "podr. s. 8 – oś czasu",
      pytanie: "Ile lat minęło od początków rolnictwa (ok. 10 000 lat p.n.e.) do początku epoki żelaza (ok. 1200 lat p.n.e.)?",
      odpowiedz: 8800, jednostka: "lat",
      wyjasnienie: "Obie daty są przed naszą erą, więc odejmujemy: 10 000 − 1200 = 8800 lat." },

    { id: "z090", typ: "wybor", priorytet: "B", wiedza: ["w28"], zrodlo: "podr. s. 8 – oś czasu",
      pytanie: "Rok 1200 p.n.e., gdy zaczęła się epoka żelaza, należy do:",
      odpowiedzi: ["XII wieku p.n.e.", "XIII wieku p.n.e.", "XI wieku p.n.e.", "II wieku p.n.e."], poprawna: 0,
      wyjasnienie: "XII wiek p.n.e. to lata od 1200 do 1101 p.n.e., więc rok 1200 p.n.e. należy do XII wieku p.n.e." },

    { id: "z091", typ: "wybor", priorytet: "B", wiedza: ["w34"], zrodlo: "podr. s. 8",
      pytanie: "Najdawniejszy okres w dziejach ludzi, poprzedzający starożytność, to:",
      odpowiedzi: ["prehistoria", "średniowiecze", "nowożytność", "współczesność"], poprawna: 0,
      wyjasnienie: "Na osi czasu przed starożytnością jest prehistoria." },

    { id: "z092", typ: "kolejnosc", priorytet: "B", wiedza: ["w34"], zrodlo: "podr. s. 8",
      polecenie: "Ułóż epoki w dziejach ludzi w kolejności – od najdawniejszej.",
      elementy: ["prehistoria", "starożytność", "średniowiecze", "nowożytność", "współczesność"],
      wyjasnienie: "Prehistoria → starożytność → średniowiecze → nowożytność → współczesność." },

    /* ===== Krzyżówki ===== */
    { id: "z093", typ: "krzyzowka", priorytet: "A", wiedza: ["w01", "w08", "w09", "w10", "w19", "w20", "w27", "w29"], zrodlo: "podr. s. 8–12",
      haslo: "DYMARKA",
      opisHasla: "Dawny piec do wytapiania żelaza z rudy.",
      wiersze: [
        { pytanie: "Oswajanie i chów zwierząt, np. kóz, owiec i świń.", odpowiedz: "HODOWLA", litera: 2 },
        { pytanie: "Zdobywanie pożywienia przez polowanie na zwierzęta.", odpowiedz: "MYŚLISTWO", litera: 1 },
        { pytanie: "Umiejętność, dzięki której praludzie szybciej wymieniali się informacjami.", odpowiedz: "MOWA", litera: 0 },
        { pytanie: "Kontynent, na którym żyli najdawniejsi przodkowie człowieka.", odpowiedz: "AFRYKA", litera: 0 },
        { pytanie: "Twardy stop miedzi i cyny.", odpowiedz: "BRĄZ", litera: 1 },
        { pytanie: "Kamienne narzędzie o ostrych krawędziach, dopasowane do dłoni.", odpowiedz: "PIĘŚCIAK", litera: 7 },
        { pytanie: "Chata częściowo wykopana w ziemi.", odpowiedz: "ZIEMIANKA", litera: 5 }
      ],
      wyjasnienie: "Hasło DYMARKA – dawny piec z kamienia i gliny, w którym wytapiano żelazo." },

    { id: "z094", typ: "krzyzowka", priorytet: "A", wiedza: ["w07", "w12", "w20", "w21", "w24", "w26"], zrodlo: "podr. s. 9–12",
      haslo: "OGIEŃ",
      opisHasla: "Dawał ludziom ciepło i światło, chronił przed zwierzętami.",
      wiersze: [
        { pytanie: "Wędrowny tryb życia to tryb …", odpowiedz: "KOCZOWNICZY", litera: 1 },
        { pytanie: "Z drewna i … budowano ziemianki.", odpowiedz: "GLINA", litera: 0 },
        { pytanie: "Pierwszy metal wykorzystany przez ludzi – dość miękki.", odpowiedz: "MIEDŹ", litera: 1 },
        { pytanie: "Zboże siane obok prosa i pszenicy.", odpowiedz: "JĘCZMIEŃ", litera: 6 },
        { pytanie: "Materiał, od którego pochodzi nazwa najdawniejszej epoki.", odpowiedz: "KAMIEŃ", litera: 5 }
      ],
      wyjasnienie: "Hasło OGIEŃ – dawał ciepło, światło, ochronę przed zwierzętami i pozwalał piec mięso." }
  ]
});
