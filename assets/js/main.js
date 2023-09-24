console.log('main.js is loaded....');

import cards from './cards.js';
import CardSet from './cards-pool.js';

const cardSet = new CardSet(cards);
console.log(cardSet.generateCardSet(15));