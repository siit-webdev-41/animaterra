console.log('main.js is loaded....');

import cards from './cards.js';
import CardDeck from './card-deck.js';
import PlayerComponent from './player-component.js';
import PlayerModel from './player.js';
import DrawnCardComponent from './drawn-card-component.js';

const cardDeckSize = 20;
const cardDeck = new CardDeck(cards, cardDeckSize);

console.log(cardDeck);

const playersComponent = document.querySelector("#players-ui-component");
const playerCardsComponent = document.querySelector("#cards-container");

const button = document.querySelector(".game-btn");
button.addEventListener("click", newRound);

function newRound() {
    for (let i = 0; i < players.length; i++) {
        const drawnCard = cardDeck.lastCard;
        console.log(drawnCard);

        // update player score
        players[i].updateScore(drawnCard.points);

        // display cards
        const diplayCard = players[i].score > 0 ? drawnCard : null;
        playerDrawnCardsComponents[i].updateComponent(diplayCard);

        // update player component
        playerComponents[i].update();
    }
}


const startScore = 1;
const players = [
    new PlayerModel("Greuceanu", "purple", startScore),
    new PlayerModel("Zmeul Zmeilor", "red", startScore),
    new PlayerModel("Muma Pădurii", "green", startScore),
    new PlayerModel("Făt Frumos", "blue", startScore),
];

const playerComponents = [];

players.forEach((player, i) => {
    const playerCardComponent = new PlayerComponent(player, i + 1);
    playerComponents.push(playerCardComponent);

    playersComponent.append(playerCardComponent.mainContainer);
});

// create the cards
const playerDrawnCardsComponents = [];
players.forEach((player) => {
    const drawnCardComponent = new DrawnCardComponent(null);
    playerDrawnCardsComponents.push(drawnCardComponent);
    playerCardsComponent.append(drawnCardComponent.cardContainerElement);
});

const backOfCardDeck = document.querySelector('.card-stack');
// console.log(backOfCard);

for (let i = 0; i < 3; i++) {
    const backOfCard = document.createElement('img');
    backOfCard.src = 'assets/imgs/back-of-card.jpg';
    backOfCard.classList.add(`back-of-card-${i}`);
    backOfCardDeck.append(backOfCard);
}
