console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';
import DrawnCardComponent from './drawn-card-component.js';

const cardDeckSize = 10;
const cardDeck = new CardDeck(cards, cardDeckSize);

console.log(cardDeck);
let card = cardDeck.lastCard;
console.log(card);


const mainComponent = document.querySelector('#game-ui-component');
let drawnCardComponent1 = new DrawnCardComponent(card, ['class-1','class-2']);
mainComponent.append(drawnCardComponent1.cardContainerElement);




// console.log(structuredClone(cardDeck));
// console.log(cardDeck.cardsSet);