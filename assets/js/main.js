console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';

const cardDeckSize = 10;
const cardDeck = new CardDeck(cards, cardDeckSize);

console.log(cardDeck);
let card = cardDeck.lastCard;
console.log(card);
// console.log(structuredClone(cardDeck));
// console.log(cardDeck.cardsSet);