console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';
import DrawnCardComponent from './drawn-card-component.js';

const cardDeckSize = 10;
const cardDeck = new CardDeck(cards, cardDeckSize);

console.log(cardDeck);

const mainComponent = document.querySelector('#cards-container');

let card1 = cardDeck.lastCard;
console.log(card1);
let drawnCardComponent1 = new DrawnCardComponent(card1, ['card-left']);
mainComponent.append(drawnCardComponent1.cardContainerElement);

let card2 = cardDeck.lastCard;
console.log(card2);
let drawnCardComponent2 = new DrawnCardComponent(card2, ['card-right']);
mainComponent.append(drawnCardComponent2.cardContainerElement);

// console.log(structuredClone(cardDeck));
// console.log(cardDeck.cardsSet);
