console.log("main.js is loaded....");

import cards from "./cards.js";
import CardDeck from "./card-deck.js";
import PlayerComponent from "./player-component.js";
import PlayerModel from "./player.js";
import DrawnCardComponent from "./drawn-card-component.js";
import Game from "./game.js";
import GameComponent from './game-component.js'

const cardDeckSize = 20;
const cardDeck = new CardDeck(cards, cardDeckSize);

const winnerPlayer = document.querySelector(".winner");
const numberRound = document.querySelector(".numberRound");

const playersComponent = document.querySelector("#players-ui-component");
const playerCardsComponent = document.querySelector("#cards-container");

const newRoundButton = document.querySelector("#new-round-btn");
newRoundButton.addEventListener("click", newRound);

/**
 * SETTINGS
 */
const startScore = 1;
const roundsMax = 20;


numberRound.innerHTML = `Round ${roundsMax}`;
let roundNr = 0;

function newRound() {
    roundNr++;

    for (let i = 0; i < players.length; i++) {
        if (players[i].isAlive) {
            const drawnCard = cardDeck.lastCard;

            // update player score
            players[i].updateScore(drawnCard.points);

            // display cards
            // const diplayCard = players[i].score > 0 ? drawnCard : null;
            playerDrawnCardsComponents[i].updateComponent(drawnCard);

            // update player component
            playerComponents[i].update();

            console.log(players[i]);
            // check if player dies after drawing a card
            if (!players[i].isAlive) {
                playerDrawnCardsComponents[i].updateComponent(null);
            }
        }
    }

    // check end game
    if (
        roundNr >= roundsMax ||
        players.filter((player) => player.isAlive).length <= 1
    ) {
        endGame();
    }

    // display the remaining rounds on the new round button
    numberRound.innerHTML = `Round ${roundsMax - roundNr}`;
}

function endGame() {
    //
    newRoundButton.removeEventListener("click", newRound);

    // display the winner
    let highestScore = -1;
    let winner;

    players.forEach((player) => {
        if (player.score > highestScore) {
            highestScore = player.score;
            winner = player;
        }
    });

    winnerPlayer.innerHTML = `The winner is ${winner.name} with ${highestScore} points.`;
}


const players = [
    new PlayerModel("Greuceanu", "purple", startScore),
    new PlayerModel("Zmeul Zmeilor", "red", startScore),
    new PlayerModel("Muma Pădurii", "green", startScore),
    new PlayerModel("Făt Frumos", "blue", startScore),
];

// creates the components displaying the players, and injects them in the DOM
const playerComponents = [];
players.forEach((player, i) => {
    const playerCardComponent = new PlayerComponent(player, i + 1);
    playerComponents.push(playerCardComponent);

    playersComponent.append(playerCardComponent.mainContainer);
});

// create the components displaying the game cards, and injects them in the DOM
const playerDrawnCardsComponents = [];
players.forEach(() => {
    const drawnCardComponent = new DrawnCardComponent(null);
    playerDrawnCardsComponents.push(drawnCardComponent);
    playerCardsComponent.append(drawnCardComponent.cardContainerElement);
});

const backOfCardDeck = document.querySelector(".card-stack");
// console.log(backOfCard);

// TODO: implement the code using a UI component
// draw the cards stack
for (let i = 0; i < 3; i++) {
    const backOfCard = document.createElement("img");
    backOfCard.src = "assets/imgs/spate-2.png";
    backOfCard.classList.add(`back-of-card-${i}`);
    backOfCardDeck.append(backOfCard);
}


/**
 * NEW AND IMPROVED IMPLEMENTATION - UNDER CONSTRUCTION
 */

const game = new Game(cardDeck, roundsMax);
players.forEach(player => game.addPlayer(player));


const gameComponent = new GameComponent(game);
// newRoundButton.addEventListener("click", () => {
//     game.newRound();
//     console.log(game.scoreBoard);
// });