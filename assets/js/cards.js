export class Card {
  static imagePath = "./assets/imgs/cards";

  constructor(name, points, story, color = `grey`) {
    this.name = name;
    this.points = points;
    this.story = story;
    this.color = color;
  }

  getCardImage() {
    const imageName = this.formatImageName(this.name);
    return `${Card.imagePath}/${imageName}.jpg`;
  }

  formatImageName(name) {
    return name
      .toLowerCase()
      .replace(/ /g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }
}

export default [
  new Card("Cristalul Pamantului", 14, "Din adâncurile pământului am răsărit plin de frumusețe și strălucire.", `green`),
  new Card("Regele Tarbus", 4, "Neamul fantastic din animatera este neamul strămoșilor fără timp, pe care am jurat să îl protejez.", `blue`),
  new Card("Prâslea", 3, "Frica nu o cunosc și nu o las să mă urmărească nici în pădurea cea mai deasă.", `blue`),
  new Card("Tudor", 5, "Eu pe copac îl voi salva și animatera va dura.", `blue`),
  new Card("Împărăteasa Kotys", 4, "Regii și împărații au responsabilitatea neamului lor și cele mai multe obligații de îndeplinit.", `blue`),
  new Card("Armura Magică", 15, "Cu mine ești de neatins!"),
  new Card("Podul Ștrengar", 16, "Ai curaj să fii diferit și vei descoperi puteri nebănuite în tine."),
  new Card("Inelul Puterii", 12, "Cine mă poartă, îl port spre victorie.", `green`),
  new Card("Floarea Vieții", 11, "Mirosul și culoarea mea îți vor da putere împotriva forțelor răului.", `green`),
  new Card("Făt Frumos pe Auriu de Soare", 4, "Adevărul te va face liber!", `blue`),
  new Card("Paloșul Adevarului", 1, "Tăietura adevărului desparte iluzia de realitate, ghidându-ne pe calea înțelepciunii ancestrale", `green`),
  new Card("Portalul dintre lumi", 2, "Ai curaj să treci portalul și să te lupți cu întunericul?"),
  new Card("Gerosul cel Drept", 3, "Apa îmi este esența și mintea mi-e clară precum cristalul.", `blue`),
  new Card("Sara", 5, "Cu pace și concentrare pot muta muntele cel mai mare.", `blue`),
  new Card("Buzduganul Liber", 9, "Forța mea ești, viteazul meu!", `green`),
  new Card("Făt Frumos în luptă cu Zmeul", 20, "Nu voi lăsa lumina să pice pradă întunericului! Vei pierde, Făt Frumos, putere ca a mea nu are nimeni."),
  new Card("Dihorul Pătat", 3, "Vârtej îmi spun prietenii, iar calitatea mea preferată este că zâmbesc de fiecare dată.", `blue`),
  new Card("Barbă Lungă Stat Mărunt", 5, "Muntele se mută din loc în fața viteazului neînfricat."),
  new Card("Lia", 5, "Neînfricată m-am născut. Părinții mei puteri nebănuite mi-au țesut.", `blue`),
  new Card("Scânteie", 13, "Din soare îmi iau energie și pe pământ mă joc cu magia."),
  new Card("Cerbul cu nestemate", 3, "Cristalele mele nu te judecă dar te reflectă. Fii cinstit cu tine însuți și nimic nu te va atinge.", `blue`),
  new Card("Daizus Vraciul", 4, "Când vei vrea să îți vindeci rănile îți poți cere ție asta. Eu își pot da leacuri dar nu te pot vindeca.", `blue`),
  new Card("Soarele", 17, "Lumina mea interioară este în fiecare dintre voi. Lăsați-o să strălucească."),
  new Card("Luna", 7, "Din fața nevăzută îmi vine misterul, dar care este forța mea?"),
  new Card("Împărăteasa Zânelor", 2, "Zînele au toată puterea naturii în fiecare gest pe care îl fac. Este nevoie și de puterea oamenilor în animatera.", `blue`),
  new Card("Sfarâmă Arbor", 6, "Frații mei, arborii, te vor ajuta, doar să te gândești la ei."),
  new Card("Petru din Arbore", 4, "Prietenii mei se pot încrede în mine că voi fi alături de ei când timpul o va cere.", `blue`),
  new Card("Castelul din Nord", 2, "Aici găsești adăpost, căldură și siguranță.", `blue`),
  new Card("Ileana ruptă din Soare", 6, "Frumusețea este virtutea omului curajos și sincer.", `blue`),
  new Card("Sirius din Cer", 3, "Cu cât te înalți mai mult în văzduh, cu atât mai mult poți coborî în abisuri. Aceasta este experiența."),
  new Card("Busola Posibilităților", 19, "Ești cuantic, în superpoziție."),
  new Card("Teres", 4, "Din urșii carpatini mă trag, din munții zvelți ai acestui neam.", `blue`),
  new Card("Cosmin", 5, "Să-ți descoperi magia, este cel mai important drum către tine.", `blue`),
  new Card("Făt Frumos", 6, "De veacuri mă știți. Ca mine și voi puteți să fiți.", `blue`),
  new Card("Pumn de Piatră", 18, "Energie manifestată este lumea noastră toată: foc, apă, aer și piatră."),
  new Card("Clepsidra fără Timp", 4, "Timpul este o iluzie. Trăiește cu timp și fără timp.", `green`),
  new Card("Soarele și Luna", 21, "Lumina ta îmi bucură sufletul. Calmul tău îmi limpezește mintea."),
  new Card("Copacul Vieții", 3, "Tot cel ce se va înfrupta din mine veșnic va trăi.", `blue`),
  new Card("Traista Fermecată", 8, "Fermecat e numele meu și fermecat e cel care mă are.", `green`),
  new Card("Diana Iana Ziana", 10, "Să nu te îndoiești de zânele bune chiar și atunci când nu le înțelegi acțiunile."),
  new Card("Șarnabon Vrăjitorul", 4, "Dintre toate vrăjile din lume, cea mai puternică este voința neînfricată.", `blue`),
  new Card("Albina Impărăteasa", 2, "Cea mai mică creatură a naturii este un întreg univers. Respectă întreaga creație.", `blue`),
  new Card("Subrat Împăratul", -6, "Când mi-am pierdut calea, sufletul s-a oprit și lumina m-a părăsit.", `red`),
  new Card("Comandantul lighioanelor", -6, "Animalele întunericului de mine ascultă. Eu sunt comandantul lor.", `red`),
  new Card("Muma codrului", -5, "Codrul de oameni s-a ferit mereu. Te întrebi de ce? Fii bun cu natura și te va răsplăti.", `red`),
  new Card("Lunatecul", -5, "Adâncul pădurii îmi este casă când lupul din mine vrea să trăiască.", `red`),
  new Card("Prințul de foc", -6, "Focul rescrie istorii. Așa voi rescrie eu Animatera.", `red`),
  new Card("Prințesa întunericului", -5, "Din noaptea fără de sfârșit putere am găsit și lumea o voi stăpâni.", `red`),
  new Card("Cetatea de foc", -4, "Cetatea de foc te pârjolește cu lava ei.", `red`),
  new Card("Pădurea întunecată", -4, "Ai intrat în pădurea întunecată și noaptea a cuprins mintea ta.", `red`),
  new Card("Vrăjitorul roșu", -6, "Am să stăpânesc lumea cu vrăjile mele. Șarnabon nu va mai fi cel mai bun.", `red`),
  new Card("Împăratul fără chip", -8, "Animatera a mea va fi când lupta cu armata lumii voi izbândi.", `red`),
  new Card("Copacul Iteiv", -5, "Cine se hrănește din seva mea în întuneric se va scufunda.", `red`),
  new Card("Balaurul cu șapte capete", -7, "Din focul pământului m-am născut cu foc voi pârjoli dușmanii.", `red`),
  new Card("Somurf Taf", -7, "Când am ales cel mai lung drum către lumină am căzut în întuneric.", `red`),
  new Card("Zmeul", -7, "Puterea mea este unică și mai mare decât a lui Făt Frumos.", `red`),
];
