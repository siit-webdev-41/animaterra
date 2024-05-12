console.log("main.js is loaded....");

import cards from "./cards.js";
import CardDeck from "./card-deck.js";
import PlayerComponent from "./player-component.js";
import PlayerModel from "./player.js";
import DrawnCardComponent from "./drawn-card-component.js";
import Game from "./game.js";
import GameComponent from './game-component.js'


/**
 * SETTINGS
 */
const startScore = 1;
const roundsMax = 20;
const cardDeckSize = 20;

const playersProfileComponent = document.querySelector("#players-ui-component");
const playerCardsComponent = document.querySelector("#cards-container");
const newRoundButton = document.querySelector("#new-round-btn");

/**
 * NEW AND IMPROVED IMPLEMENTATION - UNDER CONSTRUCTION
 */
const cardDeck = new CardDeck(cards, cardDeckSize);

const players = [
    new PlayerModel("Greuceanu", "purple", startScore),
    new PlayerModel("Zmeul Zmeilor", "red", startScore),
    new PlayerModel("Muma Pădurii", "green", startScore),
    new PlayerModel("Făt Frumos", "blue", startScore),
];

const game = new Game(cardDeck, roundsMax);
players.forEach(player => game.addPlayer(player));


const gameComponent = new GameComponent(game, playersProfileComponent, playerCardsComponent);

newRoundButton.addEventListener("click", () => {
    game.newRound();
    gameComponent.update();
});