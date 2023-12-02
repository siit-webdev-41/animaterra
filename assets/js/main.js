console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';
import DrawnCardComponent from './drawn-card-component.js';

const cardDeckSize = 20;
const cardDeck = new CardDeck(cards, cardDeckSize);

console.log(cardDeck);

// const mainComponent = document.querySelector('#cards-container');

// player 1
const score1 = document.querySelector('.score1');
const player1 = document.querySelector('.player1');
const drawnCardComponent1 = new DrawnCardComponent(null, ['card-left']);
player1.append(drawnCardComponent1.cardContainerElement);
let scorePlayer1 = 0;

//  player 2
const score2 = document.querySelector('.score2');
const player2 = document.querySelector('.player2');
const drawnCardComponent2 = new DrawnCardComponent(null, ['card-right']);
player2.append(drawnCardComponent2.cardContainerElement);
let scorePlayer2 = 0;

const winner = document.querySelector('.winner');

const button = document.querySelector('.game-btn');
button.addEventListener('click', newRound);


function newRound() {
    console.log(cardDeck.cardsSet.length);
    if (cardDeck.cardsSet.length > 0) {
        let card1 = cardDeck.lastCard;
        console.log(card1);
        drawnCardComponent1.uppdateComponent(card1);

        scorePlayer1 += card1.points;
        score1.textContent = scorePlayer1;

        let card2 = cardDeck.lastCard;
        console.log(card2);
        drawnCardComponent2.uppdateComponent(card2);
        
        scorePlayer2 += card2.points;
        score2.textContent = scorePlayer2;
    } else {
        winner.textContent =
            scorePlayer1 > scorePlayer2 ? 'Player1' : 'Player2';
    }
}

// console.log(structuredClone(cardDeck));
// console.log(cardDeck.cardsSet);
