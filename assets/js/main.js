console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';

const cardDeckSize = 10;

const cardDeck = new CardDeck(cards, cardDeckSize);
// console.log(cardDeck.cardsSet);