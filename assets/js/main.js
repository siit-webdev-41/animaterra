console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';
import DrawnCardComponent from './drawn-card-component.js';

const cardDeckSize = 20;
const cardDeck = new CardDeck(cards, cardDeckSize);

console.log(cardDeck);

// const mainComponent = document.querySelector('#cards-container');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
const winner = document.querySelector('.winner');

const button = document.querySelector('.game-btn');
button.addEventListener('click', newRound);

let scorePlayer1 = 0;
let scorePlayer2 = 0;

function newRound() {
    console.log(cardDeck.cardsSet.length);
    if (cardDeck.cardsSet.length > 0) {
        emptyCard(player1);
        emptyCard(player2);

        let card1 = cardDeck.lastCard;
        console.log(card1);
        let drawnCardComponent1 = new DrawnCardComponent(card1, ['card-left']);
        player1.append(drawnCardComponent1.cardContainerElement);
        scorePlayer1 += card1.points;
        score1.textContent = scorePlayer1;

        let card2 = cardDeck.lastCard;
        console.log(card2);
        let drawnCardComponent2 = new DrawnCardComponent(card2, ['card-right']);
        player2.append(drawnCardComponent2.cardContainerElement);
        scorePlayer2 += card2.points;
        score2.textContent = scorePlayer2;
    } else {
        winner.textContent =
            scorePlayer1 > scorePlayer2 ? 'Player1' : 'Player2';
    }
}

function emptyCard(parentElem) {
    while (parentElem.firstChild) {
        parentElem.removeChild(parentElem.firstChild);
    }
}
// console.log(structuredClone(cardDeck));
// console.log(cardDeck.cardsSet);
