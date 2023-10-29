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
