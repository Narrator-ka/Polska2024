// data/questions.js
const questions = [

{
    questionText: 'Prezydent Wołodymyr Zełenski prosi o wsparcie w celu wygrania wojny z Rosją',
    answers: [
      { text: 'Przekaż 1 miliard PLN', points: { finanse: -5, popularnosc: 3, obrona: 0, dyplomacja: 5 } },
      { text: 'Przekaż 500 milionów', points: { finanse: -3, popularnosc: 1, obrona: 0, dyplomacja: 2 } },
      { text: 'Przekaż stary sprzęt wojskowy', points: { finanse: 0, popularnosc: 4-, obrona: -4, dyplomacja: 1 } },
      { text: 'Odmów udzielenia pomocy', points: { finanse: 2, popularnosc: -5, obrona: 3, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question1.jpg'),
  },
  {
    questionText: 'Korzystna sytuacja na rynku pracy przynosi dodatkowe dochody (500 mln PLN). Na co chcesz przeznaczyć te pieniądze?',
    answers: [
      { text: 'Służba zdrowia', points: { finanse: 0, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
      { text: 'Edukacja', points: { finanse: 0, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
      { text: 'Wojsko', points: { finanse: 0, popularnosc: 1, obrona: 5, dyplomacja: 1 } },
      { text: 'TV Republika', points: { finanse: 0, popularnosc: -3, obrona: -3, dyplomacja: -3 } },

    ],
    image: require('../assets/images/question2.jpg'),
  },
  {
    questionText: 'Lekarze oraz straż graniczna strajkują, co robisz?',
    answers: [
      { text: 'Daj podwyżki strażnikom', points: { finanse: -2, popularnosc: -5, obrona: 5, dyplomacja: 0 } },
      { text: 'Daj podwyżki lekarzom', points: { finanse: -3, popularnosc: -5, obrona: 0, dyplomacja: 0 } },
      { text: 'Daj podwyżki jednym i drugim', points: { finanse: -5, popularnosc: 5, obrona: 5, dyplomacja: +2 } },
      { text: 'Nikt nie dostanie pieniędzy - siłą usuń strajkujących', points: { finanse: 0, popularnosc: -2, obrona: -5, dyplomacja: -5 } },

    ],
    image: require('../assets/images/question3.jpg'),
  },
  {
    questionText: 'Metropolita krakowski proponuje wsparcie polityczne, płatność co łaska (ale nie mniej niż 1% PKB)',
    answers: [
      { text: 'Przyjmij propozycję', points: { finanse: -10, popularnosc: 5, obrona: 5, dyplomacja: -5 } },
      { text: 'Odrzuć propozycję', points: { finanse: 0, popularnosc: -10, obrona: -5, dyplomacja: 5 } },

    ],
    image: require('../assets/images/question4.jpg'),
  },

  {
    questionText: 'Za sprawą kolejnej potrawki (tym razem z koszatniczki) walczysz z kolejną pandemią. Co robisz?',
    answers: [
      { text: 'Rozdaj darmowe maseczki i rękawiczki na ulicach.', points: { finanse: -2, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
      { text: 'Rzuć całą służbę zdrowia na aferę koszatniczek. Pacjenci z rakiem niech czekają.', points: { finanse: 0, popularnosc: -6, obrona: 0, dyplomacja: -3 } },
      { text: 'Zamknij lasy.', points: { finanse: 0, popularnosc: -5, obrona: 2, dyplomacja: 0 } },
      { text: 'Opracuj szczepionkę i zrób dobry marketing.', points: { finanse: 5, popularnosc: 1, obrona: 0, dyplomacja: +3 } },

    ],
    image: require('../assets/images/question5.jpg'),
  },
  {
    questionText: 'Uchodźcy z Ukrainy czują się niechciani. Sytuacja między Polakami i Ukraińcami robi się napięta. Jak ją załagodzisz?',
    answers: [
      { text: 'Nakaż stacjom radiowym robić wiadomości po ukraińsku.', points: { finanse: -2, popularnosc: -4, obrona: 1, dyplomacja: 2 } },
      { text: 'Nie reaguj. Będziesz obserwować.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -3} },
      { text: 'Zafundjuj rozwój kompetencji, żeby zatrzeć różnice społeczne.', points: { finanse: 0, popularnosc: -5, obrona: 2, dyplomacja: 0 } },
      { text: 'Opłać trolle internetowe, każąc im przekierować nienawiść na inną mniejszość.', points: { finanse: -3, popularnosc: 1, obrona: 0, dyplomacja: +3 } },

    ],
    image: require('../assets/images/question6.jpg'),
  },
  {
    questionText: 'Mikro-przedsiębiorcy zaczynają strajkować przeciw opłatom na ZUS, wstrzymując płatność podatków. Jak reagujesz?',
    answers: [
      { text: 'Zarządź ustawą miesiąc wakacji od ZUS.', points: { finanse: -2, popularnosc: 2, obrona: 0, dyplomacja: 0 } },
      { text: 'Na poważnie zaplanuj reformę i obiecaj opcjonalny ZUS.', points: { finanse: -3, popularnosc: 5, obrona: 0, dyplomacja: 1 } },
      { text: 'Daj dużą ulgę od ZUS jednej grupie zawodowej.', points: { finanse: -1, popularnosc: -4, obrona: -2, dyplomacja: 2 } },
      { text: 'Zaczekaj aż ochłoną.', points: { finanse: -1, popularnosc: -7, obrona: -4, dyplomacja: -4 } },

    ],
    image: require('../assets/images/question7.jpg'),
  },
  {
    questionText: 'Brakuje rąk do pracy, bo Zetki wciąż zastanawiają się jaka jest ich „prawdziwa droga życia". Co teraz?',
    answers: [
      { text: 'Jak to co? Trzeba sprzedać wizy azjatom!', points: { finanse: 3, popularnosc: -4, obrona: -5, dyplomacja: 2 } },
      { text: 'Ściągnij ekspatów ciekawymi ulgami i dotacjami.', points: { finanse: -1, popularnosc: 3, obrona: 0, dyplomacja: 2 } },
      { text: 'Zwiększ podatki, które doprowadzą do masowych zwolnień i bezrobotni się znajdą.', points: { finanse: 1, popularnosc: -5, obrona: -4, dyplomacja: -4 } },
      { text: 'Nic. Niech przedsiębiorcy sobie jakoś radzą.', points: { finanse: 0, popularnosc: -4, obrona: 0, dyplomacja: -2 } },

    ],
    image: require('../assets/images/question8.jpg'),
  },
  {
    questionText: 'Tsunami rujnuje Japonię, setki zabitych, tysiące osób bez dachu nad głową',
    answers: [
      { text: 'Przekaż środki finansowe', points: { finanse: -5, popularnosc: +3, obrona: -3, dyplomacja: +3 } },
      { text: 'Wyślij ratowników i pomoc humanitarną', points: { finanse: -4, popularnosc: +5, obrona: -5, dyplomacja: +5 } },
      { text: 'Złóż kondolencje za pośrednictwem mediów społecznościowych', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -5 } },
      { text: 'Sprowadź do domu Polaków przebywających w Japonii', points: { finanse: -4, popularnosc: +1, obrona: +1, dyplomacja: -5 } },

    ],
    image: require('../assets/images/question9.jpg'),
  },
  {
    questionText: 'Protesty antyrządowe, niezadowoleni obywatele zbierają się pod sejmem',
    answers: [
      { text: 'Porozmawiaj z protestującymi', points: { finanse: 0, popularnosc: +2, obrona: 0, dyplomacja: +5 } },
      { text: 'Zorganizuj anty-demonstrację', points: { finanse: -1, popularnosc: -4, obrona: -3, dyplomacja: -2 } },
      { text: 'Każ wojsku i policji zakończyć demonstrację siłowo', points: { finanse: -5, popularnosc: -5, obrona: -5, dyplomacja: -5 } },
      { text: 'Nic nie rób', points: { finanse: 0, popularnosc: -2, obrona: 0, dyplomacja: -2 } },

    ],
    image: require('../assets/images/question10.jpg'),
  },
  {
    questionText: 'Strajk kierowców limuzyn rządowych. Domagają się wyższych zarobków',
    answers: [
      { text: 'Daj im podwyżki', points: { finanse: -4, popularnosc: +2, obrona: +1, dyplomacja: -3 } },
      { text: 'Negocjuj z protestującymi', points: { finanse: -2, popularnosc: +3, obrona: 0, dyplomacja: -1 } },
      { text: 'Zwolnić wszystkich, od dzisiaj politycy nie będą jeździli limuzynami', points: { finanse: +5, popularnosc: +5, obrona: -5, dyplomacja: -5 } },
      { text: 'Każ wojsku i policji siłowo zakończyć demonstrację', points: { finanse: -3, popularnosc: -5, obrona: -5, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question11.jpg'),
},

{
    questionText: 'Ceny węgla poszybowały w górę, ludzi nie stać na ogrzewanie',
    answers: [
      { text: 'Zaproponuj dopłaty do zakupu węgla', points: { finanse: -4, popularnosc: +2, obrona: +1, dyplomacja: -3 } },
      { text: 'Zaproponuj dopłaty do wymiany pieców na bardziej ekologiczne źródła energii', points: { finanse: -2, popularnosc: +3, obrona: 0, dyplomacja: -1 } },
      { text: 'Importuj tani węgiel z Rosji', points: { finanse: +5, popularnosc: +5, obrona: -5, dyplomacja: -5 } },
      { text: 'Każ ludziom zbierać chrust w lesie', points: { finanse: +3, popularnosc: -5, obrona: -5, dyplomacja: +3 } },
    ],
    image: require('../assets/images/question12.jpg'),
  },
  {
    questionText: 'Otrzymałeś dofinansowanie z Unii Europejskiej, na co chcesz przeznaczyć pieniądze?',
    answers: [
      { text: 'Służba zdrowia', points: { finanse: +1, popularnosc: +3, obrona: +1, dyplomacja: 0 } },
      { text: 'Edukacja', points: { finanse: +1, popularnosc: +3, obrona: +1, dyplomacja: 0 } },
      { text: 'Wojsko', points: { finanse: +1, popularnosc: +3, obrona: +5, dyplomacja: 0 } },
      { text: 'Premie dla polityków', points: { finanse: +5, popularnosc: -5, obrona: -5, dyplomacja: +5 } },
    ],
    image: require('../assets/images/question13.jpg'),
  },
  {
    questionText: 'PZPN chce większego finansowania (1 miliard PLN), w zamian obiecuje że nasi piłkarze pojadą na mundial',
    answers: [
      { text: 'Daj 2 miliardy i pochwal się tym w mediach społecznościowych', points: { finanse: -5, popularnosc: +5, obrona: -2, dyplomacja: -5 } },
      { text: 'Daj 1 miliard PLN', points: { finanse: -3, popularnosc: +3, obrona: -1, dyplomacja: -3 } },
      { text: 'Daj 500 milionów PLN', points: { finanse: -1, popularnosc: +1, obrona: 0, dyplomacja: 0 } },
      { text: 'Nic nie dostaną koniec finansowania piłki nożnej z budżetu Państwa', points: { finanse: +5, popularnosc: -5, obrona: 0, dyplomacja: +1 } },
    ],
    image: require('../assets/images/question14.jpg'),
  },
  {
    questionText: 'Partia „Za wolność” złożyła propozycję ustawy o związkach partnerskich. Co robisz?',
    answers: [
      { text: 'Poprzyj projekt', points: { finanse: 0, popularnosc: +10, obrona: 0, dyplomacja: -5 } },
      { text: 'Zaproponuj ustawę o osobie najbliższej', points: { finanse: -2, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
      { text: 'Odeślij ustawę do poprawek (usuń możliwość przysposabiania dzieci przez homoseksualistów)', points: { finanse: -5, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
      { text: 'Skrytykuj ustawę jako gorszącą i demoralizującą', points: { finanse: 0, popularnosc: -10, obrona: 0, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question15.jpg'),
  },
  {
    questionText: 'Dwóch polityków z Twojej partii zostało skazanych za przestępstwa, których się dopuścili.',
    answers: [
      { text: 'Ułaskaw drani', points: { finanse: 5, popularnosc: -10, obrona: -5, dyplomacja: 0 } },
      { text: 'Niech odbędą karę', points: { finanse: 0, popularnosc: 10, obrona: 0, dyplomacja: 0 } },
      { text: 'Każ im się zgłosić, a potem cichcem ich wypuść', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
      { text: 'Umieść ich w areszcie domowym', points: { finanse: 0, popularnosc: 5, obrona: -5, dyplomacja: 5 } },
    ],
    image: require('../assets/images/question16.jpg'),
  },
  {
    questionText: 'Obiecałeś nauczycielom podwyżki, których powoli zaczynają się domagać. Co robisz?',
    answers: [
      { text: 'Daj im obiecany 1000 zł podwyżki', points: { finanse: -8, popularnosc: 10, obrona: 0, dyplomacja: 0 } },
      { text: 'Daj im połowę obiecanej kwoty.', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
      { text: 'Zastąp obiecaną podwyżkę zmniejszeniem wymiaru godzin', points: { finanse: 0, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
      { text: 'Nic i nie dawaj. Mają 2 miesiące wakacji.', points: { finanse: 0, popularnosc: -10, obrona: -5, dyplomacja: -10 } },
    ],
    image: require('../assets/images/question17.jpg'),
  },
  {
    questionText: 'Podczas poprzednich rządów telewizja publiczna była tubą propagandową władzy. Co robisz po objęciu sterów?',
    answers: [
      { text: 'Obcinam im finansowanie', points: { finanse: 5, popularnosc: 5, obrona: -5, dyplomacja: 0 } },
      { text: 'Wymieniam kadrę.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
      { text: 'Kompletnie usuwam media finansowane przez rząd.', points: { finanse: 0, popularnosc: 0, obrona: 0, dyplomacja: 5 } },
      { text: 'Wykorzystam skorumpowanych dziennikarzy do własnych celów.', points: { finanse: 0, popularnosc: -5, obrona: 5, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question18.jpg'),
  },
  {
    questionText: 'Młodzież i rodzice protestują przeciwko obowiązkowym lekcjom religii. Jak reagujesz na ich postulaty?',
    answers: [
      { text: 'Zastępujesz przedmiot etyką.', points: { finanse: -1, popularnosc: 2, obrona: 0, dyplomacja: 2 } },
      { text: 'Wycofujesz całkowicie religię bez alternatywy.', points: { finanse: 2, popularnosc: 3, obrona: 0, dyplomacja: -1 } },
      { text: 'Dodajesz dodatkowe godziny religii.', points: { finanse: -2, popularnosc: -3, obrona: 0, dyplomacja: 2 } },
      { text: 'Zmień religię w przedmiot dodatkowy.', points: { finanse: 0, popularnosc: 2, obrona: 0, dyplomacja: -1 } },
    ],
    image: require('../assets/images/question19.jpg'),
  },
  {
    questionText: 'Grupa naukowców odkryła nowy gatunek misia, który zamieszkuje Bieszczady. Jak wykorzystasz tę informację?',
    answers: [
      { text: 'Rozwijaj turystykę, promując „bieszczadzkie safari"', points: { finanse: 2, popularnosc: 2, obrona: 0, dyplomacja: 2 } },
      { text: 'Zleć prowadzenie badań na misiach.', points: { finanse: -1, popularnosc: -2, obrona: 0, dyplomacja: -2 } },
      { text: 'Produkuj ekskluzywne futra z misi.', points: { finanse: 3, popularnosc: -4, obrona: 0, dyplomacja: -2 } },
      { text: 'Rozpocznij kampanię przeciwko naturalnym wrogom misi.', points: { finanse: -3, popularnosc: 1, obrona: 0, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question20.jpg'),
  },
  {
    questionText: 'Polski zespół muzyczny zdobywa nagrodę Grammy. Jak świętujesz ich sukces?',
    answers: [
      { text: 'Członkowie otrzymują w nagrodę mieszkanie.', points: { finanse: -4, popularnosc: -1, obrona: 0, dyplomacja: 1 } },
      { text: 'Dziękujesz artystom w telewizji za reprezentowanie kraju .', points: { finanse: 0, popularnosc: 1, obrona: 0, dyplomacja: 0 } },
      { text: 'Fundujesz nagrody finansowe (10 000 zł) z budżetu państwa.', points: { finanse: -2, popularnosc: -1, obrona: 0, dyplomacja: 0 } },
      { text: 'Oddajesz zespołowi główne miejsce na sylwestrze z TVP.', points: { finanse: -1, popularnosc: -1, obrona: 0, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question21.jpg'),
  },
  {
    questionText: 'Polscy artyści buntują społeczeństwo przeciwko władzy. Jakie działania podejmujesz?',
    answers: [
      { text: 'Wprowadź cenzurę.', points: { finanse: -3, popularnosc: -2, obrona: 2, dyplomacja: -1 } },
      { text: 'Zapłać artystom za propagandę.', points: { finanse: -2, popularnosc: -1, obrona: 1, dyplomacja: 0 } },
      { text: 'Powiedz na wizji, że artyści służą zagranicznym koncernom.', points: { finanse: 0, popularnosc: 1, obrona: 1, dyplomacja: -1 } },
      { text: 'Zajmij się ich postulatami.', points: { finanse: -4, popularnosc: 2, obrona: 1, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question22.jpg'),
  },
  {
    questionText: 'Polski wynalazca tworzy nowy środek transportu – latający samochód. Jakie regulacje wprowadzasz, aby utrzymać bezpieczeństwo?',
    answers: [
      { text: 'Zaprojektuj specjalny egzamin na prawo jazdy.', points: { finanse: -1, popularnosc: 2, obrona: 1, dyplomacja: 2 } },
      { text: 'Ogranicz możliwość użycia pojazdów tylko przez służby państwowe.', points: { finanse: -2, popularnosc: -2, obrona: 1, dyplomacja: 0 } },
      { text: 'Zbanuj pojazdy w PL, tłumacząc, że mogą być kontrolowane przez rosyjskich hakerów.', points: { finanse: -2, popularnosc: -1, obrona: -1, dyplomacja: -1 } },
    ],
    image: require('../assets/images/question23.jpg'),
  },
  {
    questionText: 'Z powodu zmian klimatycznych Polska doświadcza poważnej suszy. Co robisz?',
    answers: [
      { text: 'Poproś obywateli o ograniczenie zużycia wody.', points: { finanse: 1, popularnosc: -2, obrona: -1, dyplomacja: 0 } },
      { text: 'Zakręć kurki - dosłownie i wydzielaj obywatelom wodę.', points: { finanse: 2, popularnosc: -3, obrona: -1, dyplomacja: 0 } },
      { text: 'Finansuj rozwój startupów specjalizujących się w uzdatnianiu i pozyskiwaniu wody', points: { finanse: -2, popularnosc: 2, obrona: 0, dyplomacja: 2 } },
    ],
    image: require('../assets/images/question24.jpg'),
  },
  {
    questionText: 'Słowacja zrobiła znaczne postępy w rozwoju technologii kosmicznych.',
    answers: [
      { text: 'Zwolnij szefa Polskiej Agencji Kosmicznych', points: { finanse: 1, popularnosc: 1, obrona: 0, dyplomacja: 0 } },
      { text: 'Zaproponuj tamtejszej agencji wymianę wiedzy.', points: { finanse: 1, popularnosc: 1, obrona: 0, dyplomacja: 3 } },
      { text: 'Dofinansuj Polską Agencję Kosmiczną.', points: { finanse: -3, popularnosc: 2, obrona: 2, dyplomacja: 1 } },
      { text: 'Zorganizuj konkurs dla studentów i módl się, żeby wymyślili coś szałowego.', points: { finanse: -2, popularnosc: 1, obrona: 0, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question25.jpg'),
  },
  {
    questionText: 'Nadeszła możliwość wprowadzenia zmian w składzie trybunału konstytucyjnego. Zaproponuj:',
    answers: [
      { text: 'Aby skład pozostał bez zmian', points: { finanse: 0, popularnosc: 0, obrona: -5, dyplomacja: 5 } },
      { text: 'Wymień wszystkich sędziów na swoich ziomków.', points: { finanse: -5, popularnosc: -10, obrona: 10, dyplomacja: 0 } },
      { text: 'Niech kandydaci będą wybierani przez innych sędziów', points: { finanse: -10, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
      { text: 'Niech sędziów wybierze sejm', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
    ],
    image: require('../assets/images/question26.jpg'),
  },
  {
    questionText: 'Po ataku USA na Jemen, gwałtownie wzrosły ceny ropy. Co robisz?',
    answers: [
      { text: 'Zapytaj prezydenta USA, co on odjaniepawla?', points: { finanse: 0, popularnosc: -5, obrona: 10, dyplomacja: -5 } },
      { text: 'Dogadaj się z Rosją.', points: { finanse: -5, popularnosc: -5, obrona: 10, dyplomacja: -10 } },
      { text: 'Uspokój społeczeństwo, że dostawy ropy są zabezpieczone (jasne, że nie są!)', points: { finanse: 0, popularnosc: 10, obrona: -5, dyplomacja: -5 } },
      { text: 'Powołaj komisję specjalistów do stworzenia planu na tę okoliczność', points: { finanse: -6, popularnosc: 5, obrona: 10, dyplomacja: 5 } },
    ],
    image: require('../assets/images/question27.jpg'),
  },
  {
    questionText: 'Opozycja szykuje marsz protestacyjny w związku z Twoimi działaniami.',
    answers: [
      { text: 'Niech protestują - na zdrowie!', points: { finanse: 0, popularnosc: -7, obrona: -5, dyplomacja: 5 } },
      { text: 'Rozgoń protestujących.', points: { finanse: -3, popularnosc: -10, obrona: 10, dyplomacja: -5 } },
      { text: 'Wykorzystaj media, żeby ośmieszyć protestujących', points: { finanse: 0, popularnosc: 5, obrona: 0, dyplomacja: 3 } },
      { text: 'Zaproś przedstawicieli strajku do rozmów', points: { finanse: -5, popularnosc: 10, obrona: 5, dyplomacja: 10 } },
    ],
    image: require('../assets/images/question28.jpg'),
  },
    {
    questionText: 'Putin planuje „zabezpieczyć" dawny majątek należący do Rosji carskiej.',
    answers: [
      { text: 'Zacznij się zbroić.', points: { finanse: -5, popularnosc: 7, obrona: 5, dyplomacja: -2 } },
      { text: 'Zacznij rozmowy z Rosją na ten temat.', points: { finanse: 0, popularnosc: -4, obrona: 0, dyplomacja: 4 } },
      { text: 'Zgódź się na wszelkie żądania.', points: { finanse: -10, popularnosc: -10, obrona: -5, dyplomacja: 3 } },
      { text: 'Ustal z państwami zainteresowanymi wspólną linię obrony.', points: { finanse: -3, popularnosc: 7, obrona: 5, dyplomacja: 5 } },
    ],
    image: require('../assets/images/question29.jpg'),
  },
    {
    questionText: 'Rosja stosuje wobec Polski wojnę technologiczną zakłócając sygnał GPS.',
    answers: [
      { text: 'Powołaj zespół specjalistów do zabezpieczenia sygnału', points: { finanse: -2, popularnosc: 5, obrona: 6, dyplomacja: -2 } },
      { text: 'Naradź się z państami NATO', points: { finanse: 0, popularnosc: -2, obrona: 4, dyplomacja: 2 } },
      { text: 'Odwdzięcz się tym samym.', points: { finanse: -7, popularnosc: -2, obrona: 8, dyplomacja: -6 } },
      { text: 'Nie reaguj.', points: { finanse: 0, popularnosc: -5, obrona: -7, dyplomacja: -1 } },
    ],
    image: require('../assets/images/question30.jpg'),
  },
    {
    questionText: 'Służba zdrowia jest tak niewydolna, że na wizytę do internisty czeka się 3 miesiące.',
    answers: [
      { text: 'Sprywatyzuj służbę zdrowia.', points: { finanse: 3, popularnosc: -3, obrona: 0, dyplomacja: 0 } },
      { text: 'Zwiększ podatki, aby dofinansować NFZ', points: { finanse: 6, popularnosc: -5, obrona: 0, dyplomacja: 0 } },
      { text: 'Jak im się spieszy, to niech idą prywatnie.', points: { finanse: 0, popularnosc: -7, obrona: 0, dyplomacja: 0 } },
      { text: 'Sfinansuj programy profilaktyczne.', points: { finanse: -4, popularnosc: 3, obrona: 0, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question31.jpg'),
  },
    {
    questionText: 'Masz dodatkowy budżet, który możesz przeznaczyć na edukację.',
    answers: [
      { text: 'Daj nagrody nauczycielom.', points: { finanse: -2, popularnosc: 3, obrona: 0, dyplomacja: 0 } },
      { text: 'Zwiększ stawki nauczycieli.', points: { finanse: -2, popularnosc: 5, obrona: 0, dyplomacja: 3 } },
      { text: 'Sfinansuj praktyczne zajęcia dodatkowe.', points: { finanse: -2, popularnosc: 7, obrona: 0, dyplomacja: 2 } },
      { text: 'Dorzuć więcej godzin religii. ', points: { finanse: -2, popularnosc: -5, obrona: 0, dyplomacja: -1} },
    ],
    image: require('../assets/images/question32.jpg'),
  },
    {
    questionText: 'Białoruscy uchodźcy zaczynają znacznymi grupami przelewać się przez granice.',
    answers: [
      { text: 'Zwiększ liczbę strażników granicznych', points: { finanse: -1, popularnosc: 2, obrona: 5, dyplomacja: -2 } },
      { text: 'Organizuj obozy dla uchodźców przy granicy.', points: { finanse: -3, popularnosc: 0, obrona: 1, dyplomacja: 1 } },
      { text: 'Stwórz specjalny zasiłek dla uchodźców.', points: { finanse: -5, popularnosc: -7, obrona: 2, dyplomacja: 1 } },
      { text: 'Potraktuj ich jako tanią siłę roboczą. ', points: { finanse: 3, popularnosc: -5, obrona: -3, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question33.jpg'),
  },
      {
    questionText: 'Coraz mniej osób chce wstępować w szeregi policji i brakuje Ci stróżów prawa.',
    answers: [
      { text: 'Uprość egzaminy wstępne.', points: { finanse: 0, popularnosc: 2, obrona: -4, dyplomacja: 0 } },
      { text: 'Stwórz ciekawą ofertę kierunków w akademii.', points: { finanse: -3, popularnosc: 5, obrona: 3, dyplomacja: 0 } },
      { text: 'Przyznaj policjantom specjalne przywileje.', points: { finanse: -2, popularnosc: -6, obrona: -4, dyplomacja: -1 } },
      { text: 'Zapewnij służbowe, nieoznakowane auta dla funkcjonariuszy. ', points: { finanse: -8, popularnosc: 2, obrona: 0, dyplomacja: 0 } },
    ],
    image: require('../assets/images/question34.jpg'),
  },
      {
    questionText: 'Czas na lepsze zintegrowanie ludności romskiej ze społeczeństwem.',
    answers: [
      { text: 'Egzekwuj obowiązek szkolny w tej grupie.', points: { finanse: -4, popularnosc: -3, obrona: 3, dyplomacja: 2 } },
      { text: 'Otwórz ogniska pracy pozaszkolnej w romskich dzielnicach.', points: { finanse: -5, popularnosc: 2, obrona: 3, dyplomacja: 2 } },
      { text: 'Zabierz romskie dzieci i umieść w polskich rodzinach.', points: { finanse: 0, popularnosc: -4, obrona: -3, dyplomacja: -10 } },
      { text: 'Wspieraj organizowanie romskich festiwali.', points: { finanse: -5, popularnosc: -1, obrona: 3, dyplomacja: 3 } },
    ],
    image: require('../assets/images/question35.jpg'),
  },

  {
    questionText: 'Zaproszono Cię na szczyt klimatyczny, ale nie znasz angielskiego.',
    answers: [
      { text: 'Szykujesz przemowę i wkuwasz na pamięć.', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: -5 } },
      { text: 'Korzystasz z usług tłumacza.', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: 10 } },
      { text: 'This is..., this is... eee, eee. I think..., I think...', points: { finanse: -5, popularnosc: -5, obrona: 0, dyplomacja: -10 } },
      { text: 'Wezmę L4', points: { finanse: 0, popularnosc: 0, obrona: -5, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question36.jpg'),
  },
    {
    questionText: 'Pacjencji domagają się zmian w służbie zdrowia.',
    answers: [
      { text: 'Stwórz zespół ds. naprawy służby zdrowia.', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
      { text: 'Daj więcej kasy na NFZ. Niech sobie radzą..', points: { finanse: -10, popularnosc: 0, obrona: 0, dyplomacja: 5 } },
      { text: 'Nakłam, że pracujecie nad super duper USTAWĄ.', points: { finanse: 0, popularnosc: 10, obrona: 0, dyplomacja: 5 } },
      { text: 'Olej temat.', points: { finanse: 0, popularnosc: -10, obrona: 0, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question37.jpg'),
  },   
    {
    questionText: 'Dwóch byłych polityków, którzy zostali skazani za przestępstwa, rozpoczęli strajk głodowy.',
    answers: [
      { text: 'Nie interweniuj.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
      { text: 'Nakaż przymusowe dokarmianie.', points: { finanse: 0, popularnosc: -10, obrona: 0, dyplomacja: -10 } },
      { text: 'Zastosuj karę dyscyplinarną.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -5 } },
      { text: 'Umieść więźniów w areszcie domowym.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: 5 } },
    ],
    image: require('../assets/images/question38.jpg'),
  },
    {
    questionText: 'Po reformie sądownictwa, Polska otrzyma fundusze z UE, ale prezydent nie chce poprzeć zmian.',
    answers: [
      { text: 'Nic nie zmieniaj.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -5 } },
      { text: 'Wprowadzaj reformy, konsekwentnie bez zgody prezydenta.', points: { finanse: 5, popularnosc: -5, obrona: 0, dyplomacja: -10 } },
      { text: 'Przyspiesz wybory prezydenckie.', points: { finanse: 5, popularnosc: 5, obrona: 0, dyplomacja: -5 } },
      { text: 'Negocjuj z UE.', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: 10 } },
    ],
    image: require('../assets/images/question39.jpg'),
  },
  {
    questionText: 'Nowy program w TV wspierającej opozycję robi furorę.',
    answers: [
      { text: 'Skrytykuj i wyśmiej gniota.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -5 } },
      { text: 'Obiektywnie oceń nowy program.', points: { finanse: 0, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
      { text: 'Puszczaj w państwowej telewizji największe hity w porze emisji.', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: 5 } },
      { text: 'A co Cię obchodzi jakaś tam telewizja?', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -5 } },
    ],
    image: require('../assets/images/question40.jpg'),
  },
  {
      questionText: 'Urzędy nie wyrabiają się z wydawaniem Ukraińcom kart pobytu.',
      answers: [
        { text: 'Zwiększ budżet na urzędników.', points: { finanse: -5, popularnosc: 0, obrona: 0, dyplomacja: 0 } },
        { text: 'Trudno, niech sobie radzą.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -5 } },
        { text: 'Uprość procedury.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +3 } },
        { text: 'Znieś czasowo obowiązek posiadania kart.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +5 } },
      ],
      image: require('../assets/images/question41.jpg'),
    },
    {
      questionText: 'Zaproponowałeś ukraińskiemu wojsku stare polskie samoloty, ale nie chcą tych „śmieci".',
      answers: [
        { text: 'Nie, to nie. Olej sprawę.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -5 } },
        { text: 'Sfinansuj kilka nowych jednostek.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 5 } },
        { text: 'Utrudnij ukraińskim imigrantom życie w Polsce.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -3 } },
        { text: 'Publicznie nazwij ukraińców roszeniowymi niewdzięcznikami.', points: { finanse: 0, popularnosc: -5, obrona: -5, dyplomacja: -10 } },
      ],
      image: require('../assets/images/question42.jpg'),
    },
    {
      questionText: 'Metereolodzy wydają alerty o możliwych huraganach i wichurach.',
      answers: [
        { text: 'Od tego są służby ratunkowe.', points: { finanse: 0, popularnosc: -5, obrona: -5, dyplomacja: 0 } },
        { text: 'Postaw wszystkie służby w stan zwiększonej gotowości.', points: { finanse: -5, popularnosc: +5, obrona: +5, dyplomacja: 0 } },
        { text: 'Niech publiczna telewizja nadaje ostrzeżenia.', points: { finanse: 0, popularnosc: +3, obrona: +3, dyplomacja: 0 } },
        { text: 'Przygotuj budżet na pomoc poszkodowanym.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
      ],
      image: require('../assets/images/question43.jpg'),
    },
    {
      questionText: 'Opozycja zarzuca Ci, że latasz rządowym samolotem nawet po piwo do Żabki.',
      answers: [
        { text: 'Wylicz im w Tweecie ich własne nadużycia.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -2 } },
        { text: 'Odpowiedz, że inaczej nie wyrobisz się z obowiązkami.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -3 } },
        { text: 'Niech rzecznik powie, że to loty techniczne.', points: { finanse: 0, popularnosc: 0, obrona: 0, dyplomacja: +5 } },
        { text: 'Nie odpowiadaj na zaczepki.', points: { finanse: 0, popularnosc: +2, obrona: 0, dyplomacja: 0 } },
      ],
      image: require('../assets/images/question44.jpg'),
    },
    {
      questionText: 'Poprzedni premier zarzuca Ci łamanie konstytucji.',
      answers: [
        { text: 'Przewróć oczami i uśiechnij się znacząco.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +2 } },
        { text: 'Wymień przykłady, kiedy to on ją łamał.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -3 } },
        { text: 'Udowodni podczas konferencji, że to nieprawda.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +10 } },
        { text: 'To niezbędne, żeby naprawić ten burdel.', points: { finanse: 0, popularnosc: -2, obrona: 0, dyplomacja: -2 } },
      ],
      image: require('../assets/images/question45.jpg'),
    },
    {
      questionText: 'Jak zachęcisz młode mamy do powrotu do pracy?',
      answers: [
        { text: 'Darmowe żłobki dla dzieci pracujących.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
        { text: 'Dofinansowanie do opieki nad dzieckiem.', points: { finanse: -5, popularnosc: +3, obrona: 0, dyplomacja: 0 } },
        { text: 'Chcieli mieć dzieci, to ich sprawa.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: +10 } },
        { text: 'Przygotuj program ulg dla firm zatrudniających młode mamy.', points: { finanse: -3, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
      ],
      image: require('../assets/images/question46.jpg'),
    },
    {
      questionText: 'Polacy narzekają na ceny opieki dentystycznej.',
      answers: [
        { text: 'Rozszerz wachlarz świadczeń na NFZ.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
        { text: 'Ufunduj bon dentystyczny.', points: { finanse: -5, popularnosc: +3, obrona: 0, dyplomacja: 0 } },
        { text: 'Nie ma na to teraz kasy. Dopisz do listy.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: 0 } },
        { text: 'Nie będzie wybielania zębów na NFZ!', points: { finanse: 0, popularnosc: -7, obrona: 0, dyplomacja: -5 } },
      ],
      image: require('../assets/images/question47.jpg'),
    },
    {
      questionText: 'W Polsce jest rekordowo niska liczba urodzeń.',
      answers: [
        { text: 'Podnieś 800+ do 1000+.', points: { finanse: -10, popularnosc: +5, obrona: 0, dyplomacja: 0 } },
        { text: 'Znieczulenie do porodu dla każdego!', points: { finanse: -5, popularnosc: +7, obrona: 0, dyplomacja: 0 } },
        { text: 'Sfinansuj kampanię społeczną o szkodliwości dawania w szyję.', points: { finanse: -5, popularnosc: -5, obrona: 0, dyplomacja: 0 } },
        { text: 'Zdelegalizuj antykoncepcję.', points: { finanse: -5, popularnosc: -10, obrona: -5, dyplomacja: -5 } },
      ],
      image: require('../assets/images/question48.jpg'),
    },
    {
      questionText: 'Psychologia i psychiatria dziecięca w Polsce to jakiś mit!',
      answers: [
        { text: 'Stwórz specjalny program dla studentów tych kierunków.', points: { finanse: -5, popularnosc: 0, obrona: 0, dyplomacja: 0 } },
        { text: 'Zobowiąż wszystkich specjalistów do świadczenia godzin w ramach szkół i NFZ.', points: { finanse: -3, popularnosc: -3, obrona: 0, dyplomacja: +3 } },
        { text: 'Podnieś pensje pracującym w sektorze publicznym.', points: { finanse: -10, popularnosc: 5, obrona: 0, dyplomacja: 0 } },
        { text: 'Ściągnij ukraińskich psychiatrów.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: 0 } },
      ],
      image: require('../assets/images/question49.jpg'),
    },
    {
      questionText: 'Czy kraj powinien być świecki?',
      answers: [
        { text: 'Oczywiście. Won z krzyżami!', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -5 } },
        { text: 'Polska od zawsze była katolicka.', points: { finanse: 0, popularnosc: -5, obrona: 0, dyplomacja: -3 } },
        { text: 'Kościoły są ważnym elementem polskiej kultury, ale należy zachować rozdział od władzy.', points: { finanse: 0, popularnosc: +5, obrona: 0, dyplomacja: +5 } },
        { text: 'Wszystkie religie powinny być traktowane równo.', points: { finanse: 0, popularnosc: -2, obrona: 0, dyplomacja: +5 } },
      ],
      image: require('../assets/images/question50.jpg'),
    },
     {
      questionText: 'Opozycja coś kombinuje. ',
      answers: [
        { text: 'Każ ich podsłuchiwać.', points: { finanse: 0, popularnosc: -5, obrona: +3, dyplomacja: +2 } },
        { text: 'Oni wiecznie coś kobinują...', points: { finanse: 0, popularnosc: 0, obrona: -5, dyplomacja: 0 } },
        { text: 'Aresztuj i przesłuchaj podejrzanych.', points: { finanse: 0, popularnosc: -5, obrona: +5, dyplomacja: -5 } },
        { text: 'Zorganizuj prowokację.', points: { finanse: 0, popularnosc: 0, obrona: +5, dyplomacja: 0 } },
      ],
      image: require('../assets/images/question51.jpg'),
    },
     {
      questionText: 'Białoruś wspierana przez Ruskich najeżdża Polskę.',
      answers: [
        { text: 'Ogłoś pobór powszechny. Cofaj spod granicy uciekających mężczyzn.', points: { finanse: -2, popularnosc: -6, obrona: 5, dyplomacja: 0 } },
        { text: 'Wezwij posiłki od sojuszników - może tym razem się pojawią.', points: { finanse: 0, popularnosc: 2, obrona: 1, dyplomacja: -3 } },
        { text: 'Postaw na technologię. Rzuć wszystkie środki w hakerów i niech rozwalą wroga od środka.', points: { finanse: -5, popularnosc: 0, obrona: +5, dyplomacja: -2 } },
        { text: 'Poddaj się. Najwyżej będziemy mówić po rusku, ale będziemy żyć.', points: { finanse: -10, popularnosc: -10, obrona: -10, dyplomacja: -10 } },
      ],
      image: require('../assets/images/question52.jpg'),
    },
     {
      questionText: 'Afera wizowa zaszkodziła wizerunkowi Polski na arenie międzynarodowej.',
      answers: [
        { text: 'Zaostrz prawo wizowe.', points: { finanse: -3, popularnosc: 3, obrona: 6, dyplomacja: -2 } },
        { text: 'Rozlicz tych, którzy brali łapówki.', points: { finanse: 3, popularnosc: 6, obrona: 2, dyplomacja: 2 } },
        { text: 'Wyraź publiczne ubolewanie i zapewnij, że sytuacja się nie powtórzy.', points: { finanse: 0, popularnosc: -7, obrona: 0, dyplomacja: -5 } },
        { text: 'Publicznie protestuj przeciwko dyskryminacji Polaków za granicą.', points: { finanse: 0, popularnosc: 1, obrona: 0, dyplomacja: -10 } },
      ],
      image: require('../assets/images/question53.jpg'),
    },
     {
      questionText: 'Przyszły roztopy. Mieszkańcy miast protestują na ulicach przeciwko zasranym przez psy chodnikom. ',
      answers: [
        { text: 'Wprowadź podatek od posiadania zwierząt domowych, sfinansuj sprzątanie chodników.', points: { finanse: 3, popularnosc: 1, obrona: 0, dyplomacja: 0 } },
        { text: 'Zwiększ kary za zostawianie placków.', points: { finanse: 2, popularnosc: -2, obrona: 0, dyplomacja: 0 } },
        { text: 'Sfinansuj regularnie uzupełniane kosze z woreczkami na odchody.', points: { finanse: -3, popularnosc: 5, obrona: 0, dyplomacja: 0 } },
        { text: 'Zabieraj psy tym, którzy nie sprzątają.', points: { finanse: -2, popularnosc: -5, obrona: 0, dyplomacja: 0 } },
      ],
      image: require('../assets/images/question54.jpg'),
    },
     {
      questionText: 'Chcesz zachęcić kobiety posiadające dzieci do podjęcia aktywności zawodowej.',
      answers: [
        { text: 'Stwórz ulgę podatkową dla pracujących rodziców.', points: { finanse: -2, popularnosc: 5, obrona: 0, dyplomacja: 2 } },
        { text: 'Zaprojektuj darmowe kursy doszkalajace dla nieaktywnych zawodowo kobiet.', points: { finanse: -5, popularnosc: 4, obrona: 0, dyplomacja: 1 } },
        { text: 'Dofinansuj żłobki dla pracujących.', points: { finanse: -3, popularnosc: 7, obrona: 0, dyplomacja: 0 } },
        { text: 'Zagwarantuj ustawą elastyczne godziny pracy matkom.', points: { finanse: 0, popularnosc: 7, obrona: 0, dyplomacja: 0 } },
      ],
      image: require('../assets/images/question55.jpg'),
    },

 {
      questionText: 'Narodowa perełka Sapkowskiego została pożarta, przerzuta i wypluta przez Netflixa.',
      answers: [
        { text: 'Chroń ustawą dziedzictwo narodowe.', points: { finanse: -3, popularnosc: 2, obrona: 0, dyplomacja: -3 } },
        { text: 'Stwórz szablony umów dla twórców, chroniące ich prawa.', points: { finanse: 2, popularnosc: 5, obrona: 0, dyplomacja: -3 } },
        { text: 'Inwestuj w wysokiej jakości ekranizacje rodzimych powieści.', points: { finanse: -5, popularnosc: 5, obrona: 0, dyplomacja: 2 } },
        { text: 'Wypowiadaj się negatywnie w mediach o ideologii LGBT+ w amerykańskim kinie.', points: { finanse: -2, popularnosc: 4, obrona: -1, dyplomacja: -5 } },
      ],
      image: require('../assets/images/question56.jpg'),
    },
     {
      questionText: 'UE oczekuje od Ciebie szybkiego rozwiązania problemu smogu w miastach.',
      answers: [
        { text: 'Dofinansuj bilety miesięczne dla pewnych grup mieszkańców.', points: { finanse: -4, popularnosc: 8, obrona: 0, dyplomacja: 0 } },
        { text: 'Ogranicz wjeżdżanie aut innych niż elektryczne do ścisłego centrum miasta.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: 3 } },
        { text: 'Won od diesla! Weź grzywnę od UE na klatę.', points: { finanse: -8, popularnosc: -2, obrona: 0, dyplomacja: -5 } },
        { text: 'Zainwestuj w eksperymentalne metody oczyszczania powietrza.', points: { finanse: -5, popularnosc: 2, obrona: 0, dyplomacja: 5 } },
      ],
      image: require('../assets/images/question57.jpg'),
    },
     {
      questionText: 'Rząd Rumunii ogłasza rozpoczęcie pracy nad przełomowym projektem dotyczącym energii odnawialnej.',
      answers: [
        { text: 'Zaproponuj współpracę i wyślij najtęższe polskie umysły.', points: { finanse: -2, popularnosc: 8, obrona: 0, dyplomacja: 6 } },
        { text: 'Zainwestuj w projekt.', points: { finanse: -2, popularnosc: 6, obrona: 0, dyplomacja: 4 } },
        { text: 'Rozpocznij własne badania i ścigaj się z Rumunami.', points: { finanse: -4, popularnosc: 2, obrona: 0, dyplomacja: -7 } },
      ],
      image: require('../assets/images/question58.jpg'),
    },
   {
      questionText: 'Pewien znany historyk ogłasza, że mamy historyczne prawa do sporej części Żmudzi.',
      answers: [
        { text: 'Hyr, na nich!', points: { finanse: -3, popularnosc: -10, obrona: -3, dyplomacja: -10 } },
        { text: 'Zażądaj reperacji za zajęcie polskich ziem.', points: { finanse: 0, popularnosc: -6, obrona: 0, dyplomacja: -6 } },
        { text: 'Zarekomenduj wykonanie rzetelnych badań.', points: { finanse: 0, popularnosc: 3, obrona: 0, dyplomacja: -2 } },
        { text: 'Oszołomy sieją ploty. Zignoruj.', points: { finanse: 0, popularnosc: 2, obrona: 0, dyplomacja: 0 } },
      ],
      image: require('../assets/images/question59.jpg'),
    },
       
        {
      questionText: 'Dzietność rośnie... ze względu na wpadki nieletnich.',
      answers: [
        { text: 'Dofinansuj edukację seksualną. ', points: { finanse: -3, popularnosc: 5, obrona: 0, dyplomacja: 2 } },
        { text: 'Zalegalizuj płatną aborcję. I cyk - budżet się zgadza.', points: { finanse: 5, popularnosc: 2, obrona: 0, dyplomacja: 2 } },
        { text: 'Zachęć szkoły do rozdawania prezerwatyw na WDŻ-ecie.', points: { finanse: 0, popularnosc: -3, obrona: 0, dyplomacja: -1 } },
        { text: 'Wprowadź godzinę policyjną dla nieletnich. Koniec dyskotek.', points: { finanse: 0, popularnosc: -6, obrona: -2, dyplomacja: -3 } },
      ],
      image: require('../assets/images/question60.jpg'),
    },

    {
      questionText: 'Unia Europejska każe ci, przyjąć 10 000 imagrantów w ramach paktu migracyjnego. Jeżeli się nie zgodzisz zapłacisz - po 20 tys. euro za każdą osobę.',
      answers: [
        { text: 'Przyjmij wszystkich', points: { finanse: +3, popularnosc: -10, obrona: -8, dyplomacja: +5 } },
        { text: 'Przyjmiemy tylu ilu możemy (połowę)', points: { finanse: -5, popularnosc: 3, obrona: -4, dyplomacja: -2 } },
        { text: 'Nikogo nie przyjmijemy', points: { finanse: -10, popularnosc: 0, obrona: +5, dyplomacja: -10 } },
      ],
      image: require('../assets/images/question61.jpg'),
    },
    {
      questionText: 'W Parlamencie Eupopejskim toczy się dyskusja na temat odejścia od "Zielonego Ładu". Jakie jest twoje stanowisko?',
      answers: [
        { text: 'Poprzyj zielony ład i wszystkie ustawy pro-eko proponowane przez UE ', points: { finanse: +3, popularnosc: +5, obrona: -5, dyplomacja: +5 } },
        { text: 'Odrzuć zielony ład, w Polsce lubimy palić węgiel, diesla i benzynę', points: { finanse: -3, popularnosc: -5, obrona: +5, dyplomacja: -5 } },
      ],
      image: require('../assets/images/question62.jpg'),
    },
    {
      questionText: 'Unia Europejska wymaga, abyś jak najszybciej zmienił walutę na euro',
      answers: [
        { text: 'Jak naszybciej trzeba wprowadzić euro', points: { finanse: -10, popularnosc: -5, obrona: -5, dyplomacja: +10 } },
        { text: 'Wprowadzimy euro, ale kiedyś (gdy będzie nam się to opłacało)', points: { finanse: +3, popularnosc: +8, obrona: 0, dyplomacja: +2 } },
        { text: 'Nigdy nie wprowadzimy euro - mamy królów na banknotach i tak ma zostać', points: { finanse: -1, popularnosc: +1, obrona: +5, dyplomacja: -10 } },
      ],
      image: require('../assets/images/question63.jpg'),
    },
    {
      questionText: 'Część społeczeństwa domaga się "Polexitu". Jakie jest twoje zdanie?',
      answers: [
        { text: 'Polska byla, jest i zawsze będzie w UE', points: { finanse: +8, popularnosc: -5, obrona: -5, dyplomacja: +10 } },
        { text: 'Polska pozostanie w UE tak długo jak będzie to dla nas korzystne', points: { finanse: +3, popularnosc: +3, obrona: 0, dyplomacja: +2 } },
        { text: 'Zorganizuj referendum - niech obywatele zdecydują czy chcą być w UE', points: { finanse: -3, popularnosc: +5, obrona: -2, dyplomacja: -3 } },
        { text: 'Polska powinna jak najszybciej opuścić UE', points: { finanse: -10, popularnosc: -5, obrona: +5, dyplomacja: -10 } },
      ],
      image: require('../assets/images/question64.jpg'),
    },
    {
      questionText: 'Programy dopłat do mieszkań wywindowały ceny i dalej nikogo na nic nie stać.',
      answers: [
        { text: 'Zwal to na patodeweloperów. Ogranicz patobudowy prawnie. ', points: { finanse: 0, popularnosc: 5, obrona: 0, dyplomacja: 2 } },
        { text: 'Obwiń zachłannych flipperów.', points: { finanse: 0, popularnosc: +3, obrona: 0, dyplomacja: -1 } },
        { text: 'Poszczuj Polaków na zagranicznych kupców.', points: { finanse: -4, popularnosc: 2, obrona: 0, dyplomacja: -6 } },
        { text: 'Stwórz nowy program dopłat.', points: { finanse: -8, popularnosc: 8, obrona: 0, dyplomacja: -2 } },
      ],
      image: require('../assets/images/question64.jpg'),
    },
    {
      questionText: 'Liczba alkoholików w państwie zaczyna być poważnym problemem dla służby zdrowia.',
      answers: [
        { text: 'Skoncentruj działania służby zdrowia na profilaktyce. ', points: { finanse: -2, popularnosc: 5, obrona: 0, dyplomacja: 2 } },
        { text: 'Zwiększ podatek od sprzedaży alkoholu.', points: { finanse: 5, popularnosc: -5, obrona: 0, dyplomacja: 2 } },
        { text: 'Wprowadź limity sprzedaży alkoholu (dana ilość na dowód).', points: { finanse: -4, popularnosc: -10, obrona: 0, dyplomacja: 4 } },
        { text: 'Wprowadź darmowe badania wątroby bez skierowania. ', points: { finanse: -6, popularnosc: 8, obrona: 0, dyplomacja: 3 } },
      ],
      image: require('../assets/images/question64.jpg'),
    },
    {
      questionText: 'Poseł partii X wpada do sejmu i podczas obchodów religijnych gasi świece i zapał świętujących gaśnicą.',
      answers: [
        { text: 'Sejm to nie miejsce na zabobony. Polać mu! ', points: { finanse: 0, popularnosc: 2, obrona: -4, dyplomacja: -4 } },
        { text: 'Komuś mogła stać się krzywda. Zamknąć oszołoma.', points: { finanse: 0, popularnosc: 5, obrona: 2, dyplomacja: -3 } },
        { text: 'Ale, ale... Wszyscy żyją. Ukarzemy go symbolicznie.', points: { finanse: 2, popularnosc: -8, obrona: -5, dyplomacja: -3 } },
        { text: 'Tolerancja tolerancją, ale może by tak rozdzielić religię (każdą!) i państwo?', points: { finanse: -6, popularnosc: 10, obrona: 0, dyplomacja: 5 } },
      ],
      image: require('../assets/images/question64.jpg'),
    },
     {
      questionText: 'Młodzi ludzie nie chcą chodzić do urn wyborczych.',
      answers: [
        { text: 'Trzeba im obiecać mniejszy ZUS.', points: { finanse: -4, popularnosc: 6, obrona: 0, dyplomacja: 2 } },
        { text: 'Zwiększyć socjale!', points: { finanse: -6, popularnosc: 4, obrona: 0, dyplomacja: 3 } },
        { text: 'Promuj aktywność obywatelską. ', points: { finanse: -3, popularnosc: 2, obrona: 0, dyplomacja: 4 } },
        { text: 'Motywuj, wzbudzając lęk przed efektami głosowania przez starsze pokolenie.', points: { finanse: 0, popularnosc: 10, obrona: 0, dyplomacja: -5 } },
      ],
      image: require('../assets/images/question64.jpg'),
    },
  
]
  export default questions;

