console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';

const cardDeck = new CardDeck(cards);
console.log(cardDeck.generateCardDeck(15));