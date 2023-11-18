export default class CardDeck {
  constructor(cardsPool, cardDeckSize) {
    this.cardDeckSize = cardDeckSize;
    this.cardsPool = cardsPool;
    this.cardsSet = [];
    this.usedCards = [];

    this.generateCardSet(cardDeckSize);
    this.shuffle();
  }

  generateCardSet() {
    while (this.cardsSet.length < this.cardDeckSize) {
      const randomIndex = Math.floor(Math.random() * this.cardsPool.length);
      this.cardsSet.push(this.cardsPool[randomIndex]);
    }
  }
  //   generateCardSet() {
  //     this.cardsSet = Array.from({ length: this.cardDeckSize },
  // () => this.cardsPool[Math.floor(Math.random() * this.cardsPool.length)]);
  //   }

  // Avantaje:
  // Imutabilitate: Array.from creează un nou array de fiecare dată când este apelat.
  //    Acest lucru se aliniază cu principiul imutabilității din programarea funcțională,
  //   unde modificați stările prin crearea de noi obiecte în loc să modificați obiecte existente.

  getCardsPool() {
    return this.cardsPool;
  }

  getCardsSet() {
    return this.cardsSet;
  }

  shuffle() {
    this.cardsSet.sort(() => Math.random() - 0.5);
  }

  get lastCard() {
    if (this.cardsSet.length === 0) {
      this.fillCardSet();
    }

    let card = this.cardsSet.pop();
    this.usedCards.push(card);

    return card;
  }

  fillCardSet() {
    this.cardsSet = this.usedCards;
    this.shuffle();
    this.usedCards = [];
  }
}
