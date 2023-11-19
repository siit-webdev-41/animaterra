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
    this.cardsSet = Array.from({ length: this.cardDeckSize },
      () => this.cardsPool[Math.floor(Math.random() * this.cardsPool.length)]);
  }

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
