/* ================================================================
   Rozdział I. Pierwsze cywilizacje
   Temat 3. W Egipcie faraonów
   Źródło: „Wczoraj i dziś 5” (Nowa Era) – podręcznik s. 20–25, zeszyt ćwiczeń s. 9–11
   Notatki z materiału: materialy/temat-03-w-egipcie-faraonow.md
   Opis formatu: FORMAT-TEMATU.md

   priorytet: A – pewniak na sprawdzian
              B – ważny szczegół z tekstu lub infografiki
              C – ciekawostka, „Współcześnie” (poza sprawdzianem próbnym)
   Pominięte (spoza materiału): Sprawdź się 6 ★ (Galeria Faras – strona muzeum), ćw. zad. 7 ★ (Ozyrys jako mumia).
   Wykreślanka z ćw. zad. 1 odtworzona jako zadania z hasłem „Egipt darem Nilu”.
   ================================================================ */

Tematy.dodaj({
  id: "r1-t03",
  rozdzial: 1,
  nr: 3,
  tytul: "W Egipcie faraonów",
  ikona: "piramida",
  opis: "Nil, faraonowie, piramidy i hieroglify",
  zrodla: { podrecznik: "s. 20–25", cwiczenia: "s. 9–11" },

  /* ---------- MUSISZ WIEDZIEĆ: fakty z materiału ---------- */
  wiedza: [
    { id: "w01", priorytet: "A", zrodlo: "podr. s. 20, 25 – To już wiem 1", tekst: "Około 3000 lat p.n.e. na północy Afryki, w dolinie rzeki Nil, powstało państwo egipskie." },
    { id: "w02", priorytet: "A", zrodlo: "podr. s. 20", tekst: "Co roku Nil wylewał i nanosił na pola żyzny muł. Gdy wody opadały, rolnicy zaczynali prace polowe. Egipcjanie – jak mieszkańcy Mezopotamii – budowali kanały nawadniające." },
    { id: "w03", priorytet: "A", zrodlo: "podr. s. 20, 25 – Sprawdź się 1; ćw. s. 9 zad. 1", tekst: "Egipt był krajem rolniczym i istniał dzięki Nilowi: bez corocznych wylewów nie byłoby uprawy ziemi, a bez niej – silnego państwa. Dlatego już w starożytności mówiono: „Egipt darem Nilu”." },
    { id: "w04", priorytet: "A", zrodlo: "podr. s. 20 – Praca z mapą 2", tekst: "Życie Egipcjan skupiało się blisko Nilu, bo dalej rozciągała się pustynia. Ziemie uprawne leżały wąskim pasem wzdłuż Nilu i przy jego ujściu do Morza Śródziemnego." },
    { id: "w05", priorytet: "C", zrodlo: "podr. s. 20 – Ciekawostka", tekst: "Egipcjanie nie wiedzieli, że wylewy Nilu powodują deszcze w jego górnym biegu. Do źródeł tej liczącej ponad 6 tysięcy kilometrów rzeki dotarli dopiero w XIX wieku brytyjscy podróżnicy." },
    { id: "w06", priorytet: "A", zrodlo: "podr. s. 20 – Praca z mapą 1; ćw. s. 9 zad. 2c", tekst: "Starożytny Egipt leżał nad dwoma morzami: Morzem Śródziemnym (na północy) i Morzem Czerwonym (na wschodzie)." },
    { id: "w07", priorytet: "A", zrodlo: "ćw. s. 9 zad. 2a–b", tekst: "Przez Egipt przepływa rzeka Nil. Piramidy powstawały w Gizie, na północy Egiptu, niedaleko Memfis i Heliopolis." },
    { id: "w08", priorytet: "B", zrodlo: "podr. s. 20 – mapa", tekst: "Na mapie Egiptu w dolinie Nilu leżą Giza, Memfis i Heliopolis (na północy) oraz Teby (Luksor), Dolina Królów, Necheb i Abu Simbel (na południu)." },
    { id: "w09", priorytet: "B", zrodlo: "podr. s. 20 – mapa", tekst: "W XV wieku p.n.e. Egiptowi podlegały też ziemie Kanaanu, Fenicji i Syrii – m.in. z miastami Tyr, Damaszek, Megiddo i Jerycho." },
    { id: "w10", priorytet: "A", zrodlo: "podr. s. 21, 25 – To już wiem 2", tekst: "Społeczeństwo Egiptu tworzyło piramidę. Od góry: faraon, kapłani, urzędnicy, rzemieślnicy, żołnierze, chłopi i niewolnicy. Im wyżej ktoś był, tym więcej miał praw." },
    { id: "w11", priorytet: "A", zrodlo: "podr. s. 21, 25", tekst: "Faraon, czyli król Egiptu, był najważniejszą osobą w państwie i miał nieograniczoną władzę. Poddani widzieli w nim przedstawiciela bogów na ziemi." },
    { id: "w12", priorytet: "A", zrodlo: "podr. s. 21; ćw. s. 10 zad. 4", tekst: "Zakres władzy faraona: prawo – ustanawiał prawa (sam im nie podlegał) i był głównym sędzią; religia – był głównym kapłanem; wojsko – był zwierzchnikiem wojska." },
    { id: "w13", priorytet: "B", zrodlo: "podr. s. 21", tekst: "Korona faraona składała się z dwóch części. Symbolizowały one Egipt Górny (dolinę Nilu) i Egipt Dolny (ziemie przy ujściu rzeki), zjednoczone w jednym państwie." },
    { id: "w14", priorytet: "B", zrodlo: "podr. s. 21", tekst: "Faraonami zostawali zwykle mężczyźni, ale w XV wieku p.n.e. na czele państwa stanęła kobieta – królowa Hatszepsut." },
    { id: "w15", priorytet: "A", zrodlo: "podr. s. 21; ćw. s. 10 zad. 3", tekst: "Kapłani sprawowali funkcje religijne i doradzali faraonowi. Byli najlepiej wykształceni: prowadzili szkoły i obserwacje astronomiczne (umieli np. przewidzieć zaćmienie Słońca)." },
    { id: "w16", priorytet: "A", zrodlo: "podr. s. 21; ćw. s. 10 zad. 3", tekst: "Urzędnicy – obok kapłanów – umieli czytać i pisać. Za ich pośrednictwem faraon rządził państwem." },
    { id: "w17", priorytet: "A", zrodlo: "podr. s. 21; ćw. s. 10 zad. 3", tekst: "Rzemieślnicy wytwarzali narzędzia, ceramikę, ubrania i przedmioty przydatne w życiu codziennym." },
    { id: "w18", priorytet: "A", zrodlo: "podr. s. 21", tekst: "Żołnierze wywodzili się spośród chłopów i rzemieślników. Bronili Egiptu przed najeźdźcami i brali udział w wyprawach wojennych." },
    { id: "w19", priorytet: "A", zrodlo: "podr. s. 21; ćw. s. 10 zad. 3", tekst: "Chłopi byli najliczniejszą grupą ludności. Uprawiali ziemię, budowali i oczyszczali kanały nawadniające, a także pracowali przy wznoszeniu świątyń i piramid." },
    { id: "w20", priorytet: "A", zrodlo: "podr. s. 21", tekst: "Niewolnicy byli w większości jeńcami wojennymi. Nie było ich wielu – najczęściej służyli w domach zamożnych Egipcjan." },
    { id: "w21", priorytet: "A", zrodlo: "podr. s. 22, 25 – Sprawdź się 4", tekst: "Egipcjanie wierzyli w wielu bogów. Taka wiara to politeizm (z greckiego: poli – wiele, theos – bóg)." },
    { id: "w22", priorytet: "B", zrodlo: "podr. s. 22", tekst: "Według Egipcjan bogowie odpowiadali za zjawiska przyrody, np. wylewy Nilu czy wschody i zachody słońca. Niektórych bogów czczono w całym Egipcie, a innych tylko w niektórych miejscowościach." },
    { id: "w23", priorytet: "B", zrodlo: "podr. s. 22", tekst: "Na cześć bogów wznoszono świątynie, w których kapłani codziennie odprawiali obrzędy. Wierni składali tam ofiary z płodów rolnych, wyrobów rzemieślniczych i kosztowności, by zyskać przychylność bóstw." },
    { id: "w24", priorytet: "B", zrodlo: "podr. s. 22", tekst: "Ra – bóg-słońce i pan wszechświata – był jednym z najważniejszych bogów. Przedstawiano go jako człowieka z głową jastrzębia lub sokoła, z czerwonym dyskiem słońca nad głową." },
    { id: "w25", priorytet: "A", zrodlo: "podr. s. 22, 25 – Sprawdź się 3", tekst: "Egipcjanie wierzyli w życie po śmierci. Zmarłego i jego uczynki osądzał bóg Ozyrys. Dusza miała istnieć tak długo, jak ciało pozostawało nienaruszone – dlatego mumifikowano zwłoki." },
    { id: "w26", priorytet: "A", zrodlo: "podr. s. 22", tekst: "Ubogich Egipcjan chowano w piaskach pustyni, które w naturalny sposób konserwowały zwłoki. Ciała faraonów i dostojników mumifikowano, wkładano do sarkofagów i składano w grobowcach." },
    { id: "w27", priorytet: "A", zrodlo: "podr. s. 22", tekst: "Mumifikacja: z ciała usuwano wnętrzności, ciało balsamowano i owijano bandażami – tak powstawała mumia. Mumię wkładano do bogato zdobionej trumny zwanej sarkofagiem, a sarkofag – do piramidy lub grobowca wykutego w skale." },
    { id: "w28", priorytet: "A", zrodlo: "podr. s. 23 – Praca z infografiką 1", tekst: "Piramidy to wspaniałe grobowce faraonów. Największe wzniesiono w III tysiącleciu p.n.e. w Gizie dla faraonów Cheopsa i Chefrena. Budowa piramidy mogła trwać nawet kilkadziesiąt lat." },
    { id: "w29", priorytet: "B", zrodlo: "podr. s. 23", tekst: "Wielki Sfinks to ogromny posąg lwa z ludzką głową, zwany strażnikiem piramid. Według uczonych ma twarz faraona Chefrena." },
    { id: "w30", priorytet: "B", zrodlo: "podr. s. 23", tekst: "Wewnątrz piramidy system korytarzy prowadził do komory grobowej. Po złożeniu tam ciała faraona i kosztowności wejście ukrywano." },
    { id: "w31", priorytet: "B", zrodlo: "podr. s. 23", tekst: "Przy budowie piramidy pracowali architekci, mierniczowie i tysiące robotników. Mieszkali w obozie nazywanym miastem piramid." },
    { id: "w32", priorytet: "A", zrodlo: "podr. s. 23 – Praca z infografiką 2", tekst: "Na piramidę Cheopsa zużyto ok. 2 mln kamiennych bloków. Przewożono je Nilem na statkach z odległych kamieniołomów, a na budowie podnoszono prostymi dźwigami – bloki ważyły nawet dwie i pół tony." },
    { id: "w33", priorytet: "B", zrodlo: "podr. s. 23", tekst: "Największa jest piramida Cheopsa – ma 146 metrów wysokości." },
    { id: "w34", priorytet: "B", zrodlo: "podr. s. 24 – Warto wiedzieć", tekst: "Grobowce faraonów były zwykle ograbiane już w starożytności. W 1922 roku Brytyjczyk Howard Carter odkrył w Dolinie Królów nienaruszony grobowiec faraona Tutenchamona sprzed ponad 3 tysięcy lat." },
    { id: "w35", priorytet: "B", zrodlo: "podr. s. 24 – Warto wiedzieć", tekst: "Mumia Tutenchamona leżała w dziewięciu ozdobnych trumnach, sarkofagach i skrzyniach. W grobowcu było ponad 5 tysięcy przedmiotów: kosztowności ze złota, drogich kamieni i kości słoniowej oraz przedmioty codziennego użytku potrzebne zmarłemu w życiu pozagrobowym." },
    { id: "w36", priorytet: "B", zrodlo: "podr. s. 24", tekst: "Jedna z trumien Tutenchamona była ze szczerego złota. W skrzyżowanych dłoniach faraon trzyma egipskie symbole władzy: bicz i laskę pasterską." },
    { id: "w37", priorytet: "B", zrodlo: "podr. s. 24", tekst: "Nienaruszony grobowiec Tutenchamona pokazał historykom, jak chowano faraonów i w co wierzyli Egipcjanie – m.in. że zmarłemu potrzebne są przedmioty w życiu pozagrobowym." },
    { id: "w38", priorytet: "A", zrodlo: "podr. s. 24, 25; ćw. s. 11 zad. 5", tekst: "Egipcjanie opracowali pismo obrazkowe – hieroglify. Zapisywano nim głównie teksty religijne i dokumenty państwowe, a uproszczoną wersją pisma – bajki, przypowieści, przysłowia i pieśni." },
    { id: "w39", priorytet: "B", zrodlo: "podr. s. 24", tekst: "Hieroglify zapisywano w kolumnach od góry do dołu lub poziomo od prawej do lewej. Używano około 6 tysięcy znaków." },
    { id: "w40", priorytet: "A", zrodlo: "podr. s. 24, 25; ćw. s. 11 zad. 5", tekst: "Dzięki mumifikacji Egipcjanie poznali budowę ciała ludzkiego i rozwinęli medycynę: przeprowadzali skomplikowane operacje, znali budowę i działanie serca." },
    { id: "w41", priorytet: "A", zrodlo: "podr. s. 24; ćw. s. 11 zad. 5", tekst: "Egipcjanie rozwinęli matematykę, potrzebną m.in. do obliczeń przy budowie piramid i świątyń." },
    { id: "w42", priorytet: "A", zrodlo: "podr. s. 24; ćw. s. 11 zad. 5", tekst: "W III tysiącleciu p.n.e. Egipcjanie opracowali kalendarz, w którym rok ma 365 dni – dzięki obserwacjom wylewów Nilu i położenia gwiazdy Syriusz względem Słońca. Rok miał 12 miesięcy po 30 dni i 5 dni dodatkowych." },
    { id: "w43", priorytet: "A", zrodlo: "podr. s. 25 – To już wiem 4, Sprawdź się 5", tekst: "Najważniejsze osiągnięcia Egipcjan: pismo (hieroglify), wielkie budowle (świątynie i piramidy), matematyka, medycyna (m.in. dzięki mumifikacji) i astronomia (obliczenie długości roku słonecznego)." },
    { id: "w44", priorytet: "C", zrodlo: "podr. s. 25 – Współcześnie", tekst: "W XX wieku przy budowie wielkiej tamy na Nilu koło Asuanu powstało sztuczne jezioro. Aby nie zalało zabytków, kilkadziesiąt budowli przeniesiono wyżej. Świątynię w Abu Simbel pocięto na kawałki i odtworzono około 65 metrów wyżej." },
    { id: "w45", priorytet: "C", zrodlo: "podr. s. 25 – Współcześnie", tekst: "Pracami w Abu Simbel kierował polski archeolog, profesor Kazimierz Michałowski. W podziękowaniu Egipt przekazał Polsce zbiór dzieł sztuki z Nubii – można je oglądać w Muzeum Narodowym w Warszawie." },
    { id: "w46", priorytet: "C", zrodlo: "podr. s. 25 – Współcześnie", tekst: "Świątynia w Abu Simbel była poświęcona bogom słońca. Wejścia strzegą cztery 20-metrowe posągi faraona Ramzesa II." },
    { id: "w47", priorytet: "B", zrodlo: "podr. s. 14, 20 – osie czasu", tekst: "Państwo egipskie (ok. 3000 lat p.n.e.) powstało około 500 lat po pierwszych państwach Sumerów (ok. 3500 lat p.n.e.). Obie cywilizacje to starożytność." }
  ],

  /* ---------- POJĘCIA ---------- */
  pojecia: [
    { id: "p01", priorytet: "A", wiedza: ["w11"], zrodlo: "podr. s. 21", termin: "faraon", definicja: "król Egiptu z nieograniczoną władzą, uważany za przedstawiciela bogów na ziemi" },
    { id: "p02", priorytet: "A", wiedza: ["w21"], zrodlo: "podr. s. 22", termin: "politeizm", definicja: "wiara w wielu bogów (z greckiego: poli – wiele, theos – bóg)" },
    { id: "p03", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 22", termin: "mumifikacja", definicja: "usunięcie wnętrzności, zabalsamowanie ciała i owinięcie go bandażami, by zachować je po śmierci" },
    { id: "p04", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 22", termin: "mumia", definicja: "zabalsamowane i owinięte bandażami ciało zmarłego" },
    { id: "p05", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 22", termin: "sarkofag", definicja: "bogato zdobiona trumna, w której składano mumię" },
    { id: "p06", priorytet: "A", wiedza: ["w28"], zrodlo: "podr. s. 23", termin: "piramida", definicja: "wspaniały grobowiec wznoszony dla faraona" },
    { id: "p07", priorytet: "A", wiedza: ["w38"], zrodlo: "podr. s. 24", termin: "hieroglify", definicja: "egipskie pismo obrazkowe" },
    { id: "p08", priorytet: "A", wiedza: ["w03"], zrodlo: "podr. s. 20", termin: "„Egipt darem Nilu”", definicja: "wyrażenie ze starożytności: Egipt istniał dzięki Nilowi i jego wylewom" },
    { id: "p09", priorytet: "A", wiedza: ["w25"], zrodlo: "podr. s. 22", termin: "życie pozagrobowe", definicja: "życie po śmierci, w które wierzyli Egipcjanie" },
    { id: "p10", priorytet: "A", wiedza: ["w42"], zrodlo: "podr. s. 24", termin: "kalendarz egipski", definicja: "kalendarz, w którym rok ma 365 dni: 12 miesięcy po 30 dni i 5 dni dodatkowych" },
    { id: "p11", priorytet: "B", wiedza: ["w29"], zrodlo: "podr. s. 23", termin: "Wielki Sfinks", definicja: "ogromny posąg lwa z ludzką głową, zwany strażnikiem piramid" },
    { id: "p12", priorytet: "B", wiedza: ["w30"], zrodlo: "podr. s. 23", termin: "komora grobowa", definicja: "pomieszczenie wewnątrz piramidy, w którym składano ciało faraona" },
    { id: "p13", priorytet: "B", wiedza: ["w31"], zrodlo: "podr. s. 23", termin: "miasto piramid", definicja: "obóz, w którym mieszkali budowniczowie piramidy" },
    { id: "p14", priorytet: "B", wiedza: ["w13"], zrodlo: "podr. s. 21", termin: "Egipt Górny", definicja: "dolina Nilu" },
    { id: "p15", priorytet: "B", wiedza: ["w13"], zrodlo: "podr. s. 21", termin: "Egipt Dolny", definicja: "ziemie leżące przy ujściu Nilu" }
  ],

  /* ---------- DATY (rok ujemny = p.n.e., wartości przybliżone) ---------- */
  daty: [
    { id: "d01", priorytet: "A", wiedza: ["w01"], zrodlo: "podr. s. 20 – oś czasu", kiedy: "ok. 3000 lat p.n.e.", rok: -3000, co: "powstanie państwa egipskiego", naOsi: true },
    /* III tysiąclecie p.n.e. zaczyna się ok. 3000 lat p.n.e. – nie łączyć z d01 na osi */
    { id: "d02", priorytet: "A", wiedza: ["w28"], zrodlo: "podr. s. 23", kiedy: "III tysiąclecie p.n.e.", rok: -2600, co: "budowa największych piramid w Gizie", naOsi: false },
    { id: "d03", priorytet: "A", wiedza: ["w42"], zrodlo: "podr. s. 24", kiedy: "III tysiąclecie p.n.e.", rok: -2500, co: "kalendarz, w którym rok ma 365 dni", naOsi: false },
    { id: "d04", priorytet: "B", wiedza: ["w14"], zrodlo: "podr. s. 21", kiedy: "XV wiek p.n.e.", rok: -1450, co: "rządy królowej Hatszepsut", naOsi: true },
    { id: "d05", priorytet: "B", wiedza: ["w09"], zrodlo: "podr. s. 20 – mapa", kiedy: "XV wiek p.n.e.", rok: -1440, co: "Kanaan, Fenicja i Syria podporządkowane Egiptowi", naOsi: false },
    { id: "d06", priorytet: "B", wiedza: ["w34"], zrodlo: "podr. s. 24", kiedy: "1922", rok: 1922, co: "odkrycie grobowca Tutenchamona", naOsi: true },
    { id: "d07", priorytet: "C", wiedza: ["w05"], zrodlo: "podr. s. 20 – Ciekawostka", kiedy: "XIX wiek", rok: 1850, co: "podróżnicy docierają do źródeł Nilu", naOsi: true },
    /* XX wiek obejmuje rok 1922 – nie łączyć z d06 na osi */
    { id: "d08", priorytet: "C", wiedza: ["w44"], zrodlo: "podr. s. 25", kiedy: "XX wiek", rok: 1965, co: "przeniesienie świątyni w Abu Simbel", naOsi: false }
  ],

  /* ---------- KTO CZYM SŁYNIE (mnoga: true – lud) ---------- */
  postacie: [
    { id: "o01", priorytet: "B", wiedza: ["w28"], zrodlo: "podr. s. 23", kto: "Cheops", slynie: "faraon, dla którego zbudowano największą piramidę w Gizie" },
    { id: "o02", priorytet: "B", wiedza: ["w28", "w29"], zrodlo: "podr. s. 23", kto: "Chefren", slynie: "faraon, którego twarz ma według uczonych Wielki Sfinks" },
    { id: "o03", priorytet: "B", wiedza: ["w14"], zrodlo: "podr. s. 21", kto: "Hatszepsut", slynie: "kobieta, która w XV wieku p.n.e. rządziła Egiptem" },
    { id: "o04", priorytet: "B", wiedza: ["w34"], zrodlo: "podr. s. 24", kto: "Tutenchamon", slynie: "faraon, którego nienaruszony grobowiec odkryto w 1922 roku" },
    { id: "o05", priorytet: "B", wiedza: ["w34"], zrodlo: "podr. s. 24", kto: "Howard Carter", slynie: "Brytyjczyk, który odkrył grobowiec Tutenchamona" },
    { id: "o06", priorytet: "B", wiedza: ["w24"], zrodlo: "podr. s. 22", kto: "Ra", slynie: "bóg-słońce i pan wszechświata, z głową sokoła lub jastrzębia" },
    { id: "o07", priorytet: "A", wiedza: ["w25"], zrodlo: "podr. s. 22", kto: "Ozyrys", slynie: "bóg, który po śmierci osądzał człowieka i jego uczynki" },
    { id: "o08", priorytet: "A", wiedza: ["w38", "w42"], zrodlo: "podr. s. 24", kto: "Egipcjanie", mnoga: true, slynie: "stworzyli hieroglify i kalendarz, w którym rok ma 365 dni" },
    { id: "o09", priorytet: "C", wiedza: ["w46"], zrodlo: "podr. s. 25", kto: "Ramzes II", slynie: "faraon, którego cztery posągi strzegą świątyni w Abu Simbel" },
    { id: "o10", priorytet: "C", wiedza: ["w45"], zrodlo: "podr. s. 25", kto: "Kazimierz Michałowski", slynie: "polski archeolog, który kierował przenoszeniem świątyni w Abu Simbel" }
  ],

  /* ---------- MAPY (podkład „wschod” z app/mapa.js) ---------- */
  mapy: [
    {
      id: "m01",
      tytul: "Starożytny Egipt",
      zrodlo: "podr. s. 20",
      podklad: "wschod",
      widok: [24.5, 22, 42, 35.9],
      legenda: [
        { znak: "pom", tekst: "Egipt w pierwszej połowie II tysiąclecia p.n.e." },
        { znak: "pom2", tekst: "ziemie podporządkowane Egiptowi w XV wieku p.n.e." },
        { znak: "uprawy", tekst: "ziemie uprawne i pastwiska" },
        { znak: "pustynia", tekst: "pustynie" },
        { znak: "piramida", tekst: "piramidy" },
        { znak: "oaza", tekst: "oazy" }
      ],
      krainy: ["egipt-xv", "egipt"],
      uprawy: true,
      oazy: true,
      napisy: ["egipt", "synaj", "syria", "fenicja", "kanaan", "cypr", "morze-srodziemne", "morze-czerwone", "nil"],
      miasta: ["tyr", "damaszek", "megiddo", "jerycho", "giza", "heliopolis", "memfis", "teby", "dolina-krolow", "necheb", "abu-simbel"],
      piramidy: ["giza"],
      obszary: ["tyr", "damaszek", "megiddo", "jerycho", "giza", "heliopolis", "memfis", "teby", "dolina-krolow", "necheb", "abu-simbel", "nil", "morze-srodziemne", "morze-czerwone"],
      wstawka: { lon: 24.8, lat: 25.3 },
      podzialka: { lon: 39.35, lat: 22.45 }
    },
    {
      /* jak w zeszycie ćwiczeń: morza z numerami (1 – Śródziemne, 2 – Czerwone), rzeka z pustą ramką */
      id: "m02",
      tytul: "Egipt i Bliski Wschód – mapa z zeszytu ćwiczeń",
      zrodlo: "ćw. s. 9 zad. 2",
      podklad: "wschod",
      cwiczenie: true,
      widok: [23.3, 21.6, 46, 37.2],
      napisy: ["kreta", "cypr"],
      numery: { "morze-srodziemne": "1", "morze-czerwone": "2" },
      ramki: ["nil"],
      miasta: ["tyr", "damaszek", "jerozolima", "giza", "heliopolis", "teby", "necheb", "abu-simbel", "niniwa", "aszur", "mari", "babilon"],
      obszary: ["nil", "eufrat", "tygrys", "morze-srodziemne", "morze-czerwone", "tyr", "damaszek", "jerozolima", "giza", "heliopolis", "teby", "necheb", "abu-simbel", "niniwa", "aszur", "mari", "babilon"],
      podzialka: { lon: 42.8, lat: 22.2 }
    }
  ],

  /* ---------- ZADANIA ---------- */
  zadania: [

    /* ===== Egipt darem Nilu ===== */
    { id: "z001", typ: "wybor", priorytet: "A", wiedza: ["w01"], zrodlo: "podr. s. 20 – oś czasu",
      pytanie: "Państwo egipskie powstało około:",
      odpowiedzi: ["3000 lat p.n.e.", "3500 lat p.n.e.", "1200 lat p.n.e.", "10 tysięcy lat p.n.e."], poprawna: 0,
      wyjasnienie: "Egipt powstał ok. 3000 lat p.n.e. Ok. 3500 lat p.n.e. powstały pierwsze państwa Sumerów." },

    { id: "z002", typ: "wybor", priorytet: "A", wiedza: ["w01"], zrodlo: "podr. s. 20",
      pytanie: "Gdzie powstało państwo egipskie?",
      odpowiedzi: ["na północy Afryki, w dolinie Nilu", "na Bliskim Wschodzie, między Eufratem a Tygrysem", "na południu Europy, nad Morzem Śródziemnym", "na wyspie Cypr, na Morzu Śródziemnym"], poprawna: 0,
      wyjasnienie: "Egipt leżał w Afryce, w dolinie Nilu. Między Eufratem a Tygrysem leży Mezopotamia." },

    { id: "z003", typ: "nawiasy", priorytet: "A", wiedza: ["w01", "w02"], zrodlo: "podr. s. 20",
      tekst: "Państwo egipskie powstało około [3000*|300] lat p.n.e. w [Afryce*|Azji], w dolinie rzeki [Nil*|Eufrat]. Co roku rzeka [wylewała*|wysychała] i nanosiła na pola żyzny muł.",
      wyjasnienie: "Egipt: ok. 3000 lat p.n.e., Afryka, dolina Nilu. Wylewy Nilu zostawiały żyzny muł." },

    { id: "z004", typ: "pf", priorytet: "A", wiedza: ["w02", "w04"], zrodlo: "podr. s. 20",
      zdania: [
        { tekst: "Co roku Nil wylewał i nanosił na pola żyzny muł.", prawda: true },
        { tekst: "Prace polowe zaczynano, gdy wody Nilu opadły.", prawda: true },
        { tekst: "Egipcjanie nie budowali kanałów nawadniających.", prawda: false, wyjasnienie: "Budowali je – podobnie jak mieszkańcy Mezopotamii." },
        { tekst: "Z dala od Nilu Egipcjanie nie uprawiali ziemi, bo była tam pustynia.", prawda: true }
      ],
      wyjasnienie: "Nil wylewał, zostawiał muł, a po opadnięciu wód zaczynały się prace polowe. Dalej od rzeki była pustynia." },

    { id: "z005", typ: "otwarte", priorytet: "A", wiedza: ["w02", "w03"], zrodlo: "podr. s. 25 – Sprawdź się 1; ćw. s. 9 zad. 1",
      pytanie: "Wyjaśnij, dlaczego Egipt nazywano darem Nilu.",
      punkty: ["Nil co roku wylewał i nanosił na pola żyzny muł", "dzięki temu można było uprawiać ziemię – Egipt był krajem rolniczym", "bez Nilu nie powstałoby silne państwo, bo dalej od rzeki była pustynia"], wymagane: 2,
      wzor: "Nil co roku wylewał i nanosił na pola żyzny muł. Dzięki temu Egipcjanie mogli uprawiać ziemię, a Egipt był krajem rolniczym. Bez Nilu i jego wylewów – wokół była pustynia – nie mogłoby powstać silne państwo egipskie.",
      wyjasnienie: "Wylewy i muł → rolnictwo → silne państwo. Bez Nilu byłaby tylko pustynia." },

    { id: "z006", typ: "luki", priorytet: "A", wiedza: ["w03"], zrodlo: "ćw. s. 9 zad. 1",
      tekst: "Słynna myśl ze starożytności brzmi: „Egipt {darem} {Nilu}”. Bez corocznych {wylewów} rzeki niemożliwa byłaby uprawa {ziemi}, a bez niej nie powstałoby silne państwo.",
      dodatkowe: ["Eufratu", "pustyni"],
      wyjasnienie: "„Egipt darem Nilu” – Egipt istniał dzięki wylewom Nilu." },

    { id: "z007", typ: "wybor", priorytet: "A", wiedza: ["w03"], zrodlo: "ćw. s. 9 zad. 1",
      pytanie: "Jak brzmi słynna myśl ze starożytności o Egipcie?",
      odpowiedzi: ["Egipt darem Nilu", "Egipt darem pustyni", "Egipt darem faraona", "Egipt darem Słońca"], poprawna: 0,
      wyjasnienie: "„Egipt darem Nilu” – bez Nilu i jego wylewów nie byłoby rolnictwa ani państwa." },

    { id: "z008", typ: "wybor", priorytet: "A", wiedza: ["w04"], zrodlo: "podr. s. 20 – Praca z mapą 2",
      pytanie: "Gdzie w Egipcie leżały tereny uprawne?",
      odpowiedzi: ["wąskim pasem wzdłuż Nilu i przy jego ujściu", "na pustyni, daleko od Nilu", "tylko na wybrzeżu Morza Czerwonego, z dala od Nilu", "w górach na południu kraju"], poprawna: 0,
      wyjasnienie: "Na mapie ziemie uprawne ciągną się wąskim pasem wzdłuż Nilu i są przy jego ujściu. Dalej jest pustynia." },

    { id: "z009", typ: "otwarte", priorytet: "A", wiedza: ["w04"], zrodlo: "podr. s. 20 – Praca z mapą 2",
      pytanie: "Opisz położenie terenów uprawnych w Egipcie.",
      punkty: ["tereny uprawne leżały wąskim pasem wzdłuż Nilu", "było ich dużo przy ujściu Nilu do Morza Śródziemnego", "dalej od rzeki rozciągała się pustynia"], wymagane: 2,
      wzor: "Tereny uprawne leżały wąskim pasem wzdłuż Nilu, a najszerzej przy jego ujściu do Morza Śródziemnego. Dalej od rzeki rozciągała się pustynia.",
      wyjasnienie: "Wzdłuż Nilu i przy ujściu – bo tylko tam docierała woda z wylewów." },

    { id: "z010", typ: "wybor", priorytet: "A", wiedza: ["w04"], zrodlo: "podr. s. 20",
      pytanie: "Dlaczego życie Egipcjan koncentrowało się blisko Nilu?",
      odpowiedzi: ["dalej od rzeki rozciągała się pustynia", "nad Nilem stały tylko pałace faraonów", "tylko tam nie było dzikich zwierząt", "nad rzeką było chłodniej niż w górach"], poprawna: 0,
      wyjasnienie: "Dalej od Nilu była pustynia, na której nie dało się uprawiać ziemi." },

    { id: "z011", typ: "wybor", priorytet: "A", wiedza: ["w07"], zrodlo: "ćw. s. 9 zad. 2a",
      pytanie: "Jak nazywa się rzeka, która przepływa przez Egipt?",
      odpowiedzi: ["Nil", "Eufrat", "Tygrys"], poprawna: 0,
      wyjasnienie: "Przez Egipt płynie Nil. Eufrat i Tygrys płyną przez Mezopotamię." },

    /* ===== Mapa ===== */
    { id: "z012", typ: "mapa", priorytet: "A", wiedza: ["w06"], zrodlo: "podr. s. 20 – Praca z mapą 1; ćw. s. 9 zad. 2c",
      mapa: "m02",
      pytanie: "Jak nazywa się morze oznaczone na mapie cyfrą 1?",
      odpowiedzi: ["Morze Śródziemne", "Morze Czerwone", "Zatoka Perska"], poprawna: 0,
      wyjasnienie: "Numer 1 to Morze Śródziemne – na północ od Egiptu." },

    { id: "z013", typ: "mapa", priorytet: "A", wiedza: ["w06"], zrodlo: "podr. s. 20 – Praca z mapą 1; ćw. s. 9 zad. 2c",
      mapa: "m02",
      pytanie: "Jak nazywa się morze oznaczone na mapie cyfrą 2?",
      odpowiedzi: ["Morze Czerwone", "Morze Śródziemne", "Zatoka Perska"], poprawna: 0,
      wyjasnienie: "Numer 2 to Morze Czerwone – na wschód od Egiptu." },

    { id: "z014", typ: "mapa", priorytet: "A", wiedza: ["w06"], zrodlo: "ćw. s. 9 zad. 2c",
      mapa: "m02",
      pytanie: "Wskaż na mapie Morze Czerwone.",
      kliknij: "morze-czerwone",
      wyjasnienie: "Morze Czerwone leży na wschód od Egiptu, między Afryką a Półwyspem Arabskim." },

    { id: "z015", typ: "otwarte", priorytet: "A", wiedza: ["w06"], zrodlo: "podr. s. 20 – Praca z mapą 1",
      pytanie: "Podaj nazwy dwóch mórz, nad których brzegami leżał starożytny Egipt.",
      punkty: ["Morze Śródziemne", "Morze Czerwone"], wymagane: 2,
      wzor: "Starożytny Egipt leżał nad Morzem Śródziemnym (na północy) i nad Morzem Czerwonym (na wschodzie).",
      wyjasnienie: "Dwa morza: Śródziemne i Czerwone." },

    { id: "z016", typ: "mapa", priorytet: "A", wiedza: ["w07"], zrodlo: "ćw. s. 9 zad. 2a",
      mapa: "m02",
      pytanie: "Wskaż na mapie rzekę przepływającą przez Egipt.",
      kliknij: "nil",
      wyjasnienie: "To Nil – płynie z południa na północ i wpada do Morza Śródziemnego." },

    { id: "z017", typ: "mapa", priorytet: "A", wiedza: ["w07"], zrodlo: "ćw. s. 9 zad. 2b",
      mapa: "m02",
      pytanie: "Wskaż na mapie miasto, w którym powstawały piramidy.",
      kliknij: "giza",
      wyjasnienie: "Największe piramidy stoją w Gizie, na północy Egiptu." },

    { id: "z018", typ: "mapa", priorytet: "B", wiedza: ["w08"], zrodlo: "podr. s. 20 – mapa",
      mapa: "m01",
      pytanie: "Które miasta zaznaczone na mapie leżą w dolinie Nilu?",
      odpowiedzi: ["Giza, Memfis, Teby i Abu Simbel", "Tyr, Damaszek, Megiddo i Jerycho", "Giza, Tyr, Damaszek i Jerycho"], poprawna: 0,
      wyjasnienie: "Giza, Memfis, Teby i Abu Simbel leżą nad Nilem. Tyr, Damaszek, Megiddo i Jerycho są w Kanaanie, Fenicji i Syrii." },

    { id: "z019", typ: "mapa", priorytet: "B", wiedza: ["w09"], zrodlo: "podr. s. 20 – mapa",
      mapa: "m01",
      pytanie: "Co na mapie oznacza jasnopomarańczowy kolor?",
      odpowiedzi: ["ziemie podporządkowane Egiptowi w XV wieku p.n.e.", "Egipt w pierwszej połowie II tysiąclecia p.n.e.", "ziemie uprawne i pastwiska"], poprawna: 0,
      wyjasnienie: "Jasny pomarańcz to ziemie podporządkowane Egiptowi w XV wieku p.n.e. Sam Egipt jest ciemnopomarańczowy." },

    { id: "z020", typ: "kategorie", priorytet: "B", wiedza: ["w08", "w09"], zrodlo: "podr. s. 20 – mapa",
      polecenie: "Przyporządkuj miasta z mapy do właściwych obszarów.",
      kategorie: ["Egipt – dolina Nilu", "ziemie podporządkowane Egiptowi w XV wieku p.n.e."],
      elementy: [
        { tekst: "Giza", kolumny: [0] },
        { tekst: "Memfis", kolumny: [0] },
        { tekst: "Teby (Luksor)", kolumny: [0] },
        { tekst: "Abu Simbel", kolumny: [0] },
        { tekst: "Tyr", kolumny: [1] },
        { tekst: "Damaszek", kolumny: [1] },
        { tekst: "Megiddo", kolumny: [1] },
        { tekst: "Jerycho", kolumny: [1] }
      ],
      wyjasnienie: "W dolinie Nilu: Giza, Memfis, Teby, Abu Simbel. W Kanaanie, Fenicji i Syrii: Tyr, Damaszek, Megiddo, Jerycho." },

    { id: "z021", typ: "wybor", priorytet: "B", wiedza: ["w47"], zrodlo: "podr. s. 14, 20 – osie czasu",
      pytanie: "Które państwo powstało najwcześniej?",
      odpowiedzi: ["pierwsze państwa Sumerów", "państwo egipskie faraonów", "silne państwo Babilonia"], poprawna: 0,
      wyjasnienie: "Sumerowie – ok. 3500 lat p.n.e., Egipt – ok. 3000 lat p.n.e., Babilonia – II tysiąclecie p.n.e." },

    { id: "z022", typ: "liczenie", priorytet: "B", wiedza: ["w47"], zrodlo: "podr. s. 14, 20 – osie czasu",
      pytanie: "Ile lat minęło od powstania pierwszych państw Sumerów (ok. 3500 p.n.e.) do powstania państwa egipskiego (ok. 3000 p.n.e.)?",
      odpowiedz: 500, jednostka: "lat",
      wyjasnienie: "Obie daty są przed naszą erą, więc odejmujemy: 3500 − 3000 = 500 lat." },

    { id: "z023", typ: "wybor", priorytet: "C", wiedza: ["w05"], zrodlo: "podr. s. 20 – Ciekawostka",
      pytanie: "Kto i kiedy dotarł do źródeł Nilu?",
      odpowiedzi: ["brytyjscy podróżnicy w XIX wieku", "starożytni Egipcjanie w XV wieku p.n.e.", "Herodot w V wieku p.n.e."], poprawna: 0,
      wyjasnienie: "Egipcjanie nigdy nie dotarli do źródeł Nilu. Udało się to brytyjskim podróżnikom dopiero w XIX wieku." },

    /* ===== Społeczeństwo ===== */
    { id: "z024", typ: "kolejnosc", priorytet: "A", wiedza: ["w10"], zrodlo: "podr. s. 21 – piramida społeczna",
      polecenie: "Ułóż grupy ludności Egiptu od szczytu piramidy społecznej do jej podstawy.",
      elementy: ["faraon", "kapłani", "urzędnicy", "rzemieślnicy", "żołnierze", "chłopi", "niewolnicy"],
      wyjasnienie: "Na szczycie faraon, niżej kapłani i urzędnicy, potem rzemieślnicy, żołnierze i chłopi, a na dole niewolnicy." },

    { id: "z025", typ: "wybor", priorytet: "A", wiedza: ["w11"], zrodlo: "podr. s. 21",
      pytanie: "Kim był faraon?",
      odpowiedzi: ["królem Egiptu z nieograniczoną władzą", "urzędnikiem, który zbierał podatki", "najbogatszym kupcem w Egipcie", "przywódcą wybieranym przez chłopów"], poprawna: 0,
      wyjasnienie: "Faraon to król Egiptu – najważniejsza osoba w państwie." },

    { id: "z026", typ: "wybor", priorytet: "A", wiedza: ["w11"], zrodlo: "podr. s. 21",
      pytanie: "Poddani widzieli w faraonie:",
      odpowiedzi: ["przedstawiciela bogów na ziemi", "zwykłego rolnika, jak wszyscy inni", "obcego najeźdźcę z Mezopotamii", "najlepszego rzemieślnika w kraju"], poprawna: 0,
      wyjasnienie: "Egipcjanie wierzyli, że faraon jest przedstawicielem bogów na ziemi." },

    { id: "z027", typ: "pary", priorytet: "A", wiedza: ["w12"], zrodlo: "ćw. s. 10 zad. 4",
      polecenie: "Uzupełnij schemat „Zakres władzy faraona”: połącz dziedzinę z władzą faraona.",
      naglowki: ["Dziedzina", "Władza faraona"],
      pary: [
        ["religia", "był głównym kapłanem"],
        ["wojsko", "był zwierzchnikiem wojska"],
        ["prawo", "ustanawiał prawa i był głównym sędzią"]
      ],
      wyjasnienie: "Faraon rządził wszystkim: był głównym kapłanem, dowodził wojskiem, ustanawiał prawa i sądził." },

    { id: "z028", typ: "otwarte", priorytet: "A", wiedza: ["w11", "w12"], zrodlo: "podr. s. 21; ćw. s. 10 zad. 4",
      pytanie: "Jaki zakres władzy miał faraon? Opisz jego władzę w religii, wojsku i prawie.",
      punkty: ["religia: był głównym kapłanem, uważano go za przedstawiciela bogów", "wojsko: był zwierzchnikiem wojska", "prawo: ustanawiał prawa (sam im nie podlegał) i był głównym sędzią"], wymagane: 3,
      wzor: "Faraon miał nieograniczoną władzę. W religii był głównym kapłanem i uważano go za przedstawiciela bogów na ziemi. Był zwierzchnikiem wojska. Według własnego uznania ustanawiał prawa, którym sam nie podlegał, i był głównym sędzią.",
      wyjasnienie: "Trzy dziedziny: religia, wojsko, prawo." },

    { id: "z029", typ: "pf", priorytet: "A", wiedza: ["w11", "w12", "w14"], zrodlo: "podr. s. 21",
      zdania: [
        { tekst: "Faraon miał nieograniczoną władzę nad poddanymi.", prawda: true },
        { tekst: "Faraon nie podlegał prawom, które sam ustanawiał.", prawda: true },
        { tekst: "Faraon był głównym sędzią i zwierzchnikiem wojska.", prawda: true },
        { tekst: "Faraonami zostawali wyłącznie mężczyźni.", prawda: false, wyjasnienie: "W XV wieku p.n.e. Egiptem rządziła kobieta – królowa Hatszepsut." }
      ],
      wyjasnienie: "Faraon: nieograniczona władza, prawa, sądy, wojsko i religia. Zwykle mężczyzna, ale rządziła też Hatszepsut." },

    { id: "z030", typ: "nawiasy", priorytet: "B", wiedza: ["w13"], zrodlo: "podr. s. 21",
      tekst: "Korona faraona składała się z [dwóch*|czterech] części. Symbolizowały one Egipt [Górny*|Wschodni], czyli dolinę Nilu, oraz Egipt [Dolny*|Zachodni], czyli ziemie przy ujściu rzeki.",
      wyjasnienie: "Dwie części korony – Egipt Górny (dolina Nilu) i Egipt Dolny (przy ujściu)." },

    { id: "z031", typ: "wybor", priorytet: "B", wiedza: ["w13"], zrodlo: "podr. s. 21",
      pytanie: "Co symbolizowały dwie części korony faraona?",
      odpowiedzi: ["Egipt Górny i Egipt Dolny, połączone w jedno państwo", "wojsko i religię, którymi kierował faraon", "Nil i Morze Śródziemne, nad którymi leżało państwo egipskie", "słońce i gwiazdę Syriusz z kalendarza"], poprawna: 0,
      wyjasnienie: "Korona łączyła symbole Egiptu Górnego i Dolnego – dwóch krain zjednoczonych w jedno państwo." },

    { id: "z032", typ: "wybor", priorytet: "B", wiedza: ["w14"], zrodlo: "podr. s. 21",
      pytanie: "Kim była Hatszepsut?",
      odpowiedzi: ["kobietą, która rządziła Egiptem jako faraon", "boginią słońca czczoną w całym Egipcie i w Kanaanie", "żoną Hammurabiego, królową Babilonii", "kapłanką, która ułożyła kalendarz"], poprawna: 0,
      wyjasnienie: "W XV wieku p.n.e. na czele Egiptu stanęła kobieta – królowa Hatszepsut." },

    { id: "z033", typ: "pary", priorytet: "A", wiedza: ["w15", "w16", "w17", "w19"], zrodlo: "ćw. s. 10 zad. 3",
      polecenie: "Połącz postać z ilustracji z grupą społeczną starożytnego Egiptu.",
      naglowki: ["Kogo widać na ilustracji?", "Grupa"],
      pary: [
        ["mężczyzna zapisuje coś na tabliczce", "urzędnik"],
        ["łysy mężczyzna w długiej szacie, z laską i rozpostartymi rękami", "kapłan"],
        ["mężczyzna na stołku przy dużym glinianym naczyniu", "rzemieślnik"],
        ["mężczyzna kopie ziemię motyką", "chłop"]
      ],
      wyjasnienie: "Pisze – urzędnik. Odprawia obrzędy – kapłan. Robi naczynia – rzemieślnik. Kopie ziemię – chłop." },

    { id: "z034", typ: "pary", priorytet: "A", wiedza: ["w15", "w16", "w17", "w19"], zrodlo: "ćw. s. 10 zad. 3",
      polecenie: "Połącz grupę społeczną z tym, czym się zajmowała.",
      naglowki: ["Grupa", "Czym się zajmowała?"],
      pary: [
        ["kapłani", "sprawowali funkcje religijne i doradzali faraonowi"],
        ["urzędnicy", "pomagali faraonowi rządzić państwem"],
        ["rzemieślnicy", "wytwarzali narzędzia, ceramikę i ubrania"],
        ["chłopi", "uprawiali ziemię i budowali kanały"]
      ],
      wyjasnienie: "Kapłani – religia, urzędnicy – rządzenie, rzemieślnicy – wyroby, chłopi – ziemia i kanały." },

    { id: "z035", typ: "otwarte", priorytet: "A", wiedza: ["w10", "w15", "w16", "w17", "w18", "w19", "w20"], zrodlo: "podr. s. 25 – Sprawdź się 2",
      pytanie: "Wymień grupy ludności egipskiej i ich zadania.",
      punkty: ["faraon – rządził państwem, miał nieograniczoną władzę", "kapłani – sprawowali funkcje religijne i doradzali faraonowi", "urzędnicy – pomagali faraonowi rządzić, umieli czytać i pisać", "rzemieślnicy – wytwarzali narzędzia, ceramikę i ubrania", "żołnierze – bronili Egiptu i brali udział w wyprawach wojennych", "chłopi – uprawiali ziemię, budowali kanały, pracowali przy piramidach", "niewolnicy – służyli w domach zamożnych Egipcjan"], wymagane: 5,
      wzor: "Na czele stał faraon, który miał nieograniczoną władzę. Kapłani sprawowali funkcje religijne i doradzali faraonowi, a urzędnicy pomagali mu rządzić państwem. Rzemieślnicy wytwarzali narzędzia, ceramikę i ubrania. Żołnierze bronili Egiptu. Chłopi uprawiali ziemię, budowali kanały i pracowali przy piramidach. Niewolnicy służyli w domach zamożnych Egipcjan.",
      wyjasnienie: "Co najmniej pięć grup – każda z zadaniem." },

    { id: "z036", typ: "wybor", priorytet: "A", wiedza: ["w15"], zrodlo: "podr. s. 21",
      pytanie: "Którzy Egipcjanie byli najlepiej wykształceni, prowadzili szkoły i obserwowali niebo?",
      odpowiedzi: ["kapłani", "chłopi", "żołnierze", "niewolnicy"], poprawna: 0,
      wyjasnienie: "Kapłani prowadzili szkoły i obserwacje astronomiczne – umieli np. przewidzieć zaćmienie Słońca." },

    { id: "z037", typ: "wybor", priorytet: "A", wiedza: ["w16"], zrodlo: "podr. s. 21",
      pytanie: "Za czyim pośrednictwem faraon rządził państwem?",
      odpowiedzi: ["urzędników", "niewolników", "rzemieślników", "chłopów"], poprawna: 0,
      wyjasnienie: "Faraon rządził państwem za pośrednictwem urzędników, którzy umieli czytać i pisać." },

    { id: "z038", typ: "wybor", priorytet: "A", wiedza: ["w15", "w16"], zrodlo: "podr. s. 21",
      pytanie: "Które dwie grupy Egipcjan umiały czytać i pisać?",
      odpowiedzi: ["kapłani i urzędnicy", "chłopi i niewolnicy", "żołnierze i chłopi", "rzemieślnicy i niewolnicy"], poprawna: 0,
      wyjasnienie: "Czytać i pisać umieli kapłani i urzędnicy – dwie nieliczne grupy." },

    { id: "z039", typ: "wybor", priorytet: "A", wiedza: ["w19"], zrodlo: "podr. s. 21",
      pytanie: "Najliczniejszą grupą ludności Egiptu byli:",
      odpowiedzi: ["chłopi", "kapłani", "urzędnicy", "niewolnicy"], poprawna: 0,
      wyjasnienie: "Najwięcej było chłopów. Niewolników było niewielu." },

    { id: "z040", typ: "pf", priorytet: "A", wiedza: ["w18", "w19", "w20"], zrodlo: "podr. s. 21",
      zdania: [
        { tekst: "Żołnierze wywodzili się spośród kapłanów i urzędników.", prawda: false, wyjasnienie: "Żołnierze pochodzili spośród chłopów i rzemieślników." },
        { tekst: "Chłopi pracowali także przy wznoszeniu świątyń i piramid.", prawda: true },
        { tekst: "Niewolników w Egipcie nie było wielu.", prawda: true },
        { tekst: "Niewolnicy najczęściej budowali kanały i piramidy.", prawda: false, wyjasnienie: "Niewolnicy najczęściej służyli w domach zamożnych Egipcjan. Kanały i piramidy budowali głównie chłopi." }
      ],
      wyjasnienie: "Żołnierze – z chłopów i rzemieślników. Chłopi – pola, kanały, budowy. Niewolnicy – nieliczni, w domach bogatych." },

    { id: "z041", typ: "kategorie", priorytet: "A", wiedza: ["w15", "w18", "w19", "w20"], zrodlo: "podr. s. 21",
      polecenie: "Przyporządkuj zajęcia do grup ludności Egiptu.",
      kategorie: ["kapłani", "chłopi", "żołnierze", "niewolnicy"],
      elementy: [
        { tekst: "odprawianie obrzędów religijnych", kolumny: [0] },
        { tekst: "prowadzenie szkół", kolumny: [0] },
        { tekst: "uprawa ziemi", kolumny: [1] },
        { tekst: "oczyszczanie kanałów nawadniających", kolumny: [1] },
        { tekst: "obrona Egiptu przed najeźdźcami", kolumny: [2] },
        { tekst: "wyprawy wojenne", kolumny: [2] },
        { tekst: "służba w domach zamożnych Egipcjan", kolumny: [3] }
      ],
      wyjasnienie: "Kapłani – religia i szkoły. Chłopi – pola i kanały. Żołnierze – obrona i wyprawy. Niewolnicy – służba w domach." },

    { id: "z042", typ: "wybor", priorytet: "A", wiedza: ["w20"], zrodlo: "podr. s. 21",
      pytanie: "Kim byli najczęściej niewolnicy w Egipcie?",
      odpowiedzi: ["jeńcami wojennymi", "kapłanami", "urzędnikami", "kupcami z Mezopotamii"], poprawna: 0,
      wyjasnienie: "Niewolnicy byli w większości jeńcami wojennymi." },

    { id: "z043", typ: "otwarte", priorytet: "B", wiedza: ["w10", "w11", "w19"], zrodlo: "podr. s. 25 – Miniprojekt",
      pytanie: "Porównaj sytuację faraona i chłopa w starożytnym Egipcie. Jaki wniosek można z tego wyciągnąć?",
      punkty: ["faraon był na szczycie piramidy społecznej i miał nieograniczoną władzę", "chłopi byli najliczniejsi i ciężko pracowali: pola, kanały, budowa piramid", "wniosek: im wyżej ktoś był w społeczeństwie, tym więcej miał praw"], wymagane: 2,
      wzor: "Faraon był na szczycie piramidy społecznej: miał nieograniczoną władzę i najwięcej praw. Chłopi byli najliczniejszą grupą i ciężko pracowali – uprawiali ziemię, budowali kanały i pracowali przy piramidach. Wniosek: im wyższą pozycję ktoś zajmował, tym więcej miał praw.",
      wyjasnienie: "Porównanie + wniosek o piramidzie społecznej." },

    /* ===== Religia i życie po śmierci ===== */
    { id: "z044", typ: "wybor", priorytet: "A", wiedza: ["w21"], zrodlo: "podr. s. 22, 25",
      pytanie: "Politeizm to:",
      odpowiedzi: ["wiara w wielu bogów", "wiara w jednego boga", "brak wiary w bogów", "wiara tylko w boga słońca"], poprawna: 0,
      wyjasnienie: "Poli – wiele, theos – bóg. Egipcjanie byli politeistami – wierzyli w wielu bogów." },

    { id: "z045", typ: "otwarte", priorytet: "A", wiedza: ["w21", "w24", "w25"], zrodlo: "podr. s. 25 – Sprawdź się 4",
      pytanie: "Wytłumacz, co oznacza, że religia egipska miała charakter politeistyczny.",
      punkty: ["Egipcjanie wierzyli w wielu bogów", "słowo pochodzi z greckiego: poli – wiele, theos – bóg", "przykład: Ra – bóg-słońce, Ozyrys – bóg, który osądzał zmarłych"], wymagane: 2,
      wzor: "Religia egipska była politeistyczna, czyli Egipcjanie wierzyli w wielu bogów (z greckiego: poli – wiele, theos – bóg). Czcili na przykład boga-słońce Ra i Ozyrysa, który osądzał zmarłych.",
      wyjasnienie: "Najważniejsze: wiara w wielu bogów." },

    { id: "z046", typ: "luki", priorytet: "A", wiedza: ["w21"], zrodlo: "podr. s. 22",
      tekst: "Egipcjanie wierzyli w {wielu} bogów. Taką wiarę nazywamy {politeizmem}. Słowo to pochodzi z języka {greckiego}: poli – wiele, theos – {bóg}.",
      dodatkowe: ["jednego", "łacińskiego"],
      wyjasnienie: "Politeizm – wiara w wielu bogów; słowo z greckiego." },

    { id: "z047", typ: "wybor", priorytet: "B", wiedza: ["w22"], zrodlo: "podr. s. 22",
      pytanie: "Za co według Egipcjan odpowiadali bogowie?",
      odpowiedzi: ["za zjawiska przyrody, np. wylewy Nilu i wschody słońca", "tylko za wynik wojen prowadzonych przez faraona i jego wojsko", "za pracę urzędników i pobieranie podatków", "za budowę piramid i kanałów nawadniających"], poprawna: 0,
      wyjasnienie: "Egipcjanie wierzyli, że bogowie kierują przyrodą: wylewami Nilu, wschodami i zachodami słońca." },

    { id: "z048", typ: "pf", priorytet: "B", wiedza: ["w22", "w23"], zrodlo: "podr. s. 22",
      zdania: [
        { tekst: "Niektórych bogów czczono w całym Egipcie, a innych tylko w niektórych miejscowościach.", prawda: true },
        { tekst: "Obrzędy w świątyniach odprawiali niewolnicy, raz w roku.", prawda: false, wyjasnienie: "Obrzędy codziennie odprawiali kapłani w imieniu władcy." },
        { tekst: "Wierni składali bogom ofiary z płodów rolnych, wyrobów rzemieślniczych i kosztowności.", prawda: true },
        { tekst: "Egipcjanie nie budowali świątyń dla swoich bogów.", prawda: false, wyjasnienie: "Wznosili dla nich wspaniałe świątynie." }
      ],
      wyjasnienie: "Świątynie, codzienne obrzędy kapłanów i ofiary wiernych – by zyskać przychylność bogów." },

    { id: "z049", typ: "wybor", priorytet: "B", wiedza: ["w23"], zrodlo: "podr. s. 22",
      pytanie: "Po co Egipcjanie składali bogom ofiary?",
      odpowiedzi: ["aby zyskać przychylność bóstw", "aby zapłacić podatek faraonowi", "aby wykupić niewolników", "aby dostać ziemię nad Nilem"], poprawna: 0,
      wyjasnienie: "Ofiary z płodów rolnych, wyrobów i kosztowności miały zapewnić przychylność bogów." },

    { id: "z050", typ: "wybor", priorytet: "B", wiedza: ["w24"], zrodlo: "podr. s. 22",
      pytanie: "Jak przedstawiano boga Ra?",
      odpowiedzi: ["jako człowieka z głową sokoła lub jastrzębia", "jako lwa z ludzką głową, strażnika piramid", "jako kobietę w koronie z dwóch części", "jako byka z niebieskich cegieł"], poprawna: 0,
      wyjasnienie: "Ra miał ludzkie ciało i głowę sokoła lub jastrzębia, a nad głową czerwony dysk słońca. Lew z ludzką głową to Sfinks." },

    { id: "z051", typ: "nawiasy", priorytet: "B", wiedza: ["w24"], zrodlo: "podr. s. 22",
      tekst: "Ra był bogiem [słońca*|morza] i panem wszechświata. Nad jego głową umieszczano [czerwony dysk*|złotą koronę], który oznaczał słońce.",
      wyjasnienie: "Ra – bóg-słońce; czerwony dysk nad głową oznaczał słońce." },

    { id: "z052", typ: "wybor", priorytet: "A", wiedza: ["w25"], zrodlo: "podr. s. 22",
      pytanie: "Kto według Egipcjan osądzał po śmierci człowieka i jego uczynki?",
      odpowiedzi: ["bóg Ozyrys", "bóg Ra", "faraon", "najwyższy kapłan"], poprawna: 0,
      wyjasnienie: "Zmarłego osądzał bóg Ozyrys. Decydował, czy człowiek zasługuje na przejście do innego świata." },

    { id: "z053", typ: "otwarte", priorytet: "A", wiedza: ["w25", "w26"], zrodlo: "podr. s. 25 – Sprawdź się 3",
      pytanie: "Opowiedz, dlaczego Egipcjanie mumifikowali zwłoki.",
      punkty: ["wierzyli w życie po śmierci", "dusza miała istnieć tak długo, jak ciało pozostawało nienaruszone", "mumifikacja chroniła ciało przed zniszczeniem"], wymagane: 2,
      wzor: "Egipcjanie wierzyli w życie po śmierci. Uważali, że dusza istnieje tak długo, jak ciało pozostaje w nienaruszonym stanie. Dlatego mumifikowali zwłoki – żeby ciało zachowało się jak najdłużej.",
      wyjasnienie: "Wiara w życie po śmierci + dusza potrzebuje nienaruszonego ciała." },

    { id: "z054", typ: "wybor", priorytet: "A", wiedza: ["w25"], zrodlo: "podr. s. 22",
      pytanie: "Dlaczego Egipcjanie chcieli zachować ciało zmarłego w nienaruszonym stanie?",
      odpowiedzi: ["wierzyli, że dusza żyje, dopóki ciało jest zachowane", "chcieli pokazywać je wiernym w świątyniach podczas świąt", "ciało było potrzebne do budowy piramidy", "tak nakazywał Kodeks Hammurabiego"], poprawna: 0,
      wyjasnienie: "Według wierzeń dusza istniała, dopóki ciało było nienaruszone." },

    { id: "z055", typ: "kolejnosc", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 22",
      polecenie: "Ułóż etapy mumifikacji i pochówku faraona we właściwej kolejności.",
      elementy: ["usunięcie wnętrzności z ciała zmarłego", "balsamowanie ciała", "owinięcie ciała bandażami – powstaje mumia", "złożenie mumii w sarkofagu", "umieszczenie sarkofagu w piramidzie lub grobowcu w skale"],
      wyjasnienie: "Wnętrzności → balsamowanie → bandaże (mumia) → sarkofag → piramida lub grobowiec." },

    { id: "z056", typ: "otwarte", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 22 – pytanie w tekście",
      pytanie: "Na czym polegał proces mumifikacji?",
      punkty: ["z ciała usuwano wnętrzności", "ciało balsamowano", "ciało owijano bandażami – tak powstawała mumia"], wymagane: 3,
      wzor: "Najpierw z ciała zmarłego usuwano wnętrzności. Potem ciało balsamowano i owijano w bandaże. Tak powstawała mumia, którą składano w sarkofagu.",
      wyjasnienie: "Trzy etapy: wnętrzności, balsamowanie, bandaże." },

    { id: "z057", typ: "wybor", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 22",
      pytanie: "Sarkofag to:",
      odpowiedzi: ["bogato zdobiona trumna na mumię", "ogromny posąg lwa z ludzką głową", "komora wewnątrz piramidy", "obóz budowniczych piramid"], poprawna: 0,
      wyjasnienie: "Sarkofag to bogato zdobiona trumna. Lew z ludzką głową to Sfinks." },

    { id: "z058", typ: "luki", priorytet: "A", wiedza: ["w27"], zrodlo: "podr. s. 22",
      tekst: "Najpierw z ciała usuwano {wnętrzności}. Potem ciało {balsamowano} i owijano w {bandaże}. Tak powstawała {mumia}, którą składano w bogato zdobionej trumnie zwanej {sarkofagiem}.",
      dodatkowe: ["piramidą", "hieroglify"],
      wyjasnienie: "Wnętrzności, balsamowanie, bandaże – mumia – sarkofag." },

    { id: "z059", typ: "kategorie", priorytet: "A", wiedza: ["w26"], zrodlo: "podr. s. 22",
      polecenie: "Jak chowano zmarłych w Egipcie? Przyporządkuj.",
      kategorie: ["ubodzy Egipcjanie", "faraonowie i dostojnicy"],
      elementy: [
        { tekst: "zakopanie w piaskach pustyni", kolumny: [0] },
        { tekst: "piasek w naturalny sposób konserwuje zwłoki", kolumny: [0] },
        { tekst: "mumifikacja ciała", kolumny: [1] },
        { tekst: "złożenie w sarkofagu", kolumny: [1] },
        { tekst: "grobowiec: piramida albo grób wykuty w skale", kolumny: [1] }
      ],
      wyjasnienie: "Ubodzy – piasek pustyni. Faraonowie i dostojnicy – mumifikacja, sarkofag, grobowiec." },

    { id: "z060", typ: "pf", priorytet: "A", wiedza: ["w25", "w26", "w27"], zrodlo: "podr. s. 22",
      zdania: [
        { tekst: "Egipcjanie wierzyli, że dusza znika zaraz po śmierci.", prawda: false, wyjasnienie: "Egipcjanie wierzyli w życie pozagrobowe – dusza istniała, dopóki ciało było nienaruszone." },
        { tekst: "Ciała ubogich Egipcjan mumifikowano i składano w piramidach.", prawda: false, wyjasnienie: "Ubogich zakopywano w piaskach pustyni, które naturalnie konserwowały zwłoki." },
        { tekst: "Mumię składano w sarkofagu.", prawda: true },
        { tekst: "Mumie rozpadały się już po kilku latach.", prawda: false, wyjasnienie: "Dzięki mumifikacji wiele mumii zachowało się w dobrym stanie do naszych czasów." }
      ],
      wyjasnienie: "Mumifikacja dotyczyła faraonów i dostojników. Dzięki niej wiele mumii przetrwało do dziś." },

    /* ===== Piramidy ===== */
    { id: "z061", typ: "wybor", priorytet: "A", wiedza: ["w28"], zrodlo: "podr. s. 23",
      pytanie: "Piramidy to:",
      odpowiedzi: ["grobowce faraonów", "pałace faraonów", "świątynie boga Ra", "spichlerze na zboże"], poprawna: 0,
      wyjasnienie: "Piramidy były wspaniałymi grobowcami niektórych faraonów." },

    { id: "z062", typ: "otwarte", priorytet: "A", wiedza: ["w25", "w28", "w30"], zrodlo: "podr. s. 23 – Praca z infografiką 1",
      pytanie: "Wytłumacz, w jakim celu wybudowano egipskie piramidy.",
      punkty: ["piramidy były grobowcami faraonów", "w komorze grobowej składano ciało (mumię) faraona i kosztowności", "miały chronić ciało faraona, bo Egipcjanie wierzyli w życie po śmierci"], wymagane: 2,
      wzor: "Piramidy wybudowano jako grobowce faraonów. W komorze grobowej składano mumię faraona i liczne kosztowności, a wejście ukrywano. Miały chronić ciało, bo Egipcjanie wierzyli w życie po śmierci.",
      wyjasnienie: "Najważniejsze: piramida to grobowiec faraona." },

    { id: "z063", typ: "wybor", priorytet: "A", wiedza: ["w07", "w28"], zrodlo: "podr. s. 23",
      pytanie: "Największe i najbardziej znane piramidy wzniesiono w:",
      odpowiedzi: ["Gizie", "Tebach", "Babilonie", "Abu Simbel"], poprawna: 0,
      wyjasnienie: "Największe piramidy – Cheopsa i Chefrena – stoją w Gizie." },

    { id: "z064", typ: "nawiasy", priorytet: "A", wiedza: ["w28"], zrodlo: "podr. s. 23",
      tekst: "Największe piramidy wzniesiono w [III tysiącleciu*|I tysiącleciu] p.n.e. w [Gizie*|Tebach] dla faraonów [Cheopsa i Chefrena*|Ramzesa i Tutenchamona].",
      wyjasnienie: "III tysiąclecie p.n.e., Giza, Cheops i Chefren." },

    { id: "z065", typ: "wybor", priorytet: "A", wiedza: ["w28"], zrodlo: "podr. s. 23",
      pytanie: "Jak długo mogła trwać budowa piramidy?",
      odpowiedzi: ["nawet kilkadziesiąt lat", "tylko kilka dni", "około jednego miesiąca", "ponad tysiąc lat"], poprawna: 0,
      wyjasnienie: "Budowa piramidy mogła trwać nawet kilkadziesiąt lat." },

    { id: "z066", typ: "otwarte", priorytet: "A", wiedza: ["w32"], zrodlo: "podr. s. 23 – Praca z infografiką 2",
      pytanie: "Wyjaśnij, w jaki sposób głazy z kamieniołomów dostarczano na plac budowy piramidy.",
      punkty: ["kamienne bloki przewożono Nilem na statkach", "przywożono je z odległych kamieniołomów", "na budowie podnoszono je prostymi dźwigami"], wymagane: 2,
      wzor: "Kamienne bloki przywożono z odległych kamieniołomów Nilem, na statkach. Na placu budowy podnoszono je dźwigami o prostej budowie.",
      wyjasnienie: "Nil i statki – to najważniejsze." },

    { id: "z067", typ: "wybor", priorytet: "A", wiedza: ["w32"], zrodlo: "podr. s. 23",
      pytanie: "Jak przewożono kamienne bloki na budowę piramidy Cheopsa?",
      odpowiedzi: ["Nilem, na statkach", "Eufratem, na łodziach z żaglami", "na wozach ciągniętych przez konie", "przez Morze Czerwone, na tratwach"], poprawna: 0,
      wyjasnienie: "Bloki płynęły Nilem na statkach z odległych kamieniołomów." },

    { id: "z068", typ: "pf", priorytet: "B", wiedza: ["w29", "w30", "w31", "w32"], zrodlo: "podr. s. 23",
      zdania: [
        { tekst: "Wielki Sfinks to posąg lwa z ludzką głową.", prawda: true },
        { tekst: "Po złożeniu ciała faraona wejście do piramidy ukrywano.", prawda: true },
        { tekst: "Budowniczowie piramid mieszkali w pałacu faraona.", prawda: false, wyjasnienie: "Budowniczowie mieszkali w obozie nazywanym miastem piramid." },
        { tekst: "Do budowy piramidy Cheopsa zużyto około 2 milionów kamiennych bloków.", prawda: true }
      ],
      wyjasnienie: "Sfinks – lew z ludzką głową. Ukryte wejście, miasto piramid i ok. 2 miliony bloków." },

    { id: "z069", typ: "wybor", priorytet: "B", wiedza: ["w29"], zrodlo: "podr. s. 23",
      pytanie: "Wielki Sfinks to:",
      odpowiedzi: ["ogromny posąg lwa z ludzką głową", "największa piramida w Gizie, grobowiec Cheopsa", "złota trumna Tutenchamona", "świątynia w Abu Simbel"], poprawna: 0,
      wyjasnienie: "Wielki Sfinks to posąg lwa z ludzką głową – strażnik piramid." },

    { id: "z070", typ: "wybor", priorytet: "B", wiedza: ["w29"], zrodlo: "podr. s. 23",
      pytanie: "Czyją twarz ma według uczonych Wielki Sfinks?",
      odpowiedzi: ["faraona Chefrena", "faraona Cheopsa", "królowej Hatszepsut", "boga Ra"], poprawna: 0,
      wyjasnienie: "Według uczonych Sfinks ma twarz faraona Chefrena." },

    { id: "z071", typ: "wybor", priorytet: "B", wiedza: ["w31"], zrodlo: "podr. s. 23",
      pytanie: "Kto pracował przy budowie piramid?",
      odpowiedzi: ["architekci, mierniczowie i tysiące robotników", "wyłącznie niewolnicy przywiezieni z Mezopotamii", "tylko kapłani i urzędnicy faraona", "sami faraonowie i ich rodziny"], poprawna: 0,
      wyjasnienie: "Budowa wymagała pracy architektów, mierniczych i tysięcy robotników. Mieszkali w mieście piramid." },

    { id: "z072", typ: "nawiasy", priorytet: "B", wiedza: ["w30", "w33"], zrodlo: "podr. s. 23",
      tekst: "Piramida Cheopsa ma [146*|14] metrów wysokości. Wewnątrz piramidy system korytarzy prowadził do [komory grobowej*|spichlerza z zapasami], a po pogrzebie wejście [ukrywano*|zostawiano otwarte].",
      wyjasnienie: "146 metrów, komora grobowa na końcu korytarzy i ukryte wejście." },

    { id: "z073", typ: "wybor", priorytet: "B", wiedza: ["w33"], zrodlo: "podr. s. 23",
      pytanie: "Jaką wysokość ma piramida Cheopsa?",
      odpowiedzi: ["146 metrów", "14 metrów", "1460 metrów", "46 metrów"], poprawna: 0,
      wyjasnienie: "Piramida Cheopsa ma 146 metrów wysokości." },

    /* ===== Skarb Tutenchamona ===== */
    { id: "z074", typ: "wybor", priorytet: "B", wiedza: ["w34"], zrodlo: "podr. s. 24 – Warto wiedzieć",
      pytanie: "Kto i kiedy odkrył nienaruszony grobowiec Tutenchamona?",
      odpowiedzi: ["Howard Carter w 1922 roku", "Herodot w V wieku p.n.e.", "Kazimierz Michałowski w 1822 roku", "Hatszepsut w XV wieku p.n.e."], poprawna: 0,
      wyjasnienie: "Grobowiec odkrył w 1922 roku Brytyjczyk Howard Carter." },

    { id: "z075", typ: "wybor", priorytet: "B", wiedza: ["w34"], zrodlo: "podr. s. 24",
      pytanie: "Gdzie odkryto grobowiec Tutenchamona?",
      odpowiedzi: ["w Dolinie Królów", "w piramidzie w Gizie", "w ruinach Babilonu", "w świątyni w Abu Simbel"], poprawna: 0,
      wyjasnienie: "Grobowiec Tutenchamona wykuto w skale w Dolinie Królów." },

    { id: "z076", typ: "pf", priorytet: "B", wiedza: ["w34", "w35", "w36"], zrodlo: "podr. s. 24",
      zdania: [
        { tekst: "Grobowce faraonów były zwykle ograbiane już w starożytności.", prawda: true },
        { tekst: "Grobowiec Tutenchamona odkryto w Gizie, w piramidzie Cheopsa.", prawda: false, wyjasnienie: "Grobowiec odkryto w Dolinie Królów – był wykuty w skale." },
        { tekst: "Jedna z trumien Tutenchamona była ze szczerego złota.", prawda: true },
        { tekst: "W grobowcu nie było przedmiotów codziennego użytku.", prawda: false, wyjasnienie: "Były – Egipcjanie wierzyli, że zmarły potrzebuje ich w życiu pozagrobowym." }
      ],
      wyjasnienie: "Nienaruszony grobowiec: złota trumna, kosztowności i przedmioty codziennego użytku." },

    { id: "z077", typ: "wybor", priorytet: "B", wiedza: ["w35", "w37"], zrodlo: "podr. s. 24",
      pytanie: "Po co w grobowcu Tutenchamona złożono przedmioty codziennego użytku?",
      odpowiedzi: ["były potrzebne zmarłemu w życiu pozagrobowym", "były zapłatą dla architektów i budowniczych grobowca", "miały odstraszać złodziei grobowców", "były darem dla boga Ra"], poprawna: 0,
      wyjasnienie: "Według wierzeń Egipcjan zmarły potrzebował tych przedmiotów w życiu pozagrobowym." },

    { id: "z078", typ: "wybor", priorytet: "B", wiedza: ["w36"], zrodlo: "podr. s. 24",
      pytanie: "Co trzyma w dłoniach Tutenchamon na złotej trumnie?",
      odpowiedzi: ["bicz i laskę pasterską", "łuk i strzały", "zwój z hieroglifami", "koło i żagiel"], poprawna: 0,
      wyjasnienie: "Bicz i laska pasterska to egipskie symbole władzy." },

    { id: "z079", typ: "otwarte", priorytet: "B", wiedza: ["w34", "w35", "w37"], zrodlo: "podr. s. 24 – pytanie w tekście",
      pytanie: "Jakie znaczenie dla historyków miało odkrycie grobowca Tutenchamona?",
      punkty: ["był to nienaruszony grobowiec – inne ograbiono już w starożytności", "znaleziono mumię faraona w trumnach i ponad 5 tysięcy przedmiotów", "historycy poznali, jak chowano faraonów i w co wierzyli Egipcjanie"], wymagane: 2,
      wzor: "Większość grobowców ograbiono już w starożytności, a grobowiec Tutenchamona był nienaruszony. Znaleziono w nim mumię w dziewięciu trumnach i ponad 5 tysięcy przedmiotów. Dzięki temu historycy dowiedzieli się, jak chowano faraonów i w co wierzyli Egipcjanie.",
      wyjasnienie: "Nienaruszony grobowiec = dużo wiedzy o pochówku i wierzeniach." },

    /* ===== Dorobek cywilizacyjny ===== */
    { id: "z080", typ: "wybor", priorytet: "A", wiedza: ["w38"], zrodlo: "podr. s. 24",
      pytanie: "Hieroglify to:",
      odpowiedzi: ["egipskie pismo obrazkowe", "pismo klinowe Sumerów", "egipski kalendarz", "posągi w Abu Simbel"], poprawna: 0,
      wyjasnienie: "Hieroglify to pismo obrazkowe Egipcjan. Pismo klinowe stworzyli Sumerowie." },

    { id: "z081", typ: "wybor", priorytet: "A", wiedza: ["w38"], zrodlo: "podr. s. 24",
      pytanie: "Do czego służyły głównie hieroglify?",
      odpowiedzi: ["do zapisywania tekstów religijnych i dokumentów", "do liczenia zapasów zboża w spichlerzach faraona", "do oznaczania dróg na pustyni", "do zdobienia trumien i sarkofagów"], poprawna: 0,
      wyjasnienie: "Hieroglifami zapisywano głównie teksty religijne i dokumenty państwowe." },

    { id: "z082", typ: "luki", priorytet: "A", wiedza: ["w38", "w40", "w41", "w42"], zrodlo: "ćw. s. 11 zad. 5",
      tekst: "Starożytni Egipcjanie są twórcami {kalendarza}, który został opracowany na podstawie obserwacji wylewów Nilu i położenia względem Słońca gwiazdy Syriusz. Egipcjanie za pomocą {hieroglifów} byli w stanie tworzyć pisma religijne i ważne dokumenty. Mumifikacja zwłok przyczyniła się do rozwoju {medycyny}. Niezbędną wiedzą do budowy piramid była znajomość {matematyki}.",
      dodatkowe: ["politeizmu"],
      wyjasnienie: "Kalendarz, hieroglify, medycyna, matematyka. Politeizm to wiara w wielu bogów – tu nie pasuje." },

    { id: "z083", typ: "nawiasy", priorytet: "B", wiedza: ["w39"], zrodlo: "podr. s. 24",
      tekst: "Hieroglify zapisywano w kolumnach od [góry do dołu*|dołu do góry] lub poziomo od [prawej do lewej*|lewej do prawej]. Używano około [6 tysięcy*|60] znaków.",
      wyjasnienie: "Od góry do dołu albo od prawej do lewej; ok. 6 tysięcy znaków." },

    { id: "z084", typ: "pf", priorytet: "B", wiedza: ["w38", "w39"], zrodlo: "podr. s. 24",
      zdania: [
        { tekst: "Hieroglify to pismo klinowe odciskane na glinianych tabliczkach.", prawda: false, wyjasnienie: "Hieroglify to egipskie pismo obrazkowe. Pismo klinowe stworzyli Sumerowie." },
        { tekst: "Hieroglify zapisywano wyłącznie od lewej do prawej.", prawda: false, wyjasnienie: "Zapisywano je w kolumnach od góry do dołu albo poziomo od prawej do lewej." },
        { tekst: "Do zapisu hieroglifów używano około 60 znaków.", prawda: false, wyjasnienie: "Używano około 6 tysięcy znaków." },
        { tekst: "Uproszczoną wersją pisma zapisywano bajki, przysłowia i pieśni.", prawda: true }
      ],
      wyjasnienie: "Hieroglify: pismo obrazkowe, ok. 6 tysięcy znaków, zapis od góry do dołu lub od prawej do lewej." },

    { id: "z085", typ: "wybor", priorytet: "A", wiedza: ["w40"], zrodlo: "podr. s. 24",
      pytanie: "Dzięki czemu Egipcjanie poznali budowę ciała ludzkiego?",
      odpowiedzi: ["dzięki mumifikacji zwłok", "dzięki budowie piramid", "dzięki obserwacjom gwiazd", "dzięki wylewom Nilu"], poprawna: 0,
      wyjasnienie: "Mumifikując zwłoki, Egipcjanie poznali budowę ciała – rozwinęli medycynę." },

    { id: "z086", typ: "pf", priorytet: "A", wiedza: ["w40", "w41", "w42"], zrodlo: "podr. s. 24",
      zdania: [
        { tekst: "Egipcjanie potrafili przeprowadzać skomplikowane operacje.", prawda: true },
        { tekst: "Budowę ciała Egipcjanie poznali dzięki obserwacjom gwiazd.", prawda: false, wyjasnienie: "Budowę ciała poznali dzięki mumifikacji zwłok. Obserwacje gwiazd posłużyły do ułożenia kalendarza." },
        { tekst: "Matematyka była potrzebna m.in. przy budowie piramid i świątyń.", prawda: true },
        { tekst: "Egipski kalendarz miał 10 miesięcy po 36 dni.", prawda: false, wyjasnienie: "Miał 12 miesięcy po 30 dni i 5 dni dodatkowych – razem 365 dni." }
      ],
      wyjasnienie: "Medycyna (operacje, serce), matematyka (piramidy) i kalendarz: 12 × 30 + 5 = 365 dni." },

    { id: "z087", typ: "wybor", priorytet: "A", wiedza: ["w42"], zrodlo: "podr. s. 24",
      pytanie: "Ile dni liczył rok w kalendarzu egipskim?",
      odpowiedzi: ["365", "360", "300", "12"], poprawna: 0,
      wyjasnienie: "12 miesięcy po 30 dni to 360 dni, a do tego 5 dni dodatkowych – razem 365." },

    { id: "z088", typ: "wybor", priorytet: "A", wiedza: ["w42"], zrodlo: "podr. s. 24",
      pytanie: "Na podstawie czego Egipcjanie opracowali kalendarz?",
      odpowiedzi: ["obserwacji wylewów Nilu i gwiazdy Syriusz", "obserwacji wschodów i zachodów Księżyca", "zapisów w Kodeksie Hammurabiego", "liczby kamiennych bloków w piramidzie"], poprawna: 0,
      wyjasnienie: "Kalendarz powstał dzięki obserwacjom wylewów Nilu i położenia gwiazdy Syriusz względem Słońca." },

    { id: "z089", typ: "liczenie", priorytet: "A", wiedza: ["w42"], zrodlo: "podr. s. 24",
      pytanie: "Rok w kalendarzu egipskim miał 12 miesięcy po 30 dni i 5 dni dodatkowych. Ile to razem dni?",
      odpowiedz: 365, jednostka: "dni",
      wyjasnienie: "12 × 30 = 360, a 360 + 5 = 365 dni." },

    { id: "z090", typ: "kategorie", priorytet: "A", wiedza: ["w28", "w38", "w40", "w42"], zrodlo: "podr. s. 23–25",
      polecenie: "Przyporządkuj osiągnięcia Egipcjan do dziedzin.",
      kategorie: ["pismo", "medycyna", "astronomia i kalendarz", "budownictwo"],
      elementy: [
        { tekst: "hieroglify", kolumny: [0] },
        { tekst: "zapisywanie tekstów religijnych i dokumentów", kolumny: [0] },
        { tekst: "skomplikowane operacje", kolumny: [1] },
        { tekst: "wiedza o budowie ciała dzięki mumifikacji", kolumny: [1] },
        { tekst: "rok liczący 365 dni", kolumny: [2] },
        { tekst: "obserwacje gwiazdy Syriusz", kolumny: [2] },
        { tekst: "piramidy", kolumny: [3] },
        { tekst: "świątynie", kolumny: [3] }
      ],
      wyjasnienie: "Pismo – hieroglify. Medycyna – operacje i budowa ciała. Astronomia – kalendarz. Budownictwo – piramidy i świątynie." },

    { id: "z091", typ: "otwarte", priorytet: "A", wiedza: ["w43"], zrodlo: "podr. s. 25 – Sprawdź się 5",
      pytanie: "Uzasadnij, które osiągnięcia cywilizacyjne Egipcjan uważasz za najważniejsze.",
      punkty: ["wybór osiągnięcia, np. hieroglify, kalendarz z 365 dniami, medycyna, matematyka, piramidy", "uzasadnienie – do czego służyło albo co dało ludziom (np. kalendarza z 365 dniami używamy do dziś)"], wymagane: 2,
      wzor: "Za najważniejsze uważam kalendarz, w którym rok ma 365 dni, bo podobnego kalendarza używamy do dziś. Ważne było też pismo – hieroglify, dzięki którym zapisywano teksty religijne i dokumenty.",
      wyjasnienie: "Każdy wybór jest dobry, jeśli ma uzasadnienie." },

    { id: "z092", typ: "intruz", priorytet: "A", wiedza: ["w43"], zrodlo: "podr. s. 25 – To już wiem 4",
      polecenie: "Wskaż osiągnięcie, które NIE jest dziełem Egipcjan.",
      elementy: ["hieroglify", "kalendarz z rokiem 365-dniowym", "piramidy w Gizie", "pismo klinowe"], intruz: 3,
      wyjasnienie: "Pismo klinowe stworzyli Sumerowie. Hieroglify, kalendarz i piramidy to dzieło Egipcjan." },

    { id: "z093", typ: "kategorie", priorytet: "A", wiedza: ["w27", "w28", "w38", "w42", "w43"], zrodlo: "podr. s. 15–25",
      polecenie: "Przyporządkuj osiągnięcia do cywilizacji.",
      kategorie: ["Mezopotamia (Sumerowie i Babilończycy)", "Egipt"],
      elementy: [
        { tekst: "pismo klinowe", kolumny: [0] },
        { tekst: "Kodeks Hammurabiego", kolumny: [0] },
        { tekst: "zikkuraty", kolumny: [0] },
        { tekst: "tydzień siedmiodniowy", kolumny: [0] },
        { tekst: "hieroglify", kolumny: [1] },
        { tekst: "piramidy", kolumny: [1] },
        { tekst: "mumifikacja", kolumny: [1] },
        { tekst: "rok liczący 365 dni", kolumny: [1] }
      ],
      wyjasnienie: "Mezopotamia: pismo klinowe, kodeks, zikkuraty, tydzień. Egipt: hieroglify, piramidy, mumie, rok 365-dniowy." },

    { id: "z094", typ: "wybor", priorytet: "A", wiedza: ["w43"], zrodlo: "podr. s. 25 – To już wiem 4",
      pytanie: "Egipcjanie obliczyli długość roku słonecznego. W jakiej dziedzinie nauki to osiągnięcie?",
      odpowiedzi: ["astronomii", "medycyny", "rolnictwa", "handlu"], poprawna: 0,
      wyjasnienie: "Obserwacje Słońca i gwiazd to astronomia." },

    /* ===== Współcześnie (C) ===== */
    { id: "z095", typ: "wybor", priorytet: "C", wiedza: ["w44"], zrodlo: "podr. s. 25 – Współcześnie",
      pytanie: "Z jakiego powodu przeniesiono świątynię w Abu Simbel?",
      odpowiedzi: ["groziło jej zalanie przez jezioro przy tamie", "piasek pustyni zasypywał ją każdego roku", "chciano ją pokazać w muzeum w Warszawie", "zniszczyły ją wojska z Mezopotamii"], poprawna: 0,
      wyjasnienie: "Przy tamie koło Asuanu powstało sztuczne jezioro, które zalałoby świątynię. Dlatego przeniesiono ją wyżej." },

    { id: "z096", typ: "nawiasy", priorytet: "C", wiedza: ["w44", "w45"], zrodlo: "podr. s. 25 – Współcześnie",
      tekst: "Świątynię w Abu Simbel pocięto na kawałki i odtworzono około [65*|6] metrów wyżej. Pracami kierował polski archeolog [Kazimierz Michałowski*|Howard Carter].",
      wyjasnienie: "Ok. 65 metrów wyżej, prace prowadził prof. Kazimierz Michałowski. Howard Carter odkrył grobowiec Tutenchamona." },

    { id: "z097", typ: "wybor", priorytet: "C", wiedza: ["w45"], zrodlo: "podr. s. 25 – Współcześnie",
      pytanie: "Gdzie można oglądać dzieła sztuki podarowane Polsce przez Egipt?",
      odpowiedzi: ["w Muzeum Narodowym w Warszawie", "w piramidzie Cheopsa w Gizie", "w świątyni w Abu Simbel"], poprawna: 0,
      wyjasnienie: "Zbiór dzieł sztuki z Nubii jest w Muzeum Narodowym w Warszawie." },

    { id: "z098", typ: "wybor", priorytet: "C", wiedza: ["w46"], zrodlo: "podr. s. 25 – Współcześnie",
      pytanie: "Czyje posągi strzegą wejścia do świątyni w Abu Simbel?",
      odpowiedzi: ["faraona Ramzesa II", "faraona Tutenchamona", "boga Ozyrysa", "królowej Hatszepsut"], poprawna: 0,
      wyjasnienie: "Wejścia strzegą cztery 20-metrowe posągi faraona Ramzesa II." },

    { id: "z099", typ: "mapa", priorytet: "C", wiedza: ["w46"], zrodlo: "podr. s. 20 – mapa, s. 25",
      mapa: "m01",
      pytanie: "Wskaż na mapie miejscowość, w której stoi świątynia strzeżona przez posągi Ramzesa II.",
      kliknij: "abu-simbel",
      wyjasnienie: "To Abu Simbel – na południu Egiptu, nad Nilem." },

    /* ===== Chronologia ===== */
    { id: "z100", typ: "os", priorytet: "B", wiedza: ["w01", "w05", "w14", "w34"], zrodlo: "podr. s. 20–24",
      wydarzenia: ["d01", "d04", "d07", "d06"],
      wyjasnienie: "Państwo egipskie (ok. 3000 lat p.n.e.) → Hatszepsut (XV wiek p.n.e.) → źródła Nilu (XIX wiek) → grobowiec Tutenchamona (1922)." },

    { id: "z101", typ: "kolejnosc", priorytet: "A", wiedza: ["w01", "w14", "w28", "w34"], zrodlo: "podr. s. 20–24",
      polecenie: "Uporządkuj wydarzenia od najdawniejszego.",
      elementy: ["powstanie państwa egipskiego", "budowa piramid w Gizie", "rządy królowej Hatszepsut", "odkrycie grobowca Tutenchamona"],
      wyjasnienie: "Ok. 3000 lat p.n.e. → III tysiąclecie p.n.e. → XV wiek p.n.e. → 1922 rok." },

    { id: "z102", typ: "pf", priorytet: "A", wiedza: ["w01", "w14", "w34", "w47"], zrodlo: "podr. s. 14, 20–24",
      zdania: [
        { tekst: "Państwo egipskie powstało około 3000 lat p.n.e.", prawda: true },
        { tekst: "Państwo egipskie powstało wcześniej niż pierwsze państwa Sumerów.", prawda: false, wyjasnienie: "Państwa Sumerów powstały ok. 3500 lat p.n.e., czyli ok. 500 lat wcześniej." },
        { tekst: "Królowa Hatszepsut rządziła w XIX wieku.", prawda: false, wyjasnienie: "Hatszepsut rządziła w XV wieku p.n.e. W XIX wieku podróżnicy dotarli do źródeł Nilu." },
        { tekst: "Grobowiec Tutenchamona odkryto w XIX wieku.", prawda: false, wyjasnienie: "Odkryto go w 1922 roku, czyli w XX wieku." }
      ],
      wyjasnienie: "Egipt – ok. 3000 lat p.n.e., Hatszepsut – XV wiek p.n.e., odkrycie grobowca – 1922." },

    { id: "z103", typ: "wybor", priorytet: "B", wiedza: ["w34"], zrodlo: "podr. s. 24",
      pytanie: "Rok 1922, w którym odkryto grobowiec Tutenchamona, należy do:",
      odpowiedzi: ["XX wieku", "XIX wieku", "XXI wieku", "XVIII wieku"], poprawna: 0,
      wyjasnienie: "XX wiek to lata 1901–2000, więc rok 1922 należy do XX wieku." },

    { id: "z104", typ: "wybor", priorytet: "A", wiedza: ["w01", "w47"], zrodlo: "podr. s. 20 – oś czasu",
      pytanie: "Państwo egipskie powstało w epoce, którą nazywamy:",
      odpowiedzi: ["starożytnością", "prehistorią", "średniowieczem", "nowożytnością"], poprawna: 0,
      wyjasnienie: "Na osi czasu powstanie Egiptu (ok. 3000 lat p.n.e.) leży w starożytności." },

    /* ===== Krzyżówki ===== */
    { id: "z105", typ: "krzyzowka", priorytet: "A", wiedza: ["w27", "w28", "w29", "w32", "w34"], zrodlo: "ćw. s. 11 zad. 6",
      haslo: "MUMIA",
      opisHasla: "Zabalsamowane i owinięte bandażami ciało zmarłego.",
      wiersze: [
        { pytanie: "Nazwa grobowca, w którym spoczywają władcy Egiptu.", odpowiedz: "PIRAMIDA", litera: 4 },
        { pytanie: "Imię egipskiego władcy, którego grobowiec został odkryty w 1922 roku.", odpowiedz: "TUTENCHAMON", litera: 1 },
        { pytanie: "Materiał, z którego budowano grobowce władców Egiptu.", odpowiedz: "KAMIEŃ", litera: 2 },
        { pytanie: "Nazwa posągu lwa z głową człowieka, który miał strzec piramid.", odpowiedz: "SFINKS", litera: 2 },
        { pytanie: "Bogato zdobiona trumna, w której chowano ciało faraona.", odpowiedz: "SARKOFAG", litera: 1 }
      ],
      wyjasnienie: "Hasło MUMIA – ciało po mumifikacji: bez wnętrzności, zabalsamowane i owinięte bandażami." },

    { id: "z106", typ: "krzyzowka", priorytet: "A", wiedza: ["w03", "w11", "w15", "w24", "w25", "w29", "w41"], zrodlo: "podr. s. 20–24",
      haslo: "FARAON",
      opisHasla: "Król Egiptu z nieograniczoną władzą.",
      wiersze: [
        { pytanie: "Posąg lwa z ludzką głową, zwany strażnikiem piramid.", odpowiedz: "SFINKS", litera: 1 },
        { pytanie: "Najlepiej wykształceni Egipcjanie – prowadzili szkoły i obserwowali niebo.", odpowiedz: "KAPŁANI", litera: 1 },
        { pytanie: "Bóg-słońce i pan wszechświata.", odpowiedz: "RA", litera: 0 },
        { pytanie: "Wiedza potrzebna do obliczeń przy budowie piramid i świątyń.", odpowiedz: "MATEMATYKA", litera: 1 },
        { pytanie: "Bóg, który po śmierci osądzał człowieka i jego uczynki.", odpowiedz: "OZYRYS", litera: 0 },
        { pytanie: "Rzeka, dzięki której istniał Egipt.", odpowiedz: "NIL", litera: 0 }
      ],
      wyjasnienie: "Hasło FARAON – król Egiptu, przedstawiciel bogów na ziemi." }
  ]
});
