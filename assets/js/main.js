console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';
import DrawnCardComponent from './drawn-card-component.js';

const cardDeckSize = 10;
const cardDeck = new CardDeck(cards, cardDeckSize);

console.log(cardDeck);

// const mainComponent = document.querySelector('#cards-container');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

const button = document.querySelector('.game-btn');
button.addEventListener('click', newRound);

function newRound() {
    emptyCard(player1);
    emptyCard(player2);

    let card1 = cardDeck.lastCard;
    console.log(card1);
    let drawnCardComponent1 = new DrawnCardComponent(card1, ['card-left']);
    player1.append(drawnCardComponent1.cardContainerElement);

    let card2 = cardDeck.lastCard;
    console.log(card2);
    let drawnCardComponent2 = new DrawnCardComponent(card2, ['card-right']);
    player2.append(drawnCardComponent2.cardContainerElement);
}

function emptyCard(parentElem) {
    while (parentElem.firstChild) {
        parentElem.removeChild(parentElem.firstChild);
    }
}
// console.log(structuredClone(cardDeck));
// console.log(cardDeck.cardsSet);
