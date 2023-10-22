console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';

const cardDeckSize = 10;
const cardDeck = new CardDeck(cards, cardDeckSize);
console.log(cardDeck);
console.log(structuredClone(cardDeck));


let card = cardDeck.getLastCard();
console.log(card);
console.log(cardDeck);

// console.log(cardDeck.customProperty);

// cardDeck.customProperty = 150;
// console.log(cardDeck);

// console.log(cardDeck.cardsSet);