console.log("main.js is loaded....");

import cards from "./cards.js";
import CardDeck from "./card-deck.js";
import PlayerComponent from "./player-component.js";
import PlayerModel from "./player.js";
import DrawnCardComponent from "./drawn-card-component.js";

const cardDeckSize = 20;
const cardDeck = new CardDeck(cards, cardDeckSize);

console.log(cardDeck);

const playersComponent = document.querySelector("#players-ui-component");
const playerCardsComponent = document.querySelector("#cards-container");

// player 1
// const score1 = document.querySelector(".score1");
// const player1 = document.querySelector(".player1");
// const playerUser1 = new Player(score1, player1, "card-left");

//  player 2
// const score2 = document.querySelector(".score2");
// const player2 = document.querySelector(".player2");
// const playerUser2 = new Player(score2, player2, "card-right");
// const winner = document.querySelector(".winner");

const button = document.querySelector(".game-btn");
button.addEventListener("click", newRound);

function newRound() {
    for (let i = 0; i < players.length; i++) {
        const drawnCard = cardDeck.lastCard;
        console.log(drawnCard);
        // display cards
        playerDrawnCardsComponents[i].updateComponent(
            drawnCard,
            players[i].score
        );

        // update score & display
        players[i].updateScore(drawnCard.points);
        playerComponents[i].update();
    }
}

const players = [
    new PlayerModel("Greuceanu", "purple", 10),
    new PlayerModel("Zmeul Zmeilor", "red", 10),
    new PlayerModel("Muma Pădurii", "green", 10),
    new PlayerModel("Făt Frumos", "blue", 10),
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
