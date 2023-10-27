export default class CardDeck {
  constructor(cardsPool, cardDeckSize) {
    this.cardsPool = cardsPool;
    this.usedCards = [];

    this.generateCardDeck(cardDeckSize);
    this.shuffle();
  }

  generateCardDeck(cardDeckSize) {
    this.cardsSet = [];
    for (let i = 0; i < cardDeckSize; i++) {
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

  getLastCard() {
    this.fillCardSet();

    let card = this.cardsSet.pop();
    this.usedCards.push(card);

    return card;
    // TO DO
    // if the stack is empty, get all cards from used cards, shuffle and empty the usedCards array - this should be a method "reset"
    // give info about the card and move it to the usedCards array
  }

  fillCardSet() {
    if (this.cardsSet.length === 0) {
      this.cardsSet = [...this.usedCards];
      this.shuffle();
      this.usedCards = [];
    }
  }
}
