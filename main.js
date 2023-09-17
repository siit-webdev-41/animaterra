console.log("main js is loaded");

class Card {
  constructor(name, points, image, story) {
    this.name = name;
    this.points = points;
    this.image = image;
    this.story = story;
  }
}

const card1 = new Card(
  "Cristalul Pamantului",
  14,
  "./assets/imgs/cards/Cristalul-pamantului.jpg",
  "Din adâncurile pământului am răsărit plin de frumusețe și strălucire. "
);

const card2 = new Card(
  "Regele Tarbus",
  4,
  "./assets/imgs/cards/Regele-Tarbus.jpg",
  "Neamul fantastic din animatera este neamul strămoșilor fără timp, pe care am jurat să îl protejez"
);

const card3 = new Card(
  "Prâslea",
  3,
  "./assets/imgs/cards/Praslea.jpg",
  "Frica nu o cunosc și nu o las să mă urmărească nici în pădurea cea mai deasă"
);

const card4 = new Card("Tudor", 5, "./assets/imgs/cards/Tudor.jpg", "Eu pe copac îl voi salva și animatera va dura");

const card5 = new Card(
  "Împărăteasa Kotys",
  4,
  "./assets/imgs/cards/Imparateasa-Kotys.jpg.jpg",
  "Regii și împărații au responsabilitatea neamului lor și cele mai multe obligații de îndeplinit"
);

const card6 = new Card("Armura Magică", 15, "./assets/imgs/cards/Armura-magica.jpg", "Cu mine ești de neatins!");

const card7 = new Card(
  "Podul Ștrengar",
  16,
  "./assets/imgs/cards/Podul-strengar.jpg",
  "Ai curaj să fii diferit și vei descoperi puteri nebănuite în tine"
);

const card8 = new Card("Inelul Puterii", 12, "./assets/imgs/cards/Inelul-puterii.jpg", "Cine mă poartă, îl port spre victorie");

const card9 = new Card(
  "Floarea Vieții",
  11,
  "./assets/imgs/cards/Floarea-vietii.jpg",
  "Mirosul și culoarea mea îți vor da putere împotriva forțelor răului"
);

const card10 = new Card(
  "Făt Frumos pe Auriu de Soare",
  4,
  "./assets/imgs/cards/Fat-frumos-pe-auriu-de-soare.jpg",
  "Adevărul te va face liber!"
);

const card11 = new Card("Paloșul Adevarului", 1, "./assets/imgs/cards/Palosul-adevarului.jpg.jpg", "A brave knight with a shining armor.");

const card12 = new Card(
  "Portalul dintre lumi",
  2,
  "./assets/imgs/cards/Portalul-dintre-lumi.jpg.jpg",
  "Ai curaj să treci portalul și să te lupți cu întunericul?"
);

const card13 = new Card(
  "Gerosul cel Drept",
  3,
  "./assets/imgs/cards/Gerosul-cel-drept.jpg.jpg",
  "Apa îmi este esența și mintea mi-e clară precum cristalul"
);

const card14 = new Card("Sara", 5, "./assets/imgs/cards/Sara.jpg", "Cu pace și concentrare pot muta muntele cel mai mare");

const card15 = new Card("Buzduganul Liber", 9, "./assets/imgs/cards/Buzduganul-liber.jpg", "Forța mea ești, viteazul meu!");

const card16 = new Card(
  "Făt Frumos în luptă cu Zmeul",
  20,
  "./assets/imgs/cards/Fat-frumos-in-lupta-cu-zmeul.jpg",
  "Nu voi lăsa lumina să pice pradă întunericului! Vei pierde, Făt Frumos, putere ca a mea nu are nimenea"
);

const card17 = new Card(
  "Dihorul Pătat",
  3,
  "./assets/imgs/cards/Dihorul-patat.jpg",
  "Vârtej îmi spun prietenii, iar calitatea mea preferată este că zâmbesc de fiecare dată"
);

const card18 = new Card(
  "Barbă Lungă Stat Mărunt",
  5,
  "./assets/imgs/cards/Barba-lunga-stat-marunt.jpg",
  "MUntele se mută din loc în fața viteazului neînfricat"
);

const card19 = new Card("Lia", 5, "./assets/imgs/cards/Lia.jpg", "Neînfricată m-am născut. Părinții mei puteri nebănuite mi-au țesit");

const card20 = new Card("Scânteie", 13, "./assets/imgs/cards/Scinteie.jpg", "Din soare îmi iau energie și pe pământ mă joc cu magia");

const card21 = new Card(
  "Cerbul cu nestemate",
  3,
  "./assets/imgs/cards/Cerbul-cu-nestemate.jpg",
  "Cristalele mele nu te judecă dar te reflectă. Fii cinstit cu tine însuți și nimic nu te va atinge"
);

const card22 = new Card(
  "Daizus Vraciul",
  4,
  "./assets/imgs/cards/Daizus-vraciul.jpg",
  "Când vei vrea să îți vindeci rănile îți poți cere ție asta. Eu își pot da leacuri dar nu te pot vindeca"
);

const card23 = new Card(
  "Soarele",
  17,
  "./assets/imgs/cards/Soarele.jpg",
  "Lumina mea interioară este în fiecare dintre voi. Lăsați-o să strălucească"
);

const card24 = new Card("Luna", 7, "./assets/imgs/cards/Luna.jpg", "Din fața nevăzută îmi vine misterul, dar care este forța mea?");

const card25 = new Card(
  "Împărăteasa Zânelor",
  2,
  "./assets/imgs/cards/Imparateasa-zanelor.jpg",
  "Zînele au toată puterea naturii în fiecare gest pe care îl fac. Este nevoie și de puterea oamenilor în animatera"
);

const card26 = new Card(
  "Sfarmă Arbor",
  6,
  "./assets/imgs/cards/Sfarma-arbor.jpg",
  "Frații mei, arborii, te vor ajuta, doar să te gândești la ei"
);

const card27 = new Card(
  "Petru din Arbore",
  4,
  "./assets/imgs/cards/Petru-din-arbore.jpg",
  "Prietenii mei se pot încrede în mine că voi fi alături de ei când timpul o va cere"
);

const card28 = new Card("Castelul din Nord", 2, "./assets/imgs/cards/Castelul-din-nord.jpg", "Aici găsești adăpost, căldură și siguranță");

const card29 = new Card(
  "Ileana ruptă din Soare",
  6,
  "./assets/imgs/cards/Ileana-rupta-din-soare.jpg",
  "Frumusețea este virtutea omului curajos și sincer"
);

const card30 = new Card(
  "Sirius din Cer",
  3,
  "./assets/imgs/cards/Sirius-din-cer.jpg",
  "Cu cât te înalți mai mult în văzduh, cu atât mai mult poți coborî în abisuri. Aceasta este experiența"
);

const card31 = new Card("Busola Posibilităților", 19, "./assets/imgs/cards/Busola-posibilitatilor.jpg", "Ești cuantic, în superpoziție");

const card32 = new Card("Teres", 4, "./assets/imgs/cards/Teres.jpg", "Din urșii carpatini mă trag, din munții zvelți ai acestui neam ");

const card33 = new Card("Cosmin", 5, "./assets/imgs/cards/Cosmin.jpg", "Să-ți descoperi magia, este cel mai important drum către tine");

const card34 = new Card("FătFrumos", 6, "./assets/imgs/cards/Fat-frumos.jpg", "De veacuri mă știți. Ca mine și voi puteți să fiți");

const card35 = new Card(
  "Pumn de Piatră",
  18,
  "./assets/imgs/cards/Pumn-de-piatra.jpg",
  "Energie manifestată este lumea noastră toată: foc, apă, aer și piatră "
);

const card36 = new Card(
  "Clepsidra fără Timp",
  4,
  "./assets/imgs/cards/Clepsidra-fara-timp.jpg",
  "Timpul este o iluzie. Trăiește cu timp și fără timp."
);

const card37 = new Card(
  "Soarele și Luna",
  21,
  "./assets/imgs/cards/Soarele-si-luna.jpg",
  "Lumina ta îmi bucură sufletul. Calmul tău îmi limpezește mintea "
);

const card38 = new Card("Copacul Vieții", 3, "./assets/imgs/cards/Copacul-vietii.jpg", "Tot cel ce se va înfrupta din mine veșnic va trăi");

const card39 = new Card(
  "Traista Fermecată",
  8,
  "./assets/imgs/cards/Traista-fermecata.jpg",
  "Fermecat e numele meu și fermecat e cel care mă are"
);

const card40 = new Card(
  "Diana Iana Ziana",
  10,
  "./assets/imgs/cards/Diana-Iana-Ziana.jpg",
  "Să nu te îndoiești de zânele bune chiar și atunci când nu le înțelegi acțiunile"
);

const card41 = new Card(
  "Șarnabon Vrăjitorul",
  4,
  "./assets/imgs/cards/Sarnabon-vrajitorul.jpg",
  "Dintre toate vrăjile din lume, cea mai puternică este voința neînfricată"
);

const card42 = new Card(
  "Albina Impărăteasa",
  2,
  "./assets/imgs/cards/Albina-imparateasa.jpg",
  "Cea mai mică creatură a naturii este un întreg univers. Respectă întreaga creație"
);

// încep cardurile negative

const card43 = new Card(
  "Subrat Împăratul",
  -6,
  "./assets/imgs/cards/Subrat-imparatul.jpg",
  "Când mi-am pierdut calea, sufletul s-a oprit și lumina m-a părăsit"
);

const card44 = new Card("Comandantul lighioanelor", -6, "knight.jpg", "Animalele întunericului de mine ascultă. Eu sunt comandantul lor");

const card45 = new Card(
  "Muma codrului",
  -5,
  "knight.jpg",
  "Codrul de oameni s-a ferit mereu. Te întrebi de ce? Fii bun cu natura și te va răsplăti"
);

const card46 = new Card(
  "Lunatecul",
  -5,
  "./assets/imgs/cards/Lunatecul.jpg",
  "Adâncul pădurii îmi este casă când lupul din mine vrea să trăiască"
);

const card47 = new Card(
  "Prințul de foc",
  -6,
  "./assets/imgs/cards/Printul-de-foc.jpg",
  "Focul rescrie istorii. Așa voi rescrie eu Animatera"
);

const card48 = new Card(
  "Prințesa întunericului",
  -5,
  "./assets/imgs/cards/Printesa-intunericului",
  "Din noaptea fără de sfârșit putere am găsit și lumea o voi stăpâni"
);

const card49 = new Card("Cetatea de foc", -4, "./assets/imgs/cards/Cetatea-de-foc.jpg", "Cetatea de foc te pârjolește cu lava ei");

const card50 = new Card(
  "Pădurea întunecată",
  -4,
  "./assets/imgs/cards/Padurea-intunecata.jpg",
  "Ai intrat în pădurea întunecată și noaptea a cuprins mintea ta"
);

const card51 = new Card(
  "Vrăjitorul roșu",
  -6,
  "./assets/imgs/cards/Vrajitorul-rosu.jpg",
  "Am să stăpânesc lumea cu vrăjile mele. Șarnabon nu va mai fi cel mai bun"
);

const card52 = new Card(
  "Împăratul fără chip",
  -8,
  "./assets/imgs/cards/Imparatul-fara-chip.jpg",
  "Animatera a mea va fi când lupta cu armata lumii voi izbândi"
);

const card53 = new Card(
  "Copacul Iteiv",
  -5,
  "./assets/imgs/cards/Balaurul-cu-sapte-capete.jpg",
  "Cine se hrănește din seva mea în întuneric se va scufunda"
);

const card54 = new Card("Balaurul cu șapte capete", -7, "knight.jpg", "Din focul pământului m-am născut cu foc voi pârjoli dușmanii");

const card55 = new Card(
  "Somurf Taf",
  -7,
  "./assets/imgs/cards/Somurf-taf.jpg",
  "Când am ales cel mai lung drum către lumină am căzut în întuneric"
);

const card56 = new Card("Zmeul", -7, "./assets/imgs/cards/Zmeul", "Puterea mea este unică și mai mare decât a lui Făt Frumos");
